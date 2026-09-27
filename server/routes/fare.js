const express = require('express');
const router = express.Router();
const { routes } = require('../data/fareData');

// ── Helper: find a stop within a specific route ───────────────────────
function findStop(routeData, query) {
  if (!query) return null;
  const q = query.trim().toLowerCase();
  const { stops } = routeData;

  // 1. Exact alias
  for (const stop of stops) {
    for (const alias of stop.aliases) {
      if (alias.toLowerCase() === q) return stop;
    }
  }
  // 2. Partial name / alias
  for (const stop of stops) {
    if (
      stop.nameEn.toLowerCase().includes(q) ||
      stop.nameBn.includes(query.trim()) ||
      stop.aliases.some(a => a.toLowerCase().includes(q))
    ) return stop;
  }
  return null;
}

// ── GET /api/stops?q=mir  — merged unique stops across all routes ─────
router.get('/stops', (req, res) => {
  const { q } = req.query;

  // Merge unique stops (by nameEn) from every route
  const seen = new Set();
  const allStops = [];
  for (const r of routes) {
    for (const s of r.stops) {
      if (!seen.has(s.nameEn)) {
        seen.add(s.nameEn);
        allStops.push({ nameEn: s.nameEn, nameBn: s.nameBn });
      }
    }
  }

  if (!q || q.trim().length < 1) return res.json(allStops);

  const query = q.trim().toLowerCase();
  const results = allStops.filter(s =>
    s.nameEn.toLowerCase().includes(query) ||
    s.nameBn.includes(q.trim())
  );
  res.json(results);
});

// ── GET /api/fare?from=Mirpur-10&to=Farmgate ─────────────────────────
// Auto-detects which route(s) contain both stops.
// Returns an array — one entry per matching route.
router.get('/fare', (req, res) => {
  const { from, to } = req.query;

  if (!from || !to) {
    return res.status(400).json({ error: 'Please provide both "from" and "to" stops.' });
  }

  const results = [];

  for (const routeData of routes) {
    const fromStop = findStop(routeData, from);
    const toStop   = findStop(routeData, to);

    if (!fromStop || !toStop) continue;
    if (fromStop.id === toStop.id) continue;

    const { stops, fareMatrix } = routeData;
    const fare = fareMatrix[fromStop.id][toStop.id];

    // Ordered slice between the two stops
    const minId = Math.min(fromStop.id, toStop.id);
    const maxId = Math.max(fromStop.id, toStop.id);
    const isReverse = fromStop.id > toStop.id;
    const slice = stops.slice(minId, maxId + 1);
    const displayRoute = isReverse ? [...slice].reverse() : slice;

    // Segment fares
    const segments = [];
    for (let i = 0; i < displayRoute.length - 1; i++) {
      const s = displayRoute[i];
      const e = displayRoute[i + 1];
      segments.push({
        from: { nameEn: s.nameEn, nameBn: s.nameBn },
        to:   { nameEn: e.nameEn, nameBn: e.nameBn },
        fare: fareMatrix[s.id][e.id]
      });
    }

    // Full fare matrix labels + data for display
    const matrixLabels = stops.map(s => ({ nameEn: s.nameEn, nameBn: s.nameBn }));

    results.push({
      route: {
        id: routeData.id,
        routeNo: routeData.routeNo,
        nameBn: routeData.nameBn,
        nameEn: routeData.nameEn,
        totalKm: routeData.totalKm
      },
      from: { nameEn: fromStop.nameEn, nameBn: fromStop.nameBn, id: fromStop.id },
      to:   { nameEn: toStop.nameEn,   nameBn: toStop.nameBn,   id: toStop.id   },
      fare,
      stops: displayRoute.map(s => ({ nameEn: s.nameEn, nameBn: s.nameBn })),
      segments,
      matrixLabels,
      fareMatrix
    });
  }

  if (results.length === 0) {
    return res.status(404).json({
      error: `"${from}" এবং "${to}" একই রুটে পাওয়া যায়নি। অন্য স্টপ নির্বাচন করুন।`
    });
  }

  res.json(results);
});

module.exports = router;

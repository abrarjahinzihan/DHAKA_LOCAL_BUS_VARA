import { useState, useEffect, useRef, useCallback } from 'react';
import { ALL_STOPS } from './allStops';
import './App.css';

const API_BASE = 'http://localhost:5000/api';

// ── StopInput ────────────────────────────────────────────────────────
function StopInput({ value, onChange, onSelect, label, bnLabel, placeholder, bnPlaceholder, icon, id }) {
  const [query, setQuery]      = useState(value || '');
  const [suggestions, setSugg] = useState([]);
  const [open, setOpen]        = useState(false);
  const [activeIdx, setActive] = useState(-1);
  const wrapRef = useRef(null);

  useEffect(() => { if (value === '') setQuery(''); }, [value]);

  const filter = useCallback((q) => {
    if (!q || !q.trim()) return ALL_STOPS;
    const lq = q.trim().toLowerCase();
    const lqEn = lq.replace(/[০-৯]/g, d => "০১২৩৪৫৬৭৮৯".indexOf(d));
    const lqBn = lq.replace(/[0-9]/g, d => "০১২৩৪৫৬৭৮৯"[parseInt(d)]);
    const lqNorm = lq.replace(/[-_ ]/g, '');
    const lqEnNorm = lqEn.replace(/[-_ ]/g, '');

    return ALL_STOPS.filter(s => {
      // 1. English name
      const en = s.nameEn.toLowerCase();
      if (en.includes(lq) || en.replace(/[-_ ]/g, '').includes(lqNorm)) return true;

      // 2. Bengali name
      if (s.nameBn.includes(q.trim())) return true;

      // 3. Aliases
      if (s.aliases && s.aliases.some(a => {
        const al = a.toLowerCase();
        return al.includes(lq) || a.includes(q.trim()) || al.replace(/[-_ ]/g, '').includes(lqNorm);
      })) return true;

      // 4. Routes (supports searching '182', '১৮২', 'এ-১৮২', '260', '২৬০', 'এ-২৬০', 'A-260', etc.)
      if (s.routes && s.routes.some(r => {
        const rLower = r.toLowerCase();
        const rNorm = rLower.replace(/[-_ ]/g, '');
        return (
          rLower.includes(lq) ||
          rLower.includes(lqEn) ||
          r.includes(q.trim()) ||
          r.includes(lqBn) ||
          rNorm.includes(lqNorm) ||
          rNorm.includes(lqEnNorm)
        );
      })) return true;

      return false;
    });
  }, []);

  const handleChange = (e) => {
    const val = e.target.value;
    setQuery(val); onChange(val);
    setSugg(filter(val)); setOpen(true); setActive(-1);
  };

  const handleFocus = () => { setSugg(filter(query)); setOpen(true); };

  const handleSelect = (stop) => {
    setQuery(stop.nameBn + ' / ' + stop.nameEn);
    setOpen(false); onSelect(stop);
  };

  const handleKeyDown = (e) => {
    if (!open) return;
    if (e.key === 'ArrowDown')  { e.preventDefault(); setActive(i => Math.min(i + 1, suggestions.length - 1)); }
    else if (e.key === 'ArrowUp')   { e.preventDefault(); setActive(i => Math.max(i - 1, 0)); }
    else if (e.key === 'Enter' && activeIdx >= 0) { e.preventDefault(); handleSelect(suggestions[activeIdx]); }
    else if (e.key === 'Escape') setOpen(false);
  };

  useEffect(() => {
    const h = (e) => { if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, []);

  return (
    <div className="input-group" ref={wrapRef}>
      <label htmlFor={id}>
        <span className="bn-label">{bnLabel}</span> / {label}
      </label>
      <div className="input-wrapper">
        <span className="input-icon">{icon}</span>
        <input
          id={id} type="text"
          className={`stop-input ${query ? 'has-value' : ''}`}
          value={query} onChange={handleChange} onFocus={handleFocus} onKeyDown={handleKeyDown}
          placeholder={`${bnPlaceholder} / ${placeholder}`} autoComplete="off"
        />
        {open && suggestions.length > 0 && (
          <div className="autocomplete-dropdown">
            {suggestions.map((stop, idx) => (
              <div
                key={stop.nameEn}
                className={`dropdown-item ${idx === activeIdx ? 'active' : ''}`}
                onMouseDown={() => handleSelect(stop)}
                onMouseEnter={() => setActive(idx)}
              >
                <div className="stop-icon">🚏</div>
                <div className="stop-names">
                  <div className="bn-name">{stop.nameBn}</div>
                  <div className="en-name">{stop.nameEn}</div>
                </div>
                {stop.displayRoute && (
                  <div className="stop-km">{stop.displayRoute}</div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ── RouteTimeline ────────────────────────────────────────────────────
function RouteTimeline({ stops }) {
  if (!stops || stops.length < 2) return null;
  return (
    <div className="route-timeline">
      <div className="timeline-label">🗺️ রুট / Route</div>
      <div className="timeline-padding">
        <div className="timeline-stops">
          {stops.map((stop, idx) => {
            const isFirst = idx === 0, isLast = idx === stops.length - 1;
            return (
              <div key={stop.nameEn} style={{ display: 'flex', alignItems: 'center' }}>
                <div className={`timeline-stop ${isFirst ? 'first' : ''} ${isLast ? 'last' : ''}`}>
                  <div className="timeline-dot" />
                  <div className="stop-label">{stop.nameBn}</div>
                </div>
                {!isLast && <div className="timeline-line" />}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ── SegmentsTable ────────────────────────────────────────────────────
function SegmentsTable({ segments }) {
  if (!segments || segments.length === 0) return null;
  return (
    <div className="segments-card">
      <div className="segments-header">
        <div className="segments-title"><span>💰</span><span>স্টপওয়ারি ভাড়া / Stop-wise Fare</span></div>
        <div className="segments-note">প্রতি সেগমেন্টের সরকারি ভাড়া</div>
      </div>
      {segments.map((seg, idx) => (
        <div key={idx} className="segment-row">
          <div className="segment-stop">
            <span className="bn">{seg.from.nameBn}</span>
            <span className="en">{seg.from.nameEn}</span>
          </div>
          <div className="segment-arrow-icon">→</div>
          <div className="segment-stop">
            <span className="bn">{seg.to.nameBn}</span>
            <span className="en">{seg.to.nameEn}</span>
          </div>
          <div className="segment-fare">৳{seg.fare}</div>
        </div>
      ))}
    </div>
  );
}

// ── FareMatrix ───────────────────────────────────────────────────────
function FareMatrix({ matrixLabels, fareMatrix, fromId, toId }) {
  if (!matrixLabels || !fareMatrix) return null;
  return (
    <div className="fare-matrix-card">
      <div className="fare-matrix-header">
        <span>📊</span>
        <span>সম্পূর্ণ ভাড়া ম্যাট্রিক্স / Full Fare Matrix</span>
        <span className="matrix-note">সব স্টপের মধ্যে সরকারি ভাড়া (৳)</span>
      </div>
      <div className="fare-matrix-scroll">
        <table className="fare-matrix-table">
          <thead>
            <tr>
              <th className="matrix-corner">থেকে / To →</th>
              {matrixLabels.map((stop, j) => (
                <th key={j} className={`matrix-col-head ${j === fromId || j === toId ? 'highlighted' : ''}`}>
                  <span className="bn">{stop.nameBn}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {matrixLabels.map((rowStop, i) => (
              <tr key={i} className={i === fromId || i === toId ? 'highlighted-row' : ''}>
                <td className={`matrix-row-head ${i === fromId || i === toId ? 'highlighted' : ''}`}>
                  <span className="bn">{rowStop.nameBn}</span>
                </td>
                {fareMatrix[i].map((fare, j) => {
                  const isHighlight = (i === fromId && j === toId) || (i === toId && j === fromId);
                  const isSelf = i === j;
                  return (
                    <td
                      key={j}
                      className={`matrix-cell ${isSelf ? 'self' : ''} ${isHighlight ? 'target' : ''} ${(i === fromId || i === toId) && !isSelf ? 'route-cell' : ''}`}
                    >
                      {isSelf ? '—' : `৳${fare}`}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ── ResultCard: one result per matching route ────────────────────────
function ResultCard({ data }) {
  return (
    <div className="result-section">
      {/* Route badge */}
      <div className="result-route-badge">
        <span>{data.route.routeNo}</span>
        <span>{data.route.nameBn}</span>
      </div>

      {/* Fare hero */}
      <div className="fare-hero">
        <div className="fare-hero-top">
          <div className="fare-journey">
            <div className="journey-label">যাত্রাপথ / Journey</div>
            <div className="journey-stops">
              <div className="journey-stop-name">
                <span className="bn">{data.from.nameBn}</span>
                <span className="en">{data.from.nameEn}</span>
              </div>
              <div className="journey-arrow">→</div>
              <div className="journey-stop-name">
                <span className="bn">{data.to.nameBn}</span>
                <span className="en">{data.to.nameEn}</span>
              </div>
            </div>
            <div style={{ marginTop: 12, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <div className="tag">🚏 {data.stops.length} টি স্টপ</div>
              <div className="tag">📋 {data.segments.length} সেগমেন্ট</div>
            </div>
          </div>
          <div className="fare-amount-box">
            <div className="fare-amount-label">মোট ভাড়া / Total Fare</div>
            <div className="fare-amount">৳{data.fare}</div>
          </div>
        </div>
        <RouteTimeline stops={data.stops} />
      </div>

      {/* Segment fares */}
      <SegmentsTable segments={data.segments} />

      {/* Full fare matrix */}
      <FareMatrix
        matrixLabels={data.matrixLabels}
        fareMatrix={data.fareMatrix}
        fromId={data.from.id}
        toId={data.to.id}
      />
    </div>
  );
}

// ── Main App ─────────────────────────────────────────────────────────
export default function App() {
  const [fromStop, setFromStop]   = useState(null);
  const [toStop, setToStop]       = useState(null);
  const [fromQuery, setFromQuery] = useState('');
  const [toQuery, setToQuery]     = useState('');
  const [results, setResults]     = useState([]);
  const [loading, setLoading]     = useState(false);
  const [error, setError]         = useState('');

  const handleSearch = async () => {
    if (!fromStop || !toStop) {
      setError('অনুগ্রহ করে যাত্রার স্থান ও গন্তব্য উভয়ই নির্বাচন করুন।');
      return;
    }
    if (fromStop.nameEn === toStop.nameEn) {
      setError('যাত্রার স্থান ও গন্তব্য একই হতে পারবে না।');
      return;
    }
    setError(''); setLoading(true); setResults([]);
    try {
      const res = await fetch(
        `${API_BASE}/fare?from=${encodeURIComponent(fromStop.nameEn)}&to=${encodeURIComponent(toStop.nameEn)}`
      );
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Something went wrong');
      setResults(Array.isArray(data) ? data : [data]);
    } catch (err) {
      setError(err.message || 'সার্ভারের সাথে সংযোগ করা সম্ভব হচ্ছে না।');
    } finally {
      setLoading(false);
    }
  };

  const handleSwap = () => {
    const [ts, tq] = [fromStop, fromQuery];
    setFromStop(toStop); setFromQuery(toQuery);
    setToStop(ts);       setToQuery(tq);
    setResults([]);      setError('');
  };

  return (
    <div className="app">
      {/* ── Header ── */}
      <header className="header">
        <div className="header-inner">
          <div className="header-badge">
            <span className="dot" />
            ঢাকা মেট্রো যাত্রী ও পণ্য পরিবহন কমিটি
          </div>
          <h1 className="header-title">
            <span className="bn">🚌 লোকাল বাস ভাড়া</span>
            <span className="en">Dhaka Local Bus Fare Finder</span>
          </h1>
          <p className="header-subtitle">সরকারি ভাড়া চার্ট অনুযায়ী • ডিজেল চালিত বাস</p>
          <div className="route-info">
            <span className="info-label">সর্বনিম্ন ভাড়া:</span>
            <span className="info-value">৳১০</span>
            <span className="info-sep">•</span>
            <span className="info-label">মোট রুট:</span>
            <span className="info-value">৫৪টি</span>
          </div>
        </div>
      </header>

      <main className="main">
        {/* ── Search Card ── */}
        <div className="search-card">
          <div className="search-label">স্থান নির্বাচন করুন / Select Stops</div>
          <div className="search-row">
            <StopInput
              id="from-stop"
              value={fromQuery} onChange={setFromQuery}
              onSelect={(s) => { setFromStop(s); setError(''); }}
              label="From" bnLabel="যাত্রা শুরু"
              placeholder="e.g. Kalshi" bnPlaceholder="কালশী"
              icon="🟢"
            />
            <div className="swap-btn-wrap">
              <button className="swap-btn" onClick={handleSwap} title="Swap" aria-label="Swap stops">⇄</button>
            </div>
            <StopInput
              id="to-stop"
              value={toQuery} onChange={setToQuery}
              onSelect={(s) => { setToStop(s); setError(''); }}
              label="To" bnLabel="গন্তব্য"
              placeholder="e.g. Farmgate" bnPlaceholder="ফার্মগেট"
              icon="🔴"
            />
          </div>

          {error && (
            <div className="error-banner"><span>⚠️</span><span>{error}</span></div>
          )}

          <button className="search-btn" onClick={handleSearch} disabled={loading} id="search-fare-btn">
            {loading ? '⏳ খোঁজা হচ্ছে...' : '🔍 ভাড়া জানুন / Find Fare'}
          </button>
        </div>

        {/* ── Loading ── */}
        {loading && (
          <div className="loading-wrap"><div className="spinner" /><span>ভাড়া খোঁজা হচ্ছে...</span></div>
        )}

        {/* ── Results ── */}
        {results.map((data, idx) => (
          <ResultCard key={idx} data={data} />
        ))}
      </main>

      <footer className="footer">
        <p>০৭ আশ্বিন ১৪৩৩ বঙ্গাব্দ / ২২ সেপ্টেম্বর ২০২৬ • প্রজ্ঞাপন নং-৩৫.০০.০০০০.০২০.২৬.০০৫.১৬-৫৪০</p>
        <p style={{ marginTop: 4 }}>ডিজেল চালিত বাস ভাড়া চার্ট — সর্বনিম্ন ভাড়া ১০.০০ টাকা</p>
      </footer>
    </div>
  );
}

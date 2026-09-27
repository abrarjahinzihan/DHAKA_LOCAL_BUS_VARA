import { useState, useEffect, useRef, useCallback } from 'react';
import { ALL_STOPS } from './allStops';
import './App.css';

const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:5000/api';

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

    const scored = ALL_STOPS.map(s => {
      let score = 0;
      const en = s.nameEn.toLowerCase();
      
      // 1. Exact Name match
      if (en === lq || s.nameBn === q.trim()) score = 100;
      else if (en.startsWith(lq) || s.nameBn.startsWith(q.trim())) score = 50;
      else if (en.includes(lq) || en.replace(/[-_ ]/g, '').includes(lqNorm)) score = 30;
      else if (s.nameBn.includes(q.trim())) score = 30;
      
      // 2. Alias match
      if (score === 0 && s.aliases && s.aliases.some(a => {
        const al = a.toLowerCase();
        if (al === lq || a === q.trim()) { score = 90; return true; }
        if (al.startsWith(lq) || a.startsWith(q.trim())) { score = 40; return true; }
        if (al.includes(lq) || a.includes(q.trim()) || al.replace(/[-_ ]/g, '').includes(lqNorm)) { score = 20; return true; }
        return false;
      })) {}

      // 3. Route match (lowest priority, e.g. for searching '260' or matching route name like 'BAIPAIL_KERANIGANJ')
      if (score === 0 && s.routes && s.routes.some(r => {
        const rLower = r.toLowerCase();
        const rNorm = rLower.replace(/[-_ ]/g, '');
        return (
          rLower === lq ||
          rLower === lqEn ||
          r === q.trim() ||
          r === lqBn ||
          rLower.includes(lq) ||
          rLower.includes(lqEn) ||
          r.includes(q.trim()) ||
          r.includes(lqBn) ||
          rNorm.includes(lqNorm) ||
          rNorm.includes(lqEnNorm)
        );
      })) {
        score = 5;
      }
      
      return { stop: s, score };
    }).filter(item => item.score > 0);

    // Sort by score descending
    scored.sort((a, b) => b.score - a.score);
    return scored.map(item => item.stop);
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

// ── FeedbackForm ─────────────────────────────────────────────────────
function FeedbackForm() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const res = await fetch(`${API_BASE}/feedback`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, message })
      });
      if (res.ok) {
        setStatus('success');
        setName('');
        setMessage('');
        setTimeout(() => setStatus(''), 3000);
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <div className="feedback-section">
      <h3 className="feedback-title">মতামত জানান / Feedback</h3>
      {status === 'success' ? (
        <div className="feedback-success">আপনার মতামত সফলভাবে জমা হয়েছে। ধন্যবাদ!</div>
      ) : (
        <form onSubmit={handleSubmit} className="feedback-form">
          <input
            type="text"
            className="feedback-input"
            placeholder="আপনার নাম (ঐচ্ছিক) / Name (Optional)"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            className="feedback-textarea"
            placeholder="আপনার মতামত বা পরামর্শ লিখুন... / Write your feedback..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows="3"
          ></textarea>
          <button 
            type="submit" 
            className="feedback-submit-btn" 
            disabled={status === 'submitting' || !message.trim()}
          >
            {status === 'submitting' ? 'পাঠানো হচ্ছে...' : 'পাঠিয়ে দিন / Submit'}
          </button>
          {status === 'error' && <div className="feedback-error">মতামত পাঠাতে সমস্যা হয়েছে, আবার চেষ্টা করুন।</div>}
        </form>
      )}
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
          <div className="header-logo-wrapper">
            <div className="header-icon">🚌</div>
          </div>
          <h1 className="header-title">
            <span className="bn">লোকাল বাস ভাড়া</span>
            <span className="en">Dhaka Local Bus Fare Finder</span>
          </h1>
          <p className="header-subtitle">সরকারি ভাড়া চার্ট অনুযায়ী • ডিজেল চালিত বাস</p>
          <div className="route-info">
            <div className="route-info-item">
              <span className="info-label">সর্বনিম্ন ভাড়া:</span>
              <span className="info-value">৳১০</span>
            </div>
            <span className="info-sep">•</span>
            <div className="route-info-item">
              <span className="info-label">মোট রুট:</span>
              <span className="info-value">১১৬টি</span>
            </div>
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

      <FeedbackForm />

      <footer className="footer">
        <div className="footer-content">
          <p className="footer-gov-info">০৭ আশ্বিন ১৪৩৩ বঙ্গাব্দ / ২২ সেপ্টেম্বর ২০২৬ • প্রজ্ঞাপন নং-৩৫.০০.০০০০.০২০.২৬.০০৫.১৬-৫৪০</p>
          <p className="footer-gov-info" style={{ marginTop: 4 }}>ডিজেল চালিত বাস ভাড়া চার্ট — সর্বনিম্ন ভাড়া ১০.০০ টাকা</p>
          
          <div className="footer-creator">
            <p>Created BY <span className="creator-name">ABRAR JAHIN ZIHAN</span></p>
            <div className="social-links">
              <a href="https://www.facebook.com/abrarjahinzihan/" target="_blank" rel="noreferrer" title="Facebook">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="https://www.instagram.com/abrarjahinzihan/" target="_blank" rel="noreferrer" title="Instagram">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="https://www.linkedin.com/in/abrar-jahin-zihan-b8b250328?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" title="LinkedIn">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="https://github.com/abrarjahinzihan" target="_blank" rel="noreferrer" title="GitHub">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
              <a href="https://x.com/ZihanJahinabrar" target="_blank" rel="noreferrer" title="X (Twitter)">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"></path><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path></svg>
              </a>
              <a href="https://lichess.org/@/AbrarJahinZihan" target="_blank" rel="noreferrer" title="Lichess">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v18"></path><path d="M8 12h8"></path><path d="M6 8h12"></path><path d="M10 16h4"></path></svg>
              </a>
              <a href="mailto:abrarjahinkhanzihan@gmail.com" title="Email">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

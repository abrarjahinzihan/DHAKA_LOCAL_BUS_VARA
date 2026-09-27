import { useState, useEffect, useRef, useCallback } from 'react';
import './App.css';

const API_BASE = 'http://localhost:5000/api';

// All unique stops merged from every route (for local autocomplete)
const ALL_STOPS = [
  // A-101
  { nameEn: 'Kalshi',               nameBn: 'কালশী' },
  { nameEn: 'Mirpur-12',            nameBn: 'মিরপুর-১২' },
  { nameEn: 'Mirpur-10',            nameBn: 'মিরপুর-১০' },
  { nameEn: 'Kazipara',             nameBn: 'কাজীপাড়া' },
  { nameEn: 'Sheorapara',           nameBn: 'শেওড়াপাড়া' },
  { nameEn: 'Farmgate',             nameBn: 'ফার্মগেট' },
  { nameEn: 'Shahbag',              nameBn: 'শাহবাগ' },
  { nameEn: 'Palton',               nameBn: 'পল্টন' },
  { nameEn: 'Gulistan',             nameBn: 'গুলিস্তান' },
  { nameEn: 'Tikatuli',             nameBn: 'টিকাটুলি' },
  { nameEn: 'Sayedabad',            nameBn: 'সায়দাবাদ' },
  { nameEn: 'Jatrabari',            nameBn: 'যাত্রাবাড়ী' },
  { nameEn: 'Signboard',            nameBn: 'সাইনবোর্ড' },
  { nameEn: 'Kachpur Bridge',       nameBn: 'কাঁচপুরব্রীজ' },
  // A-102 unique stops
  { nameEn: 'Pallabi',              nameBn: 'পল্লবী (মিরপুর-১২)' },
  { nameEn: 'Mirpur-11 3/2',        nameBn: 'মিরপুর-১১ ৩/২' },
  { nameEn: 'Bekali Hotel',         nameBn: 'বেকালী হোটেল' },
  { nameEn: 'Mirpur-11',            nameBn: 'মিরপুর-১১' },
  { nameEn: 'Pressclub',            nameBn: 'প্রেসক্লাব' },
  { nameEn: 'TNT',                  nameBn: 'টিএন্ডটি' },
  { nameEn: 'Raysaheb Bazar',       nameBn: 'রায়সাহেব বাজার' },
  { nameEn: 'Victoria Park',        nameBn: 'ভিক্টোরিয়া পার্ক' },
  // A-105 unique stops
  { nameEn: 'Duyaripara',           nameBn: 'দুয়ারীপাড়া' },
  { nameEn: 'Mirpur Sade 11',       nameBn: 'মিরপুর সাড়ে ১১' },
  { nameEn: 'Agargaon',             nameBn: 'আগারগাঁও' },
  { nameEn: 'Dhanmondi',            nameBn: 'ধানমন্ডি' },
  { nameEn: 'Shukrabad',            nameBn: 'শুক্রাবাদ' },
  { nameEn: 'Dhakeshwari Mandir',   nameBn: 'ঢাকেশ্বরী মন্দির' },
  // A-110 unique stops
  { nameEn: 'Proshika',             nameBn: 'প্রশিকা' },
  { nameEn: 'Mirpur Thana',         nameBn: 'মিরপুর থানা' },
  { nameEn: 'Mirpur-1',             nameBn: 'মিরপুর-১' },
  { nameEn: 'Ansarcamp',            nameBn: 'আনসারক্যাম্প' },
  { nameEn: 'Technical',            nameBn: 'টেকনিক্যাল' },
  { nameEn: 'Asadgate',             nameBn: 'আসাদগেট' },
  { nameEn: 'Science Lab',          nameBn: 'সায়েন্সল্যাব' },
  { nameEn: 'BUET',                 nameBn: 'বুয়েট' },
  // A-111 unique stops
  { nameEn: 'Pallabi Ceramic',      nameBn: 'পল্লবী (সিরামিক)' },
  { nameEn: 'Mirpur-11 1/2',        nameBn: 'মিরপুর-১১ ১/২' },
  { nameEn: 'Stadium',              nameBn: 'স্টেডিয়াম' },
  { nameEn: 'Notre Dame College',   nameBn: 'নটরড্যাম কলেজ' },
  // A-114 unique stops
  { nameEn: 'Chiriakhana',          nameBn: 'চিড়িয়াখানা' },
  { nameEn: 'Darus Salam',          nameBn: 'দারুসসালাম' },
  { nameEn: 'Kalyanpur',            nameBn: 'কল্যাণপুর' },
  { nameEn: 'Shyamoli',             nameBn: 'শ্যামলী' },
  { nameEn: 'College Gate',         nameBn: 'কলেজগেট' },
  { nameEn: 'Kawran Bazar',         nameBn: 'কাওরানবাজার' },
  { nameEn: 'Ittefaq',              nameBn: 'ইত্তেফাক' },
  // A-115, A-119, A-122 unique stops
  { nameEn: 'Kalabagan',            nameBn: 'কলাবাগান' },
  { nameEn: 'Kataban',              nameBn: 'কাঁটাবন' },
  { nameEn: 'Gulistan Mor',         nameBn: 'গুলিস্তান মোড়' },
  { nameEn: 'Bangladesh Bank',      nameBn: 'বাংলাদেশ ব্যাংক' },
  { nameEn: 'ECB Mor',              nameBn: 'ইসিবি মোড়' },
  { nameEn: 'Manik Mia Avenue',     nameBn: 'মানিকমিয়া এভিনিউ' },
  { nameEn: 'Azimpur',              nameBn: 'আজিমপুর' },
  { nameEn: 'Shishu Mela',          nameBn: 'শিশুমেলা' },
  // A-127, M14_KHILGAON unique stops
  { nameEn: 'Mirpur Mazar Road',    nameBn: 'মিরপুর মাজার রোড' },
  { nameEn: 'Russel Square',        nameBn: 'রাসেল স্কয়ার' },
  { nameEn: 'New Market',           nameBn: 'নিউমার্কেট' },
  { nameEn: 'Nilkhet',              nameBn: 'নীলক্ষেত' },
  { nameEn: 'Mirpur-14',            nameBn: 'মিরপুর(১৪)' },
  { nameEn: 'Bangla College',       nameBn: 'বাংলা কলেজ' },
  { nameEn: 'Shapla Chattar',       nameBn: 'শাপলা চত্ত্বর' },
  { nameEn: 'Kamalapur',            nameBn: 'কমলাপুর' },
  { nameEn: 'Basabo',               nameBn: 'বাসাবো' },
  { nameEn: 'Khilgaon Railgate',    nameBn: 'খিলগাও রেলগেট' },
  { nameEn: 'Khilgaon Taltola',     nameBn: 'খিলগাও তালতলা' },
  // Baipail, Sayedabad, Uttara, Banasree unique stops
  { nameEn: 'Baipail',              nameBn: 'বাইপাইল' },
  { nameEn: 'Kamarpara',            nameBn: 'কামারপাড়া' },
  { nameEn: 'Abdullahpur',          nameBn: 'আব্দুল্লাহপুর' },
  { nameEn: 'Azampur',              nameBn: 'আজমপুর' },
  { nameEn: 'Airport',              nameBn: 'এয়ারপোর্ট' },
  { nameEn: 'Khilkhet',             nameBn: 'খিলক্ষেত' },
  { nameEn: 'Bishwa Road',          nameBn: 'বিশ্বরোড' },
  { nameEn: 'Staff Road',           nameBn: 'স্টাফরোড' },
  { nameEn: 'Kakoli',               nameBn: 'কাকলি' },
  { nameEn: 'Amin Bazar', nameBn: 'আমিন বাজার' },
  { nameEn: 'Jurain', nameBn: 'জুরাইন' },
  { nameEn: 'Narayanganj', nameBn: 'নারায়ণগঞ্জ' },
  { nameEn: 'Madanganj', nameBn: 'মদনগঞ্জ' },
  { nameEn: 'Press Club', nameBn: 'প্রেসক্লাব' },
  { nameEn: 'Shanir Akhra', nameBn: 'শনিরআখড়া' },
  { nameEn: 'Rayerbag', nameBn: 'রায়েরবাগ' },
  { nameEn: 'Mohakhali',            nameBn: 'মহাখালী' },
  { nameEn: 'Fulbaria',             nameBn: 'ফুলবাড়িয়া' },
  { nameEn: 'Babu Bazar Bridge',    nameBn: 'বাবু বাজার ব্রীজ' },
  { nameEn: 'Keraniganj',           nameBn: 'কেরানীগঞ্জ (নতুন জেলখানা)' },
  { nameEn: 'UBL',                  nameBn: 'ইউবিএল' },
  { nameEn: 'Balughat',             nameBn: 'বালুঘাট' },
  { nameEn: 'Uttara (Raniganj)',    nameBn: 'উত্তরা (রাণীগঞ্জ)' },
  { nameEn: 'Notun Bazar',          nameBn: 'নতুন বাজার' },
  { nameEn: 'Rampura TV Center',    nameBn: 'রামপুরা টিভি সেন্টার' },
  { nameEn: 'Malibagh',             nameBn: 'মালিবাগ' },
  { nameEn: 'Kakrail',              nameBn: 'কাকরাইল' },
  { nameEn: 'Bangabandhu Avenue',   nameBn: 'বঙ্গবন্ধু এভিনিউ' },
  { nameEn: 'Banasree',             nameBn: 'বনশ্রী' },
  { nameEn: 'Rampura',              nameBn: 'রামপুরা' },
  { nameEn: 'Gulshan-1',            nameBn: 'গুলশান-১' },
  { nameEn: 'Shyamoli Ring Road',   nameBn: 'শ্যামলী রিং রোড' },
  { nameEn: 'Mohammadpur Shia Masjid', nameBn: 'মোহাম্মদপুর শিয়া মসজিদ' },
  // Peerjongi Mazar to Notun Bazar unique stops
  { nameEn: 'Peerjongi Mazar',      nameBn: 'পীরজঙ্গী মাজার' },
  { nameEn: 'Kamalapur Station',    nameBn: 'কমলাপুর স্টেশন' },
  { nameEn: 'Paltan',               nameBn: 'পল্টন' },
  { nameEn: 'Moghbazar',            nameBn: 'মগবাজার' },
  { nameEn: 'Bangla Motor',         nameBn: 'বাংলামটর' },
  { nameEn: 'Gulshan-2',            nameBn: 'গুলশান-২' },
  { nameEn: 'Satrasta',             nameBn: 'সাতরাস্তা' },
  { nameEn: 'Nabisco',              nameBn: 'নাবিস্কো' },
  { nameEn: 'Titumir College',      nameBn: 'তিতুমীর কলেজ' },
  // Banasree to Asad Avenue & Mohammadpur to Postogola unique stops
  { nameEn: 'Mouchak',              nameBn: 'মৌচাক' },
  { nameEn: 'Jigatola',             nameBn: 'জিগাতলা' },
  { nameEn: 'Mohammadpur (Asad Avenue)', nameBn: 'মোহাম্মদপুর (আসাদ এভিনিউ)' },
  { nameEn: 'Mohammadpur (Japan Garden City)', nameBn: 'মোংপুর (জাপান গার্ডেন সিটি)' },
  { nameEn: 'Asad Gate',            nameBn: 'আসাদগেট' },
  { nameEn: 'Fakirapool',           nameBn: 'ফকিরাপুল' },
  { nameEn: 'Doyaganj Road',        nameBn: 'দয়াগঞ্জ রোড' },
  { nameEn: 'Postogola',            nameBn: 'পোস্তগোলা' },
  // A-161 unique stops
  { nameEn: 'Ghatarchar',           nameBn: 'ঘাটারচর' },
  { nameEn: 'Shankar',              nameBn: 'শংকর' },
  { nameEn: 'Dhanmondi-15',         nameBn: 'ধানমন্ডি-১৫' },
  { nameEn: 'Dhaka City College',   nameBn: 'ঢাকা সিটি কলেজ' },
  { nameEn: 'Dhaka College',        nameBn: 'ঢাকা কলেজ' },
  { nameEn: 'Dhupkhola',            nameBn: 'ধুপখোলা' },
  // A-166 unique stops
  { nameEn: 'Town Hall',            nameBn: 'টাউন হল' },
  { nameEn: 'Madhya Badda',         nameBn: 'মধ্য বাড্ডা' },
  { nameEn: 'Uttar Badda',          nameBn: 'উত্তর বাড্ডা' },
  { nameEn: 'Basundhara',           nameBn: 'বসুন্ধরা' },
  { nameEn: 'Nadda',                nameBn: 'নর্দ্দা' },
  { nameEn: 'Kuril Bishwaroad',     nameBn: 'কুড়িল বিশ্বরোড' },
  { nameEn: 'New Airport',          nameBn: 'নিউ এয়ারপোর্ট' },
  { nameEn: 'Rajlakshmi',           nameBn: 'রাজলক্ষ্মী' },
  { nameEn: 'House Building',       nameBn: 'হাউজ বিল্ডিং' },
  // A-182 unique stops
  { nameEn: 'Hemayetpur',           nameBn: 'হেমায়েতপুর' },
  { nameEn: 'Savar',                nameBn: 'সাভার' },
  { nameEn: 'Nabinagar',            nameBn: 'নবীনগর' },
  { nameEn: 'EPZ',                  nameBn: 'ইপিজেড' },
  { nameEn: 'Sreepur',              nameBn: 'শ্রীপুর' },
  { nameEn: 'Shafipur',             nameBn: 'সফিপুর' },
  { nameEn: 'Palli Bidyut',         nameBn: 'পল্লীবিদ্যুৎ' },
  { nameEn: 'Chandra',              nameBn: 'চন্দ্রা' },

  // Brand new routes 5 stops
  { nameEn: 'Link Road',            nameBn: 'লিংক রোড' },
  { nameEn: 'Eidgah',               nameBn: 'ঈদগাহ' },
  { nameEn: 'Gulshan',              nameBn: 'গুলশান' },
  { nameEn: 'Badda',                nameBn: 'বাড্ডা' },
  { nameEn: 'Chittagong Road',      nameBn: 'চিটাগাং রোড' },
  { nameEn: 'Manik Mia',            nameBn: 'মানিক মিয়া' },
  { nameEn: 'City College',         nameBn: 'সিটি কলেজ' },
  { nameEn: 'Dhakeshwari',          nameBn: 'ঢাকেশ্বরী' },
  { nameEn: 'Gazipur Chowrasta',    nameBn: 'গাজীপুর চৌঃ' },
  { nameEn: 'Rajendrapur',          nameBn: 'রাজেন্দ্রপুর' },
  { nameEn: 'Rajabari',             nameBn: 'রাজাবাড়ী' },
  { nameEn: 'Pabur',                nameBn: 'পাবুর' },
  { nameEn: 'Kapasia',              nameBn: 'কাপাসিয়া' },
  { nameEn: 'Gabtoli',              nameBn: 'গাবতলি' },
  { nameEn: 'Tongi',                nameBn: 'টঙ্গী' },
  { nameEn: 'Banani',               nameBn: 'বনানী' },
  { nameEn: 'Mohammadpur',          nameBn: 'মোহাম্মদপুর' },
  { nameEn: 'Mazar Gate',           nameBn: 'মাজার গেট' },
  // Missing stops for A-220, A-221, A-222, A-224
  { nameEn: 'Rajendrapur Chowrasta',nameBn: 'রাজেন্দ্রপুর চৌঃ' },
  { nameEn: 'Hotapara',             nameBn: 'হোতাপাড়া' },
  { nameEn: 'Bagher Bazar',         nameBn: 'বাঘের বাজার' },
  { nameEn: 'Mawna Chowrasta',      nameBn: 'মাওনা চৌরাস্তা' },
  { nameEn: 'Barmi',                nameBn: 'বরমী' },
  { nameEn: 'Joydebpur Chowrasta',  nameBn: 'জয়দেবপুর চৌঃ' },
  { nameEn: 'Konabari',             nameBn: 'কোনাবাড়ী' },
  { nameEn: 'Kaliakair',            nameBn: 'কালিয়াকৈর' },
  { nameEn: 'Mirer Bazar',          nameBn: 'মীরের বাজার' },
  { nameEn: 'Gausia',               nameBn: 'গাউছিয়া' },
  { nameEn: 'High Court',           nameBn: 'হাইকোর্ট' },
  { nameEn: 'Matsya Bhaban',        nameBn: 'মৎসভবন' },
  { nameEn: 'Manikganj',            nameBn: 'মানিকগঞ্জ' },
  { nameEn: 'Paturia',              nameBn: 'পাটুরিয়া' },
  { nameEn: 'Gazipur',              nameBn: 'গাজীপুর' }
];

// ── StopInput ────────────────────────────────────────────────────────
function StopInput({ value, onChange, onSelect, label, bnLabel, placeholder, bnPlaceholder, icon, id }) {
  const [query, setQuery]      = useState(value || '');
  const [suggestions, setSugg] = useState([]);
  const [open, setOpen]        = useState(false);
  const [activeIdx, setActive] = useState(-1);
  const wrapRef = useRef(null);

  useEffect(() => { if (value === '') setQuery(''); }, [value]);

  const filter = useCallback((q) => {
    if (!q) return ALL_STOPS;
    const lq = q.toLowerCase();
    return ALL_STOPS.filter(s =>
      s.nameEn.toLowerCase().includes(lq) ||
      s.nameBn.includes(q) ||
      s.nameEn.toLowerCase().replace(/-/g, ' ').includes(lq)
    );
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
            <span className="info-value">৩৬টি</span>
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

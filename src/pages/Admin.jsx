import React, { useState } from "react";
import { Link } from "react-router-dom";

const ADMIN_PASSWORD = "gym@123";

export default function Admin() {
  const [authed, setAuthed]         = useState(false);
  const [pwInput, setPwInput]       = useState("");
  const [pwError, setPwError]       = useState(false);
  const [leads, setLeads]           = useState([]);
  const [editId, setEditId]         = useState(null);
  const [editData, setEditData]     = useState({});
  const [search, setSearch]         = useState("");
  const [delConfirm, setDelConfirm] = useState(null);
  const [saved, setSaved]           = useState(false);
  const [expandId, setExpandId]     = useState(null);

  const login = () => {
    if (pwInput === ADMIN_PASSWORD) {
      setAuthed(true); setPwError(false); loadLeads();
    } else { setPwError(true); setPwInput(""); }
  };

  const loadLeads = () => {
    try {
      const data = localStorage.getItem("rudra_leads");
      setLeads(data ? JSON.parse(data) : []);
    } catch(e) { setLeads([]); }
  };

  const saveEdit = () => {
    const updated = leads.map(l => l.id === editId ? { ...l, ...editData } : l);
    localStorage.setItem("rudra_leads", JSON.stringify(updated));
    setLeads(updated); setEditId(null); setEditData({});
    setSaved(true); setTimeout(() => setSaved(false), 2500);
  };

  const deleteLead = (id) => {
    const updated = leads.filter(l => l.id !== id);
    localStorage.setItem("rudra_leads", JSON.stringify(updated));
    setLeads(updated); setDelConfirm(null);
  };

  const exportCSV = () => {
    if(leads.length === 0){ alert("No leads to export."); return; }
    const headers = ["No","Name","Phone","Email","Goal","Joined Gym","Fees Paid","Message","Date Submitted"];
    const rows = leads.map((l,i) => [
      i+1, `"${l.name}"`, `"${l.phone}"`, `"${l.email||""}"`,
      `"${l.goal||""}"`, `"${l.joined||""}"`, `"${l.fees||""}"`,
      `"${(l.message||"").replace(/"/g,'""')}"`, `"${l.date}"`,
    ]);
    const csv = [headers.join(","), ...rows.map(r=>r.join(","))].join("\n");
    const blob = new Blob(["\uFEFF"+csv], { type:"text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `RudraGym_Leads_${new Date().toLocaleDateString("en-IN").replace(/\//g,"-")}.csv`;
    a.click(); URL.revokeObjectURL(url);
  };

  const filtered = leads.filter(l =>
    l.name.toLowerCase().includes(search.toLowerCase()) ||
    l.phone.includes(search) ||
    (l.email||"").toLowerCase().includes(search.toLowerCase())
  );

  const inp = {
    background:"#1a1a1a", border:"1px solid rgba(255,255,255,0.12)",
    borderRadius:7, padding:"8px 11px", color:"#f0f0f0",
    fontSize:13, outline:"none", fontFamily:"Inter,sans-serif", width:"100%",
  };

  const Badge = ({ val, type }) => {
    const map = {
      joined: {
        "Yes":       ["rgba(74,222,128,0.12)","rgba(74,222,128,0.3)","#4ade80"],
        "No":        ["rgba(230,57,70,0.12)", "rgba(230,57,70,0.3)", "#E63946"],
        "Follow Up": ["rgba(245,166,35,0.12)","rgba(245,166,35,0.3)","#f5a623"],
      },
      fees: {
        "Paid":    ["rgba(74,222,128,0.12)","rgba(74,222,128,0.3)","#4ade80"],
        "Pending": ["rgba(230,57,70,0.12)", "rgba(230,57,70,0.3)", "#E63946"],
        "Partial": ["rgba(245,166,35,0.12)","rgba(245,166,35,0.3)","#f5a623"],
      },
    };
    const c = map[type]?.[val];
    if (!c) return <span style={{ color:"#3a3a3a", fontSize:13 }}>—</span>;
    return <span style={{ fontSize:11, padding:"4px 10px", borderRadius:5, fontWeight:700, background:c[0], border:`1px solid ${c[1]}`, color:c[2] }}>{val}</span>;
  };

  // ══ LOGIN ══
  if (!authed) {
    return (
      <div style={{ minHeight:"100vh", background:"#080808", display:"flex", alignItems:"center", justifyContent:"center", padding:20, fontFamily:"Inter,sans-serif" }}>
        <div style={{ width:"100%", maxWidth:400, background:"#111", border:"1px solid rgba(255,255,255,0.08)", borderRadius:16, padding:"40px 28px", textAlign:"center", position:"relative" }}>
          <div style={{ position:"absolute", top:0, left:0, right:0, height:3, background:"linear-gradient(to right,#E63946,rgba(230,57,70,0.2))", borderRadius:"16px 16px 0 0" }}/>
          <Link to="/" style={{ textDecoration:"none" }}>
            <div style={{ fontFamily:"'Bebas Neue',cursive", fontSize:"2rem", color:"#fff", marginBottom:4 }}>
              RUDRA<span style={{ color:"#E63946" }}>GYM</span>
            </div>
          </Link>
          <div style={{ fontSize:11, color:"#555", letterSpacing:"0.14em", textTransform:"uppercase", marginBottom:32 }}>Admin Dashboard</div>
          <div style={{ width:52, height:52, borderRadius:"50%", background:"rgba(230,57,70,0.1)", border:"1px solid rgba(230,57,70,0.25)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1.4rem", margin:"0 auto 24px" }}>🔐</div>
          <div style={{ marginBottom:16, textAlign:"left" }}>
            <label style={{ fontSize:11, fontWeight:600, letterSpacing:"0.1em", textTransform:"uppercase", color:"#555", display:"block", marginBottom:8 }}>Admin Password</label>
            <input
              type="password" placeholder="Enter password" value={pwInput}
              onChange={e=>{ setPwInput(e.target.value); setPwError(false); }}
              onKeyDown={e=>e.key==="Enter"&&login()}
              style={{ ...inp, fontSize:15, padding:"13px 14px", borderColor:pwError?"#E63946":"rgba(255,255,255,0.1)" }}
              autoFocus
            />
            {pwError && <div style={{ color:"#E63946", fontSize:12, marginTop:8 }}>❌ Incorrect password.</div>}
          </div>
          <button onClick={login}
            style={{ width:"100%", padding:"13px", background:"#E63946", color:"#fff", border:"none", borderRadius:6, fontSize:13, fontWeight:700, letterSpacing:"0.08em", textTransform:"uppercase", cursor:"pointer" }}
            onMouseEnter={e=>e.target.style.background="#c8303c"}
            onMouseLeave={e=>e.target.style.background="#E63946"}
          >Access Dashboard →</button>
          <Link to="/" style={{ display:"block", marginTop:20, fontSize:12, color:"#555", textDecoration:"none" }}>← Back to website</Link>
        </div>
      </div>
    );
  }

  // ══ DASHBOARD ══
  return (
    <>
      <style>{`
        * { box-sizing: border-box; }
        .admin-wrap { min-height:100vh; background:#080808; color:#f0f0f0; font-family:Inter,sans-serif; }

        /* HEADER */
        .adm-header {
          background:#0d0d0d;
          border-bottom:1px solid rgba(255,255,255,0.07);
          padding:0 20px;
          height:56px;
          display:flex;
          align-items:center;
          justify-content:space-between;
          position:sticky;
          top:0;
          z-index:10;
          gap:12px;
        }
        .adm-logo { font-family:'Bebas Neue',cursive; font-size:1.4rem; color:#fff; text-decoration:none; white-space:nowrap; }
        .adm-title { font-size:11px; color:#555; font-weight:600; letter-spacing:0.1em; text-transform:uppercase; white-space:nowrap; }
        .adm-sep { width:1px; height:20px; background:rgba(255,255,255,0.1); flex-shrink:0; }
        .adm-btns { display:flex; align-items:center; gap:8px; flex-wrap:nowrap; }
        .adm-btn { padding:7px 12px; border-radius:6px; font-size:11px; font-weight:700; cursor:pointer; border:1px solid; white-space:nowrap; }

        /* STAT GRIDS */
        .stat-grid-4 { display:grid; grid-template-columns:repeat(4,1fr); gap:12px; margin-bottom:16px; }
        .stat-grid-3 { display:grid; grid-template-columns:repeat(3,1fr); gap:12px; margin-bottom:24px; }
        .stat-card { background:#111; border:1px solid rgba(255,255,255,0.07); border-radius:12px; padding:16px; position:relative; overflow:hidden; }
        .stat-accent { position:absolute; top:0; left:0; right:0; height:2px; opacity:0.7; }
        .stat-label { font-size:10px; color:#555; font-weight:600; letter-spacing:0.1em; text-transform:uppercase; margin-bottom:8px; }
        .stat-val { font-family:'Bebas Neue',cursive; font-size:2rem; color:#fff; line-height:1; }

        /* SEARCH */
        .search-row { display:flex; justify-content:space-between; align-items:center; margin-bottom:14px; flex-wrap:wrap; gap:10px; }

        /* DESKTOP TABLE */
        .desktop-table { display:block; }
        .mobile-cards  { display:none; }

        /* LEAD CARD (mobile) */
        .lead-card { background:#111; border:1px solid rgba(255,255,255,0.07); border-radius:12px; margin-bottom:10px; overflow:hidden; }
        .lead-card-head { padding:14px 16px; display:flex; justify-content:space-between; align-items:center; cursor:pointer; }
        .lead-card-body { padding:0 16px 16px; border-top:1px solid rgba(255,255,255,0.06); }
        .lead-row { display:flex; justify-content:space-between; align-items:center; padding:8px 0; border-bottom:1px solid rgba(255,255,255,0.04); font-size:13px; }
        .lead-row:last-child { border-bottom:none; }
        .lead-key { color:#555; font-size:11px; font-weight:600; letter-spacing:0.08em; text-transform:uppercase; }

        @media (max-width: 768px) {
          .adm-title { display:none; }
          .adm-sep   { display:none; }
          .desktop-table { display:none; }
          .mobile-cards  { display:block; }
          .stat-grid-4 { grid-template-columns:repeat(2,1fr); }
          .stat-grid-3 { grid-template-columns:repeat(3,1fr); }
          .stat-val { font-size:1.6rem; }
          .stat-label { font-size:9px; }
        }

        @media (max-width: 480px) {
          .adm-header { padding:0 14px; }
          .stat-grid-3 { grid-template-columns:repeat(3,1fr); gap:8px; }
          .stat-grid-4 { gap:8px; }
          .stat-card { padding:12px; }
        }
      `}</style>

      <div className="admin-wrap">

        {/* ── HEADER ── */}
        <header className="adm-header">
          <div style={{ display:"flex", alignItems:"center", gap:12, minWidth:0 }}>
            <Link to="/" className="adm-logo">RUDRA<span style={{ color:"#E63946" }}>GYM</span></Link>
            <div className="adm-sep"/>
            <span className="adm-title">Admin Dashboard</span>
          </div>
          <div className="adm-btns">
            <span style={{ fontSize:11, color:"#555", whiteSpace:"nowrap" }}>
              <span style={{ color:"#4ade80", fontWeight:700 }}>{leads.length}</span> leads
            </span>
            <button className="adm-btn"
              onClick={exportCSV}
              style={{ background:"rgba(74,222,128,0.1)", borderColor:"rgba(74,222,128,0.3)", color:"#4ade80" }}
            >⬇ Excel</button>
            <button className="adm-btn"
              onClick={loadLeads}
              style={{ background:"rgba(255,255,255,0.05)", borderColor:"rgba(255,255,255,0.1)", color:"#aaa" }}
            >🔄</button>
            <button className="adm-btn"
              onClick={()=>setAuthed(false)}
              style={{ background:"rgba(230,57,70,0.1)", borderColor:"rgba(230,57,70,0.2)", color:"#E63946" }}
            >Logout</button>
          </div>
        </header>

        <div style={{ padding:"20px 16px", maxWidth:1400, margin:"0 auto" }}>

          {/* ── STAT CARDS ROW 1 ── */}
          <div className="stat-grid-4">
            {[
              { label:"Total Leads", icon:"👥", color:"#E63946", val:leads.length },
              { label:"Today",       icon:"📅", color:"#4ade80", val:leads.filter(l=>new Date(l.timestamp).toDateString()===new Date().toDateString()).length },
              { label:"This Week",   icon:"📊", color:"#f5a623", val:leads.filter(l=>Date.now()-l.timestamp<7*86400000).length },
              { label:"This Month",  icon:"🗓", color:"#a78bfa", val:leads.filter(l=>{ const d=new Date(l.timestamp),n=new Date(); return d.getMonth()===n.getMonth()&&d.getFullYear()===n.getFullYear(); }).length },
            ].map(s=>(
              <div key={s.label} className="stat-card">
                <div className="stat-accent" style={{ background:s.color }}/>
                <div className="stat-label">{s.icon} {s.label}</div>
                <div className="stat-val">{s.val}</div>
              </div>
            ))}
          </div>

          {/* ── STAT CARDS ROW 2 ── */}
          <div className="stat-grid-3">
            {[
              { label:"Joined Gym",  icon:"✅", color:"#4ade80", val:leads.filter(l=>l.joined==="Yes").length },
              { label:"Follow Up",   icon:"🔔", color:"#f5a623", val:leads.filter(l=>l.joined==="Follow Up").length },
              { label:"Fees Paid",   icon:"💰", color:"#4ade80", val:leads.filter(l=>l.fees==="Paid").length },
            ].map(s=>(
              <div key={s.label} className="stat-card">
                <div className="stat-accent" style={{ background:s.color }}/>
                <div className="stat-label">{s.icon} {s.label}</div>
                <div className="stat-val">{s.val}</div>
              </div>
            ))}
          </div>

          {/* ── SEARCH ── */}
          <div className="search-row">
            <h2 style={{ fontSize:14, fontWeight:700, color:"#fff", margin:0 }}>
              All Leads
              {search && <span style={{ fontSize:11, color:"#555", fontWeight:400, marginLeft:8 }}>({filtered.length} results)</span>}
            </h2>
            <input
              placeholder="🔍 Search name, phone or email..."
              value={search}
              onChange={e=>setSearch(e.target.value)}
              style={{ ...inp, width:"min(260px, 100%)", padding:"9px 13px" }}
            />
          </div>

          {/* ── EMPTY STATE ── */}
          {leads.length === 0 ? (
            <div style={{ textAlign:"center", padding:"52px 20px", color:"#555", background:"#111", borderRadius:12, border:"1px solid rgba(255,255,255,0.06)" }}>
              <div style={{ fontSize:"2.2rem", marginBottom:14 }}>📋</div>
              <div style={{ fontSize:14, fontWeight:600, marginBottom:8 }}>No leads yet</div>
              <div style={{ fontSize:12 }}>Contact form submissions will appear here.</div>
            </div>
          ) : filtered.length === 0 ? (
            <div style={{ textAlign:"center", padding:36, color:"#555", background:"#111", borderRadius:12, border:"1px solid rgba(255,255,255,0.06)" }}>
              No results for "<strong>{search}</strong>"
            </div>
          ) : (
            <>
              {/* ── DESKTOP TABLE ── */}
              <div className="desktop-table" style={{ overflowX:"auto", borderRadius:12, border:"1px solid rgba(255,255,255,0.07)" }}>
                <table style={{ width:"100%", borderCollapse:"collapse", fontSize:13, minWidth:900 }}>
                  <thead>
                    <tr style={{ background:"rgba(255,255,255,0.03)", borderBottom:"1px solid rgba(255,255,255,0.07)" }}>
                      {["#","Name","Phone","Email","Goal","Joined","Fees","Date","Actions"].map(h=>(
                        <th key={h} style={{ textAlign:"left", padding:"11px 14px", fontSize:10, fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", color:"#555", whiteSpace:"nowrap" }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map((lead) => (
                      <tr key={lead.id}
                        style={{ borderBottom:"1px solid rgba(255,255,255,0.04)", transition:"background 0.15s" }}
                        onMouseEnter={e=>e.currentTarget.style.background="rgba(255,255,255,0.02)"}
                        onMouseLeave={e=>e.currentTarget.style.background="transparent"}
                      >
                        <td style={{ padding:"12px 14px", color:"#555", fontSize:12 }}>{leads.indexOf(lead)+1}</td>
                        <td style={{ padding:"12px 14px", fontWeight:600, color:"#fff", whiteSpace:"nowrap" }}>
                          {editId===lead.id ? <input value={editData.name??lead.name} onChange={e=>setEditData(d=>({...d,name:e.target.value}))} style={{...inp,width:120}}/> : lead.name}
                        </td>
                        <td style={{ padding:"12px 14px", whiteSpace:"nowrap" }}>
                          {editId===lead.id ? <input value={editData.phone??lead.phone} onChange={e=>setEditData(d=>({...d,phone:e.target.value}))} style={{...inp,width:120}}/> : <a href={`tel:${lead.phone}`} style={{ color:"#4ade80", textDecoration:"none", fontWeight:600 }}>{lead.phone}</a>}
                        </td>
                        <td style={{ padding:"12px 14px", color:"#888", whiteSpace:"nowrap" }}>
                          {editId===lead.id ? <input value={editData.email??lead.email??""} onChange={e=>setEditData(d=>({...d,email:e.target.value}))} style={{...inp,width:150}}/> : lead.email||<span style={{ color:"#3a3a3a" }}>—</span>}
                        </td>
                        <td style={{ padding:"12px 14px" }}>
                          {editId===lead.id
                            ? <select value={editData.goal??lead.goal??""} onChange={e=>setEditData(d=>({...d,goal:e.target.value}))} style={{...inp,width:160,cursor:"pointer"}}>
                                <option value="">—</option>
                                <option>Lose weight & burn fat</option>
                                <option>Build muscle & strength</option>
                                <option>Improve fitness & endurance</option>
                                <option>Athletic performance</option>
                                <option>General health & wellbeing</option>
                              </select>
                            : lead.goal ? <span style={{ fontSize:11, padding:"3px 9px", background:"rgba(230,57,70,0.1)", border:"1px solid rgba(230,57,70,0.18)", borderRadius:4, color:"#E63946", fontWeight:600, whiteSpace:"nowrap" }}>{lead.goal}</span> : <span style={{ color:"#3a3a3a" }}>—</span>}
                        </td>
                        <td style={{ padding:"12px 14px" }}>
                          {editId===lead.id
                            ? <select value={editData.joined??lead.joined??""} onChange={e=>setEditData(d=>({...d,joined:e.target.value}))} style={{...inp,width:110,cursor:"pointer"}}>
                                <option value="">—</option>
                                <option>Yes</option><option>No</option><option>Follow Up</option>
                              </select>
                            : <Badge val={lead.joined} type="joined"/>}
                        </td>
                        <td style={{ padding:"12px 14px" }}>
                          {editId===lead.id
                            ? <select value={editData.fees??lead.fees??""} onChange={e=>setEditData(d=>({...d,fees:e.target.value}))} style={{...inp,width:110,cursor:"pointer"}}>
                                <option value="">—</option>
                                <option>Paid</option><option>Pending</option><option>Partial</option>
                              </select>
                            : <Badge val={lead.fees} type="fees"/>}
                        </td>
                        <td style={{ padding:"12px 14px", color:"#666", fontSize:11.5, whiteSpace:"nowrap" }}>{lead.date}</td>
                        <td style={{ padding:"12px 14px", whiteSpace:"nowrap" }}>
                          {editId===lead.id
                            ? <div style={{ display:"flex", gap:5 }}>
                                <button onClick={saveEdit} style={{ padding:"5px 10px", background:"#4ade80", color:"#000", border:"none", borderRadius:5, fontSize:11, fontWeight:700, cursor:"pointer" }}>✓</button>
                                <button onClick={()=>{setEditId(null);setEditData({});}} style={{ padding:"5px 9px", background:"rgba(255,255,255,0.07)", color:"#ccc", border:"1px solid rgba(255,255,255,0.1)", borderRadius:5, fontSize:11, cursor:"pointer" }}>✕</button>
                              </div>
                            : <div style={{ display:"flex", gap:5 }}>
                                <button onClick={()=>{setEditId(lead.id);setEditData({});}} style={{ padding:"5px 10px", background:"rgba(230,57,70,0.1)", border:"1px solid rgba(230,57,70,0.2)", color:"#E63946", borderRadius:5, fontSize:11, fontWeight:700, cursor:"pointer" }}>✏</button>
                                <a href={`https://wa.me/${lead.phone.replace(/\D/g,"")}?text=Hi%20${encodeURIComponent(lead.name)}!%20This%20is%20Rudra%20Gym.`} target="_blank" rel="noopener noreferrer" style={{ padding:"5px 9px", background:"rgba(37,211,102,0.1)", border:"1px solid rgba(37,211,102,0.2)", color:"#4ade80", borderRadius:5, fontSize:11, fontWeight:700, textDecoration:"none" }}>💬</a>
                                <button onClick={()=>setDelConfirm(lead.id)} style={{ padding:"5px 9px", background:"rgba(255,50,50,0.08)", border:"1px solid rgba(255,50,50,0.15)", color:"#f87171", borderRadius:5, fontSize:11, cursor:"pointer" }}>🗑</button>
                              </div>}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* ── MOBILE CARDS ── */}
              <div className="mobile-cards">
                {filtered.map((lead) => (
                  <div key={lead.id} className="lead-card">
                    {/* CARD HEADER */}
                    <div className="lead-card-head" onClick={()=>setExpandId(expandId===lead.id?null:lead.id)}>
                      <div>
                        <div style={{ fontWeight:700, color:"#fff", fontSize:14 }}>{lead.name}</div>
                        <a href={`tel:${lead.phone}`} style={{ color:"#4ade80", fontSize:13, fontWeight:600, textDecoration:"none" }}>{lead.phone}</a>
                      </div>
                      <div style={{ display:"flex", alignItems:"center", gap:8 }}>
                        <Badge val={lead.joined} type="joined"/>
                        <Badge val={lead.fees} type="fees"/>
                        <span style={{ color:"#555", fontSize:16 }}>{expandId===lead.id?"▲":"▼"}</span>
                      </div>
                    </div>

                    {/* EXPANDED DETAILS */}
                    {expandId===lead.id && (
                      <div className="lead-card-body">
                        {lead.email && (
                          <div className="lead-row">
                            <span className="lead-key">Email</span>
                            <span style={{ color:"#888", fontSize:13 }}>{lead.email}</span>
                          </div>
                        )}
                        {lead.goal && (
                          <div className="lead-row">
                            <span className="lead-key">Goal</span>
                            <span style={{ fontSize:11, padding:"3px 9px", background:"rgba(230,57,70,0.1)", border:"1px solid rgba(230,57,70,0.18)", borderRadius:4, color:"#E63946", fontWeight:600 }}>{lead.goal}</span>
                          </div>
                        )}
                        <div className="lead-row">
                          <span className="lead-key">Date</span>
                          <span style={{ color:"#666", fontSize:12 }}>{lead.date}</span>
                        </div>

                        {/* EDIT FIELDS ON MOBILE */}
                        {editId===lead.id ? (
                          <div style={{ marginTop:12, display:"flex", flexDirection:"column", gap:10 }}>
                            <div>
                              <label style={{ fontSize:10, color:"#555", fontWeight:600, letterSpacing:"0.08em", textTransform:"uppercase", display:"block", marginBottom:5 }}>Name</label>
                              <input value={editData.name??lead.name} onChange={e=>setEditData(d=>({...d,name:e.target.value}))} style={inp}/>
                            </div>
                            <div>
                              <label style={{ fontSize:10, color:"#555", fontWeight:600, letterSpacing:"0.08em", textTransform:"uppercase", display:"block", marginBottom:5 }}>Phone</label>
                              <input value={editData.phone??lead.phone} onChange={e=>setEditData(d=>({...d,phone:e.target.value}))} style={inp}/>
                            </div>
                            <div>
                              <label style={{ fontSize:10, color:"#555", fontWeight:600, letterSpacing:"0.08em", textTransform:"uppercase", display:"block", marginBottom:5 }}>Joined Gym</label>
                              <select value={editData.joined??lead.joined??""} onChange={e=>setEditData(d=>({...d,joined:e.target.value}))} style={{...inp,cursor:"pointer"}}>
                                <option value="">— Select —</option>
                                <option>Yes</option><option>No</option><option>Follow Up</option>
                              </select>
                            </div>
                            <div>
                              <label style={{ fontSize:10, color:"#555", fontWeight:600, letterSpacing:"0.08em", textTransform:"uppercase", display:"block", marginBottom:5 }}>Fees Paid</label>
                              <select value={editData.fees??lead.fees??""} onChange={e=>setEditData(d=>({...d,fees:e.target.value}))} style={{...inp,cursor:"pointer"}}>
                                <option value="">— Select —</option>
                                <option>Paid</option><option>Pending</option><option>Partial</option>
                              </select>
                            </div>
                            <div style={{ display:"flex", gap:8 }}>
                              <button onClick={saveEdit} style={{ flex:1, padding:"10px", background:"#4ade80", color:"#000", border:"none", borderRadius:7, fontSize:13, fontWeight:700, cursor:"pointer" }}>✓ Save</button>
                              <button onClick={()=>{setEditId(null);setEditData({});}} style={{ flex:1, padding:"10px", background:"rgba(255,255,255,0.07)", color:"#ccc", border:"1px solid rgba(255,255,255,0.1)", borderRadius:7, fontSize:13, cursor:"pointer" }}>✕ Cancel</button>
                            </div>
                          </div>
                        ) : (
                          <div style={{ display:"flex", gap:8, marginTop:12 }}>
                            <button onClick={()=>{setEditId(lead.id);setEditData({});}} style={{ flex:1, padding:"9px", background:"rgba(230,57,70,0.1)", border:"1px solid rgba(230,57,70,0.2)", color:"#E63946", borderRadius:7, fontSize:12, fontWeight:700, cursor:"pointer" }}>✏ Edit</button>
                            <a href={`https://wa.me/${lead.phone.replace(/\D/g,"")}?text=Hi%20${encodeURIComponent(lead.name)}!%20This%20is%20Rudra%20Gym.`} target="_blank" rel="noopener noreferrer"
                              style={{ flex:1, padding:"9px", background:"rgba(37,211,102,0.1)", border:"1px solid rgba(37,211,102,0.2)", color:"#4ade80", borderRadius:7, fontSize:12, fontWeight:700, textDecoration:"none", textAlign:"center" }}>💬 WhatsApp</a>
                            <button onClick={()=>setDelConfirm(lead.id)} style={{ padding:"9px 12px", background:"rgba(255,50,50,0.08)", border:"1px solid rgba(255,50,50,0.15)", color:"#f87171", borderRadius:7, fontSize:12, cursor:"pointer" }}>🗑</button>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}

          <div style={{ marginTop:10, fontSize:11, color:"#3a3a3a", textAlign:"right" }}>
            {filtered.length} of {leads.length} leads shown
          </div>
        </div>
      </div>

      {/* DELETE CONFIRM */}
      {delConfirm && (
        <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.8)", display:"flex", alignItems:"center", justifyContent:"center", zIndex:200, backdropFilter:"blur(4px)", padding:16 }}>
          <div style={{ background:"#141414", border:"1px solid rgba(230,57,70,0.3)", borderRadius:14, padding:"28px 24px", maxWidth:320, width:"100%", textAlign:"center" }}>
            <div style={{ fontSize:"2rem", marginBottom:12 }}>🗑️</div>
            <h3 style={{ fontSize:15, fontWeight:700, color:"#fff", marginBottom:8 }}>Delete this lead?</h3>
            <p style={{ fontSize:13, color:"#777", marginBottom:22 }}>This cannot be undone.</p>
            <div style={{ display:"flex", gap:10 }}>
              <button onClick={()=>deleteLead(delConfirm)} style={{ flex:1, padding:"10px", background:"#E63946", color:"#fff", border:"none", borderRadius:6, fontSize:13, fontWeight:700, cursor:"pointer" }}>Delete</button>
              <button onClick={()=>setDelConfirm(null)} style={{ flex:1, padding:"10px", background:"rgba(255,255,255,0.07)", color:"#ccc", border:"1px solid rgba(255,255,255,0.1)", borderRadius:6, fontSize:13, cursor:"pointer" }}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* SAVE TOAST */}
      {saved && (
        <div style={{ position:"fixed", bottom:24, left:"50%", transform:"translateX(-50%)", background:"#4ade80", color:"#000", padding:"11px 22px", borderRadius:10, fontSize:13, fontWeight:700, zIndex:300, whiteSpace:"nowrap" }}>
          ✅ Changes saved!
        </div>
      )}
    </>
  );
}
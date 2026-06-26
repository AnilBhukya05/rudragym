import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ADMIN_PASSWORD = "RudraGym@2025"; // ← Change this to your password

export default function Admin() {
  const [authed, setAuthed]       = useState(false);
  const [pwInput, setPwInput]     = useState("");
  const [pwError, setPwError]     = useState(false);
  const [leads, setLeads]         = useState([]);
  const [editId, setEditId]       = useState(null);
  const [editData, setEditData]   = useState({});
  const [search, setSearch]       = useState("");
  const [delConfirm, setDelConfirm] = useState(null);
  const [saved, setSaved]         = useState(false);

  // ── LOGIN ──
  const login = () => {
    if (pwInput === ADMIN_PASSWORD) {
      setAuthed(true);
      setPwError(false);
      loadLeads();
    } else {
      setPwError(true);
      setPwInput("");
    }
  };

  // ── LOAD FROM LOCALSTORAGE ──
  const loadLeads = () => {
    try {
      const data = localStorage.getItem("rudra_leads");
      setLeads(data ? JSON.parse(data) : []);
    } catch(e) {
      setLeads([]);
    }
  };

  // ── SAVE EDIT ──
  const saveEdit = () => {
    const updated = leads.map(l => l.id === editId ? { ...l, ...editData } : l);
    localStorage.setItem("rudra_leads", JSON.stringify(updated));
    setLeads(updated);
    setEditId(null);
    setEditData({});
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  // ── DELETE ──
  const deleteLead = (id) => {
    const updated = leads.filter(l => l.id !== id);
    localStorage.setItem("rudra_leads", JSON.stringify(updated));
    setLeads(updated);
    setDelConfirm(null);
  };

  // ── EXPORT CSV ──
  const exportCSV = () => {
    if(leads.length === 0){ alert("No leads to export."); return; }
    const headers = ["No","Name","Phone","Email","Goal","Message","Date Submitted"];
    const rows = leads.map((l,i) => [
      i+1,
      `"${l.name}"`,
      `"${l.phone}"`,
      `"${l.email||""}"`,
      `"${l.goal||""}"`,
      `"${(l.message||"").replace(/"/g,'""')}"`,
      `"${l.date}"`,
    ]);
    const csv = [headers.join(","), ...rows.map(r=>r.join(","))].join("\n");
    const blob = new Blob(["\uFEFF"+csv], { type:"text/csv;charset=utf-8;" });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement("a");
    a.href     = url;
    a.download = `RudraGym_Leads_${new Date().toLocaleDateString("en-IN").replace(/\//g,"-")}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // ── FILTER ──
  const filtered = leads.filter(l =>
    l.name.toLowerCase().includes(search.toLowerCase()) ||
    l.phone.includes(search) ||
    (l.email||"").toLowerCase().includes(search.toLowerCase())
  );

  const inp = {
    background:"#1a1a1a",
    border:"1px solid rgba(255,255,255,0.1)",
    borderRadius:6,
    padding:"7px 10px",
    color:"#f0f0f0",
    fontSize:13,
    outline:"none",
    fontFamily:"Inter, sans-serif",
  };

  // ══ LOGIN SCREEN ══
  if (!authed) {
    return (
      <div style={{ minHeight:"100vh", background:"#080808", display:"flex", alignItems:"center", justifyContent:"center", padding:24, fontFamily:"Inter,sans-serif" }}>
        <div style={{ width:"100%", maxWidth:400, background:"#111", border:"1px solid rgba(255,255,255,0.08)", borderRadius:16, padding:"44px 36px", textAlign:"center", position:"relative" }}>
          <div style={{ position:"absolute", top:0, left:0, right:0, height:3, background:"linear-gradient(to right,#E63946,rgba(230,57,70,0.2))", borderRadius:"16px 16px 0 0" }}/>

          <Link to="/" style={{ textDecoration:"none" }}>
            <div style={{ fontFamily:"'Bebas Neue',cursive", fontSize:"2rem", color:"#fff", marginBottom:6 }}>
              RUDRA<span style={{ color:"#E63946" }}>GYM</span>
            </div>
          </Link>
          <div style={{ fontSize:11, color:"#555", letterSpacing:"0.14em", textTransform:"uppercase", marginBottom:36 }}>Admin Dashboard</div>

          <div style={{ width:54, height:54, borderRadius:"50%", background:"rgba(230,57,70,0.1)", border:"1px solid rgba(230,57,70,0.25)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1.5rem", margin:"0 auto 28px" }}>🔐</div>

          <div style={{ marginBottom:16, textAlign:"left" }}>
            <label style={{ fontSize:11, fontWeight:600, letterSpacing:"0.1em", textTransform:"uppercase", color:"#555", display:"block", marginBottom:8 }}>Admin Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={pwInput}
              onChange={e => { setPwInput(e.target.value); setPwError(false); }}
              onKeyDown={e => e.key === "Enter" && login()}
              style={{ ...inp, width:"100%", fontSize:15, padding:"13px 14px", borderColor: pwError?"#E63946":"rgba(255,255,255,0.1)" }}
              autoFocus
            />
            {pwError && (
              <div style={{ color:"#E63946", fontSize:12, marginTop:8 }}>❌ Incorrect password. Try again.</div>
            )}
          </div>

          <button
            onClick={login}
            style={{ width:"100%", padding:"14px", background:"#E63946", color:"#fff", border:"none", borderRadius:6, fontSize:13, fontWeight:700, letterSpacing:"0.08em", textTransform:"uppercase", cursor:"pointer", marginTop:4, transition:"background 0.2s" }}
            onMouseEnter={e=>e.target.style.background="#c8303c"}
            onMouseLeave={e=>e.target.style.background="#E63946"}
          >Access Dashboard →</button>

          <Link to="/" style={{ display:"block", marginTop:24, fontSize:12, color:"#555", textDecoration:"none" }}>
            ← Back to website
          </Link>
        </div>
      </div>
    );
  }

  // ══ DASHBOARD ══
  return (
    <div style={{ minHeight:"100vh", background:"#080808", color:"#f0f0f0", fontFamily:"Inter,sans-serif" }}>

      {/* ── HEADER ── */}
      <header style={{ background:"#0d0d0d", borderBottom:"1px solid rgba(255,255,255,0.07)", padding:"0 28px", height:60, display:"flex", alignItems:"center", justifyContent:"space-between", position:"sticky", top:0, zIndex:10 }}>
        <div style={{ display:"flex", alignItems:"center", gap:16 }}>
          <Link to="/" style={{ textDecoration:"none" }}>
            <span style={{ fontFamily:"'Bebas Neue',cursive", fontSize:"1.5rem", color:"#fff" }}>RUDRA<span style={{ color:"#E63946" }}>GYM</span></span>
          </Link>
          <div style={{ width:1, height:22, background:"rgba(255,255,255,0.1)" }}/>
          <span style={{ fontSize:11, color:"#555", fontWeight:600, letterSpacing:"0.1em", textTransform:"uppercase" }}>Admin Dashboard</span>
        </div>
        <div style={{ display:"flex", alignItems:"center", gap:10 }}>
          <span style={{ fontSize:12, color:"#555", marginRight:4 }}>
            <span style={{ color:"#4ade80", fontWeight:700 }}>{leads.length}</span> total leads
          </span>
          <button onClick={exportCSV} style={{ padding:"8px 16px", background:"rgba(74,222,128,0.1)", border:"1px solid rgba(74,222,128,0.25)", color:"#4ade80", borderRadius:6, fontSize:12, fontWeight:700, letterSpacing:"0.06em", textTransform:"uppercase", cursor:"pointer", transition:"all 0.2s" }}
            onMouseEnter={e=>{e.currentTarget.style.background="rgba(74,222,128,0.2)"}}
            onMouseLeave={e=>{e.currentTarget.style.background="rgba(74,222,128,0.1)"}}
          >⬇ Export Excel</button>
          <button onClick={loadLeads} style={{ padding:"8px 14px", background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,255,255,0.1)", color:"#aaa", borderRadius:6, fontSize:12, cursor:"pointer" }}>🔄 Refresh</button>
          <button onClick={()=>setAuthed(false)} style={{ padding:"8px 14px", background:"rgba(230,57,70,0.1)", border:"1px solid rgba(230,57,70,0.2)", color:"#E63946", borderRadius:6, fontSize:12, fontWeight:700, cursor:"pointer" }}>Logout</button>
        </div>
      </header>

      <div style={{ padding:"28px 28px", maxWidth:1300, margin:"0 auto" }}>

        {/* ── STAT CARDS ── */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:14, marginBottom:28 }}>
          {[
            { label:"Total Leads",  icon:"👥", color:"#E63946",  val: leads.length },
            { label:"Today",        icon:"📅", color:"#4ade80",  val: leads.filter(l => new Date(l.timestamp).toDateString() === new Date().toDateString()).length },
            { label:"This Week",    icon:"📊", color:"#f5a623",  val: leads.filter(l => Date.now()-l.timestamp < 7*86400000).length },
            { label:"This Month",   icon:"🗓", color:"#a78bfa",  val: leads.filter(l => { const d=new Date(l.timestamp),n=new Date(); return d.getMonth()===n.getMonth()&&d.getFullYear()===n.getFullYear(); }).length },
          ].map(s=>(
            <div key={s.label} style={{ background:"#111", border:"1px solid rgba(255,255,255,0.07)", borderRadius:12, padding:"18px 20px", position:"relative", overflow:"hidden" }}>
              <div style={{ position:"absolute", top:0, left:0, right:0, height:2, background:s.color, opacity:0.7 }}/>
              <div style={{ fontSize:11, color:"#555", fontWeight:600, letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:10 }}>{s.icon} {s.label}</div>
              <div style={{ fontFamily:"'Bebas Neue',cursive", fontSize:"2.2rem", color:"#fff", lineHeight:1 }}>{s.val}</div>
            </div>
          ))}
        </div>

        {/* ── SEARCH + TITLE ── */}
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:16, flexWrap:"wrap", gap:12 }}>
          <h2 style={{ fontSize:15, fontWeight:700, color:"#fff" }}>
            All Leads
            {search && <span style={{ fontSize:12, color:"#555", fontWeight:400, marginLeft:10 }}>({filtered.length} results)</span>}
          </h2>
          <input
            placeholder="🔍  Search name, phone or email..."
            value={search}
            onChange={e=>setSearch(e.target.value)}
            style={{ ...inp, width:270, padding:"10px 14px" }}
          />
        </div>

        {/* ── TABLE ── */}
        {leads.length === 0 ? (
          <div style={{ textAlign:"center", padding:"64px 20px", color:"#555", background:"#111", borderRadius:12, border:"1px solid rgba(255,255,255,0.06)" }}>
            <div style={{ fontSize:"2.5rem", marginBottom:16 }}>📋</div>
            <div style={{ fontSize:15, fontWeight:600, marginBottom:8 }}>No leads yet</div>
            <div style={{ fontSize:13 }}>When users submit the contact form, their info will appear here.</div>
          </div>
        ) : filtered.length === 0 ? (
          <div style={{ textAlign:"center", padding:40, color:"#555", background:"#111", borderRadius:12, border:"1px solid rgba(255,255,255,0.06)" }}>
            No results for "<strong>{search}</strong>"
          </div>
        ) : (
          <div style={{ overflowX:"auto", borderRadius:12, border:"1px solid rgba(255,255,255,0.07)" }}>
            <table style={{ width:"100%", borderCollapse:"collapse", fontSize:13 }}>
              <thead>
                <tr style={{ background:"rgba(255,255,255,0.03)", borderBottom:"1px solid rgba(255,255,255,0.07)" }}>
                  {["#","Name","Phone","Email","Goal","Date","Actions"].map(h=>(
                    <th key={h} style={{ textAlign:"left", padding:"12px 14px", fontSize:10.5, fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", color:"#555", whiteSpace:"nowrap" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map((lead,idx) => (
                  <tr key={lead.id}
                    style={{ borderBottom:"1px solid rgba(255,255,255,0.04)", transition:"background 0.15s" }}
                    onMouseEnter={e=>e.currentTarget.style.background="rgba(255,255,255,0.02)"}
                    onMouseLeave={e=>e.currentTarget.style.background="transparent"}
                  >
                    {/* # */}
                    <td style={{ padding:"13px 14px", color:"#555", fontSize:12 }}>{leads.indexOf(lead)+1}</td>

                    {/* NAME */}
                    <td style={{ padding:"13px 14px", fontWeight:600, color:"#fff", whiteSpace:"nowrap" }}>
                      {editId===lead.id
                        ? <input value={editData.name??lead.name} onChange={e=>setEditData(d=>({...d,name:e.target.value}))} style={{...inp,width:130}}/>
                        : lead.name}
                    </td>

                    {/* PHONE */}
                    <td style={{ padding:"13px 14px", whiteSpace:"nowrap" }}>
                      {editId===lead.id
                        ? <input value={editData.phone??lead.phone} onChange={e=>setEditData(d=>({...d,phone:e.target.value}))} style={{...inp,width:130}}/>
                        : <a href={`tel:${lead.phone}`} style={{ color:"#4ade80", textDecoration:"none", fontWeight:600 }}>{lead.phone}</a>}
                    </td>

                    {/* EMAIL */}
                    <td style={{ padding:"13px 14px", color:"#888", whiteSpace:"nowrap" }}>
                      {editId===lead.id
                        ? <input value={editData.email??lead.email} onChange={e=>setEditData(d=>({...d,email:e.target.value}))} style={{...inp,width:160}}/>
                        : lead.email || <span style={{ color:"#3a3a3a" }}>—</span>}
                    </td>

                    {/* GOAL */}
                    <td style={{ padding:"13px 14px" }}>
                      {editId===lead.id
                        ? <select value={editData.goal??lead.goal} onChange={e=>setEditData(d=>({...d,goal:e.target.value}))} style={{...inp,width:170,cursor:"pointer"}}>
                            <option value="">—</option>
                            <option>Lose weight & burn fat</option>
                            <option>Build muscle & strength</option>
                            <option>Improve fitness & endurance</option>
                            <option>Athletic performance</option>
                            <option>General health & wellbeing</option>
                          </select>
                        : lead.goal
                          ? <span style={{ fontSize:11, padding:"3px 10px", background:"rgba(230,57,70,0.1)", border:"1px solid rgba(230,57,70,0.18)", borderRadius:4, color:"#E63946", fontWeight:600, whiteSpace:"nowrap" }}>{lead.goal}</span>
                          : <span style={{ color:"#3a3a3a" }}>—</span>}
                    </td>

                    {/* DATE */}
                    <td style={{ padding:"13px 14px", color:"#666", fontSize:12, whiteSpace:"nowrap" }}>{lead.date}</td>

                    {/* ACTIONS */}
                    <td style={{ padding:"13px 14px", whiteSpace:"nowrap" }}>
                      {editId===lead.id
                        ? <div style={{ display:"flex", gap:6 }}>
                            <button onClick={saveEdit} style={{ padding:"6px 12px", background:"#4ade80", color:"#000", border:"none", borderRadius:5, fontSize:11, fontWeight:700, cursor:"pointer" }}>✓ Save</button>
                            <button onClick={()=>{setEditId(null);setEditData({});}} style={{ padding:"6px 10px", background:"rgba(255,255,255,0.07)", color:"#ccc", border:"1px solid rgba(255,255,255,0.1)", borderRadius:5, fontSize:11, cursor:"pointer" }}>✕</button>
                          </div>
                        : <div style={{ display:"flex", gap:6 }}>
                            <button onClick={()=>{setEditId(lead.id);setEditData({});}} style={{ padding:"6px 11px", background:"rgba(230,57,70,0.1)", border:"1px solid rgba(230,57,70,0.2)", color:"#E63946", borderRadius:5, fontSize:11, fontWeight:700, cursor:"pointer" }}>✏ Edit</button>
                            <a href={`https://wa.me/${lead.phone.replace(/\D/g,"")}?text=Hi%20${encodeURIComponent(lead.name)}!%20This%20is%20Rudra%20Gym%20Warangal.`}
                              target="_blank" rel="noopener noreferrer"
                              style={{ padding:"6px 10px", background:"rgba(37,211,102,0.1)", border:"1px solid rgba(37,211,102,0.2)", color:"#4ade80", borderRadius:5, fontSize:11, fontWeight:700, textDecoration:"none" }}>💬</a>
                            <button onClick={()=>setDelConfirm(lead.id)} style={{ padding:"6px 10px", background:"rgba(255,50,50,0.08)", border:"1px solid rgba(255,50,50,0.15)", color:"#f87171", borderRadius:5, fontSize:11, cursor:"pointer" }}>🗑</button>
                          </div>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div style={{ marginTop:12, fontSize:12, color:"#3a3a3a", textAlign:"right" }}>
          {filtered.length} of {leads.length} leads shown
        </div>
      </div>

      {/* ── DELETE CONFIRM ── */}
      {delConfirm && (
        <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.75)", display:"flex", alignItems:"center", justifyContent:"center", zIndex:200, backdropFilter:"blur(4px)" }}>
          <div style={{ background:"#141414", border:"1px solid rgba(230,57,70,0.3)", borderRadius:14, padding:"32px 28px", maxWidth:340, width:"90%", textAlign:"center" }}>
            <div style={{ fontSize:"2rem", marginBottom:14 }}>🗑️</div>
            <h3 style={{ fontSize:16, fontWeight:700, color:"#fff", marginBottom:8 }}>Delete this lead?</h3>
            <p style={{ fontSize:13, color:"#777", marginBottom:24 }}>This cannot be undone.</p>
            <div style={{ display:"flex", gap:10, justifyContent:"center" }}>
              <button onClick={()=>deleteLead(delConfirm)} style={{ padding:"10px 24px", background:"#E63946", color:"#fff", border:"none", borderRadius:6, fontSize:13, fontWeight:700, cursor:"pointer" }}>Delete</button>
              <button onClick={()=>setDelConfirm(null)} style={{ padding:"10px 24px", background:"rgba(255,255,255,0.07)", color:"#ccc", border:"1px solid rgba(255,255,255,0.1)", borderRadius:6, fontSize:13, cursor:"pointer" }}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* ── SAVE TOAST ── */}
      {saved && (
        <div style={{ position:"fixed", bottom:28, left:"50%", transform:"translateX(-50%)", background:"#4ade80", color:"#000", padding:"12px 24px", borderRadius:10, fontSize:13, fontWeight:700, zIndex:300, whiteSpace:"nowrap" }}>
          ✅ Changes saved!
        </div>
      )}
    </div>
  );
}
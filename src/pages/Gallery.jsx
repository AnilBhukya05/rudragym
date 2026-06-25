import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import { useReveal } from "../hooks/useReveal";

const ITEMS = [
  {label:"Weight Training Floor",emoji:"🏋️",bg:"linear-gradient(135deg,#3b0a0a,#130303)"},
  {label:"Cardio Zone",          emoji:"🚴",bg:"linear-gradient(135deg,#3b1a0a,#130803)"},
  {label:"Boxing Ring",          emoji:"🥊",bg:"linear-gradient(135deg,#2a0606,#000)"},
  {label:"Yoga Studio",          emoji:"🧘",bg:"linear-gradient(135deg,#1a0a2a,#070311)"},
  {label:"CrossFit Rig",         emoji:"⚡",bg:"linear-gradient(135deg,#252000,#0d0c00)"},
  {label:"Recovery Zone",        emoji:"💆",bg:"linear-gradient(135deg,#0a1620,#020609)"},
  {label:"Locker Rooms",         emoji:"🚿",bg:"linear-gradient(135deg,#161616,#050505)"},
  {label:"Nutrition Bar",        emoji:"🥗",bg:"linear-gradient(135deg,#081608,#020802)"},
];

export default function Gallery() {
  const [lb, setLb] = useState(null);
  useReveal();
  useEffect(()=>{
    const fn = e => { if(e.key==="Escape") setLb(null); };
    window.addEventListener("keydown",fn);
    return ()=>window.removeEventListener("keydown",fn);
  },[]);

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <span className="eyebrow">Inside Rudra Gym</span>
          <h1 className="fd" style={{ fontSize:"clamp(3rem,7vw,6.5rem)", lineHeight:1, color:"#fff" }}>
            OUR <span style={{ color:"#E63946" }}>GALLERY</span>
          </h1>
        </div>
      </div>
      <section className="section" style={{ background:"#080808" }}>
        <div className="container">
          <p className="rv" style={{ color:"#777", maxWidth:500, marginBottom:44, lineHeight:1.8, fontSize:15 }}>
            World-class equipment, purpose-built spaces, and a community that pushes each other every day.
          </p>
          {/* RESPONSIVE BENTO GRID */}
          <div className="rv" style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:12 }}>
            {ITEMS.map((g,i)=>{
              const big = i===0||i===5;
              return (
                <div key={i} className="gimg" onClick={()=>setLb(g)}
                  style={{ gridColumn:big?"span 2":"span 1", gridRow:big?"span 2":"span 1", minHeight:big?280:140, background:g.bg }}>
                  <div style={{ position:"absolute", inset:0, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:10, padding:16 }}>
                    <span style={{ fontSize:big?"3.5rem":"2rem" }}>{g.emoji}</span>
                    <span style={{ fontSize:10.5, fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase", color:"rgba(255,255,255,0.5)", textAlign:"center" }}>{g.label}</span>
                  </div>
                  <div style={{ position:"absolute", bottom:8, right:10, fontSize:9, color:"rgba(255,255,255,0.2)" }}>tap to expand</div>
                </div>
              );
            })}
          </div>
          <p style={{ textAlign:"center", fontSize:11, color:"#3a3a3a", marginTop:14 }}>📸 Replace tiles with real gym photos.</p>
        </div>
      </section>

      {lb && (
        <div onClick={()=>setLb(null)} style={{ position:"fixed", inset:0, zIndex:300, background:"rgba(0,0,0,0.92)", display:"flex", alignItems:"center", justifyContent:"center", backdropFilter:"blur(8px)" }}>
          <div onClick={e=>e.stopPropagation()} style={{ position:"relative", maxWidth:500, width:"90%", borderRadius:18, overflow:"hidden", border:"1px solid rgba(255,255,255,0.1)", background:lb.bg }}>
            <div style={{ padding:"5rem 2.5rem", display:"flex", flexDirection:"column", alignItems:"center", gap:20, minHeight:340 }}>
              <span style={{ fontSize:"5rem" }}>{lb.emoji}</span>
              <h3 className="fd" style={{ fontSize:"2rem", color:"#fff", textAlign:"center" }}>{lb.label}</h3>
              <p style={{ fontSize:13, color:"rgba(255,255,255,0.5)", textAlign:"center", lineHeight:1.7 }}>
                State-of-the-art {lb.label.toLowerCase()} at Rudra Gym & Fitness Unisex, Warangal.
              </p>
            </div>
            <button onClick={()=>setLb(null)}
              style={{ position:"absolute", top:12, right:12, width:34, height:34, borderRadius:"50%", background:"rgba(0,0,0,0.7)", border:"none", color:"#fff", fontSize:"1.2rem", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center" }}
              onMouseEnter={e=>e.currentTarget.style.background="#E63946"}
              onMouseLeave={e=>e.currentTarget.style.background="rgba(0,0,0,0.7)"}
            >×</button>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}
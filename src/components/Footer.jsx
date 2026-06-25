import React from "react";
import { Link } from "react-router-dom";

const NAV  = ["Home","About","Programs","Gallery","Pricing","Trainers","Contact"];
const PROG = ["Strength Training","HIIT Burn","Yoga & Mobility","CrossFit","Boxing","Cardio Burn"];
const getPath = l => l === "Home" ? "/" : `/${l.toLowerCase()}`;

export default function Footer() {
  return (
    <footer style={{ background:"#0a0a0a", borderTop:"1px solid rgba(255,255,255,0.07)", padding:"64px 0 28px" }}>
      <div className="container">
        <div className="footer-grid" style={{ marginBottom:44 }}>
          <div>
            <Link to="/" style={{ textDecoration:"none" }}>
              <span className="fd" style={{ fontSize:"1.9rem", color:"#fff" }}>RUDRA<span style={{ color:"#E63946" }}>GYM&FITNESS</span></span>
            </Link>
            <p style={{ color:"#555", fontSize:13.5, marginTop:14, maxWidth:280, lineHeight:1.8 }}>
              Rudra Gym & Fitness Unisex — Bollikunta X Road, Beside Vaagdevi College of Engineering, Warangal-Khammam Highway, Telangana. Where champions are made.
            </p>
            <div style={{ display:"flex", gap:8, marginTop:20 }}>
              {["📸","𝕏","f","▶"].map(s=>(
                <a key={s} href="#"
                  style={{ width:36, height:36, borderRadius:"50%", background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,255,255,0.09)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:12, color:"#666", textDecoration:"none", transition:"all 0.2s" }}
                  onMouseEnter={e=>{ e.currentTarget.style.background="#E63946"; e.currentTarget.style.color="#fff"; e.currentTarget.style.borderColor="#E63946"; }}
                  onMouseLeave={e=>{ e.currentTarget.style.background="rgba(255,255,255,0.05)"; e.currentTarget.style.color="#666"; e.currentTarget.style.borderColor="rgba(255,255,255,0.09)"; }}
                >{s}</a>
              ))}
            </div>
          </div>
          <div>
            <h4 style={{ fontSize:11, fontWeight:700, letterSpacing:"0.14em", textTransform:"uppercase", color:"#fff", marginBottom:18 }}>Quick Links</h4>
            <div style={{ display:"flex", flexDirection:"column", gap:11 }}>
              {NAV.map(l=>(
                <Link key={l} to={getPath(l)} style={{ fontSize:13.5, color:"#555", textDecoration:"none", transition:"color 0.2s" }}
                  onMouseEnter={e=>e.target.style.color="#E63946"}
                  onMouseLeave={e=>e.target.style.color="#555"}
                >{l}</Link>
              ))}
            </div>
          </div>
          <div>
            <h4 style={{ fontSize:11, fontWeight:700, letterSpacing:"0.14em", textTransform:"uppercase", color:"#fff", marginBottom:18 }}>Programs</h4>
            <div style={{ display:"flex", flexDirection:"column", gap:11 }}>
              {PROG.map(p=>(
                <Link key={p} to="/programs" style={{ fontSize:13.5, color:"#555", textDecoration:"none", transition:"color 0.2s" }}
                  onMouseEnter={e=>e.target.style.color="#E63946"}
                  onMouseLeave={e=>e.target.style.color="#555"}
                >{p}</Link>
              ))}
            </div>
          </div>
        </div>
        <div style={{ paddingTop:24, borderTop:"1px solid rgba(255,255,255,0.07)", display:"flex", flexWrap:"wrap", justifyContent:"space-between", gap:12, fontSize:12, color:"#3a3a3a" }}>
          <span>© 2025 Rudra Gym & Fitness Unisex. All rights reserved.</span>
          <span>Warangal, Telangana, India</span>
        </div>
      </div>
    </footer>
  );
}
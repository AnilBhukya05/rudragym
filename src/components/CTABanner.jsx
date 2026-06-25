import React from "react";

export default function CTABanner() {
  return (
    <section style={{
      padding:"110px 0", position:"relative", overflow:"hidden", textAlign:"center",
      background:"linear-gradient(135deg,rgba(230,57,70,0.12) 0%,transparent 50%), #080808",
      borderTop:"1px solid rgba(255,255,255,0.07)",
      borderBottom:"1px solid rgba(255,255,255,0.07)",
    }}>
      <div style={{ position:"absolute", inset:0, display:"flex", alignItems:"center", justifyContent:"center", pointerEvents:"none", overflow:"hidden" }}>
        <span className="fd" style={{ fontSize:"clamp(5rem,16vw,16rem)", color:"rgba(255,255,255,0.022)", lineHeight:1, userSelect:"none" }}>RUDRA</span>
      </div>
      <div className="container rv">
        <span className="eyebrow" style={{ justifyContent:"center", display:"block" }}>Take The First Step</span>
        <h2 className="fd" style={{ fontSize:"clamp(2.8rem,7vw,5.5rem)", lineHeight:0.95, marginBottom:"1rem", color:"#fff" }}>
          READY TO<br /><span style={{ color:"#E63946" }}>TRANSFORM?</span>
        </h2>
        <p style={{ color:"#777", fontSize:"1.05rem", marginBottom:"2.5rem", maxWidth:380, margin:"0 auto 2.5rem" }}>
          Your first week is on us. No commitment required.
        </p>
        <a href="https://wa.me/917893138625?text=Hi!%20I%27d%20like%20to%20get%20started%20at%20Rudra%20Gym."
          target="_blank" rel="noopener noreferrer"
          className="btn btn-red"
          style={{ fontSize:"13px", padding:"16px 44px" }}>
          Chat on WhatsApp →
        </a>
      </div>
    </section>
  );
}
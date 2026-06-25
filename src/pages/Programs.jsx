import React from "react";
import CTABanner from "../components/CTABanner";
import Footer from "../components/Footer";
import { useReveal } from "../hooks/useReveal";

const ITEMS = [
  {icon:"💪",name:"Strength Training",desc:"Periodized lifting for raw, functional power.",details:"Built on proven periodization — hypertrophy, strength, and peaking blocks guided by coaches who've competed at state level.",time:"60 min",diff:"Intermediate",b:"bdg-med"},
  {icon:"🔥",name:"HIIT Burn",desc:"Maximum calorie burn. Minimum time.",details:"Explosive movements paired with active recovery. The afterburn effect keeps metabolism elevated for hours after the session.",time:"45 min",diff:"Advanced",b:"bdg-hard"},
  {icon:"🧘",name:"Yoga & Mobility",desc:"Restore movement. Sharpen the mind.",details:"RYT-500 certified instructors guide you through functional mobility, breath work, and mental clarity — perfect as active recovery.",time:"60 min",diff:"All Levels",b:"bdg-easy"},
  {icon:"🚴",name:"Cardio Burn",desc:"Coach-led heart rate zone training.",details:"Structured intervals on treadmills, rowers, and bikes designed to maximize fat burn and aerobic capacity at every level.",time:"50 min",diff:"Beginner",b:"bdg-easy"},
  {icon:"🥊",name:"Boxing & Combat",desc:"Explosive power. Elite conditioning.",details:"From footwork to pad work — authentic boxing technique combined with modern S&C to build complete, explosive athletes.",time:"55 min",diff:"Intermediate",b:"bdg-med"},
  {icon:"⚡",name:"CrossFit",desc:"Varied. Intense. Community-driven.",details:"WODs that never repeat. Olympic lifting, gymnastics, and metabolic conditioning — the world's most complete fitness system.",time:"60 min",diff:"Advanced",b:"bdg-hard"},
];

export default function Programs() {
  useReveal();
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <span className="eyebrow">What We Offer</span>
          <h1 className="fd" style={{ fontSize:"clamp(3rem,7vw,6.5rem)", lineHeight:1, color:"#fff" }}>
            OUR <span style={{ color:"#E63946" }}>PROGRAMS</span>
          </h1>
        </div>
      </div>
      <section className="section" style={{ background:"#080808" }}>
        <div className="container">
          <div className="grid-3">
            {ITEMS.map((p,i)=>(
              <div key={i} className="card rv" style={{ padding:"28px 24px", display:"flex", flexDirection:"column" }}>
                <div style={{ width:54, height:54, borderRadius:12, background:"rgba(230,57,70,0.09)", border:"1px solid rgba(230,57,70,0.18)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1.8rem", marginBottom:20 }}>{p.icon}</div>
                <h3 className="fd" style={{ fontSize:"1.85rem", color:"#fff", marginBottom:6 }}>{p.name}</h3>
                <p style={{ fontSize:13, color:"#666", lineHeight:1.6, marginBottom:10 }}>{p.desc}</p>
                <p style={{ fontSize:13.5, color:"#888", lineHeight:1.8, flex:1, marginBottom:20 }}>{p.details}</p>
                <div style={{ display:"flex", gap:8, paddingTop:16, borderTop:"1px solid rgba(255,255,255,0.06)" }}>
                  <span className="bdg bdg-t">{p.time}</span>
                  <span className={`bdg ${p.b}`}>{p.diff}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTABanner />
      <Footer />
    </>
  );
}
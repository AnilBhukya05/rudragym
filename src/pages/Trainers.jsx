import React from "react";
import CTABanner from "../components/CTABanner";
import Footer from "../components/Footer";
import { useReveal } from "../hooks/useReveal";

const TRAINERS = [
  {i:"RK",name:"Anil Bhukya",role:"Strength & Power",exp:"5 Yrs",cert:"NSCA-CSCS",bio:"Former state-level powerlifter turned performance coach. Specialises in periodised strength, Olympic lifting, and powerlifting prep. Helped 80+ members set personal records.",tags:["Powerlifting","Olympic Lifting","Hypertrophy"]},
  {i:"PS",name:"Priya Sharma",role:"HIIT & Conditioning",exp:"7 Yrs",cert:"CrossFit L2",bio:"Sports science graduate and CrossFit Level 2 certified. Her HIIT sessions are legendary across Warangal for intensity and results.",tags:["CrossFit","Metabolic Conditioning","Fat Loss"]},
  {i:"AR",name:"Arjun Reddy",role:"Boxing & Combat",exp:"12 Yrs",cert:"BFI Certified",bio:"District boxing champion turned full-time coach. Combines authentic combat sport technique with modern S&C to build complete athletes.",tags:["Boxing","Kickboxing","Athletic Performance"]},
  {i:"MA",name:"Meera Acharya",role:"Yoga & Recovery",exp:"8 Yrs",cert:"RYT-500",bio:"RYT-500 certified instructor and sports therapist. Bridges high-performance training and mindful recovery for lasting results.",tags:["Yoga","Mobility","Sports Therapy"]},
];

export default function Trainers() {
  useReveal();
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <span className="eyebrow">Meet the Team</span>
          <h1 className="fd" style={{ fontSize:"clamp(3rem,7vw,6.5rem)", lineHeight:1, color:"#fff" }}>
            OUR <span style={{ color:"#E63946" }}>TRAINERS</span>
          </h1>
        </div>
      </div>
      <section className="section" style={{ background:"#080808" }}>
        <div className="container">
          <div className="grid-2">
            {TRAINERS.map((t,i)=>(
              <div key={i} className="card rv" style={{ padding:"28px 24px" }}>
                <div style={{ display:"flex", alignItems:"flex-start", gap:18, marginBottom:18 }}>
                  <div className="trainer-avatar">{t.i}</div>
                  <div>
                    <h3 style={{ fontSize:"1.1rem", fontWeight:800, color:"#fff", marginBottom:4 }}>{t.name}</h3>
                    <p style={{ fontSize:10, fontWeight:700, letterSpacing:"0.14em", textTransform:"uppercase", color:"#E63946", marginBottom:10 }}>{t.role}</p>
                    <div style={{ display:"flex", gap:7, flexWrap:"wrap" }}>
                      {[t.exp,t.cert].map(b=>(
                        <span key={b} style={{ fontSize:10.5, padding:"3px 10px", background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,255,255,0.09)", borderRadius:5, color:"#777" }}>{b}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p style={{ fontSize:14, color:"#888", lineHeight:1.8, marginBottom:18 }}>{t.bio}</p>
                <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
                  {t.tags.map(s=>(
                    <span key={s} style={{ fontSize:11, padding:"5px 13px", background:"rgba(230,57,70,0.09)", border:"1px solid rgba(230,57,70,0.2)", borderRadius:100, color:"#E63946", fontWeight:600 }}>{s}</span>
                  ))}
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
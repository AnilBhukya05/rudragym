import React from "react";
import CTABanner from "../components/CTABanner";
import Footer from "../components/Footer";
import { useReveal } from "../hooks/useReveal";

const PLANS = [
  {name:"Basic",price:"1,499",features:[["Gym floor access (6am–10pm)",1],["Cardio equipment",1],["Locker room access",1],["1 group class / week",1],["Personal training sessions",0],["Nutrition coaching",0],["24/7 access",0]]},
  {name:"Pro",price:"2,999",hot:1,features:[["Unlimited gym floor access",1],["All equipment access",1],["Unlimited group classes",1],["4 PT sessions / month",1],["Basic nutrition plan",1],["Priority booking",1],["24/7 access",0]]},
  {name:"Elite",price:"4,999",features:[["24/7 unlimited access",1],["All equipment & facilities",1],["Unlimited group classes",1],["8 PT sessions / month",1],["Full nutrition coaching",1],["Recovery & sauna access",1],["Monthly body composition scan",1]]},
];

export default function Pricing() {
  useReveal();
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <span className="eyebrow">Membership Plans</span>
          <h1 className="fd" style={{ fontSize:"clamp(3rem,7vw,6.5rem)", lineHeight:1, color:"#fff" }}>
            OUR <span style={{ color:"#E63946" }}>PRICING</span>
          </h1>
        </div>
      </div>
      <section className="section" style={{ background:"#080808" }}>
        <div className="container">
          <p className="rv" style={{ color:"#777", textAlign:"center", maxWidth:420, margin:"0 auto 52px", lineHeight:1.8, fontSize:15 }}>
            No hidden fees. No lock-in contracts. Just results.
          </p>
          <div className="grid-3" style={{ maxWidth:960, margin:"0 auto", alignItems:"center" }}>
            {PLANS.map((plan,i)=>(
              <div key={i} className="rv" style={{
                background: plan.hot?"#141414":"#111",
                border:`1px solid ${plan.hot?"#E63946":"rgba(255,255,255,0.07)"}`,
                borderRadius:16, padding:"32px 26px", position:"relative",
                transform: plan.hot?"scale(1.04)":"none",
                boxShadow: plan.hot?"0 24px 60px rgba(230,57,70,0.12)":"none",
                transition:"transform 0.3s",
              }}>
                {plan.hot && (
                  <div style={{ position:"absolute", top:-13, left:"50%", transform:"translateX(-50%)", background:"#E63946", color:"#fff", fontSize:10, fontWeight:800, letterSpacing:"0.12em", textTransform:"uppercase", padding:"5px 18px", borderRadius:100, whiteSpace:"nowrap" }}>
                    Most Popular
                  </div>
                )}
                <div style={{ fontSize:10, fontWeight:700, letterSpacing:"0.16em", textTransform:"uppercase", color:"#E63946", marginBottom:12 }}>{plan.name}</div>
                <div className="fd" style={{ fontSize:"3rem", lineHeight:1, color:"#fff", marginBottom:4 }}>₹{plan.price}</div>
                <div style={{ fontSize:12, color:"#555", marginBottom:28 }}>per month</div>
                <ul style={{ listStyle:"none", display:"flex", flexDirection:"column", gap:12, marginBottom:28 }}>
                  {plan.features.map(([f,ok],j)=>(
                    <li key={j} style={{ display:"flex", alignItems:"center", gap:10, fontSize:13.5, color:ok?"#ccc":"#3a3a3a", textDecoration:ok?"none":"line-through" }}>
                      <span style={{ fontSize:12, fontWeight:700, color:ok?"#E63946":"#2a2a2a", flexShrink:0, width:16 }}>{ok?"✓":"✗"}</span>{f}
                    </li>
                  ))}
                </ul>
                <a href={`https://wa.me/919876543210?text=Hi!%20I%27m%20interested%20in%20the%20${plan.name}%20plan.`}
                  target="_blank" rel="noopener noreferrer"
                  className={`btn ${plan.hot?"btn-red":"btn-ghost"}`}
                  style={{ width:"100%", fontSize:"12px", padding:"13px" }}
                >Get Started</a>
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
import React from "react";
import CTABanner from "../components/CTABanner";
import Footer from "../components/Footer";
import { useReveal } from "../hooks/useReveal";

export default function About() {
  useReveal();
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <span className="eyebrow">Who We Are</span>
          <h1 className="fd" style={{ fontSize:"clamp(3rem,7vw,6.5rem)", lineHeight:1, color:"#fff" }}>
            ABOUT <span style={{ color:"#E63946" }}>RUDRA</span>
          </h1>
        </div>
      </div>

      <section className="section" style={{ background:"#080808" }}>
        <div className="container">
          <div className="two-col" style={{ alignItems:"center" }}>
            <div className="rl">
              <div className="divider"/>
              <h2 className="fd" style={{ fontSize:"clamp(2rem,3.8vw,3.2rem)", lineHeight:1.05, marginBottom:24, color:"#fff" }}>
                BUILT FOR THOSE<br/>WHO REFUSE<br/><span style={{ color:"#E63946" }}>TO BE AVERAGE</span>
              </h2>
              {["Rudra Gym & Fitness Unisex isn't just a gym. It's a proving ground in the heart of Warangal. Founded over a decade ago, we've helped thousands transform their bodies, mindsets, and lives.",
                "Every machine, every program, every trainer exists for one purpose: results that last. We combine elite equipment with science-backed programming to give you the edge.",
                "As Warangal's premier unisex facility, we've built a culture where every body is respected, every goal is valid, and every member is held to a higher standard."
              ].map((p,i)=><p key={i} style={{ color:"#888", lineHeight:1.85, marginBottom:14, fontSize:15 }}>{p}</p>)}
            </div>
            <div className="grid-2 rr">
              {[["10","Years in Warangal"],["12K","Sq Ft Facility"],["98%","Satisfaction"],["300+","Transformations"]].map(([n,l])=>(
                <div key={l} className="stat-card">
                  <div className="fd" style={{ fontSize:"3rem", color:"#E63946", lineHeight:1, marginBottom:8 }}>{n}</div>
                  <div style={{ fontSize:11, color:"#555", letterSpacing:"0.12em", textTransform:"uppercase" }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background:"#0d0d0d", borderTop:"1px solid rgba(255,255,255,0.06)" }}>
        <div className="container">
          <div style={{ textAlign:"center", marginBottom:52 }}>
            <span className="eyebrow rv">Why Choose Us</span>
            <h2 className="sec-title rv">WHAT MAKES RUDRA <span style={{ color:"#E63946" }}>DIFFERENT</span></h2>
          </div>
          <div className="grid-4">
            {[
              ["🏋️","Elite Equipment","12,000 sq ft of premium machines, free weights, and specialist rigs."],
              ["🎓","Certified Trainers","All coaches nationally certified with 5+ years performance experience."],
              ["⏰","24/7 Access","Doors never close for Pro and Elite members."],
              ["👥","Unisex Facility","Safe, welcoming space for every body and every goal."],
              ["📊","Progress Tracking","Monthly body composition scans for Elite members."],
              ["🥗","Nutrition Guidance","Certified nutrition coaches to fuel your training."],
              ["🧊","Recovery Zone","Dedicated stretching zones and wellness facilities."],
              ["🏆","Community","A tight-knit community that pushes you to be better daily."],
            ].map(([ic,h,d])=>(
              <div key={h} className="card rv" style={{ padding:"24px 20px" }}>
                <div style={{ fontSize:"1.8rem", marginBottom:14 }}>{ic}</div>
                <h3 style={{ fontSize:14, fontWeight:700, color:"#fff", marginBottom:8 }}>{h}</h3>
                <p style={{ fontSize:12.5, color:"#666", lineHeight:1.65 }}>{d}</p>
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
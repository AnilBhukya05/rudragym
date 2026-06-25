import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const LINKS = ["Home","About","Programs","Gallery","Pricing","Trainers","Contact"];
const getPath = l => l === "Home" ? "/" : `/${l.toLowerCase()}`;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const { pathname }            = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    setOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const isActive = l => l === "Home" ? pathname === "/" : pathname === `/${l.toLowerCase()}`;

  return (
    <>
      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        height: 64,
        background: scrolled || open ? "rgba(6,6,6,0.98)" : "rgba(8,8,8,0.82)",
        borderBottom: `1px solid ${scrolled ? "rgba(255,255,255,0.09)" : "rgba(255,255,255,0.04)"}`,
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        transition: "background 0.3s ease, border-color 0.3s ease",
      }}>
        <div className="container" style={{ height:"100%", display:"flex", alignItems:"center", justifyContent:"space-between" }}>

          {/* LOGO */}
          <Link to="/" style={{ textDecoration:"none", flexShrink:0, zIndex:101 }}>
            <span className="fd" style={{ fontSize:"1.75rem", lineHeight:1 }}>
              <span style={{ color:"#fff" }}>RUDRA</span>
              <span style={{ color:"#E63946" }}>GYM&FITNESS</span>
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="nav-desktop">
            {LINKS.map(l => (
              <Link key={l} to={getPath(l)} className={`nlink${isActive(l)?" nlink-active":""}`}>{l}</Link>
            ))}
          </nav>

          {/* JOIN NOW — desktop only */}
          <a
            href="https://wa.me/917893138625?text=Hi!%20I%27d%20like%20to%20join%20Rudra%20Gym."
            target="_blank" rel="noopener noreferrer"
            className="btn btn-red nav-join"
            style={{ padding:"9px 20px", fontSize:"11px" }}
          >Join Now</a>

          {/* HAMBURGER */}
          <button
            className="nav-hamburger"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            style={{ background:"none", border:"none", cursor:"pointer", padding:6, flexDirection:"column", gap:5, zIndex:101, position:"relative" }}
          >
            <span style={{ display:"block", width:24, height:2, background:"#fff", borderRadius:2, transition:"all 0.3s ease", transform: open?"rotate(45deg) translateY(7px)":"none" }}/>
            <span style={{ display:"block", width:24, height:2, background:"#fff", borderRadius:2, transition:"all 0.3s ease", opacity: open?0:1, transform: open?"scaleX(0)":"none" }}/>
            <span style={{ display:"block", width:24, height:2, background:"#fff", borderRadius:2, transition:"all 0.3s ease", transform: open?"rotate(-45deg) translateY(-7px)":"none" }}/>
          </button>
        </div>
      </header>

      {/* SLIDE-DOWN MOBILE MENU — like image 5 */}
      <div style={{
        position: "fixed",
        top: 64,
        left: 0,
        right: 0,
        zIndex: 98,
        background: "#0a0a0a",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        transform: open ? "translateY(0)" : "translateY(-110%)",
        transition: "transform 0.38s cubic-bezier(0.4,0,0.2,1)",
        boxShadow: open ? "0 20px 60px rgba(0,0,0,0.7)" : "none",
        overflowY: "auto",
        maxHeight: "calc(100vh - 64px)",
      }}>
        <div className="container" style={{ padding:"8px 24px 28px" }}>

          {/* NAV LINKS — clean list like image 5 */}
          <nav>
            {LINKS.map((l, i) => (
              <Link
                key={l}
                to={getPath(l)}
                onClick={() => setOpen(false)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "16px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                  textDecoration: "none",
                  color: isActive(l) ? "#E63946" : "#e0e0e0",
                  fontSize: 15,
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  transition: "color 0.2s ease",
                  animationDelay: `${i * 40}ms`,
                }}
                onMouseEnter={e => e.currentTarget.style.color = "#E63946"}
                onMouseLeave={e => e.currentTarget.style.color = isActive(l) ? "#E63946" : "#e0e0e0"}
              >
                <span>{l}</span>
                <span style={{ color: isActive(l) ? "#E63946" : "rgba(255,255,255,0.2)", fontSize:18 }}>›</span>
              </Link>
            ))}
          </nav>

          {/* JOIN NOW — bottom of mobile menu */}
          <div style={{ marginTop:24 }}>
            <a
              href="https://wa.me/917893138625?text=Hi!%20I%27d%20like%20to%20join%20Rudra%20Gym."
              target="_blank" rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="btn btn-red"
              style={{ width:"100%", fontSize:"13px", padding:"15px" }}
            >Join Now — Chat on WhatsApp</a>
          </div>

          {/* QUICK INFO */}
          <div style={{ marginTop:20, display:"flex", justifyContent:"space-between", alignItems:"center" }}>
            <div style={{ fontSize:12, color:"#555" }}>
              <span style={{ display:"flex", alignItems:"center", gap:6 }}>
                <span className="pulse-dot" style={{ width:6, height:6, background:"#4ade80", borderRadius:"50%", display:"inline-block" }} />
                <span style={{ color:"#4ade80", fontWeight:600 }}>Open Now</span>
                <span style={{ color:"#444" }}>· 5am – 11pm</span>
              </span>
            </div>
            <div style={{ fontSize:12, color:"#555" }}>📞 +91 98765 43210</div>
          </div>
        </div>
      </div>

      {/* BACKDROP */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{ position:"fixed", inset:0, top:64, zIndex:97, background:"rgba(0,0,0,0.5)", backdropFilter:"blur(2px)" }}
        />
      )}
    </>
  );
}
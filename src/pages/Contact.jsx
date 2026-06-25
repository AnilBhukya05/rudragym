import React, { useState } from "react";
import Footer from "../components/Footer";
import { useReveal } from "../hooks/useReveal";

export default function Contact() {
  const [f, setF] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    goal: "",
    msg: "",
  });
  const [toast, setToast] = useState(false);
  useReveal();

  const upd = (k) => (e) => setF((p) => ({ ...p, [k]: e.target.value }));
  const send = () => {
    if (!f.fname || !f.phone) {
      alert("Name and phone are required.");
      return;
    }
    const txt = `Hi! I'm ${f.fname} ${f.lname}. Goal: ${f.goal || "Not specified"}. Phone: ${f.phone}. ${f.msg}`;
    window.open(
      `https://wa.me/919876543210?text=${encodeURIComponent(txt)}`,
      "_blank",
    );
    setToast(true);
    setF({ fname: "", lname: "", email: "", phone: "", goal: "", msg: "" });
    setTimeout(() => setToast(false), 4000);
  };

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <span className="eyebrow">Get In Touch</span>
          <h1
            className="fd"
            style={{
              fontSize: "clamp(3rem,7vw,6.5rem)",
              lineHeight: 1,
              color: "#fff",
            }}
          >
            CONTACT <span style={{ color: "#E63946" }}>US</span>
          </h1>
        </div>
      </div>

      {/* ══ CONTACT FORM & INFO ══ */}
      <section className="section" style={{ background: "#080808" }}>
        <div className="container">
          <div className="two-col">
            {/* LEFT INFO */}
            <div className="rl">
              <div className="divider" />
              <h2
                className="fd"
                style={{
                  fontSize: "clamp(1.8rem,3.5vw,2.8rem)",
                  lineHeight: 1.05,
                  marginBottom: 16,
                  color: "#fff",
                }}
              >
                LET'S TALK ABOUT{" "}
                <span style={{ color: "#E63946" }}>YOUR GOALS</span>
              </h2>
              <p
                style={{
                  color: "#777",
                  lineHeight: 1.8,
                  marginBottom: 22,
                  fontSize: 14.5,
                }}
              >
                Fill the form — we'll open WhatsApp instantly. Our team
                typically replies within 30 minutes.
              </p>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "10px 16px",
                  borderRadius: 10,
                  border: "1px solid rgba(37,211,102,0.22)",
                  background: "rgba(37,211,102,0.05)",
                  color: "#4ade80",
                  fontSize: 13,
                  fontWeight: 600,
                  marginBottom: 28,
                }}
              >
                <span
                  className="pulse-dot"
                  style={{
                    width: 7,
                    height: 7,
                    background: "#4ade80",
                    borderRadius: "50%",
                    display: "inline-block",
                  }}
                />
                Typically reply within 30 minutes
              </div>

              <div
                style={{ display: "flex", flexDirection: "column", gap: 16 }}
              >
                {[
                  [
                    "📍",
                    "Address",
                    "Rudra Gym & Fitness Unisex — Bollikunta X Road, Beside Vaagdevi College of Engineering, Warangal-Khammam Highway, Telangana, 506005",
                  ],
                  ["📞", "Phone", "+91 98765 43210"],
                  ["✉️", "Email", "hello@rudragym.in"],
                  [
                    "⏰",
                    "Hours",
                    "Mon–Sat  5:00am – 11:00pm\nSunday   6:00am – 9:00pm\nElite Members  24/7",
                  ],
                  ["🚗", "Parking", "Free parking for all members"],
                ].map(([ic, l, v]) => (
                  <div
                    key={l}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 14,
                    }}
                  >
                    <div
                      style={{
                        width: 38,
                        height: 38,
                        borderRadius: 9,
                        background: "rgba(230,57,70,0.09)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1rem",
                        flexShrink: 0,
                      }}
                    >
                      {ic}
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: 10,
                          fontWeight: 700,
                          letterSpacing: "0.14em",
                          textTransform: "uppercase",
                          color: "#E63946",
                          marginBottom: 3,
                        }}
                      >
                        {l}
                      </div>
                      <div
                        style={{
                          fontSize: 13.5,
                          color: "#888",
                          whiteSpace: "pre-line",
                          lineHeight: 1.7,
                        }}
                      >
                        {v}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div
                style={{
                  marginTop: 28,
                  borderRadius: 14,
                  overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.07)",
                  height: 200,
                }}
              >
                <iframe
                  title="RUDRA Gym & Fitness – Warangal"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d829.4!2d79.5948477!3d17.8873535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a335b005af3b44b%3A0x990c265766a13225!2sRUDRA%20Gym%20%26%20Fitness!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{
                    border: 0,
                    filter: "invert(90%) hue-rotate(180deg)",
                  }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* FORM */}
            <div
              className="rr"
              style={{ display: "flex", flexDirection: "column", gap: 16 }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 14,
                }}
              >
                {[
                  ["First Name *", "fname", "Ravi"],
                  ["Last Name", "lname", "Kumar"],
                ].map(([l, k, ph]) => (
                  <div key={k}>
                    <label className="flabel">{l}</label>
                    <input
                      className="finput"
                      placeholder={ph}
                      value={f[k]}
                      onChange={upd(k)}
                    />
                  </div>
                ))}
              </div>
              <div>
                <label className="flabel">Email Address</label>
                <input
                  className="finput"
                  type="email"
                  placeholder="you@example.com"
                  value={f.email}
                  onChange={upd("email")}
                />
              </div>
              <div>
                <label className="flabel">Phone Number *</label>
                <input
                  className="finput"
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={f.phone}
                  onChange={upd("phone")}
                />
              </div>
              <div>
                <label className="flabel">Primary Goal</label>
                <select
                  className="finput"
                  value={f.goal}
                  onChange={upd("goal")}
                  style={{ background: "#111", cursor: "pointer" }}
                >
                  <option value="" disabled>
                    Select your primary goal
                  </option>
                  <option>Lose weight & burn fat</option>
                  <option>Build muscle & strength</option>
                  <option>Improve fitness & endurance</option>
                  <option>Athletic performance</option>
                  <option>General health & wellbeing</option>
                </select>
              </div>
              <div>
                <label className="flabel">Message</label>
                <textarea
                  className="finput"
                  rows={4}
                  placeholder="Tell us about yourself and your fitness history..."
                  value={f.msg}
                  onChange={upd("msg")}
                  style={{ resize: "none" }}
                />
              </div>
              <button
                onClick={send}
                className="btn btn-green"
                style={{ marginTop: 4, fontSize: "13px", padding: "15px" }}
              >
                <svg viewBox="0 0 32 32" fill="white" width="18" height="18">
                  <path d="M16 .4C7.4.4.4 7.4.4 16c0 2.8.7 5.5 2.1 7.9L.4 31.6l8-2.1c2.3 1.2 4.9 1.9 7.6 1.9 8.6 0 15.6-7 15.6-15.6C31.6 7.4 24.6.4 16 .4zm8.6 19.2c-.5-.2-2.8-1.4-3.2-1.5-.4-.2-.7-.2-1 .2-.3.5-1.2 1.5-1.4 1.8-.3.3-.5.4-1 .1-.5-.2-2-.7-3.8-2.3-1.4-1.2-2.3-2.7-2.6-3.2-.3-.5 0-.7.2-1l.7-.8c.2-.3.3-.5.4-.8.1-.3 0-.6-.1-.8-.1-.2-1-2.4-1.3-3.3-.4-.9-.7-.8-1-.8h-.9c-.3 0-.8.1-1.2.6S7.9 13 7.9 15.2c0 2.2 1.6 4.3 1.8 4.6.2.3 3.1 4.8 7.6 6.7 1.1.5 1.9.7 2.6.9 1.1.3 2.1.3 2.9.2.9-.1 2.8-1.1 3.2-2.2.4-1.1.4-2 .3-2.2-.2-.2-.5-.3-1-.5z" />
                </svg>
                Send Message via WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FOUNDER SECTION ══ */}
      <section
        style={{
          padding: "88px 0",
          background: "#0d0d0d",
          borderTop: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span className="eyebrow rv">The Visionary Behind Rudra</span>
            <h2 className="sec-title rv">
              MEET OUR <span style={{ color: "#E63946" }}>FOUNDER</span>
            </h2>
          </div>

          <div className="rv" style={{ maxWidth: 860, margin: "0 auto" }}>
            <div
              style={{
                background: "linear-gradient(135deg,#141414,#0f0f0f)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 20,
                overflow: "hidden",
                position: "relative",
              }}
            >
              {/* TOP ACCENT */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 3,
                  background:
                    "linear-gradient(to right,#E63946,rgba(230,57,70,0.2))",
                }}
              />

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto 1fr",
                  gap: 0,
                }}
              >
                {/* LEFT — Avatar + Quick Info */}
                <div
                  style={{
                    padding: "44px 36px",
                    background: "rgba(230,57,70,0.04)",
                    borderRight: "1px solid rgba(255,255,255,0.06)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    minWidth: 200,
                    textAlign: "center",
                  }}
                >
                  {/* AVATAR */}
                  <div
                    style={{
                      width: 100,
                      height: 100,
                      borderRadius: "50%",
                      background:
                        "linear-gradient(135deg,rgba(230,57,70,0.25),rgba(230,57,70,0.08))",
                      border: "2px solid rgba(230,57,70,0.35)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 18,
                      position: "relative",
                    }}
                  >
                    <span
                      className="fd"
                      style={{ fontSize: "2.5rem", color: "#E63946" }}
                    >
                      RV
                    </span>
                    {/* verified badge */}
                    <div
                      style={{
                        position: "absolute",
                        bottom: 2,
                        right: 2,
                        width: 24,
                        height: 24,
                        borderRadius: "50%",
                        background: "#E63946",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "0.75rem",
                        border: "2px solid #141414",
                      }}
                    >
                      ✓
                    </div>
                  </div>

                  <div
                    className="fd"
                    style={{
                      fontSize: "1.4rem",
                      color: "#fff",
                      marginBottom: 4,
                    }}
                  >
                    RUDRA
                  </div>
                  <div
                    style={{
                      fontSize: 10,
                      color: "#E63946",
                      fontWeight: 700,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      marginBottom: 16,
                    }}
                  >
                    Founder & Head Coach
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 8,
                      width: "100%",
                    }}
                  >
                    {[
                      ["🏆", "NSCA Certified"],
                      ["🎓", "Sports Science"],
                      ["📅", "Since 2014"],
                    ].map(([ic, l]) => (
                      <div
                        key={l}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                          fontSize: 12,
                          color: "#777",
                          justifyContent: "center",
                        }}
                      >
                        <span>{ic}</span>
                        <span>{l}</span>
                      </div>
                    ))}
                  </div>

                  <div style={{ display: "flex", gap: 8, marginTop: 20 }}>
                    {["📸", "𝕏"].map((s) => (
                      <a
                        key={s}
                        href="#"
                        style={{
                          width: 34,
                          height: 34,
                          borderRadius: "50%",
                          background: "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(255,255,255,0.09)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: 12,
                          color: "#666",
                          textDecoration: "none",
                          transition: "all 0.2s",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = "#E63946";
                          e.currentTarget.style.color = "#fff";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background =
                            "rgba(255,255,255,0.05)";
                          e.currentTarget.style.color = "#666";
                        }}
                      >
                        {s}
                      </a>
                    ))}
                  </div>
                </div>

                {/* RIGHT — Story */}
                <div style={{ padding: "44px 40px" }}>
                  <div className="divider" />
                  <h3
                    className="fd"
                    style={{
                      fontSize: "clamp(1.6rem,3vw,2.4rem)",
                      color: "#fff",
                      lineHeight: 1.05,
                      marginBottom: 20,
                    }}
                  >
                    FROM PASSION
                    <br />
                    <span style={{ color: "#E63946" }}>TO PURPOSE</span>
                  </h3>

                  <p
                    style={{
                      color: "#888",
                      lineHeight: 1.85,
                      fontSize: 14,
                      marginBottom: 16,
                    }}
                  >
                    Rudra founded Rudra Gym & Fitness Unisex in 2014 with
                    a single mission: to bring world-class fitness to Warangal.
                    Growing up as an athlete, he experienced firsthand how the
                    right coaching and environment can transform not just a
                    body, but an entire mindset.
                  </p>
                  <p
                    style={{
                      color: "#888",
                      lineHeight: 1.85,
                      fontSize: 14,
                      marginBottom: 16,
                    }}
                  >
                    After earning his NSCA certification and a degree in Sports
                    Science, Rudra returned to Warangal to build something the
                    city had never seen — a premium, unisex training facility
                    where every single member is treated like an athlete.
                  </p>
                  <p
                    style={{
                      color: "#888",
                      lineHeight: 1.85,
                      fontSize: 14,
                      marginBottom: 28,
                    }}
                  >
                    Over 10 years and 300+ transformations later, his philosophy
                    remains unchanged:{" "}
                    <em style={{ color: "#ccc" }}>
                      "Train hard. Be consistent. Trust the process."
                    </em>
                  </p>

                  {/* ACHIEVEMENT STATS */}
                  <div
                    style={{
                      display: "flex",
                      gap: 32,
                      flexWrap: "wrap",
                      paddingTop: 24,
                      borderTop: "1px solid rgba(255,255,255,0.07)",
                    }}
                  >
                    {[
                      ["10+", "Years Coaching"],
                      ["300+", "Transformations"],
                      ["30+", "Certified Staff"],
                      ["1", "Elite Facility"],
                    ].map(([n, l]) => (
                      <div key={l}>
                        <div
                          className="fd"
                          style={{
                            fontSize: "2rem",
                            color: "#E63946",
                            lineHeight: 1,
                          }}
                        >
                          {n}
                        </div>
                        <div
                          style={{
                            fontSize: 11,
                            color: "#555",
                            textTransform: "uppercase",
                            letterSpacing: "0.1em",
                            marginTop: 3,
                          }}
                        >
                          {l}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* BOTTOM QUOTE BAR */}
              <div
                style={{
                  padding: "20px 36px",
                  background: "rgba(230,57,70,0.06)",
                  borderTop: "1px solid rgba(230,57,70,0.1)",
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                }}
              >
                <span
                  style={{
                    fontSize: "2rem",
                    color: "rgba(230,57,70,0.4)",
                    lineHeight: 1,
                    fontFamily: "Georgia, serif",
                    flexShrink: 0,
                  }}
                >
                  "
                </span>
                <p
                  style={{
                    fontSize: 14,
                    color: "#aaa",
                    lineHeight: 1.65,
                    fontStyle: "italic",
                  }}
                >
                  We don't just build stronger bodies here — we build stronger
                  people. Every member who walks through our doors deserves the
                  best coaching, the best environment, and the belief that they
                  can achieve more than they think.
                </p>
                <span
                  style={{
                    fontSize: 13,
                    color: "#555",
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                  }}
                >
                  — Rudra Verma
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {toast && (
        <div
          style={{
            position: "fixed",
            bottom: 32,
            left: "50%",
            transform: "translateX(-50%)",
            background: "#25D366",
            color: "#fff",
            padding: "13px 24px",
            borderRadius: 12,
            fontSize: 14,
            fontWeight: 700,
            zIndex: 500,
            boxShadow: "0 10px 36px rgba(0,0,0,0.5)",
            whiteSpace: "nowrap",
          }}
        >
          ✅ Opening WhatsApp — we'll reply shortly!
        </div>
      )}
      <Footer />
    </>
  );
}

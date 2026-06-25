import React from "react";
import { Link } from "react-router-dom";
import StatNum from "../components/StatNum";
import CTABanner from "../components/CTABanner";
import Footer from "../components/Footer";
import { useReveal } from "../hooks/useReveal";

export default function Home() {
  useReveal();
  return (
    <>
      {/* ══ HERO ══ */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          background: "#080808",
          paddingTop: 64,
        }}
      >
        <div className="hero-glow" />
        <div className="hero-grid" />
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: 2,
            background:
              "linear-gradient(to bottom,transparent,#E63946,transparent)",
            opacity: 0.18,
            pointerEvents: "none",
          }}
        />

        <div
          className="container"
          style={{ width: "100%", paddingTop: 32, paddingBottom: 48 }}
        >
          <div
            className="hero-grid-layout"
            style={{ alignItems: "center", gap: 40 }}
          >
            {/* ── LEFT ── */}
            <div>
              {/* BADGE */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "rgba(230,57,70,0.09)",
                  border: "1px solid rgba(230,57,70,0.26)",
                  color: "#E63946",
                  fontSize: 10.5,
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  padding: "6px 14px",
                  borderRadius: 100,
                  marginBottom: 22,
                }}
              >
                <span
                  className="pulse-dot"
                  style={{
                    width: 6,
                    height: 6,
                    background: "#E63946",
                    borderRadius: "50%",
                    display: "inline-block",
                    flexShrink: 0,
                  }}
                />
                Warangal, Telangana's Premier Unisex Fitness Club
              </div>

              {/* HEADLINE — smaller clamp so buttons stay visible */}
              <div style={{ marginBottom: 20 }}>
                <div
                  className="fd"
                  style={{
                    fontSize: "clamp(3rem,7vw,7rem)",
                    lineHeight: 0.9,
                    display: "block",
                    color: "#ffffff",
                  }}
                >
                  FORGE
                </div>
                <div
                  className="fd"
                  style={{
                    fontSize: "clamp(3rem,7vw,7rem)",
                    lineHeight: 0.9,
                    display: "block",
                    color: "#E63946",
                  }}
                >
                  YOUR
                </div>
                <div
                  className="fd"
                  style={{
                    fontSize: "clamp(3rem,7vw,7rem)",
                    lineHeight: 0.9,
                    display: "block",
                    color: "#ffffff",
                  }}
                >
                  LIMITS
                </div>
              </div>

              <p
                style={{
                  color: "#888",
                  fontSize: 14.5,
                  maxWidth: 420,
                  marginBottom: 28,
                  lineHeight: 1.8,
                }}
              >
                Elite training for men and women. Expert coaching. Real results.
                Rudra Gym doesn't just build bodies — we build champions.
              </p>

              {/* BUTTONS — always visible */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 12,
                  marginBottom: 36,
                }}
              >
                <a
                  href="https://wa.me/919876543210?text=Hi!%20I%27d%20like%20a%20free%20trial."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-red"
                >
                  Start Free Trial
                </a>
                <Link to="/programs" className="btn btn-ghost">
                  View Programs
                </Link>
              </div>

              {/* STATS — counter only fires when this div is in viewport */}
              <div
                style={{
                  paddingTop: 24,
                  borderTop: "1px solid rgba(255,255,255,0.08)",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 28,
                }}
              >
                {[
                  { n: 500, s: "+", l: "Members" },
                  { n: 30, s: "+", l: "Trainers" },
                  { n: 50, s: "+", l: "Programs" },
                  { n: 10, s: "+", l: "Years" },
                ].map((x, i) => (
                  <div key={i}>
                    <div
                      className="fd"
                      style={{
                        fontSize: "2.4rem",
                        color: "#fff",
                        lineHeight: 1,
                      }}
                    >
                      <StatNum target={x.n} suffix={x.s} />
                    </div>
                    <div
                      style={{
                        fontSize: 10.5,
                        color: "#555",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        marginTop: 4,
                      }}
                    >
                      {x.l}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── RIGHT VISUAL ── */}
            <div
              className="hero-right-visual"
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* BG TEXT */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  pointerEvents: "none",
                  overflow: "hidden",
                }}
              >
                <span
                  className="fd"
                  style={{
                    fontSize: "clamp(6rem,14vw,17rem)",
                    color: "rgba(230,57,70,0.04)",
                    lineHeight: 1,
                    userSelect: "none",
                    whiteSpace: "nowrap",
                  }}
                >
                  RUDRA
                </span>
              </div>

              {/* CARD WRAPPER */}
              <div
                style={{
                  position: "relative",
                  zIndex: 2,
                  width: "100%",
                  maxWidth: 390,
                  marginTop: 36,
                }}
              >
                {/* FLOATING TOP — HIIT Burn */}
                <div
                  style={{
                    position: "absolute",
                    top: -22,
                    left: -14,
                    background: "#141414",
                    border: "1px solid rgba(230,57,70,0.3)",
                    borderRadius: 12,
                    padding: "10px 14px",
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    boxShadow: "0 12px 32px rgba(0,0,0,0.55)",
                    zIndex: 3,
                  }}
                >
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: 8,
                      background: "rgba(230,57,70,0.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1rem",
                    }}
                  >
                    🔥
                  </div>
                  <div>
                    <div
                      style={{ fontSize: 12, fontWeight: 700, color: "#fff" }}
                    >
                      HIIT Burn
                    </div>
                    <div
                      style={{
                        fontSize: 10,
                        color: "#E63946",
                        fontWeight: 600,
                      }}
                    >
                      Today 6:00 PM
                    </div>
                  </div>
                </div>

                {/* FLOATING LEFT — Est. */}
                <div
                  style={{
                    position: "absolute",
                    top: "42%",
                    left: -22,
                    transform: "translateY(-50%)",
                    background: "#141414",
                    border: "1px solid rgba(255,255,255,0.09)",
                    borderRadius: 12,
                    padding: "9px 12px",
                    boxShadow: "0 12px 32px rgba(0,0,0,0.5)",
                    zIndex: 3,
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontSize: 9,
                      color: "#555",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      marginBottom: 2,
                    }}
                  >
                    Est.
                  </div>
                  <div
                    className="fd"
                    style={{
                      fontSize: "1.3rem",
                      color: "#E63946",
                      lineHeight: 1,
                    }}
                  >
                    2014
                  </div>
                </div>

                {/* MAIN CARD */}
                <div
                  style={{
                    background: "linear-gradient(135deg,#141414,#0f0f0f)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 18,
                    padding: "24px 22px",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 22,
                      right: 22,
                      height: 2,
                      background:
                        "linear-gradient(to right,#E63946,transparent)",
                      borderRadius: 1,
                    }}
                  />

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: 16,
                    }}
                  >
                    <div>
                      <div
                        className="fd"
                        style={{ fontSize: "1.25rem", color: "#fff" }}
                      >
                        RUDRA GYM
                      </div>
                      <div
                        style={{
                          fontSize: 10,
                          color: "#E63946",
                          fontWeight: 700,
                          letterSpacing: "0.14em",
                          textTransform: "uppercase",
                          marginTop: 2,
                        }}
                      >
                        Warangal, Telangana
                      </div>
                    </div>
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: "50%",
                        background: "rgba(230,57,70,0.1)",
                        border: "1px solid rgba(230,57,70,0.22)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <span style={{ fontSize: "1rem" }}>🏆</span>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 6,
                      marginBottom: 16,
                    }}
                  >
                    {[
                      "💪 Strength",
                      "🔥 HIIT",
                      "🧘 Yoga",
                      "🥊 Boxing",
                      "⚡ CrossFit",
                      "🚴 Cardio",
                    ].map((t) => (
                      <span
                        key={t}
                        style={{
                          fontSize: 10.5,
                          padding: "4px 9px",
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(255,255,255,0.07)",
                          borderRadius: 100,
                          color: "#aaa",
                          fontWeight: 500,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 12,
                    }}
                  >
                    {[
                      {
                        icon: "👥",
                        label: "Active Members",
                        val: "500+",
                        pct: 85,
                      },
                      {
                        icon: "🎓",
                        label: "Certified Trainers",
                        val: "30+",
                        pct: 95,
                      },
                      {
                        icon: "📅",
                        label: "Classes Per Week",
                        val: "42",
                        pct: 70,
                      },
                    ].map((s) => (
                      <div key={s.label}>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginBottom: 5,
                          }}
                        >
                          <span
                            style={{
                              fontSize: 12,
                              color: "#888",
                              display: "flex",
                              alignItems: "center",
                              gap: 6,
                            }}
                          >
                            <span>{s.icon}</span>
                            {s.label}
                          </span>
                          <span
                            style={{
                              fontSize: 12,
                              fontWeight: 700,
                              color: "#fff",
                            }}
                          >
                            {s.val}
                          </span>
                        </div>
                        <div
                          style={{
                            height: 3,
                            background: "rgba(255,255,255,0.06)",
                            borderRadius: 2,
                            overflow: "hidden",
                          }}
                        >
                          <div
                            style={{
                              height: "100%",
                              width: `${s.pct}%`,
                              background:
                                "linear-gradient(to right,#E63946,#ff6b6b)",
                              borderRadius: 2,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div
                    style={{
                      marginTop: 16,
                      paddingTop: 14,
                      borderTop: "1px solid rgba(255,255,255,0.06)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <div
                      style={{ display: "flex", alignItems: "center", gap: 7 }}
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
                      <span
                        style={{
                          fontSize: 11.5,
                          color: "#4ade80",
                          fontWeight: 600,
                        }}
                      >
                        Open Now
                      </span>
                    </div>
                    <div style={{ fontSize: 11, color: "#555" }}>
                      5:00 AM – 11:00 PM
                    </div>
                  </div>
                </div>

                {/* FLOATING BOTTOM RIGHT — Rating */}
                <div
                  style={{
                    position: "absolute",
                    bottom: -18,
                    right: -14,
                    background: "#141414",
                    border: "1px solid rgba(74,222,128,0.2)",
                    borderRadius: 12,
                    padding: "10px 16px",
                    boxShadow: "0 12px 32px rgba(0,0,0,0.55)",
                    zIndex: 3,
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: "1.1rem", marginBottom: 3 }}>⭐</div>
                  <div style={{ fontSize: 14, fontWeight: 800, color: "#fff" }}>
                    4.9/5
                  </div>
                  <div
                    style={{
                      fontSize: 9,
                      color: "#4ade80",
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                    }}
                  >
                    MEMBER RATING
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FEATURE STRIP ══ */}
      <section
        style={{
          padding: "72px 0",
          background: "#0d0d0d",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <span className="eyebrow rv">Everything You Need</span>
            <h2 className="sec-title rv">
              WHY CHOOSE <span style={{ color: "#E63946" }}>RUDRA GYM</span>
            </h2>
          </div>
          <div className="grid-4">
            {[
              [
                "🏋️",
                "Elite Equipment",
                "12,000 sq ft of premium machines, free weights & specialist rigs.",
              ],
              [
                "🎓",
                "Certified Trainers",
                "Nationally certified coaches with 5+ years of performance training.",
              ],
              [
                "⏰",
                "24/7 Access",
                "Doors never close for Pro & Elite members.",
              ],
              [
                "👥",
                "Unisex Facility",
                "A safe, welcoming space for every body and every goal.",
              ],
            ].map(([ic, h, d]) => (
              <div
                key={h}
                className="card rv"
                style={{ padding: "26px 22px", textAlign: "center" }}
              >
                <div style={{ fontSize: "2rem", marginBottom: 14 }}>{ic}</div>
                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    color: "#fff",
                    marginBottom: 8,
                  }}
                >
                  {h}
                </div>
                <div style={{ fontSize: 13, color: "#666", lineHeight: 1.65 }}>
                  {d}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PROGRAMS PREVIEW ══ */}
      <section style={{ padding: "88px 0", background: "#080808" }}>
        <div className="container">
          <div className="two-col" style={{ alignItems: "center" }}>
            <div>
              <span className="eyebrow rv">What We Offer</span>
              <h2 className="sec-title rv">
                6 ELITE PROGRAMS
                <br />
                <span style={{ color: "#E63946" }}>FOR EVERY GOAL</span>
              </h2>
              <p
                style={{
                  color: "#777",
                  lineHeight: 1.8,
                  fontSize: 14,
                  marginTop: 14,
                  marginBottom: 32,
                  maxWidth: 380,
                }}
                className="rv"
              >
                Strength, HIIT, Yoga, Cardio, Boxing, CrossFit — coached by
                certified professionals under one roof.
              </p>
              <Link
                to="/programs"
                className="btn btn-red rv"
                style={{ display: "inline-flex" }}
              >
                Explore All Programs →
              </Link>
            </div>
            <div className="grid-2">
              {[
                { icon: "💪", name: "Strength Training" },
                { icon: "🔥", name: "HIIT Burn" },
                { icon: "🧘", name: "Yoga & Mobility" },
                { icon: "🚴", name: "Cardio Burn" },
                { icon: "🥊", name: "Boxing & Combat" },
                { icon: "⚡", name: "CrossFit" },
              ].map((p, i) => (
                <div
                  key={i}
                  className="rv card"
                  style={{
                    padding: "16px 18px",
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                  }}
                >
                  <span style={{ fontSize: "1.5rem" }}>{p.icon}</span>
                  <span
                    style={{ fontSize: 13.5, fontWeight: 600, color: "#ccc" }}
                  >
                    {p.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIALS ══ */}
      <section
        style={{
          padding: "88px 0",
          background: "#0d0d0d",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="eyebrow rv">Member Stories</span>
            <h2 className="sec-title rv">
              REAL PEOPLE.{" "}
              <span style={{ color: "#E63946" }}>REAL RESULTS.</span>
            </h2>
          </div>
          <div className="grid-3">
            {[
              {
                i: "VN",
                n: "Anil Bhukya",
                t: "Pro Member · 12 months",
                q: '"I hit a 140kg squat after 6 months here. The programming is intelligent and the trainers genuinely care about your progress."',
              },
              {
                i: "DM",
                n: "Deepika Menon",
                t: "Elite Member · 8 months",
                q: '"Lost 12kg in 4 months without starving myself. The HIIT classes are brutal in the absolute best way."',
              },
              {
                i: "SK",
                n: "Suresh Kamath",
                t: "Basic Member · 22 months",
                q: '"Rudra feels like a family that holds you to a higher standard. The yoga changed how I recover between lifts."',
              },
            ].map((t, idx) => (
              <div
                key={idx}
                className="card rv"
                style={{ padding: "26px 22px" }}
              >
                <div
                  style={{
                    color: "#f5a623",
                    fontSize: 13,
                    marginBottom: 14,
                    letterSpacing: 3,
                  }}
                >
                  ★★★★★
                </div>
                <p
                  style={{
                    color: "#bbb",
                    fontSize: 14,
                    lineHeight: 1.8,
                    fontStyle: "italic",
                    marginBottom: 20,
                  }}
                >
                  {t.q}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: "50%",
                      background: "rgba(230,57,70,0.1)",
                      border: "1px solid rgba(230,57,70,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 12,
                      fontWeight: 700,
                      color: "#E63946",
                      flexShrink: 0,
                    }}
                  >
                    {t.i}
                  </div>
                  <div>
                    <div
                      style={{ fontSize: 13.5, fontWeight: 700, color: "#fff" }}
                    >
                      {t.n}
                    </div>
                    <div style={{ fontSize: 11, color: "#555", marginTop: 2 }}>
                      {t.t}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SCHEDULE ══ */}
      <section style={{ padding: "88px 0", background: "#080808" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <span className="eyebrow rv">Weekly Schedule</span>
            <h2 className="sec-title rv">
              FIND YOUR <span style={{ color: "#E63946" }}>SESSION</span>
            </h2>
          </div>
          <div
            className="rv"
            style={{
              overflowX: "auto",
              WebkitOverflowScrolling: "touch",
              borderRadius: 12,
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: 13.5,
                minWidth: 500,
              }}
            >
              <thead>
                <tr
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    borderBottom: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  {["Day", "Morning", "Afternoon", "Evening"].map((h) => (
                    <th
                      key={h}
                      style={{
                        textAlign: "left",
                        padding: "12px 16px",
                        fontSize: 10.5,
                        fontWeight: 700,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "#555",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { day: "Monday", m: "Strength", a: "Yoga", e: "HIIT Burn" },
                  {
                    day: "Tuesday",
                    m: "CrossFit",
                    a: "Cardio Burn",
                    e: "Boxing",
                  },
                  {
                    day: "Wednesday",
                    m: "Strength",
                    a: "Yoga",
                    e: "HIIT Burn",
                  },
                  {
                    day: "Thursday",
                    m: "Boxing",
                    a: "Cardio Burn",
                    e: "CrossFit",
                  },
                  { day: "Friday", m: "Strength", a: "Yoga", e: "HIIT Burn" },
                  {
                    day: "Saturday",
                    m: "CrossFit",
                    a: "Boxing",
                    e: "Strength",
                  },
                  { day: "Sunday", m: "Yoga", a: "Open Floor", e: "Recovery" },
                ].map((r, i) => (
                  <tr
                    key={i}
                    style={{
                      borderBottom:
                        i < 6 ? "1px solid rgba(255,255,255,0.04)" : "none",
                      transition: "background 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background =
                        "rgba(255,255,255,0.02)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background = "transparent")
                    }
                  >
                    <td
                      style={{
                        padding: "13px 16px",
                        fontWeight: 700,
                        color: "#fff",
                        whiteSpace: "nowrap",
                        fontSize: 13,
                      }}
                    >
                      {r.day}
                    </td>
                    {[r.m, r.a, r.e].map((c, j) => (
                      <td key={j} style={{ padding: "13px 16px" }}>
                        <span
                          style={{
                            display: "inline-block",
                            padding: "4px 11px",
                            background: "rgba(230,57,70,0.1)",
                            border: "1px solid rgba(230,57,70,0.18)",
                            borderRadius: 5,
                            color: "#E63946",
                            fontSize: 11.5,
                            fontWeight: 600,
                            whiteSpace: "nowrap",
                          }}
                        >
                          {c}
                        </span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ textAlign: "center", marginTop: 32 }}>
            <Link
              to="/contact"
              className="btn btn-ghost"
              style={{ display: "inline-flex" }}
            >
              Book a Class →
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </>
  );
}

"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", padding: "40px" }}>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}
          style={{ fontSize: "clamp(3rem,6vw,5rem)", fontWeight: "bold" }}>
          LIGHT IT UP.
        </motion.h1>
        <p style={{ maxWidth: 700, marginTop: 20, fontSize: 18, color: "#ccc" }}>
          Transform Your Home After Dark<br />
          FREE Nighttime Demo • DIY Kits • Holiday Lighting
        </p>
        <p style={{ marginTop: 30, fontSize: 22 }}>
          📞 (386) 318-8040
        </p>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "80px 20px", maxWidth: 1100, margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", fontSize: 36 }}>What We Do</h2>
        <ul style={{ marginTop: 40, fontSize: 18, lineHeight: 1.8, color: "#ccc" }}>
          <li>Custom LED Landscape Lighting</li>
          <li>FREE Site Mapping & Nighttime Demo</li>
          <li>Professional Installation</li>
          <li>DIY Lighting Kits</li>
          <li>Holiday Lighting</li>
        </ul>
      </section>

      {/* WARRANTY */}
      <section style={{ padding: "80px 20px", background: "#111", textAlign: "center" }}>
        <h2 style={{ fontSize: 34 }}>Built to Last. Backed for Life.</h2>
        <p style={{ maxWidth: 700, margin: "20px auto", color: "#ccc" }}>
          Lifetime warranty on fixtures • 5-year warranty on power supplies
        </p>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: 40, textAlign: "center", borderTop: "1px solid #222" }}>
        <p>Daytona Beach, FL • Office in Hastings, FL</p>
        <a href="https://www.facebook.com/share/14WKS4WfyUW/" target="_blank" style={{ color: "#4ea1ff" }}>
          Follow us on Facebook
        </a>
      </footer>
    </main>
  );
}

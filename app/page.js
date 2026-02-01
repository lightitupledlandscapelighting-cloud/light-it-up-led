"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main style={{ backgroundColor: "#000", color: "#fff" }}>

      {/* HERO */}
      <section
        style={{
          minHeight: "100vh",
          backgroundImage: "url('/hero-1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "40px"
        }}
      >
        <div style={{ background: "rgba(0,0,0,0.65)", padding: "40px", maxWidth: 900 }}>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            style={{ fontSize: "clamp(3rem,6vw,5rem)", fontWeight: "bold" }}
          >
            LIGHT IT UP.
          </motion.h1>

          <p style={{ fontSize: 20, color: "#ddd", marginTop: 20 }}>
            Transform Your Home After Dark
          </p>

          <p style={{ marginTop: 15, fontSize: 16, color: "#ccc" }}>
            Professional LED Landscape Lighting • DIY Kits • Holiday Lighting
          </p>

          <p style={{ marginTop: 20, fontSize: 16 }}>
            Nighttime Lighting Demo & Site Mapping — <strong>$50 Design Credit Applied to Your Project</strong>
          </p>

          <div style={{ marginTop: 30 }}>
            <a
              href="#demo"
              style={{
                padding: "14px 28px",
                background: "#f5c542",
                color: "#000",
                fontWeight: "bold",
                textDecoration: "none",
                marginRight: 15
              }}
            >
              Book Nighttime Demo
            </a>

            <a
              href="#shop"
              style={{
                padding: "14px 28px",
                border: "2px solid #f5c542",
                color: "#f5c542",
                fontWeight: "bold",
                textDecoration: "none"
              }}
            >
              Shop DIY Kits
            </a>
          </div>

          <p style={{ marginTop: 30, fontSize: 22 }}>
            📞 (386) 318-8040
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "100px 20px", maxWidth: 1200, margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", fontSize: 40, marginBottom: 60 }}>
          What We Do
        </h2>

        <div style={{ display: "grid", gap: 40, gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
          <Service
            img="/pathway.jpg"
            title="Custom LED Landscape Lighting"
            text="Commercial-grade brass fixtures designed to last in Florida conditions."
          />
          <Service
            img="/tree-uplight.jpg"
            title="Professional Installation"
            text="Clean installs, perfectly aimed and adjusted at night."
          />
          <Service
            img="/accent.jpg"
            title="DIY Lighting Kits"
            text="Pro-quality kits for homeowners who want control and flexibility."
          />
          <Service
            img="/holiday.jpg"
            title="Holiday Lighting"
            text="Seasonal displays that make your home the one everyone notices."
          />
        </div>
      </section>

      {/* WARRANTY */}
      <section style={{ background: "#111", padding: "80px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: 36 }}>Built to Last. Backed for Life.</h2>
        <p style={{ maxWidth: 800, margin: "20px auto", color: "#ccc", fontSize: 18 }}>
          Lifetime warranty on fixtures • 5-year warranty on power supplies • No box-store products
        </p>
      </section>

      {/* DEMO */}
      <section id="demo" style={{ padding: "100px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: 38 }}>Nighttime Lighting Demo & Site Mapping</h2>
        <p style={{ maxWidth: 700, margin: "20px auto", color: "#ccc", fontSize: 18 }}>
          See how your home could look at night before committing.
          <br />
          $50 design credit applied to any installation or DIY purchase.
        </p>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid #222", padding: 40, textAlign: "center" }}>
        <p>Daytona Beach, FL • Office in Hastings, FL</p>
        <a
          href="https://www.facebook.com/share/14WKS4WfyUW/"
          target="_blank"
          style={{ color: "#4ea1ff", textDecoration: "none" }}
        >
          Follow us on Facebook
        </a>
      </footer>
    </main>
  );
}

function Service({ img, title, text }) {
  return (
    <div>
      <img src={img} alt={title} style={{ width: "100%", borderRadius: 6, marginBottom: 15 }} />
      <h3 style={{ fontSize: 22 }}>{title}</h3>
      <p style={{ color: "#ccc" }}>{text}</p>
    </div>
  );
}

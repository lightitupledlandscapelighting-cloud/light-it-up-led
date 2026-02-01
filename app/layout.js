export const metadata = {
  title: "Light It Up LED Landscape Lighting and MORE",
  description: "Bold LED landscape lighting, FREE nighttime demos, DIY kits, and holiday lighting in Daytona Beach FL."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif", background: "#000", color: "#fff" }}>
        {children}
      </body>
    </html>
  );
}

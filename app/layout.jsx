export const metadata = {
  title: "Portfolio - Milton Ibarzabal",
  description: "Portfolio de estudiante de Licenciatura en Sistemas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}

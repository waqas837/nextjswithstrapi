import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Next.js 14</title>
      </head>
      <body>{children}</body>
    </html>
  );
}

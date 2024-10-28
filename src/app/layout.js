import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="p-6">
      <body>
        <nav>Home | About</nav>
        <br /> 
        {children}
      </body>
    </html>
  );
}

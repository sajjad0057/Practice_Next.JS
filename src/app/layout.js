import Link from 'next/link';

import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="p-6">
      <body>
        <nav className='mt-6 mb-6'>
          <ul className="flex gap-6">
            <li><Link href="/">Home</Link></li>
            <li><Link prefetch={false} href="/about">About</Link></li>
            <li><Link href="/blog">Blog</Link></li>
          </ul>
        </nav>
        <hr />
        {children}
      </body>
    </html>
  );
}

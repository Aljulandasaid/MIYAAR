import './globals.css';

export const metadata = {
  title: 'MIYAAY',
  description: 'Smart savings and ethical money management prototype'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

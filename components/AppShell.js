"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const nav = [
  { href: '/dashboard', label: 'Dashboard', ar: 'الرئيسية', icon: '◉' },
  { href: '/budget', label: 'Budget', ar: 'الميزانية', icon: '◌' },
  { href: '/goals', label: 'Goals', ar: 'الأهداف', icon: '◎' },
  { href: '/transactions', label: 'Transactions', ar: 'المعاملات', icon: '◍' },
  { href: '/rewards', label: 'Rewards', ar: 'المكافآت', icon: '✦' },
  { href: '/zakat', label: 'Zakat', ar: 'الزكاة', icon: '☾' },
  { href: '/learn', label: 'Learn', ar: 'التثقيف', icon: '☰' },
  { href: '/settings', label: 'Settings', ar: 'الإعدادات', icon: '⚙' }
];

export default function AppShell({ title, subtitle, children, badge = 'Live Prototype' }) {
  const pathname = usePathname();
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand-card">
          <img src="/logo.png" alt="MIYAAY logo" className="brand-logo" />
          <div>
            <div className="brand-name">MIYAAY</div>
            <div className="brand-ar">معيار</div>
          </div>
        </div>
        <div className="sidebar-note">
          Smart Money, Clear Goals<br />
          ادخر بوعي، وأنفق بثقة
        </div>
        <nav className="nav-list">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className={`nav-item ${pathname === item.href ? 'active' : ''}`}>
              <span className="nav-icon">{item.icon}</span>
              <div>
                <div>{item.label}</div>
                <small>{item.ar}</small>
              </div>
            </Link>
          ))}
        </nav>
      </aside>
      <main className="main-content">
        <header className="topbar">
          <div>
            <div className="eyebrow">Investor Demo • Oman Fintech • Open Banking</div>
            <h1>{title}</h1>
            <p>{subtitle}</p>
          </div>
          <div className="topbar-actions">
            <span className="badge">{badge}</span>
            <Link href="/login" className="ghost-btn">Demo Login</Link>
          </div>
        </header>
        {children}
      </main>
    </div>
  );
}

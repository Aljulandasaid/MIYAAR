import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="login-page">
      <div className="login-card">
        <div className="badge">Demo Sign In</div>
        <h1 style={{ marginTop: 0 }}>Welcome to MIYAAY</h1>
        <p className="muted">Investor-ready prototype with a premium fintech experience in English and Arabic.</p>
        <label className="label">Email</label>
        <input className="input" defaultValue="demo@miyaay.om" readOnly />
        <label className="label">Password</label>
        <input className="input" defaultValue="••••••••" readOnly />
        <div className="small-grid" style={{ marginTop: 20 }}>
          <Link href="/dashboard" className="primary-btn" style={{ textAlign: 'center' }}>Enter Dashboard</Link>
          <Link href="/" className="secondary-btn" style={{ textAlign: 'center' }}>Back to Landing Page</Link>
        </div>
        <div className="footer-note">Demo user: Young Omani professional saving for a car, managing budget, rewards, and zakat.</div>
      </div>
    </div>
  );
}

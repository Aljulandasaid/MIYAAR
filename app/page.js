import Link from 'next/link';

const features = [
  { icon: '◎', title: 'Open Banking View', text: 'See balances, transactions, and cash flow in one clean bilingual dashboard.' },
  { icon: '◌', title: 'Goal-Based Savings', text: 'Create goals for car, marriage, travel, or a house and track progress live.' },
  { icon: '✦', title: 'Rewards & Motivation', text: 'Gamified points reward commitment and unlock partner discounts.' },
  { icon: '☾', title: 'Shariah-Friendly Finance', text: 'Built-in zakat estimator and easy donation journeys for responsible money use.' }
];

export default function HomePage() {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-panel">
          <div className="hero-badge">Investor Demo • Prototype Ready</div>
          <h1>MIYAAY</h1>
          <p>A premium fintech prototype for Oman that transforms random spending into a smart, visual, goal-driven financial journey.</p>
          <div className="hero-ar">معيار يساعد المستخدم على فهم أمواله، تنظيم إنفاقه، الادخار لأهدافه، وحساب الزكاة والتبرع بطريقة حديثة وواضحة.</div>
          <div className="hero-cta">
            <Link href="/login" className="primary-btn">Open Demo App</Link>
            <Link href="/dashboard" className="secondary-btn">Investor Walkthrough</Link>
          </div>
        </div>
        <div className="hero-side">
          <div className="mock-card">
            <div className="mock-top">
              <div><div className="muted">Total Balance</div><div className="mock-balance">OMR 4,860</div></div>
              <div className="badge">72% Goal Progress</div>
            </div>
            <div className="grid-2">
              <div className="mini-chip">Monthly income: OMR 1,480</div>
              <div className="mini-chip">Saved this month: OMR 420</div>
              <div className="mini-chip">Rewards points: 2,450</div>
              <div className="mini-chip">Zakat estimate: OMR 118</div>
            </div>
            <div style={{ marginTop: 18 }}>
              <div className="row-between" style={{ marginBottom: 8 }}><span>Car goal • هدف السيارة</span><strong>OMR 5,400 / 7,500</strong></div>
              <div className="progress"><span style={{ width: '72%' }} /></div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-wrap">
        <h2 className="section-title">Why MIYAAY stands out</h2>
        <div className="grid-2">
          {features.map((feature) => (
            <div className="feature-card" key={feature.title}>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p className="muted">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

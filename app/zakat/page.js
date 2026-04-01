import AppShell from '@/components/AppShell';
import SectionCard from '@/components/SectionCard';
export default function ZakatPage() {
  return (
    <AppShell title="Zakat & Giving" subtitle="The feature that differentiates MIYAAY from ordinary budgeting apps." badge="Shariah-Friendly">
      <div className="content-grid">
        <SectionCard title="Estimated Zakat" subtitle="Illustrative prototype calculation"><div className="stat-value">OMR 118</div><p className="muted">Based on savings and eligible assets in this demo profile.</p><div className="rows" style={{ marginTop: 16 }}><div className="list-item row-between"><span>Eligible balance</span><strong>OMR 4,720</strong></div><div className="list-item row-between"><span>Zakat rate</span><strong>2.5%</strong></div><div className="list-item row-between"><span>Next reminder</span><strong>15 Ramadan</strong></div></div></SectionCard>
        <SectionCard title="Donation Journeys" subtitle="Simple charitable actions built into the app"><div className="rows"><div className="redeem-card row-between"><span>Food support campaign</span><span className="pill success">Donate now</span></div><div className="redeem-card row-between"><span>Orphan care support</span><span className="pill success">Donate now</span></div><div className="redeem-card row-between"><span>Mosque project</span><span className="pill success">Donate now</span></div></div></SectionCard>
      </div>
    </AppShell>
  );
}

import AppShell from '@/components/AppShell';
import SectionCard from '@/components/SectionCard';
export default function RewardsPage() {
  return (
    <AppShell title="Rewards & Gamification" subtitle="A motivation engine that turns financial discipline into real value for the user." badge="2,450 Points">
      <div className="content-grid">
        <SectionCard title="Points Summary" subtitle="How the user earns rewards"><div className="rows"><div className="redeem-card row-between"><span>Stayed under entertainment budget</span><strong>+150</strong></div><div className="redeem-card row-between"><span>Added savings deposit to car goal</span><strong>+100</strong></div><div className="redeem-card row-between"><span>Completed zakat reminder</span><strong>+50</strong></div><div className="redeem-card row-between"><span>Watched financial literacy lesson</span><strong>+50</strong></div></div></SectionCard>
        <SectionCard title="Redeemable Offers" subtitle="Examples for investor demonstration"><div className="rows"><div className="redeem-card row-between"><span>10% off at partner café</span><span className="pill success">500 points</span></div><div className="redeem-card row-between"><span>Fuel voucher</span><span className="pill warn">1,200 points</span></div><div className="redeem-card row-between"><span>Retail store discount</span><span className="pill success">900 points</span></div></div></SectionCard>
      </div>
    </AppShell>
  );
}

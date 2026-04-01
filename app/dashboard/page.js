import AppShell from '@/components/AppShell';
import StatCard from '@/components/StatCard';
import SectionCard from '@/components/SectionCard';

export default function DashboardPage() {
  return (
    <AppShell title="Financial Dashboard" subtitle="A high-end prototype showing how users in Oman can track spending, savings goals, rewards, and zakat in one smart bilingual experience.">
      <div className="dashboard-grid">
        <div className="stats-grid">
          <StatCard label="Available Balance • الرصيد" value="OMR 4,860" hint="Across connected accounts" />
          <StatCard label="Monthly Savings • الادخار" value="OMR 420" hint="+18% vs last month" />
          <StatCard label="Goal Progress • التقدم" value="72%" hint="Car purchase target" />
          <StatCard label="Reward Points • النقاط" value="2,450" hint="3 partner offers unlocked" />
        </div>
        <div className="content-grid">
          <SectionCard title="Spending Overview" subtitle="Smart categorization of monthly expenses">
            <div className="chart">
              <div className="bar" style={{ height: '72%' }}><span>Food</span></div>
              <div className="bar" style={{ height: '55%' }}><span>Bills</span></div>
              <div className="bar" style={{ height: '48%' }}><span>Transport</span></div>
              <div className="bar" style={{ height: '34%' }}><span>Leisure</span></div>
              <div className="bar" style={{ height: '26%' }}><span>Giving</span></div>
            </div>
          </SectionCard>
          <SectionCard title="Main Goal" subtitle="Primary savings objective for this user persona">
            <div className="ring" />
            <div className="rows">
              <div className="insight-row row-between"><span>Car Fund • هدف السيارة</span><strong>OMR 5,400 / 7,500</strong></div>
              <div className="insight-row row-between"><span>Suggested monthly deposit</span><strong>OMR 300</strong></div>
              <div className="insight-row row-between"><span>Expected completion</span><strong>Nov 2026</strong></div>
            </div>
          </SectionCard>
        </div>
        <div className="content-grid">
          <SectionCard title="Recent Transactions" subtitle="Automatic transaction feed">
            <div className="rows">
              {[['Talabat', '- OMR 6.8', 'Food'],['Shell Station', '- OMR 12.5', 'Transport'],['Salary Transfer', '+ OMR 1,480', 'Income'],['Charity Donation', '- OMR 20', 'Giving']].map(([name, amount, type]) => (
                <div className="trans-item row-between" key={name}><div><strong>{name}</strong><div className="muted">{type}</div></div><div className="kpi">{amount}</div></div>
              ))}
            </div>
          </SectionCard>
          <SectionCard title="Smart Insights" subtitle="What the system would tell the user">
            <div className="rows">
              <div className="notice">Your food spending is 11% higher than last month.</div>
              <div className="notice">If you keep saving OMR 300 monthly, you can reach your car goal in 7 months.</div>
              <div className="notice">You earned 350 points this week for staying under your entertainment budget.</div>
            </div>
          </SectionCard>
        </div>
      </div>
    </AppShell>
  );
}

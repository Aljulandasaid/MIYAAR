import AppShell from '@/components/AppShell';
import SectionCard from '@/components/SectionCard';
const rows = [['01 Apr 2026', 'Salary Transfer', '+ OMR 1,480', 'Income'],['31 Mar 2026', 'Talabat', '- OMR 6.8', 'Food'],['30 Mar 2026', 'Shell Station', '- OMR 12.5', 'Transport'],['29 Mar 2026', 'Ooredoo Bill', '- OMR 18', 'Bills'],['28 Mar 2026', 'Mosque Donation', '- OMR 20', 'Giving']];
export default function TransactionsPage() {
  return (
    <AppShell title="Transactions Feed" subtitle="A clean searchable history of expenses, income, and charitable transactions." badge="Live Feed">
      <SectionCard title="Recent Transactions" subtitle="Smartly categorized across linked accounts">
        <div className="table"><div className="table-row" style={{ color: 'var(--muted)' }}><div>Date</div><div>Description</div><div>Amount</div><div>Type</div></div>{rows.map(([date, desc, amount, type]) => (
          <div className="table-row" key={date + desc}><div>{date}</div><div>{desc}</div><div><strong>{amount}</strong></div><div>{type}</div></div>
        ))}</div>
      </SectionCard>
    </AppShell>
  );
}

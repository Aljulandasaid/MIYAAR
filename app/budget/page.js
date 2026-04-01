import AppShell from '@/components/AppShell';
import SectionCard from '@/components/SectionCard';
const budgets = [['Food', 'الأكل', 'OMR 180', 'OMR 140 used', '78%'],['Transport', 'المواصلات', 'OMR 95', 'OMR 56 used', '59%'],['Bills', 'الفواتير', 'OMR 210', 'OMR 188 used', '89%'],['Leisure', 'الترفيه', 'OMR 70', 'OMR 42 used', '60%'],['Giving', 'التبرعات', 'OMR 50', 'OMR 20 used', '40%']];
export default function BudgetPage() {
  return (
    <AppShell title="Budget Control" subtitle="A clear category-based budget page with simple bilingual tracking and overspending alerts." badge="Budget AI">
      <SectionCard title="Monthly Budget Plan" subtitle="Visual control over every spending category">
        <div className="rows">{budgets.map(([en, ar, limit, used, progress]) => (
          <div className="list-item" key={en}><div className="row-between" style={{ marginBottom: 10 }}><div><strong>{en}</strong><div className="muted">{ar}</div></div><div style={{ textAlign: 'right' }}><div>{limit}</div><div className="muted">{used}</div></div></div><div className="progress"><span style={{ width: progress }} /></div></div>
        ))}</div>
      </SectionCard>
    </AppShell>
  );
}

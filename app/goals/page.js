import AppShell from '@/components/AppShell';
import SectionCard from '@/components/SectionCard';
const goals = [['Buy a Car', 'شراء سيارة', 'OMR 7,500', 'OMR 5,400 saved', '72%'],['Travel Fund', 'هدف السفر', 'OMR 1,200', 'OMR 650 saved', '54%'],['Marriage Plan', 'هدف الزواج', 'OMR 4,000', 'OMR 900 saved', '22%']];
export default function GoalsPage() {
  return (
    <AppShell title="Savings Goals" subtitle="Goal-first design that turns saving into a clear and motivating journey." badge="Goal Planner">
      <SectionCard title="Active Goals" subtitle="Track how close the user is to each milestone"><div className="rows">{goals.map(([en, ar, target, saved, progress]) => (
        <div className="goal-item" key={en}><div className="row-between" style={{ marginBottom: 10 }}><div><strong>{en}</strong><div className="muted">{ar}</div></div><div style={{ textAlign: 'right' }}><div>{target}</div><div className="muted">{saved}</div></div></div><div className="progress"><span style={{ width: progress }} /></div></div>
      ))}</div></SectionCard>
    </AppShell>
  );
}

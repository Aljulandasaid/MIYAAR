import AppShell from '@/components/AppShell';
import SectionCard from '@/components/SectionCard';
const lessons = [['How to build a monthly budget', 'كيف تبني ميزانية شهرية واضحة'],['Save for a car without stress', 'كيف تدخر لسيارة بدون ضغط'],['Understanding zakat in simple terms', 'فهم الزكاة بطريقة سهلة'],['Reduce random spending', 'تقليل الصرف العشوائي']];
export default function LearnPage() {
  return (
    <AppShell title="Financial Education" subtitle="Short, practical content that improves awareness and long-term behavior." badge="4 Lessons">
      <SectionCard title="Learning Library" subtitle="Micro-learning inside the app"><div className="rows">{lessons.map(([en, ar]) => (<div className="learn-card" key={en}><strong>{en}</strong><div className="muted" style={{ marginTop: 8 }}>{ar}</div></div>))}</div></SectionCard>
    </AppShell>
  );
}

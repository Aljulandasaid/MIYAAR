import AppShell from '@/components/AppShell';
import SectionCard from '@/components/SectionCard';
export default function SettingsPage() {
  return (
    <AppShell title="Profile & Settings" subtitle="A polished settings view that makes the prototype feel like a real product." badge="Secure Demo">
      <SectionCard title="User Preferences" subtitle="Illustrative profile settings"><div className="rows"><div className="settings-item row-between"><span>Language</span><strong>Arabic + English</strong></div><div className="settings-item row-between"><span>Connected Accounts</span><strong>2 banks linked</strong></div><div className="settings-item row-between"><span>Notifications</span><strong>Budget + Goals + Zakat</strong></div><div className="settings-item row-between"><span>Security</span><strong>Biometric enabled</strong></div></div></SectionCard>
    </AppShell>
  );
}

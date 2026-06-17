import { useState } from 'react';
import { ChevronRight, Camera } from 'lucide-react';

const defaults = {
  fullName: 'Alexander Sterling',
  staffId: 'CRT-90210',
  email: 'a.sterling@tokolubis.id',
  phone: '+1 (555) 123-4567',
  language: 'English (United States)',
  darkMode: false,
  emailNotif: true,
  desktopPush: true,
  smsAlerts: false,
  twoFactor: true
};

export default function SettingsPage() {
  const [fullName, setFullName] = useState(defaults.fullName);
  const [email, setEmail] = useState(defaults.email);
  const [phone, setPhone] = useState(defaults.phone);
  const [language, setLanguage] = useState(defaults.language);
  const [darkMode, setDarkMode] = useState(defaults.darkMode);
  const [emailNotif, setEmailNotif] = useState(defaults.emailNotif);
  const [desktopPush, setDesktopPush] = useState(defaults.desktopPush);
  const [smsAlerts, setSmsAlerts] = useState(defaults.smsAlerts);
  const [twoFactor, setTwoFactor] = useState(defaults.twoFactor);

  const handleCancel = () => {
    setFullName(defaults.fullName);
    setEmail(defaults.email);
    setPhone(defaults.phone);
    setLanguage(defaults.language);
    setDarkMode(defaults.darkMode);
    setEmailNotif(defaults.emailNotif);
    setDesktopPush(defaults.desktopPush);
    setSmsAlerts(defaults.smsAlerts);
    setTwoFactor(defaults.twoFactor);
    alert('Changes discarded');
  };
  const handleSave = () => alert('Profile settings saved successfully');

  return (
    <div className="flex-1 overflow-y-auto bg-background">
      <div className="max-w-7xl mx-auto px-6 pt-8 pb-12">
        <h1 className="text-[22px] font-bold text-textPrimary">Account Settings</h1>
        <p className="text-[13px] text-textSecondary mt-1 mb-8">Update your personal information and security preferences.</p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-8 space-y-6">
            <PersonalInfo fullName={fullName} setFullName={setFullName} email={email} setEmail={setEmail} phone={phone} setPhone={setPhone} />
            <AccountSecurity twoFactor={twoFactor} setTwoFactor={setTwoFactor} />
            <Preferences language={language} setLanguage={setLanguage} darkMode={darkMode} setDarkMode={setDarkMode} emailNotif={emailNotif} setEmailNotif={setEmailNotif} desktopPush={desktopPush} setDesktopPush={setDesktopPush} smsAlerts={smsAlerts} setSmsAlerts={setSmsAlerts} />
            <div className="flex items-center gap-3">
              <button onClick={handleCancel} className="px-4 py-2.5 border border-borderBase rounded-xl text-[13px] font-medium text-textSecondary hover:bg-surfaceMuted transition-all active:scale-[0.98]">Cancel</button>
              <button onClick={handleSave} className="px-5 py-2.5 bg-primaryContainer text-white rounded-xl text-[13px] font-semibold hover:bg-primaryHover transition-all active:scale-[0.98] shadow-sm">Save Changes</button>
            </div>
          </div>
          {/* Right Column */}
          <div className="lg:col-span-4 space-y-6">
            <ProfileOverview />
            <RecentActivity />
            <SystemStatus />
          </div>
        </div>
      </div>
    </div>
  );
}

function Toggle({ enabled, onToggle }) {
  return (
    <button onClick={onToggle} className={`relative inline-flex items-center w-11 h-6 rounded-full transition-colors duration-200 shrink-0 ${enabled ? 'bg-primaryContainer' : 'bg-[#e7e8ea]'}`}>
      <span className={`inline-block w-5 h-5 bg-white rounded-full shadow transform transition-transform duration-200 ${enabled ? 'translate-x-[22px]' : 'translate-x-[2px]'}`} />
    </button>
  );
}

function PersonalInfo({ fullName, setFullName, email, setEmail, phone, setPhone }) {
  return (
    <div className="bg-white border border-borderBase rounded-xl p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-5">
        <span className="material-symbols-rounded text-[20px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>person</span>
        <h2 className="text-[15px] font-semibold text-textPrimary">Personal Information</h2>
      </div>
      <div className="flex items-center gap-4 mb-6">
        <div className="relative">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primaryContainer to-primary flex items-center justify-center">
            <span className="text-white font-bold text-[24px]">AS</span>
          </div>
          <button onClick={() => alert('Change profile photo')} className="absolute -bottom-1 -right-1 w-7 h-7 bg-white border border-borderBase rounded-full flex items-center justify-center shadow-sm hover:bg-primaryLight transition-all">
            <Camera size={12} className="text-textSecondary" />
          </button>
        </div>
        <div>
          <p className="text-[14px] font-semibold text-textPrimary">{fullName}</p>
          <p className="text-[12px] text-textMuted">Senior Manager</p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="fullName" className="block text-[12px] font-semibold text-textSecondary mb-1.5">Full Name</label>
          <input id="fullName" type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} className="w-full px-3.5 py-2.5 bg-white border border-borderBase rounded-lg text-[13px] text-textPrimary outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" />
        </div>
        <div>
          <label htmlFor="staffId" className="block text-[12px] font-semibold text-textSecondary mb-1.5">Staff ID</label>
          <input id="staffId" type="text" value="CRT-90210" readOnly className="w-full px-3.5 py-2.5 bg-surfaceMuted border border-borderBase rounded-lg text-[13px] text-textMuted outline-none cursor-not-allowed" />
        </div>
        <div>
          <label htmlFor="email" className="block text-[12px] font-semibold text-textSecondary mb-1.5">Email Address</label>
          <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-3.5 py-2.5 bg-white border border-borderBase rounded-lg text-[13px] text-textPrimary outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" />
        </div>
        <div>
          <label htmlFor="phone" className="block text-[12px] font-semibold text-textSecondary mb-1.5">Phone Number</label>
          <input id="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full px-3.5 py-2.5 bg-white border border-borderBase rounded-lg text-[13px] text-textPrimary outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" />
        </div>
      </div>
    </div>
  );
}

function AccountSecurity({ twoFactor, setTwoFactor }) {
  return (
    <div className="bg-white border border-borderBase rounded-xl p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-5">
        <span className="material-symbols-rounded text-[20px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>security</span>
        <h2 className="text-[15px] font-semibold text-textPrimary">Account Security</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
        <div>
          <label className="block text-[12px] font-semibold text-textSecondary mb-1.5">Current Password</label>
          <input type="password" placeholder="••••••••" className="w-full px-3.5 py-2.5 bg-white border border-borderBase rounded-lg text-[13px] text-textPrimary outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" />
        </div>
        <div>
          <label className="block text-[12px] font-semibold text-textSecondary mb-1.5">New Password</label>
          <input type="password" placeholder="••••••••" className="w-full px-3.5 py-2.5 bg-white border border-borderBase rounded-lg text-[13px] text-textPrimary outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" />
        </div>
        <div>
          <label className="block text-[12px] font-semibold text-textSecondary mb-1.5">Confirm New Password</label>
          <input type="password" placeholder="••••••••" className="w-full px-3.5 py-2.5 bg-white border border-borderBase rounded-lg text-[13px] text-textPrimary outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" />
        </div>
      </div>
      <div className="bg-primaryLight border border-primary/10 rounded-lg p-3 mb-5">
        <p className="text-[12px] font-semibold text-primary">Password Strength</p>
        <p className="text-[11px] text-textSecondary mt-0.5">Use at least 12 characters with a mix of letters, numbers, and symbols.</p>
      </div>
      <div className="flex items-center justify-between p-3 bg-surfaceMuted border border-borderBase rounded-lg">
        <div>
          <p className="text-[13px] font-semibold text-textPrimary">Two-Factor Authentication</p>
          <p className="text-[11px] text-textMuted">Extra security for your account</p>
        </div>
        <Toggle enabled={twoFactor} onToggle={() => setTwoFactor(!twoFactor)} />
      </div>
    </div>
  );
}

function Preferences({ language, setLanguage, darkMode, setDarkMode, emailNotif, setEmailNotif, desktopPush, setDesktopPush, smsAlerts, setSmsAlerts }) {
  const languages = ['English (United States)', 'Spanish (Espa\u00f1a)', 'French (France)', 'German (Deutschland)', 'Indonesian (Indonesia)'];
  return (
    <div className="bg-white border border-borderBase rounded-xl p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-5">
        <span className="material-symbols-rounded text-[20px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>tune</span>
        <h2 className="text-[15px] font-semibold text-textPrimary">Preferences</h2>
      </div>
      <div className="space-y-4">
        <div>
          <label htmlFor="language" className="block text-[12px] font-semibold text-textSecondary mb-1.5">System Language</label>
          <select id="language" value={language} onChange={(e) => setLanguage(e.target.value)} className="w-full sm:w-64 px-3.5 py-2.5 bg-white border border-borderBase rounded-lg text-[13px] text-textPrimary outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all cursor-pointer">
            {languages.map((l) => <option key={l}>{l}</option>)}
          </select>
        </div>
        <div className="flex items-center justify-between p-3 bg-surfaceMuted border border-borderBase rounded-lg">
          <div>
            <p className="text-[13px] font-semibold text-textPrimary">Dark Mode</p>
            <p className="text-[11px] text-textMuted">Switch to dark interface theme</p>
          </div>
          <Toggle enabled={darkMode} onToggle={() => setDarkMode(!darkMode)} />
        </div>
        <div>
          <p className="text-[12px] font-semibold text-textSecondary mb-2">Notification Alerts</p>
          <div className="space-y-2">
            <Checkbox label="Email Notifications" checked={emailNotif} onChange={setEmailNotif} />
            <Checkbox label="Desktop Push Alerts" checked={desktopPush} onChange={setDesktopPush} />
            <Checkbox label="SMS Order Alerts" checked={smsAlerts} onChange={setSmsAlerts} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Checkbox({ label, checked, onChange }) {
  return (
    <label className="flex items-center gap-2.5 cursor-pointer">
      <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} className="w-4 h-4 rounded border-borderBase text-primary focus:ring-primary/20" />
      <span className="text-[13px] text-textPrimary">{label}</span>
    </label>
  );
}

function ProfileOverview() {
  return (
    <div className="bg-white border border-borderBase rounded-xl shadow-sm overflow-hidden">
      <div className="h-20 bg-[#222222]" />
      <div className="px-5 pb-5 -mt-8">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primaryContainer to-primary flex items-center justify-center border-4 border-white shadow-md">
          <span className="text-white font-bold text-[18px]">AS</span>
        </div>
        <h3 className="text-[15px] font-bold text-textPrimary mt-2">Alexander Sterling</h3>
        <span className="inline-block mt-1 px-2 py-0.5 bg-primaryLight text-primary text-[11px] font-semibold rounded-full">Senior Manager</span>
        <div className="mt-4 space-y-2.5">
          <div className="flex items-center gap-2">
            <span className="material-symbols-rounded text-[16px] text-textMuted">calendar_today</span>
            <span className="text-[12px] text-textSecondary">Joined: Jan 12, 2022</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-rounded text-[16px] text-textMuted">group</span>
            <span className="text-[12px] text-textSecondary">Direct Reports: 18 staff members</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-rounded text-[16px] text-textMuted">terminal</span>
            <span className="text-[12px] text-textSecondary">Terminal Access: All Units (01-08)</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function RecentActivity() {
  const activities = [
    { icon: 'login', label: 'Logged in from Terminal #01', time: 'Today, 08:42 AM', color: 'text-success' },
    { icon: 'inventory_2', label: 'Updated Inventory: Blue Lagoon', time: 'Yesterday, 04:15 PM', color: 'text-primary' },
    { icon: 'settings', label: 'Changed Terminal Passcode', time: 'Oct 24, 11:30 AM', color: 'text-warning' }
  ];
  return (
    <div className="bg-white border border-borderBase rounded-xl p-5 shadow-sm">
      <h3 className="text-[14px] font-semibold text-textPrimary mb-4">Recent Activity</h3>
      <div className="space-y-3">
        {activities.map((a, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className={`w-8 h-8 rounded-full bg-surfaceMuted flex items-center justify-center shrink-0`}>
              <span className={`material-symbols-rounded text-[16px] ${a.color}`}>{a.icon}</span>
            </div>
            <div>
              <p className="text-[12px] font-medium text-textPrimary">{a.label}</p>
              <p className="text-[11px] text-textMuted">{a.time}</p>
            </div>
          </div>
        ))}
      </div>
      <button onClick={() => alert('Opening full activity log')} className="w-full mt-4 flex items-center justify-center gap-1.5 py-2 border border-borderBase rounded-lg text-[12px] font-medium text-textSecondary hover:bg-primaryLight hover:text-primary hover:border-primary transition-all active:scale-[0.98]">
        View All Activity
      </button>
    </div>
  );
}

function SystemStatus() {
  return (
    <div className="bg-surfaceMuted border border-borderBase rounded-xl p-4 flex items-center gap-3">
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-success"></span>
      </span>
      <span className="text-[12px] font-medium text-textSecondary">System Status: <span className="text-success font-semibold">Optimal</span></span>
    </div>
  );
}

import { useState, useRef, useEffect } from 'react';
import { Search, Bell, User, Settings, Clock, LogOut } from 'lucide-react';

const navItems = ['Dashboard', 'Products', 'History', 'Settings'];

export default function Navbar({ activePage = 'products', onNavigate, searchPlaceholder = 'Search...' }) {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const goToSettings = () => {
    onNavigate && onNavigate('settings');
    setIsProfileOpen(false);
  };

  const handleSignOut = () => {
    setIsProfileOpen(false);
    if (confirm('Are you sure you want to sign out?')) {
      alert('Signed out successfully');
    }
  };

  return (
    <header className="flex items-center justify-between px-6 h-16 shrink-0" style={{ backgroundColor: '#222222' }}>
      {/* Brand */}
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primaryContainer">
          <span className="material-symbols-rounded text-white text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>
            storefront
          </span>
        </div>
        <span className="text-white font-bold text-[17px] tracking-tight">Toko Lubis</span>
      </div>

      {/* Nav Links */}
      <nav className="hidden md:flex items-center gap-1">
        {navItems.map((label) => (
          <button
            key={label}
            onClick={() => onNavigate && onNavigate(label.toLowerCase())}
            className={`px-4 py-2 rounded-full text-[13px] font-medium transition-all duration-200 ${
              activePage.toLowerCase() === label.toLowerCase()
                ? 'bg-white/10 text-white'
                : 'text-white/60 hover:bg-white/5 hover:text-white/90'
            }`}
          >
            {label}
          </button>
        ))}
      </nav>

      {/* Right: search + notif + avatar */}
      <div className="flex items-center gap-3">
        <div className="hidden sm:flex items-center gap-2 bg-white/8 border border-white/10 rounded-full px-3 py-1.5">
          <Search size={14} className="text-white/40" />
          <input
            type="text"
            placeholder={searchPlaceholder}
            className="bg-transparent text-white text-[13px] placeholder-white/30 outline-none w-28"
          />
        </div>
        <button className="relative flex items-center justify-center w-8 h-8 rounded-full hover:bg-white/8 transition-colors">
          <Bell size={16} className="text-white/60" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-primaryContainer rounded-full border border-[#222222]" />
        </button>

        {/* Profile Avatar + Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsProfileOpen((prev) => !prev)}
            className="w-10 h-10 rounded-full bg-gradient-to-br from-primaryContainer to-primary flex items-center justify-center border border-white/20 hover:ring-2 hover:ring-white/20 active:scale-[0.97] transition-all duration-200"
          >
            <span className="text-white font-bold text-[13px]">AS</span>
          </button>

          {isProfileOpen && (
            <div className="absolute right-0 top-full mt-3 w-[280px] bg-white border border-borderBase rounded-xl shadow-xl z-50 overflow-hidden">
              {/* Dropdown Header */}
              <div className="px-4 py-4 border-b border-borderBase flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primaryContainer to-primary flex items-center justify-center shrink-0">
                  <span className="text-white font-bold text-[14px]">AS</span>
                </div>
                <div className="min-w-0">
                  <p className="text-[13px] font-semibold text-textPrimary truncate">Alexander Sterling</p>
                  <p className="text-[11px] text-textMuted truncate">Senior Manager</p>
                  <p className="text-[11px] text-textMuted truncate">a.sterling@tokolubis.id</p>
                </div>
              </div>
              {/* Menu Items */}
              <div className="py-1.5">
                <DropdownItem icon={<User size={15} />} label="My Profile" onClick={goToSettings} />
                <DropdownItem icon={<Settings size={15} />} label="Account Settings" onClick={goToSettings} />
                <DropdownItem icon={<Clock size={15} />} label="Activity Log" onClick={() => { setIsProfileOpen(false); alert('Opening activity log'); }} />
              </div>
              <div className="border-t border-borderBase py-1.5">
                <DropdownItem icon={<LogOut size={15} />} label="Sign Out" onClick={handleSignOut} danger />
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

function DropdownItem({ icon, label, onClick, danger }) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-4 py-2.5 text-[13px] font-medium transition-all duration-150 ${
        danger
          ? 'text-error hover:bg-error/5'
          : 'text-textPrimary hover:bg-primaryLight hover:text-primary'
      }`}
    >
      {icon}
      {label}
    </button>
  );
}

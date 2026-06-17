import { Search, CalendarDays } from 'lucide-react';
import { dateTabs } from '../../data/historyData';

export default function HistoryFilters({
  activeDateTab, setActiveDateTab,
  searchQuery, setSearchQuery,
  statusFilter, setStatusFilter,
  typeFilter, setTypeFilter
}) {
  return (
    <div className="px-5 pt-5 pb-4 border-b border-white/10 space-y-4">
      <h2 className="text-[18px] font-bold text-textPrimary">Order History</h2>
      <div className="flex gap-1 bg-[#f3f4f6] rounded-lg p-1">
        {dateTabs.map((tab) => {
          const isActive = activeDateTab === tab;
          return (
            <button
              key={tab}
              onClick={() => setActiveDateTab(tab)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[12px] font-medium transition-all duration-200 ${isActive ? 'bg-white shadow-sm text-primary' : 'text-textSecondary hover:text-primary'}`}
            >
              {tab === 'Custom' && <CalendarDays size={12} />}
              {tab}
            </button>
          );
        })}
      </div>
      <div className="flex flex-col sm:flex-row gap-2">
        <div className="flex-1 flex items-center gap-2 bg-white border border-borderBase rounded-lg px-3 py-2 focus-within:border-primary focus-within:ring-2 focus-within:ring-primaryLight transition-all">
          <Search size={14} className="text-textMuted shrink-0" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Order ID, Customer name..."
            className="flex-1 bg-transparent text-[13px] text-textPrimary placeholder-textMuted outline-none"
          />
        </div>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-3 py-2 bg-white border border-borderBase rounded-lg text-[12px] font-medium text-textSecondary outline-none focus:border-primary focus:ring-2 focus:ring-primaryLight transition-all cursor-pointer"
        >
          <option>All Statuses</option>
          <option>Completed</option>
          <option>Cancelled</option>
          <option>Refunded</option>
        </select>
        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="px-3 py-2 bg-white border border-borderBase rounded-lg text-[12px] font-medium text-textSecondary outline-none focus:border-primary focus:ring-2 focus:ring-primaryLight transition-all cursor-pointer"
        >
          <option>All Types</option>
          <option>Dine-in</option>
          <option>Takeaway</option>
          <option>Delivery</option>
        </select>
      </div>
    </div>
  );
}

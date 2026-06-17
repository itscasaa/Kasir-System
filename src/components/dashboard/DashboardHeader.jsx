import { CalendarDays, ChevronDown } from 'lucide-react';

export default function DashboardHeader() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
      <div>
        <h1 className="text-[22px] font-bold text-textPrimary leading-tight">Ringkasan Penjualan</h1>
        <p className="text-[13px] text-textSecondary mt-0.5">
          Ringkasan pendapatan kotor, bersih, dan performa penjualan staf.
        </p>
      </div>
      <button className="flex items-center gap-2 px-3.5 py-2 bg-surface border border-borderBase rounded-[10px] text-[13px] font-medium text-textSecondary hover:border-primaryContainer hover:text-primary transition-all duration-200 active:scale-[0.98] shrink-0">
        <CalendarDays size={14} />
        <span>This Week (Oct 23 - Oct 29)</span>
        <ChevronDown size={14} />
      </button>
    </div>
  );
}

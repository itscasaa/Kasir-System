import { Plus } from 'lucide-react';
import TopPerformers from './TopPerformers';
import ShiftAttendance from './ShiftAttendance';
import TrainingProgress from './TrainingProgress';

export default function StaffInsightsPanel() {
  const handleNewReview = () => {
    alert('New performance review created');
  };

  return (
    <aside className="w-full lg:w-[32%] shrink-0 flex flex-col bg-surface border-t lg:border-t-0 lg:border-l border-borderBase overflow-hidden">
      <div className="flex flex-col h-full overflow-y-auto p-5 lg:p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center gap-3 pb-4 border-b border-borderBase">
          <div className="w-9 h-9 rounded-xl bg-primaryLight flex items-center justify-center">
            <span className="material-symbols-rounded text-primary text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>
              insights
            </span>
          </div>
          <div>
            <h2 className="text-[15px] font-bold text-textPrimary">Staff Insights</h2>
            <p className="text-[11px] text-textMuted">Toko Lubis Intelligence</p>
          </div>
        </div>

        {/* Top Performers */}
        <TopPerformers />

        {/* Shift Attendance */}
        <ShiftAttendance />

        {/* Training Progress */}
        <TrainingProgress />

        {/* CTA Button */}
        <button
          onClick={handleNewReview}
          className="w-full flex items-center justify-center gap-2 py-3 bg-primaryContainer text-white text-[14px] font-bold rounded-xl hover:bg-primaryHover active:scale-[0.98] transition-all duration-200 shadow-[0_4px_16px_rgba(59,99,246,0.3)] mt-auto shrink-0"
        >
          <Plus size={16} />
          New Performance Review
        </button>
      </div>
    </aside>
  );
}

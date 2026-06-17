import { TrendingUp, TrendingDown } from 'lucide-react';
import { kpiCards } from '../../data/dashboardData';

export default function DashboardKpiCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {kpiCards.map((kpi) => (
        <div
          key={kpi.id}
          className="bg-surface border border-borderBase rounded-xl p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
        >
          <div className="flex items-start justify-between mb-3">
            <div className={`w-10 h-10 rounded-xl ${kpi.iconBg} flex items-center justify-center`}>
              <span
                className={`material-symbols-rounded text-[20px] ${kpi.iconColor}`}
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                {kpi.icon}
              </span>
            </div>
            <div className={`flex items-center gap-1 text-[12px] font-medium ${kpi.trendUp ? 'text-success' : 'text-error'}`}>
              {kpi.trendUp ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
              {kpi.trend}
            </div>
          </div>
          <p className="text-[12px] text-textSecondary font-medium mb-0.5">{kpi.label}</p>
          <p className="text-[22px] font-bold text-textPrimary leading-tight">{kpi.value}</p>
        </div>
      ))}
    </div>
  );
}

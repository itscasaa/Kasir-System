import { trainingProgress } from '../../data/dashboardData';

export default function TrainingProgress() {
  return (
    <div>
      <h3 className="text-[14px] font-semibold text-textPrimary mb-3">Training Progress</h3>
      <div className="space-y-2.5">
        {trainingProgress.map((item) => (
          <div
            key={item.id}
            className="bg-surface border border-borderBase rounded-xl p-3.5 hover:shadow-sm transition-all duration-200"
          >
            <div className="flex items-center justify-between mb-2">
              <p className="text-[13px] font-medium text-textPrimary">{item.title}</p>
              <span className="text-[11px] font-medium text-textMuted">{item.value}</span>
            </div>
            <div className="h-1.5 bg-[#edeef0] rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-500 ${
                  item.color === 'success' ? 'bg-success' : 'bg-primary'
                }`}
                style={{ width: `${item.percent}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

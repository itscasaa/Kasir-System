import { Star } from 'lucide-react';
import { topPerformers } from '../../data/dashboardData';

export default function TopPerformers() {
  const renderStars = (rating) => {
    const stars = [];
    const full = Math.floor(rating);
    const hasHalf = rating % 1 !== 0;
    for (let i = 0; i < full; i++) {
      stars.push(<Star key={i} size={12} className="fill-warning text-warning" />);
    }
    if (hasHalf) {
      stars.push(
        <span key="half" className="relative inline-flex">
          <Star size={12} className="text-borderBase" />
          <span className="absolute inset-0 overflow-hidden w-[50%]">
            <Star size={12} className="fill-warning text-warning" />
          </span>
        </span>
      );
    }
    const remaining = 5 - Math.ceil(rating);
    for (let i = 0; i < remaining; i++) {
      stars.push(<Star key={`e-${i}`} size={12} className="text-borderBase" />);
    }
    return stars;
  };

  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <span className="material-symbols-rounded text-[16px] text-warning" style={{ fontVariationSettings: "'FILL' 1" }}>
          stars
        </span>
        <h3 className="text-[14px] font-semibold text-textPrimary">Top Performers</h3>
      </div>
      <div className="space-y-2.5">
        {topPerformers.map((performer) => (
          <div
            key={performer.rank}
            className={`flex items-center gap-3 p-3 rounded-xl border transition-all duration-200 hover:shadow-sm ${
              performer.highlighted
                ? 'bg-primaryLight border-primary/10'
                : 'bg-surface border-borderBase'
            }`}
          >
            <span
              className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold shrink-0 ${
                performer.highlighted
                  ? 'bg-primary text-white'
                  : 'bg-surfaceMuted text-textMuted'
              }`}
            >
              {performer.rank}
            </span>
            <img
              src={performer.avatar}
              alt={performer.name}
              className="w-8 h-8 rounded-full object-cover shrink-0"
            />
            <div className="flex-1 min-w-0">
              <p className="text-[13px] font-semibold text-textPrimary truncate">{performer.name}</p>
              <p className="text-[11px] text-textMuted">{performer.metric}</p>
            </div>
            <div className="flex items-center gap-0.5 shrink-0">
              {renderStars(performer.rating)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

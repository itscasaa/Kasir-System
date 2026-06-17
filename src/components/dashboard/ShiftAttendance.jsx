import { attendanceData } from '../../data/dashboardData';

export default function ShiftAttendance() {
  const maxValue = Math.max(...attendanceData.map((d) => d.value));

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-[14px] font-semibold text-textPrimary">Shift Attendance</h3>
        <span className="text-[12px] font-medium text-textSecondary">
          Avg. Attendance: <span className="text-primary font-semibold">96.4%</span>
        </span>
      </div>
      <div className="bg-[#f3f4f6] rounded-xl p-4">
        <div className="flex items-end justify-between gap-2 h-24">
          {attendanceData.map((item, idx) => {
            const height = (item.value / maxValue) * 100;
            const isWeekend = idx >= 5;
            let barColor = 'bg-primary/20';
            if (item.active) barColor = 'bg-primary';
            else if (isWeekend) barColor = 'bg-[#e7e8ea]';

            return (
              <div key={idx} className="flex flex-col items-center gap-1.5 flex-1">
                <div className="w-full flex items-end justify-center h-20">
                  <div
                    className={`w-full max-w-[24px] rounded-md transition-all duration-300 ${barColor}`}
                    style={{ height: `${height}%` }}
                  />
                </div>
                <span className="text-[10px] font-medium text-textMuted">{item.day}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

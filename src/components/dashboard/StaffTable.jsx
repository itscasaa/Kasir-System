import { useState } from 'react';
import { SlidersHorizontal } from 'lucide-react';
import { staffMembers } from '../../data/dashboardData';

export default function StaffTable() {
  const [selectedIds, setSelectedIds] = useState([]);

  const toggleSelect = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="bg-surface border border-borderBase rounded-xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-borderBase">
        <h3 className="text-[15px] font-semibold text-textPrimary">Staff List</h3>
        <button className="flex items-center gap-1.5 px-3 py-1.5 bg-surfaceMuted border border-borderBase rounded-lg text-[12px] font-medium text-textSecondary hover:border-primaryContainer hover:text-primary transition-all duration-200 active:scale-[0.97]">
          <SlidersHorizontal size={12} />
          Filter
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px]">
          <thead>
            <tr className="border-b border-borderBase">
              <th className="text-left text-[11px] font-semibold text-textMuted uppercase tracking-wider px-5 py-3">
                Staff Member
              </th>
              <th className="text-left text-[11px] font-semibold text-textMuted uppercase tracking-wider px-4 py-3">
                Sales Contribution
              </th>
              <th className="text-left text-[11px] font-semibold text-textMuted uppercase tracking-wider px-4 py-3">
                Avg. Tip %
              </th>
              <th className="text-left text-[11px] font-semibold text-textMuted uppercase tracking-wider px-4 py-3">
                Orders
              </th>
              <th className="text-left text-[11px] font-semibold text-textMuted uppercase tracking-wider px-4 py-3">
                Performance Score
              </th>
            </tr>
          </thead>
          <tbody>
            {staffMembers.map((staff) => {
              const isSelected = selectedIds.includes(staff.id);
              return (
                <tr
                  key={staff.id}
                  onClick={() => toggleSelect(staff.id)}
                  className={`border-b border-borderBase last:border-0 cursor-pointer transition-colors duration-150 ${
                    isSelected ? 'bg-primaryLight' : 'hover:bg-[#f3f4f6]'
                  }`}
                >
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-3">
                      <img
                        src={staff.avatar}
                        alt={staff.name}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-[13px] font-semibold text-textPrimary">{staff.name}</p>
                        <p className="text-[11px] text-textMuted">{staff.role}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-[13px] font-medium text-textPrimary">
                    {staff.sales}
                  </td>
                  <td className="px-4 py-3 text-[13px] font-medium text-textPrimary">
                    {staff.avgTip}
                  </td>
                  <td className="px-4 py-3 text-[13px] font-medium text-textPrimary">
                    {staff.orders}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-1.5 bg-[#edeef0] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full transition-all duration-300"
                          style={{ width: `${staff.score}%` }}
                        />
                      </div>
                      <span className="text-[12px] font-semibold text-textPrimary w-7 text-right">
                        {staff.score}
                      </span>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-5 py-3 border-t border-borderBase bg-surfaceMuted">
        <p className="text-[12px] text-textMuted">Showing 4 of 24 staff members</p>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1.5 text-[12px] font-medium text-textMuted bg-surface border border-borderBase rounded-lg hover:border-primaryContainer hover:text-primary transition-all duration-200 disabled:opacity-50" disabled>
            Previous
          </button>
          <button className="px-3 py-1.5 text-[12px] font-medium text-textMuted bg-surface border border-borderBase rounded-lg hover:border-primaryContainer hover:text-primary transition-all duration-200">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

import { Eye } from 'lucide-react';
import StatusBadge from './StatusBadge';
import TypeBadge from './TypeBadge';
import { formatCurrency } from '../../utils/formatCurrency';

export default function HistoryTable({ orders, selectedOrderId, onSelectOrder }) {
  return (
    <div className="flex-1 overflow-auto custom-scrollbar">
      <table className="w-full min-w-[700px]">
        <thead>
          <tr className="border-b border-borderBase">
            <th className="text-left text-[11px] font-semibold text-textMuted uppercase tracking-wider px-5 py-3">Order ID</th>
            <th className="text-left text-[11px] font-semibold text-textMuted uppercase tracking-wider px-4 py-3">Date & Time</th>
            <th className="text-left text-[11px] font-semibold text-textMuted uppercase tracking-wider px-4 py-3">Customer</th>
            <th className="text-left text-[11px] font-semibold text-textMuted uppercase tracking-wider px-4 py-3">Type</th>
            <th className="text-left text-[11px] font-semibold text-textMuted uppercase tracking-wider px-4 py-3">Amount</th>
            <th className="text-left text-[11px] font-semibold text-textMuted uppercase tracking-wider px-4 py-3">Status</th>
            <th className="text-left text-[11px] font-semibold text-textMuted uppercase tracking-wider px-4 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => {
            const isSelected = order.id === selectedOrderId;
            return (
              <tr
                key={order.id}
                onClick={() => onSelectOrder(order.id)}
                className={`border-b border-borderBase/50 cursor-pointer transition-all duration-150 ${isSelected ? 'bg-primaryLight' : 'hover:bg-primaryLight/50'}`}
              >
                <td className={`px-5 py-3 text-[13px] font-semibold ${isSelected ? 'text-primary' : 'text-textPrimary'}`}>{order.id}</td>
                <td className="px-4 py-3 text-[12px] text-textSecondary">
                  {order.date} <span className="text-textMuted">{order.time}</span>
                </td>
                <td className="px-4 py-3 text-[13px] font-medium text-textPrimary">{order.customer}</td>
                <td className="px-4 py-3"><TypeBadge type={order.type} /></td>
                <td className="px-4 py-3 text-[13px] font-semibold text-textPrimary">{formatCurrency(order.amount)}</td>
                <td className="px-4 py-3"><StatusBadge status={order.status} /></td>
                <td className="px-4 py-3">
                  <button
                    onClick={(e) => { e.stopPropagation(); onSelectOrder(order.id); }}
                    className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[11px] font-medium text-primary bg-primaryLight hover:bg-primary hover:text-white transition-all duration-200 active:scale-[0.97]"
                  >
                    <Eye size={12} /> View
                  </button>
                </td>
              </tr>
            );
          })}
          {orders.length === 0 && (
            <tr>
              <td colSpan={7} className="text-center py-10 text-textMuted text-[13px]">
                No orders match your filters.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

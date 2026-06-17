import { Printer, RotateCcw } from 'lucide-react';
import StatusBadge from './StatusBadge';
import { formatCurrency } from '../../utils/formatCurrency';

export default function OrderDetailPanel({
  selectedOrder,
  activeDetailTab,
  setActiveDetailTab,
  onPrintReceipt,
  onRefund
}) {
  if (!selectedOrder) {
    return (
      <div className="flex flex-col items-center justify-center h-full py-16 px-6 text-center">
        <span className="material-symbols-rounded text-[48px] text-textMuted mb-3">
          receipt_long
        </span>
        <p className="text-[14px] font-semibold text-textSecondary">No order selected</p>
        <p className="text-[12px] text-textMuted mt-1">Select an order from the history table.</p>
      </div>
    );
  }

  const subtotal = selectedOrder.items.reduce((sum, item) => sum + item.price, 0);
  const tax = selectedOrder.amount * selectedOrder.taxRate;
  const total = selectedOrder.amount + tax;
  const canRefund = selectedOrder.status === 'Completed';

  const paymentIcon = selectedOrder.status === 'Completed'
    ? 'check_circle'
    : selectedOrder.status === 'Cancelled'
      ? 'cancel'
      : 'restart_alt';

  const paymentIconColor = selectedOrder.status === 'Completed'
    ? 'text-success'
    : selectedOrder.status === 'Cancelled'
      ? 'text-error'
      : 'text-warning';

  return (
    <div className="flex flex-col h-full overflow-hidden">
      {/* Tabs */}
      <div className="flex border-b border-borderBase shrink-0">
        <button
          onClick={() => setActiveDetailTab('Details')}
          className={`flex-1 flex items-center justify-center gap-1.5 py-3 text-[13px] font-medium transition-all ${
            activeDetailTab === 'Details'
              ? 'text-primary border-b-2 border-primary'
              : 'text-textSecondary hover:bg-primaryLight'
          }`}
        >
          <span className="material-symbols-rounded text-[16px]">receipt_long</span>
          Details
        </button>
        <button
          onClick={() => setActiveDetailTab('Logs')}
          className={`flex-1 flex items-center justify-center gap-1.5 py-3 text-[13px] font-medium transition-all ${
            activeDetailTab === 'Logs'
              ? 'text-primary border-b-2 border-primary'
              : 'text-textSecondary hover:bg-primaryLight'
          }`}
        >
          <span className="material-symbols-rounded text-[16px]">history</span>
          Logs
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        {activeDetailTab === 'Details' ? (
          <div className="p-5 space-y-4">
            {/* Header */}
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[11px] text-textMuted font-medium">Order {selectedOrder.id}</p>
                <p className="text-[16px] font-bold text-primary mt-0.5">{selectedOrder.customer}</p>
                <p className="text-[12px] text-textSecondary mt-0.5">
                  {selectedOrder.date} • {selectedOrder.time} • {selectedOrder.type}
                  {selectedOrder.table && ` (${selectedOrder.table})`}
                </p>
              </div>
              <StatusBadge status={selectedOrder.status} />
            </div>

            {/* Items */}
            <div className="space-y-2.5">
              {selectedOrder.items.map((item, idx) => (
                <div key={idx} className="flex items-start justify-between">
                  <div>
                    <p className="text-[13px] font-semibold text-textPrimary">{item.name}</p>
                    {item.note && <p className="text-[11px] text-textMuted">{item.note}</p>}
                  </div>
                  <span className="text-[13px] font-medium text-textPrimary shrink-0 ml-3">
                    {formatCurrency(item.price)}
                  </span>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="border-t border-dashed border-borderBase" />

            {/* Totals */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-[12px]">
                <span className="text-textSecondary">Subtotal</span>
                <span className="font-medium text-textPrimary">{formatCurrency(subtotal)}</span>
              </div>
              <div className="flex justify-between text-[12px]">
                <span className="text-textSecondary">Tax (8%)</span>
                <span className="font-medium text-textPrimary">{formatCurrency(tax)}</span>
              </div>
              <div className="flex justify-between text-[14px] pt-1.5 border-t border-borderBase">
                <span className="font-bold text-textPrimary">Total</span>
                <span className="font-bold text-primary">{formatCurrency(total)}</span>
              </div>
            </div>

            {/* Payment */}
            <div className="flex items-center gap-3 bg-[#f3f4f6] rounded-xl p-3">
              <span className="material-symbols-rounded text-[20px] text-textSecondary">credit_card</span>
              <div className="flex-1 min-w-0">
                <p className="text-[11px] text-textMuted">Paid via</p>
                <p className="text-[12px] font-medium text-textPrimary truncate">{selectedOrder.payment}</p>
              </div>
              <span className={`material-symbols-rounded text-[20px] ${paymentIconColor}`} style={{ fontVariationSettings: "'FILL' 1" }}>
                {paymentIcon}
              </span>
            </div>
          </div>
        ) : (
          /* Logs Tab */
          <div className="p-5 space-y-4">
            <LogItem time={`${selectedOrder.time}`} label="Order created" color="text-primary" />
            <LogItem time={`${selectedOrder.time}`} label="Payment processed" color="text-success" />
            <LogItem time={`${selectedOrder.time}`} label="Receipt generated" color="text-primary" />
            <LogItem
              time={`${selectedOrder.time}`}
              label={`Status updated to ${selectedOrder.status}`}
              color={selectedOrder.status === 'Completed' ? 'text-success' : selectedOrder.status === 'Cancelled' ? 'text-error' : 'text-warning'}
            />
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="p-4 border-t border-borderBase space-y-2 shrink-0">
        <button
          onClick={onPrintReceipt}
          className="w-full flex items-center justify-center gap-2 py-2.5 bg-primary text-white text-[13px] font-semibold rounded-xl hover:bg-primaryHover active:scale-[0.98] transition-all duration-200"
        >
          <Printer size={14} />
          Print Receipt
        </button>
        <button
          onClick={onRefund}
          disabled={!canRefund}
          className={`w-full flex items-center justify-center gap-2 py-2.5 border text-[13px] font-semibold rounded-xl transition-all duration-200 active:scale-[0.98] ${
            canRefund
              ? 'border-error text-error hover:bg-error/5'
              : 'border-borderBase text-textMuted opacity-50 cursor-not-allowed'
          }`}
        >
          <RotateCcw size={14} />
          {canRefund ? 'Issue Refund' : 'Refund Unavailable'}
        </button>
      </div>
    </div>
  );
}

function LogItem({ time, label, color }) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex flex-col items-center">
        <div className={`w-2.5 h-2.5 rounded-full ${color.replace('text-', 'bg-')}`} />
        <div className="w-px h-6 bg-borderBase" />
      </div>
      <div>
        <p className="text-[12px] font-medium text-textPrimary">{label}</p>
        <p className="text-[11px] text-textMuted">{time}</p>
      </div>
    </div>
  );
}

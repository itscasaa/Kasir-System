import { orderQueue } from '../data/menuData';

const statusConfig = {
  Ready: { bg: 'bg-green-50', text: 'text-success', border: 'border-green-200', dot: 'bg-success' },
  'In Kitchen': { bg: 'bg-orange-50', text: 'text-warning', border: 'border-orange-200', dot: 'bg-warning' },
  Pending: { bg: 'bg-gray-50', text: 'text-textMuted', border: 'border-gray-200', dot: 'bg-textMuted' },
};

export default function OrderQueue() {
  return (
    <section>
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-[16px] font-semibold text-textPrimary">Order Queue</h2>
        <span className="text-[12px] text-primaryContainer font-medium cursor-pointer hover:underline">See all</span>
      </div>
      <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-1">
        {orderQueue.map((order) => {
          const cfg = statusConfig[order.status] || statusConfig.Pending;
          return (
            <div
              key={order.id}
              className="flex items-center gap-3 bg-surface border border-borderBase rounded-xl p-3 min-w-[210px] shrink-0 hover:shadow-card hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
            >
              <div className="w-9 h-9 rounded-full bg-primaryLight flex items-center justify-center shrink-0">
                <span className="material-symbols-rounded text-primary text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  person
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[13px] font-semibold text-textPrimary truncate">{order.customer}</p>
                <p className="text-[11px] text-textMuted">{order.orderId}</p>
              </div>
              <span className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-medium border ${cfg.bg} ${cfg.text} ${cfg.border} shrink-0`}>
                <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
                {order.status}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

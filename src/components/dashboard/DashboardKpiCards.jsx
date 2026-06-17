import { TrendingUp, TrendingDown } from 'lucide-react';
import { formatCurrency } from '../../utils/formatCurrency';

export default function DashboardKpiCards({ orders = [] }) {
  const completedOrders = orders.filter((order) => order.status === 'Completed');

  // Gross Revenue (Sum of all item selling prices in completed orders)
  const grossRevenue = completedOrders.reduce((sum, order) => {
    const orderSubtotal = order.items.reduce((s, item) => s + (item.price * (item.quantity || 1)), 0);
    return sum + orderSubtotal;
  }, 0);

  // Net Profit (Sum of profit: (price - costPrice) * quantity)
  const netProfit = completedOrders.reduce((sum, order) => {
    const orderProfit = order.items.reduce((s, item) => {
      const cost = item.costPrice || (item.price * 0.65);
      return s + ((item.price - cost) * (item.quantity || 1));
    }, 0);
    return sum + orderProfit;
  }, 0);

  const totalTransactions = completedOrders.length;

  const cards = [
    {
      id: 1,
      icon: 'payments',
      label: 'Pendapatan Kotor',
      value: formatCurrency(grossRevenue),
      trend: '+12.4%',
      trendUp: true,
      iconBg: 'bg-primaryLight',
      iconColor: 'text-primary',
    },
    {
      id: 2,
      icon: 'trending_up',
      label: 'Pendapatan Bersih',
      value: formatCurrency(netProfit),
      trend: '+8.2%',
      trendUp: true,
      iconBg: 'bg-green-50',
      iconColor: 'text-success',
    },
    {
      id: 3,
      icon: 'receipt_long',
      label: 'Total Transaksi',
      value: `${totalTransactions} Pesanan`,
      trend: '+4.5%',
      trendUp: true,
      iconBg: 'bg-orange-50',
      iconColor: 'text-warning',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {cards.map((kpi) => (
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

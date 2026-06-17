export const kpiCards = [
  {
    id: 1,
    icon: 'speed',
    label: 'Team Efficiency',
    value: '94%',
    trend: '+2.4%',
    trendUp: true,
    iconBg: 'bg-primaryLight',
    iconColor: 'text-primary',
  },
  {
    id: 2,
    icon: 'timer',
    label: 'Avg. Service Time',
    value: '12m 30s',
    trend: '-0.5%',
    trendUp: false,
    iconBg: 'bg-orange-50',
    iconColor: 'text-warning',
  },
  {
    id: 3,
    icon: 'payments',
    label: 'Total Staff Sales',
    value: '$18,450.00',
    trend: '+12%',
    trendUp: true,
    iconBg: 'bg-green-50',
    iconColor: 'text-success',
  },
];

export const staffMembers = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    role: 'Server',
    sales: 4250000,
    avgTip: '22.4%',
    orders: 142,
    score: 95,
    avatar: 'https://i.pravatar.cc/40?img=1',
  },
  {
    id: 2,
    name: 'Marcus Chen',
    role: 'Chef',
    sales: 3840000,
    avgTip: 'N/A',
    orders: 312,
    score: 88,
    avatar: 'https://i.pravatar.cc/40?img=3',
  },
  {
    id: 3,
    name: 'Leo Martinez',
    role: 'Cashier',
    sales: 2910000,
    avgTip: '15.8%',
    orders: 285,
    score: 82,
    avatar: 'https://i.pravatar.cc/40?img=5',
  },
  {
    id: 4,
    name: 'Elena Rodriguez',
    role: 'Server',
    sales: 3120000,
    avgTip: '19.2%',
    orders: 118,
    score: 76,
    avatar: 'https://i.pravatar.cc/40?img=9',
  },
];

export const topPerformers = [
  {
    rank: 1,
    name: 'Sarah Jenkins',
    metric: '22.4% Avg Tip',
    rating: 5,
    highlighted: true,
    avatar: 'https://i.pravatar.cc/40?img=1',
  },
  {
    rank: 2,
    name: 'Marcus Chen',
    metric: '312 Orders',
    rating: 4.5,
    highlighted: false,
    avatar: 'https://i.pravatar.cc/40?img=3',
  },
];

export const attendanceData = [
  { day: 'M', value: 80 },
  { day: 'T', value: 90 },
  { day: 'W', value: 100, active: true },
  { day: 'T', value: 85 },
  { day: 'F', value: 95 },
  { day: 'S', value: 20 },
  { day: 'S', value: 15 },
];

export const trainingProgress = [
  {
    id: 1,
    title: 'Wine Pairing Essentials',
    value: '18/24 Staff',
    percent: 75,
    color: 'primary',
  },
  {
    id: 2,
    title: 'Safety & Compliance',
    value: '24/24 Staff',
    percent: 100,
    color: 'success',
  },
];

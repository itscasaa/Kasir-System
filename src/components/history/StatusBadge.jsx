export default function StatusBadge({ status }) {
  const config = {
    Completed: { bg: 'bg-success/10', text: 'text-success', border: 'border-success/20' },
    Cancelled: { bg: 'bg-error/10', text: 'text-error', border: 'border-error/20' },
    Refunded: { bg: 'bg-warning/10', text: 'text-warning', border: 'border-warning/20' }
  };
  const c = config[status] || config.Completed;
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${c.bg} ${c.text} ${c.border}`}>
      {status}
    </span>
  );
}

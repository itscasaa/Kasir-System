import { Trash2 } from 'lucide-react';
import { formatCurrency } from '../utils/formatCurrency';

export default function CartItem({ item, onRemove }) {
  return (
    <div className="flex items-center gap-3 py-2.5 border-b border-borderBase last:border-0">
      <img
        src={item.image}
        alt={item.name}
        className="w-12 h-12 rounded-[10px] object-cover shrink-0"
        loading="lazy"
      />
      <div className="flex-1 min-w-0">
        <p className="text-[13px] font-semibold text-textPrimary leading-snug line-clamp-1">{item.name}</p>
        <p className="text-[12px] text-textMuted mt-0.5">{formatCurrency(item.price)} × {item.quantity}</p>
      </div>
      <div className="flex items-center gap-2 shrink-0">
        <span className="text-[14px] font-bold text-textPrimary">
          {formatCurrency(item.price * item.quantity)}
        </span>
        <button
          onClick={() => onRemove(item.id)}
          className="w-7 h-7 rounded-full flex items-center justify-center text-textMuted hover:bg-red-50 hover:text-error transition-colors active:scale-95"
        >
          <Trash2 size={13} />
        </button>
      </div>
    </div>
  );
}

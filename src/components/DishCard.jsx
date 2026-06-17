import { Plus, Minus } from 'lucide-react';

export default function DishCard({ dish, onAdd, cartItem, onIncrease, onDecrease, variant }) {
  const inCart = !!cartItem;
  const qty = cartItem?.quantity || 0;

  if (variant === 'horizontal') {
    return (
      <div
        className={`flex items-center gap-3 bg-surface border rounded-xl p-3 cursor-pointer hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 min-w-[220px] ${
          inCart ? 'border-primaryContainer shadow-[0_0_0_1px_#3b63f6]' : 'border-borderBase'
        }`}
        onClick={() => !inCart && onAdd(dish)}
      >
        <img
          src={dish.image}
          alt={dish.name}
          className="w-16 h-16 rounded-[10px] object-cover shrink-0"
          loading="lazy"
        />
        <div className="flex-1 min-w-0">
          <p className="text-[13px] font-semibold text-textPrimary leading-tight line-clamp-2 mb-1">{dish.name}</p>
          <p className="text-primary font-bold text-[14px]">${dish.price.toFixed(2)}</p>
        </div>
        <div className="shrink-0" onClick={(e) => e.stopPropagation()}>
          {inCart ? (
            <div className="flex items-center gap-1">
              <button
                onClick={() => onDecrease(dish.id)}
                className="w-7 h-7 rounded-full bg-primaryLight text-primary flex items-center justify-center hover:bg-primaryContainer hover:text-white transition-colors active:scale-95"
              >
                <Minus size={12} />
              </button>
              <span className="w-6 text-center text-[13px] font-semibold text-textPrimary">{qty}</span>
              <button
                onClick={() => onIncrease(dish.id)}
                className="w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primaryHover transition-colors active:scale-95"
              >
                <Plus size={12} />
              </button>
            </div>
          ) : (
            <button
              onClick={() => onAdd(dish)}
              className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primaryHover active:scale-95 transition-all duration-200"
            >
              <Plus size={14} />
            </button>
          )}
        </div>
      </div>
    );
  }

  // Grid card (default)
  return (
    <div
      className={`flex flex-col bg-surface border rounded-card overflow-hidden cursor-pointer hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 ${
        inCart ? 'border-primaryContainer shadow-[0_0_0_1px_#3b63f6]' : 'border-borderBase'
      }`}
      onClick={() => !inCart && onAdd(dish)}
    >
      <div className="relative">
        <img
          src={dish.image}
          alt={dish.name}
          className="w-full h-28 object-cover"
          loading="lazy"
        />
        {inCart && (
          <span className="absolute top-2 right-2 bg-primary text-white text-[11px] font-semibold px-2 py-0.5 rounded-full">
            {qty} in cart
          </span>
        )}
      </div>
      <div className="p-3 flex flex-col flex-1">
        <p className="text-[12px] font-medium text-textPrimary leading-snug line-clamp-2 flex-1 mb-2">{dish.name}</p>
        <div className="flex items-center justify-between">
          <span className="text-primary font-bold text-[14px]">${dish.price.toFixed(2)}</span>
          <div onClick={(e) => e.stopPropagation()}>
            {inCart ? (
              <div className="flex items-center gap-1">
                <button
                  onClick={() => onDecrease(dish.id)}
                  className="w-6 h-6 rounded-full bg-primaryLight text-primary flex items-center justify-center hover:bg-primaryContainer hover:text-white transition-colors active:scale-95"
                >
                  <Minus size={10} />
                </button>
                <span className="w-5 text-center text-[12px] font-semibold text-textPrimary">{qty}</span>
                <button
                  onClick={() => onIncrease(dish.id)}
                  className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primaryHover transition-colors active:scale-95"
                >
                  <Plus size={10} />
                </button>
              </div>
            ) : (
              <button
                onClick={() => onAdd(dish)}
                className="w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primaryHover active:scale-95 transition-all duration-200"
              >
                <Plus size={12} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

import DishCard from './DishCard';

export default function MenuSection({ title, dishes, cart, onAdd, onIncrease, onDecrease, variant }) {
  if (!dishes || dishes.length === 0) return null;

  return (
    <section>
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-[16px] font-semibold text-textPrimary">{title}</h2>
        <span className="text-[12px] text-primaryContainer font-medium cursor-pointer hover:underline">See all</span>
      </div>

      {variant === 'horizontal' ? (
        <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-1">
          {dishes.map((dish) => (
            <DishCard
              key={dish.id}
              dish={dish}
              cartItem={cart.find((c) => c.id === dish.id)}
              onAdd={onAdd}
              onIncrease={onIncrease}
              onDecrease={onDecrease}
              variant="horizontal"
            />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {dishes.map((dish) => (
            <DishCard
              key={dish.id}
              dish={dish}
              cartItem={cart.find((c) => c.id === dish.id)}
              onAdd={onAdd}
              onIncrease={onIncrease}
              onDecrease={onDecrease}
            />
          ))}
        </div>
      )}
    </section>
  );
}

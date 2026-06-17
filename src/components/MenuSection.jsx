import { useRef, useState } from 'react';
import DishCard from './DishCard';

export default function MenuSection({ title, dishes, cart, onAdd, onIncrease, onDecrease, variant }) {
  if (!dishes || dishes.length === 0) return null;

  const scrollRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [hasDragged, setHasDragged] = useState(false);

  const handleMouseDown = (e) => {
    setIsDown(true);
    setHasDragged(false);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
  };

  const handleMouseUp = () => {
    setIsDown(false);
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    if (Math.abs(walk) > 5) {
      setHasDragged(true);
    }
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleClickCapture = (e) => {
    if (hasDragged) {
      e.stopPropagation();
      e.preventDefault();
    }
  };

  return (
    <section>
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-[16px] font-semibold text-textPrimary">{title}</h2>
        <span className="text-[12px] text-primaryContainer font-medium cursor-pointer hover:underline">See all</span>
      </div>

      {variant === 'horizontal' ? (
        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onClickCapture={handleClickCapture}
          className="flex gap-3 overflow-x-auto scrollbar-hide pb-2 select-none cursor-grab active:cursor-grabbing"
        >
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

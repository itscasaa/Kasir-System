import { useRef, useState } from 'react';
import { categories } from '../data/menuData';

export default function CategoryList({ activeCategory, onCategoryChange }) {
  const allCategory = { name: 'All', items: null, icon: 'grid_view' };
  const allCats = [allCategory, ...categories];

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

  return (
    <section>
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-[16px] font-semibold text-textPrimary">Categories</h2>
      </div>
      <div
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className="flex gap-2.5 overflow-x-auto scrollbar-hide pb-2 select-none cursor-grab active:cursor-grabbing"
      >
        {allCats.map((cat) => {
          const isActive = activeCategory === cat.name;
          return (
            <button
              key={cat.name}
              onClick={() => {
                if (!hasDragged) {
                  onCategoryChange(cat.name);
                }
              }}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-full text-[13px] font-medium border shrink-0 transition-all duration-200 active:scale-[0.97] ${
                isActive
                  ? 'bg-primaryLight border-primaryContainer text-primary'
                  : 'bg-surface border-borderBase text-textSecondary hover:border-primaryContainer hover:text-primary hover:bg-primaryLight'
              }`}
            >
              <span
                className="material-symbols-rounded text-[16px]"
                style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}
              >
                {cat.icon}
              </span>
              {cat.name}
              {cat.items !== null && (
                <span className={`text-[11px] ${isActive ? 'text-primary/70' : 'text-textMuted'}`}>
                  {cat.items}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </section>
  );
}

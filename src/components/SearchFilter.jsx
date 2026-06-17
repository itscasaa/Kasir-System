import { Search, SlidersHorizontal } from 'lucide-react';

export default function SearchFilter({ searchQuery, onSearchChange }) {
  return (
    <div className="flex gap-2">
      <div className="flex-1 flex items-center gap-2 bg-surface border border-borderBase rounded-[10px] px-3.5 py-2.5 focus-within:border-primaryContainer focus-within:ring-2 focus-within:ring-primaryLight transition-all duration-200">
        <Search size={15} className="text-textMuted shrink-0" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search something here..."
          className="flex-1 bg-transparent text-[13px] text-textPrimary placeholder-textMuted outline-none"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange('')}
            className="text-textMuted hover:text-textPrimary transition-colors"
          >
            <span className="material-symbols-rounded text-[16px]">close</span>
          </button>
        )}
      </div>
      <button className="flex items-center justify-center w-10 h-10 bg-surface border border-borderBase rounded-[10px] text-textSecondary hover:bg-primaryLight hover:text-primary hover:border-primaryContainer transition-all duration-200 active:scale-95">
        <SlidersHorizontal size={16} />
      </button>
    </div>
  );
}

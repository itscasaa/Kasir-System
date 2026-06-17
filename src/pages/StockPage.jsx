import { useState, useMemo } from 'react';
import { Search, Plus, Minus, RotateCcw, AlertTriangle } from 'lucide-react';
import { formatCurrency } from '../utils/formatCurrency';
import { categories } from '../data/menuData';

export default function StockPage({ products, onUpdateStock }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  // Filter products based on search and category
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [products, searchQuery, activeCategory]);

  // List of products with low stock (<= 8)
  const lowStockProducts = useMemo(() => {
    return products.filter((p) => p.stock <= 8).sort((a, b) => a.stock - b.stock);
  }, [products]);

  const getStockStatus = (stock) => {
    if (stock <= 3) return { label: 'Kritis', color: 'text-error bg-red-50 border-red-200' };
    if (stock <= 8) return { label: 'Menipis', color: 'text-warning bg-orange-50 border-orange-200' };
    return { label: 'Cukup', color: 'text-success bg-green-50 border-green-200' };
  };

  return (
    <div className="flex flex-1 overflow-hidden flex-col lg:flex-row">
      {/* Left Panel: Stock Table & Filters */}
      <main className="flex-1 lg:w-[68%] overflow-y-auto bg-background p-6 lg:p-8 space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <h1 className="text-[22px] font-bold text-textPrimary leading-tight">Manajemen Stok</h1>
            <p className="text-[13px] text-textSecondary mt-0.5">
              Kelola jumlah persediaan barang Toko Lubis berdasarkan kategori.
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-surface border border-borderBase rounded-xl p-4 flex flex-col md:flex-row gap-3 items-center justify-between shadow-sm">
          {/* Search */}
          <div className="flex items-center gap-2 bg-surfaceMuted border border-borderBase rounded-lg px-3 py-2 w-full md:max-w-xs">
            <Search size={14} className="text-textMuted" />
            <input
              type="text"
              placeholder="Cari barang..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent text-[13px] text-textPrimary placeholder-textMuted outline-none w-full"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex gap-1.5 overflow-x-auto w-full md:w-auto scrollbar-hide pb-1 md:pb-0 select-none">
            <button
              onClick={() => setActiveCategory('All')}
              className={`px-3 py-1.5 rounded-lg text-[12px] font-medium transition-all ${
                activeCategory === 'All'
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-textSecondary hover:text-textPrimary bg-surfaceMuted border border-borderBase'
              }`}
            >
              Semua
            </button>
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`px-3 py-1.5 rounded-lg text-[12px] font-medium shrink-0 transition-all ${
                  activeCategory === cat.name
                    ? 'bg-primary text-white shadow-sm'
                    : 'text-textSecondary hover:text-textPrimary bg-surfaceMuted border border-borderBase'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Stock Table */}
        <div className="bg-surface border border-borderBase rounded-xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-borderBase bg-surfaceMuted/50">
                  <th className="text-left text-[11px] font-semibold text-textMuted uppercase tracking-wider px-5 py-3">Barang</th>
                  <th className="text-left text-[11px] font-semibold text-textMuted uppercase tracking-wider px-4 py-3">Kategori</th>
                  <th className="text-left text-[11px] font-semibold text-textMuted uppercase tracking-wider px-4 py-3">Harga Modal</th>
                  <th className="text-left text-[11px] font-semibold text-textMuted uppercase tracking-wider px-4 py-3">Harga Jual</th>
                  <th className="text-left text-[11px] font-semibold text-textMuted uppercase tracking-wider px-4 py-3">Jumlah Stok</th>
                  <th className="text-center text-[11px] font-semibold text-textMuted uppercase tracking-wider px-4 py-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((p) => {
                  const status = getStockStatus(p.stock);
                  return (
                    <tr key={p.id} className="border-b border-borderBase last:border-0 hover:bg-[#f8f9fb] transition-colors duration-150">
                      <td className="px-5 py-3">
                        <div className="flex items-center gap-3">
                          <img src={p.image} alt={p.name} className="w-10 h-10 rounded-lg object-cover border border-borderBase" />
                          <span className="text-[13px] font-semibold text-textPrimary">{p.name}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <span className="text-[12px] text-textSecondary">{p.category}</span>
                      </td>
                      <td className="px-4 py-3 text-[13px] font-medium text-textSecondary">
                        {formatCurrency(p.costPrice)}
                      </td>
                      <td className="px-4 py-3 text-[13px] font-semibold text-textPrimary">
                        {formatCurrency(p.price)}
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2.5">
                          <button
                            onClick={() => onUpdateStock(p.id, Math.max(0, p.stock - 1))}
                            className="w-6 h-6 rounded-full bg-surfaceMuted border border-borderBase flex items-center justify-center text-textSecondary hover:bg-gray-100 hover:text-textPrimary transition-all active:scale-90"
                          >
                            <Minus size={11} />
                          </button>
                          <input
                            type="number"
                            value={p.stock}
                            onChange={(e) => onUpdateStock(p.id, Math.max(0, parseInt(e.target.value) || 0))}
                            className="w-12 text-center text-[13px] font-bold text-textPrimary bg-surfaceMuted border border-borderBase rounded px-1 py-0.5 outline-none focus:border-primary"
                          />
                          <button
                            onClick={() => onUpdateStock(p.id, p.stock + 1)}
                            className="w-6 h-6 rounded-full bg-surfaceMuted border border-borderBase flex items-center justify-center text-textSecondary hover:bg-gray-100 hover:text-textPrimary transition-all active:scale-90"
                          >
                            <Plus size={11} />
                          </button>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex justify-center">
                          <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${status.color}`}>
                            {status.label}
                          </span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Right Panel: Alerts & Critical Stock */}
      <aside className="w-full lg:w-[32%] shrink-0 flex flex-col bg-surface border-t lg:border-t-0 lg:border-l border-borderBase overflow-hidden">
        <div className="flex flex-col h-full overflow-y-auto p-5 lg:p-6 space-y-5">
          {/* Header */}
          <div className="flex items-center gap-3 pb-4 border-b border-borderBase">
            <div className="w-9 h-9 rounded-xl bg-orange-50 flex items-center justify-center">
              <AlertTriangle className="text-warning" size={18} />
            </div>
            <div>
              <h2 className="text-[15px] font-bold text-textPrimary">Pemantauan Stok</h2>
              <p className="text-[11px] text-textMuted">Toko Lubis Alert System</p>
            </div>
          </div>

          {/* Low Stock List */}
          <div className="space-y-3 flex-1">
            <h3 className="text-[13px] font-semibold text-textPrimary flex items-center justify-between">
              <span>Stok Menipis / Kritis</span>
              <span className="text-[11px] text-white bg-error rounded-full px-2 py-0.5 font-bold">
                {lowStockProducts.length}
              </span>
            </h3>

            {lowStockProducts.length === 0 ? (
              <div className="text-center py-8 text-textMuted text-[12px]">
                Semua stok barang mencukupi. Mantap! 👍
              </div>
            ) : (
              <div className="space-y-2.5 max-h-[400px] overflow-y-auto pr-1">
                {lowStockProducts.map((p) => {
                  const isCritical = p.stock <= 3;
                  return (
                    <div
                      key={p.id}
                      className={`flex items-center justify-between p-3 rounded-xl border ${
                        isCritical ? 'bg-red-50/50 border-red-100' : 'bg-orange-50/40 border-orange-100'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="relative">
                          <img src={p.image} alt={p.name} className="w-9 h-9 rounded-lg object-cover" />
                          <span className={`absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white ${
                            isCritical ? 'bg-error' : 'bg-warning'
                          }`}>
                            {p.stock}
                          </span>
                        </div>
                        <div className="min-w-0">
                          <p className="text-[12px] font-semibold text-textPrimary truncate">{p.name}</p>
                          <p className="text-[10px] text-textMuted">{p.category}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => onUpdateStock(p.id, p.stock + 20)}
                        className="flex items-center gap-1 px-2.5 py-1.5 bg-primaryContainer text-white hover:bg-primaryHover text-[11px] font-semibold rounded-lg active:scale-95 transition-all shadow-sm shrink-0"
                      >
                        <RotateCcw size={10} />
                        Restok +20
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </aside>
    </div>
  );
}

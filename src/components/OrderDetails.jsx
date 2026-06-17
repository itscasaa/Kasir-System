import { useState } from 'react';
import { Copy, MoreHorizontal, Pencil, ShoppingBag } from 'lucide-react';
import CartItem from './CartItem';

const ORDER_TYPES = ['Dine In', 'Take Away', 'Delivery'];

export default function OrderDetails({ cart, onRemove, onClear }) {
  const [orderType, setOrderType] = useState('Dine In');

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  const handlePay = () => {
    if (cart.length === 0) return;
    alert(`✅ Payment successful!\nTotal paid: $${total.toFixed(2)}`);
    onClear();
  };

  return (
    <aside className="w-full lg:w-[32%] shrink-0 flex flex-col bg-surface border-t lg:border-t-0 lg:border-l border-borderBase overflow-hidden">
      <div className="flex flex-col h-full overflow-y-auto">
        {/* Header */}
        <div className="px-5 pt-5 pb-3 border-b border-borderBase shrink-0">
          <div className="flex items-center justify-between mb-1">
            <h2 className="text-[17px] font-bold text-textPrimary">Order Details</h2>
            <div className="flex items-center gap-1">
              <button className="w-8 h-8 rounded-full flex items-center justify-center text-textMuted hover:bg-gray-100 transition-colors">
                <Copy size={14} />
              </button>
              <button className="w-8 h-8 rounded-full flex items-center justify-center text-textMuted hover:bg-gray-100 transition-colors">
                <MoreHorizontal size={14} />
              </button>
            </div>
          </div>
          <p className="text-[12px] text-textMuted font-medium">#ORD-3291</p>
        </div>

        {/* Order Type */}
        <div className="px-5 py-3 border-b border-borderBase shrink-0">
          <div className="flex bg-surfaceMuted border border-borderBase rounded-[10px] p-1">
            {ORDER_TYPES.map((type) => (
              <button
                key={type}
                onClick={() => setOrderType(type)}
                className={`flex-1 py-1.5 text-[12px] font-medium rounded-lg transition-all duration-200 ${
                  orderType === type
                    ? 'bg-primary text-white shadow-sm'
                    : 'text-textSecondary hover:text-textPrimary'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Customer Info */}
        <div className="px-5 py-3 border-b border-borderBase shrink-0">
          <div className="flex items-center justify-between bg-surfaceMuted border border-borderBase rounded-[10px] p-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primaryContainer to-primary flex items-center justify-center shrink-0">
                <span className="text-white font-semibold text-[13px]">JA</span>
              </div>
              <div>
                <p className="text-[13px] font-semibold text-textPrimary">Jhonatan Andrew</p>
                <p className="text-[11px] text-textMuted">Table No. 17</p>
              </div>
            </div>
            <button className="w-7 h-7 rounded-full flex items-center justify-center text-textMuted hover:bg-gray-200 transition-colors">
              <Pencil size={13} />
            </button>
          </div>
        </div>

        {/* Cart Items */}
        <div className="flex-1 px-5 py-3 overflow-y-auto">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-[13px] font-semibold text-textPrimary">
              Items
              {cart.length > 0 && (
                <span className="ml-1.5 text-[11px] font-medium text-white bg-primaryContainer rounded-full px-1.5 py-0.5">
                  {cart.reduce((s, i) => s + i.quantity, 0)}
                </span>
              )}
            </h3>
            {cart.length > 0 && (
              <button
                onClick={onClear}
                className="text-[11px] text-error hover:underline font-medium"
              >
                Clear all
              </button>
            )}
          </div>

          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-10 gap-3 text-center">
              <div className="w-14 h-14 rounded-full bg-surfaceMuted border border-borderBase flex items-center justify-center">
                <ShoppingBag size={24} className="text-textMuted" />
              </div>
              <div>
                <p className="text-[13px] font-semibold text-textSecondary">No items selected</p>
                <p className="text-[12px] text-textMuted mt-0.5">Add menu items from the left panel.</p>
              </div>
            </div>
          ) : (
            <div>
              {cart.map((item) => (
                <CartItem key={item.id} item={item} onRemove={onRemove} />
              ))}
            </div>
          )}
        </div>

        {/* Order Summary */}
        <div className="px-5 py-4 border-t border-borderBase bg-surfaceMuted shrink-0">
          <div className="space-y-2 mb-4">
            <div className="flex justify-between items-center">
              <span className="text-[13px] text-textSecondary">Subtotal</span>
              <span className="text-[13px] font-semibold text-textPrimary">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[13px] text-textSecondary">Tax (10%)</span>
              <span className="text-[13px] font-semibold text-textPrimary">${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center pt-2 border-t border-borderBase">
              <span className="text-[15px] font-bold text-textPrimary">Total</span>
              <span className="text-[18px] font-extrabold text-primary">${total.toFixed(2)}</span>
            </div>
          </div>

          <button
            onClick={handlePay}
            disabled={cart.length === 0}
            className={`w-full py-3 rounded-xl text-[14px] font-bold transition-all duration-200 active:scale-[0.98] ${
              cart.length === 0
                ? 'bg-borderBase text-textMuted cursor-not-allowed'
                : 'bg-primary text-white hover:bg-primaryHover shadow-md hover:shadow-lg focus:ring-2 focus:ring-primaryContainer focus:ring-offset-2'
            }`}
          >
            {cart.length === 0 ? 'Pay $0.00' : `Pay $${total.toFixed(2)}`}
          </button>
        </div>
      </div>
    </aside>
  );
}

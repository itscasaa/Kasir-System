import { useState } from 'react';
import { Copy, MoreHorizontal, Pencil, ShoppingBag } from 'lucide-react';
import CartItem from './CartItem';
import { formatCurrency } from '../utils/formatCurrency';

const ORDER_TYPES = ['Dine In', 'Take Away', 'Delivery'];

export default function OrderDetails({ cart, onRemove, onClear, onCheckout }) {
  const [orderType, setOrderType] = useState('Dine In');
  const [paymentStep, setPaymentStep] = useState('idle');
  const [currentOrder, setCurrentOrder] = useState(null);

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  const handlePay = () => {
    if (cart.length === 0) return;
    
    const newOrder = {
      id: `#ORD-${Math.floor(1000 + Math.random() * 9000)}`,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }),
      customer: 'Jhonatan Andrew',
      type: orderType,
      table: orderType === 'Dine In' ? 'Table 17' : '',
      amount: total,
      status: 'Completed',
      payment: 'QRIS',
      items: cart.map(item => ({
        name: item.name,
        note: '',
        price: item.price,
        costPrice: item.costPrice || item.price * 0.65,
        quantity: item.quantity
      })),
      taxRate: 0.1
    };

    setCurrentOrder(newOrder);
    setPaymentStep('qris');
  };

  const handleConfirmPayment = () => {
    if (!currentOrder) return;
    if (onCheckout) {
      onCheckout(currentOrder);
    }
    setPaymentStep('receipt');
  };

  const handleFinishTransaction = () => {
    onClear();
    setPaymentStep('idle');
    setCurrentOrder(null);
  };

  const handlePrint = () => {
    window.print();
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
              <span className="text-[13px] font-semibold text-textPrimary">{formatCurrency(subtotal)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[13px] text-textSecondary">Tax (10%)</span>
              <span className="text-[13px] font-semibold text-textPrimary">{formatCurrency(tax)}</span>
            </div>
            <div className="flex justify-between items-center pt-2 border-t border-borderBase">
              <span className="text-[15px] font-bold text-textPrimary">Total</span>
              <span className="text-[18px] font-extrabold text-primary">{formatCurrency(total)}</span>
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
            {cart.length === 0 ? 'Pay Rp 0' : `Pay ${formatCurrency(total)}`}
          </button>
        </div>
      </div>
      {/* QRIS Modal Overlay */}
      {paymentStep === 'qris' && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-sm w-full p-6 shadow-2xl flex flex-col items-center text-center space-y-4">
            <div className="flex justify-between w-full border-b border-borderBase pb-3">
              <h3 className="text-[16px] font-bold text-textPrimary">Pembayaran QRIS</h3>
              <button onClick={() => setPaymentStep('idle')} className="text-textMuted hover:text-textPrimary text-[13px] font-medium">Batal</button>
            </div>
            
            <div className="space-y-1">
              <p className="text-[12px] text-textSecondary">Total Pembayaran</p>
              <p className="text-[26px] font-extrabold text-primary">{formatCurrency(total)}</p>
            </div>

            <div className="bg-white p-3 border border-borderBase rounded-xl">
              <img 
                src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=TokoLubis-QRIS-${total}-${currentOrder?.id}`} 
                alt="QRIS QR Code" 
                className="w-48 h-48"
              />
            </div>

            <div className="space-y-1 text-[11px] text-textMuted leading-relaxed">
              <p className="font-semibold text-textSecondary">Toko Lubis QRIS</p>
              <p>Scan menggunakan GoPay, OVO, Dana, LinkAja, atau Mobile Banking</p>
            </div>

            <button
              onClick={handleConfirmPayment}
              className="w-full py-3 bg-success hover:bg-successHover text-white text-[14px] font-bold rounded-xl active:scale-[0.98] transition-all duration-200 shadow-md shadow-success/20"
            >
              Simulasikan Pembayaran Sukses
            </button>
          </div>
        </div>
      )}

      {/* Receipt Modal Overlay */}
      {paymentStep === 'receipt' && currentOrder && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl flex flex-col space-y-4 my-8">
            <div className="flex justify-between w-full border-b border-borderBase pb-3">
              <h3 className="text-[16px] font-bold text-textPrimary">Transaksi Sukses</h3>
              <span className="px-2.5 py-0.5 bg-green-50 border border-green-200 text-success text-[11px] font-bold rounded-full">Lunas</span>
            </div>

            {/* Thermal Receipt Visual Container */}
            <div className="bg-gray-50 border border-dashed border-gray-300 rounded-xl p-5 font-mono text-[12px] text-gray-800 space-y-3 leading-relaxed shadow-inner">
              <div className="text-center space-y-1 border-b border-dashed border-gray-300 pb-3">
                <p className="font-bold text-[14px] text-black uppercase">Toko Lubis</p>
                <p className="text-[10px]">Jl. Sembako Raya No. 9, Jakarta</p>
                <p className="text-[10px]">Telp: 0812-3456-7890</p>
              </div>

              <div className="space-y-0.5 text-[11px]">
                <div className="flex justify-between">
                  <span>No Order:</span>
                  <span className="font-bold">{currentOrder.id}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tanggal:</span>
                  <span>{currentOrder.date} {currentOrder.time}</span>
                </div>
                <div className="flex justify-between">
                  <span>Kasir:</span>
                  <span>Alexander S.</span>
                </div>
                <div className="flex justify-between">
                  <span>Tipe:</span>
                  <span>{currentOrder.type} {currentOrder.table && `(${currentOrder.table})`}</span>
                </div>
              </div>

              <div className="border-b border-dashed border-gray-300 pb-2 pt-2">
                <div className="flex justify-between text-black font-bold mb-1.5">
                  <span>Item</span>
                  <span>Total</span>
                </div>
                <div className="space-y-1.5 text-[11px]">
                  {currentOrder.items.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-start">
                      <div className="max-w-[70%]">
                        <p className="text-black">{item.name}</p>
                        <p className="text-gray-500">{item.quantity} x {formatCurrency(item.price)}</p>
                      </div>
                      <span>{formatCurrency(item.price * item.quantity)}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-1 text-[11px] border-b border-dashed border-gray-300 pb-2 pt-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>{formatCurrency(currentOrder.amount / (1 + (currentOrder.taxRate || 0.1)))}</span>
                </div>
                <div className="flex justify-between">
                  <span>Pajak (10%)</span>
                  <span>{formatCurrency((currentOrder.amount / (1 + (currentOrder.taxRate || 0.1))) * (currentOrder.taxRate || 0.1))}</span>
                </div>
                <div className="flex justify-between text-black font-bold text-[13px] pt-1">
                  <span>TOTAL</span>
                  <span>{formatCurrency(currentOrder.amount)}</span>
                </div>
              </div>

              <div className="text-center space-y-1 pt-2">
                <p className="font-bold text-black">Metode Pembayaran: {currentOrder.payment}</p>
                <p className="text-[10px] text-gray-500">*** Terima Kasih ***</p>
                <p className="text-[9px] text-gray-500">Powered by Toko Lubis POS</p>
              </div>
            </div>

            {/* Receipt Actions */}
            <div className="flex gap-3 pt-2">
              <button
                onClick={handlePrint}
                className="flex-1 py-3 border border-borderBase hover:bg-gray-50 text-textPrimary text-[13px] font-bold rounded-xl active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                <span className="material-symbols-rounded text-[18px]">print</span>
                Print Struk
              </button>
              <button
                onClick={handleFinishTransaction}
                className="flex-1 py-3 bg-primary hover:bg-primaryHover text-white text-[13px] font-bold rounded-xl active:scale-[0.98] transition-all shadow-md shadow-primary/10"
              >
                Transaksi Baru
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hidden Print-Only thermal receipt container */}
      {currentOrder && (
        <div id="thermal-receipt-print" className="font-mono text-[12px] text-black bg-white leading-relaxed">
          <div className="text-center" style={{ borderBottom: '1px dashed black', paddingBottom: '10px', marginBottom: '10px' }}>
            <p style={{ fontWeight: 'bold', fontSize: '16px', margin: '0' }}>TOKO LUBIS</p>
            <p style={{ fontSize: '10px', margin: '4px 0 0' }}>Jl. Sembako Raya No. 9, Jakarta</p>
            <p style={{ fontSize: '10px', margin: '2px 0 0' }}>Telp: 0812-3456-7890</p>
          </div>

          <div style={{ fontSize: '11px', lineHeight: '1.4', margin: '0 0 10px' }}>
            <p style={{ margin: '0' }}>No Order: {currentOrder.id}</p>
            <p style={{ margin: '0' }}>Tanggal : {currentOrder.date} {currentOrder.time}</p>
            <p style={{ margin: '0' }}>Kasir   : Alexander S.</p>
            <p style={{ margin: '0' }}>Tipe    : {currentOrder.type} {currentOrder.table && `(${currentOrder.table})`}</p>
          </div>

          <table style={{ width: '100%', borderBottom: '1px dashed black', paddingBottom: '10px', marginBottom: '10px', fontSize: '11px', textAlign: 'left' }}>
            <thead>
              <tr style={{ fontWeight: 'bold' }}>
                <th style={{ paddingBottom: '5px' }}>Item</th>
                <th style={{ textAlign: 'right', paddingBottom: '5px' }}>Total</th>
              </tr>
            </thead>
            <tbody>
              {currentOrder.items.map((item, idx) => (
                <tr key={idx}>
                  <td style={{ paddingBottom: '4px' }}>
                    <div>{item.name}</div>
                    <div style={{ color: '#555' }}>{item.quantity} x {formatCurrency(item.price)}</div>
                  </td>
                  <td style={{ textAlign: 'right', verticalAlign: 'top' }}>{formatCurrency(item.price * item.quantity)}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div style={{ fontSize: '11px', lineHeight: '1.5', borderBottom: '1px dashed black', paddingBottom: '10px', marginBottom: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Subtotal</span>
              <span>{formatCurrency(currentOrder.amount / (1 + (currentOrder.taxRate || 0.1)))}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Pajak (10%)</span>
              <span>{formatCurrency((currentOrder.amount / (1 + (currentOrder.taxRate || 0.1))) * (currentOrder.taxRate || 0.1))}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '13px', marginTop: '4px' }}>
              <span>TOTAL</span>
              <span>{formatCurrency(currentOrder.amount)}</span>
            </div>
          </div>

          <div className="text-center" style={{ fontSize: '11px', lineHeight: '1.4' }}>
            <p style={{ fontWeight: 'bold', margin: '0' }}>Metode Pembayaran: {currentOrder.payment}</p>
            <p style={{ margin: '6px 0 0', fontStyle: 'italic' }}>*** Terima Kasih ***</p>
            <p style={{ fontSize: '9px', margin: '2px 0 0', color: '#555' }}>Powered by Toko Lubis POS</p>
          </div>
        </div>
      )}
    </aside>
  );
}

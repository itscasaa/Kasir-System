import { useState, useMemo } from 'react';
import HistoryFilters from '../components/history/HistoryFilters';
import HistoryTable from '../components/history/HistoryTable';
import OrderDetailPanel from '../components/history/OrderDetailPanel';

export default function HistoryPage({ orders }) {
  const [activeDateTab, setActiveDateTab] = useState('Today');
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All Statuses');
  const [typeFilter, setTypeFilter] = useState('All Types');
  const [selectedOrderId, setSelectedOrderId] = useState('#ORD-3290');
  const [activeDetailTab, setActiveDetailTab] = useState('Details');

  const filteredOrders = useMemo(() => {
    return orders.filter((order) => {
      const matchesSearch =
        order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        order.customer.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus =
        statusFilter === 'All Statuses' || order.status === statusFilter;
      const matchesType =
        typeFilter === 'All Types' || order.type === typeFilter;
      return matchesSearch && matchesStatus && matchesType;
    });
  }, [searchQuery, statusFilter, typeFilter]);

  const selectedOrder = useMemo(() => {
    const found = filteredOrders.find((o) => o.id === selectedOrderId);
    return found || filteredOrders[0] || null;
  }, [filteredOrders, selectedOrderId]);

  const handleSelectOrder = (id) => setSelectedOrderId(id);

  const handlePrintReceipt = () => {
    if (selectedOrder) alert(`Printing receipt for ${selectedOrder.id}`);
  };

  const handleRefund = () => {
    if (!selectedOrder) return;
    if (selectedOrder.status === 'Completed') {
      alert(`Refund requested for ${selectedOrder.id}`);
    } else {
      alert('This order cannot be refunded again');
    }
  };

  return (
    <div className="flex flex-1 overflow-hidden flex-col lg:flex-row">
      {/* Left Panel */}
      <main className="flex-1 lg:w-[68%] overflow-y-auto bg-background flex flex-col">
        <HistoryFilters
          activeDateTab={activeDateTab}
          setActiveDateTab={setActiveDateTab}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          typeFilter={typeFilter}
          setTypeFilter={setTypeFilter}
        />
        <HistoryTable
          orders={filteredOrders}
          selectedOrderId={selectedOrder?.id}
          onSelectOrder={handleSelectOrder}
        />
      </main>

      {/* Right Panel */}
      <aside className="w-full lg:w-[360px] shrink-0 flex flex-col bg-surface border-t lg:border-t-0 lg:border-l border-borderBase overflow-hidden">
        <OrderDetailPanel
          selectedOrder={selectedOrder}
          activeDetailTab={activeDetailTab}
          setActiveDetailTab={setActiveDetailTab}
          onPrintReceipt={handlePrintReceipt}
          onRefund={handleRefund}
        />
      </aside>
    </div>
  );
}

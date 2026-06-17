import DashboardHeader from '../components/dashboard/DashboardHeader';
import DashboardKpiCards from '../components/dashboard/DashboardKpiCards';
import StaffTable from '../components/dashboard/StaffTable';
import StaffInsightsPanel from '../components/dashboard/StaffInsightsPanel';

export default function DashboardPage() {
  return (
    <div className="flex flex-1 overflow-hidden flex-col lg:flex-row">
      {/* Left Main Content */}
      <main className="flex-1 lg:w-[68%] overflow-y-auto bg-background p-6 lg:p-8 space-y-6">
        <DashboardHeader />
        <DashboardKpiCards />
        <StaffTable />
      </main>

      {/* Right Panel */}
      <StaffInsightsPanel />
    </div>
  );
}

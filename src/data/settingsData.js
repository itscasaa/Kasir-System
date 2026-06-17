export const defaultSettings = {
  storeName: 'Toko Lubis',
  currency: 'USD ($) - US Dollar',
  address: '123 Espresso Way, Downtown District, Metropolis, NY 10001'
};

export const currencyOptions = [
  'USD ($) - US Dollar',
  'EUR (€) - Euro',
  'GBP (£) - British Pound',
  'IDR (Rp) - Indonesian Rupiah'
];

export const businessHours = [
  { days: 'Monday - Friday', hours: '08:00 AM - 10:00 PM' },
  { days: 'Saturday - Sunday', hours: '09:00 AM - 11:00 PM' }
];

export const paymentMethodsSeed = [
  {
    id: 'stripe',
    name: 'Stripe',
    description: 'Connected via API \u2022 Processing 2.9% + 30\u00a2',
    icon: 'credit_card',
    enabled: true,
    color: 'primary'
  },
  {
    id: 'square',
    name: 'Square Terminal',
    description: 'Awaiting pairing with Terminal #01',
    icon: 'payments',
    enabled: false,
    color: 'muted'
  },
  {
    id: 'cash',
    name: 'Cash Payments',
    description: 'Standard cash drawer integration',
    icon: 'account_balance_wallet',
    enabled: true,
    color: 'success'
  }
];

export const securitySettingsSeed = [
  { id: 'twoFactor', label: 'Two-Factor Authentication', description: 'Require verification code for admin login', enabled: true },
  { id: 'autoLock', label: 'Auto Lock Terminal', description: 'Lock POS terminal after 15 minutes of inactivity', enabled: true },
  { id: 'refundApproval', label: 'Refund Approval', description: 'Require manager approval for refunds above $50', enabled: false }
];

export const sessionTimeoutOptions = ['5 minutes', '15 minutes', '30 minutes', '1 hour'];

export const printerDevices = [
  { id: 'receipt', name: 'Receipt Printer', status: 'Connected', device: 'Epson TM-T88VI', action: 'Test Print' },
  { id: 'kitchen', name: 'Kitchen Printer', status: 'Connected', device: 'Star Micronics TSP143', action: 'Test Print' },
  { id: 'drawer', name: 'Cash Drawer', status: 'Paired', device: 'Drawer Terminal #01', action: 'Open Drawer' }
];

export const permissionRoles = [
  { id: 'owner', label: 'Owner', abbr: 'OW', description: 'Full System Access', color: 'primary' },
  { id: 'manager', label: 'Manager', abbr: 'MG', description: 'Operational Controls', color: 'warning' },
  { id: 'cashier', label: 'Cashier', abbr: 'CS', description: 'Sales & Returns Only', color: 'success' }
];

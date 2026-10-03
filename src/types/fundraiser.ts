export interface Donation {
  id: string;
  donorName: string;
  isAnonymous: boolean;
  amount: number;
  email?: string;
  createdAt: string;
  paymentMethod: 'bank_transfer' | 'opay_transfer';
  status: 'verified' | 'pending';
  reference: string;
  likes: number;
}

export interface TransparencyItem {
  id: string;
  purpose: string;
  amount: number;
  percentage: number;
  description: string;
  iconName: string;
  status: 'Allocated' | 'In Progress' | 'Funded';
}

export interface BankAccountDetails {
  bankName: string;
  accountName: string;
  accountNumber: string;
  sortCode?: string;
  ussdCode?: string;
}

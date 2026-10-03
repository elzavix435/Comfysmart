import { Donation, TransparencyItem, BankAccountDetails } from '../types/fundraiser';

export const INITIAL_GOAL = 100000; // ₦100,000

export const TRANSPARENCY_BUDGET: TransparencyItem[] = [
  {
    id: 'budget-1',
    purpose: 'Stock / Product purchase',
    amount: 50000,
    percentage: 50,
    description: 'Procuring heavy-grade 380GSM cotton fleece fabric, sustainable ribbing, and initial production batch runs.',
    iconName: 'Package',
    status: 'In Progress'
  },
  {
    id: 'budget-2',
    purpose: 'Packaging',
    amount: 10000,
    percentage: 10,
    description: 'Custom luxury rigid boxes, embossed gold tissue paper wrapping, wax seals, and branded thank-you cards.',
    iconName: 'Box',
    status: 'In Progress'
  },
  {
    id: 'budget-3',
    purpose: 'Marketing',
    amount: 15000,
    percentage: 15,
    description: 'High-concept brand lookbook editorial shoot, micro-creator seeding in Lagos, and digital launch campaign ads.',
    iconName: 'Megaphone',
    status: 'In Progress'
  },
  {
    id: 'budget-4',
    purpose: 'Customized accessories',
    amount: 15000,
    percentage: 15,
    description: 'Branded woven labels, brass metallic aglets, engraved zipper pulls, and limited edition tote bags.',
    iconName: 'Sparkles',
    status: 'In Progress'
  },
  {
    id: 'budget-5',
    purpose: 'Logistics',
    amount: 10000,
    percentage: 10,
    description: 'Direct courier partnerships, protective shipping satchels, and seamless inter-state delivery setup.',
    iconName: 'Truck',
    status: 'In Progress'
  }
];

export const BANK_ACCOUNTS: BankAccountDetails[] = [
  {
    bankName: 'OPay Digital Services (Paycom)',
    accountName: 'COMFORTWORLD',
    accountNumber: '8126315241',
    ussdCode: '*955#'
  }
];

export const PRIMARY_OPAY_ACCOUNT = {
  bankName: 'OPay Digital Services (Paycom)',
  shortBankName: 'OPay',
  accountNumber: '8126315241',
  accountName: 'COMFORTWORLD',
  ussdCode: '*955#'
};

export const INITIAL_SUPPORTERS: Donation[] = [
  {
    id: 'don-001',
    donorName: 'First Backer',
    isAnonymous: false,
    amount: 1000,
    email: 'comfortworld.official@gmail.com',
    createdAt: '2026-10-03T10:00:00Z',
    paymentMethod: 'opay_transfer',
    status: 'verified',
    reference: 'CW-OPY-00001',
    likes: 3
  }
];

export const CONTACT_INFO = {
  phone: '+234 812 345 6789',
  phoneDisplay: '+234 (0) 812 345 6789',
  whatsappNumber: '2348123456789',
  email: 'comfortworld.official@gmail.com',
  instagram: 'https://instagram.com/comfortworld_ng',
  instagramHandle: '@comfortworld_ng',
  tiktok: 'https://tiktok.com/@comfortworld',
  tiktokHandle: '@comfortworld',
  location: 'Lagos & Abuja, Nigeria'
};

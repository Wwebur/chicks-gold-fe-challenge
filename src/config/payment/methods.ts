import { PaymentMethod } from '../../data/models/types';

export const paymentMethods: PaymentMethod[] = [
  {
    name: 'Visa',
    image: 'visa.png',
    alt: 'Visa payment method',
    width: 80,
    height: 30,
  },
  {
    name: 'Mastercard',
    image: 'mastercard.png',
    alt: 'Mastercard payment method',
    width: 60,
    height: 60,
  },
  {
    name: 'American Express',
    image: 'americanexpress.png',
    alt: 'American Express payment method',
    width: 80,
    height: 50,
  },
  {
    name: 'Skrill',
    image: 'skrill.png',
    alt: 'Skrill payment method',
    width: 80,
    height: 30,
  },
  {
    name: 'Crypto',
    image: 'cripto.png',
    alt: 'Cryptocurrency payment method',
    width: 80,
    height: 25,
  },
];

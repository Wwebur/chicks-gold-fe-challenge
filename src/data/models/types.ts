export interface Product {
  id: number;
  title: string;
  price: number;
  originalPrice: number | null;
  image: string;
  status: string;
  stockStatus: string;
  stockTooltip: string;
  featured: boolean;
  gameType: string;
  itemType: string;
  description: string;
  available: boolean;
}

export interface FooterLink {
  text: string;
  href: string;
}

export interface FooterSection {
  title: string;
  items: FooterLink[];
}

export interface PaymentMethod {
  name: string;
  image: string;
  alt: string;
  width: number;
  height: number;
}

import { IconType } from 'react-icons';

export interface SocialLink {
  platform: string;
  url: string;
  icon: IconType;
}

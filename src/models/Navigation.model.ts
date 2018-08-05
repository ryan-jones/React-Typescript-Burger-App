export interface INavItems {
  links: ILinkItem[];
}

export interface ILinkItem {
  link: string;
  name: string;
  active: boolean;
}

export const LINKS = [
  {
    active: true,
    link: '/',
    name: 'Burger Builder'
  },
  {
    active: false,
    link: '/',
    name: 'Checkout'
  },
]
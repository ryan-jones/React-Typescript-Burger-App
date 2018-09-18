export interface INavItems {
  links: ILinkItem[];
}

export interface ILinkItem {
  link: string;
  name: string;
}

export const LINKS = [
  {
    link: '/',
    name: 'Burger Builder'
  },
  {
    link: '/orders',
    name: 'Orders'
  },
]
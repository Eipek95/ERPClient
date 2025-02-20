export class MenuModel {
  name: string = '';
  icon: string = '';
  url: string = '';
  isTitle: boolean = false;
  subMenus: MenuModel[] = [];
}

export const Menus: MenuModel[] = [
  {
    name: 'Ana Sayfa',
    icon: 'fas fa-solid fa-home',
    url: '/',
    isTitle: false,
    subMenus: [],
  },

  {
    name: 'Ana Grup',
    icon: 'fas fa-layer-group',
    url: '',
    isTitle: false,
    subMenus: [
      {
        name: 'Müşteriler',
        icon: 'fas fa-solid fa-users',
        url: '/customers',
        isTitle: false,
        subMenus: [],
      },
      {
        name: 'Depolar',
        icon: 'fas fa-solid fa-warehouse',
        url: '/depots',
        isTitle: false,
        subMenus: [],
      },
      {
        name: 'Ürünler',
        icon: 'fas fa-solid fa-boxes',
        url: '/products',
        isTitle: false,
        subMenus: [],
      },
      {
        name: 'Reçeteler',
        icon: 'far fa-file-alt',
        url: '/recipes',
        isTitle: false,
        subMenus: [],
      },
    ],
  },
  {
    name: 'Siparişler',
    icon: 'fas fa-solid fa-clipboard-list',
    url: '/orders',
    isTitle: false,
    subMenus: [],
  },
  {
    name: 'Faturalar',
    icon: 'fas fa-solid fa-file-invoice',
    url: '/invoices',
    isTitle: false,
    subMenus: [
      {
        name: 'Alış Faturaları',
        icon: 'fas fa-solid fa-clipboard-list',
        url: '/invoices/purchase',
        isTitle: false,
        subMenus: [],
      },
      {
        name: 'Satış Faturaları',
        icon: 'fas fa-solid fa-clipboard-list',
        url: '/invoices/selling',
        isTitle: false,
        subMenus: [],
      },
    ],
  },
  {
    name: 'Font Awesome',
    icon: 'fab fa-fonticons-fi',
    url: 'https://fontawesome.com/v5/icons/fonticons-fi?f=brands&s=solid',
    isTitle: false,
    subMenus: [],
  },
];

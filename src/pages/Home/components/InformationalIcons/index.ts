export interface InformationalIconsType {
  id: number;
  nameIcon: string;
  text: string;
  color: 'yellowDark' | 'yellow' | 'baseSubTitle' | 'purple';
}

export const AllInformationalIcons: InformationalIconsType[] = [
  {
    id: 1,
    nameIcon: 'ShoppingCart',
    text: 'Compra simples e segura',
    color: 'yellowDark',
  },
  {
    id: 2,
    nameIcon: 'Package',
    text: 'Embalagem mantém o café intacto',
    color: 'baseSubTitle',
  },
  {
    id: 3,
    nameIcon: 'Timer',
    text: 'Entrega rápida e rastreada',
    color: 'yellow',
  },
  {
    id: 4,
    nameIcon: 'Coffee',
    text: 'O café chega fresquinho até você',
    color: 'purple',
  },
]
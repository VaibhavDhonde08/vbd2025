export interface Product {
  id: number;
  name: string;
  localName: string;
  price: number;
  unit: string;
  image: string;
  category: 'leafy' | 'root' | 'fruit' | 'exotic';
  farmerLocation: string;
}

export interface CartItem extends Product {
  quantity: number;
}

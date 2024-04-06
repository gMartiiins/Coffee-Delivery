import { createContext, ReactNode, useState } from 'react';
import image01 from '../assets/coffeesImg/image01.png'
import image02 from '../assets/coffeesImg/image02.png'
import image03 from '../assets/coffeesImg/image03.png'
import image04 from '../assets/coffeesImg/image04.png'
import image05 from '../assets/coffeesImg/image05.png'
import image06 from '../assets/coffeesImg/image06.png'
import image07 from '../assets/coffeesImg/image07.png'
import image08 from '../assets/coffeesImg/image08.png'
import image09 from '../assets/coffeesImg/image09.png'
import image10 from '../assets/coffeesImg/image10.png'
import image11 from '../assets/coffeesImg/image11.png'
import image12 from '../assets/coffeesImg/image12.png'
import image13 from '../assets/coffeesImg/image13.png'
import image14 from '../assets/coffeesImg/image14.png'

interface Product {
  image: string;
  nickCoffee1: string;
  nickCoffee2: string | null;
  nickCoffee3: string | null;
  nameCoffee: string;
  subtitleCoffee: string;
  value: number;
  initialValue: number;
  amount: number;
}

interface ProductCart {
  image: string;
  nameCoffee: string;
  amount: number;
  value: number;
  initialValue: number;
}

interface Values {
  totalitens: number;
  entrega: number;
  total: number;
}

interface AddressInfo {
  cep: string;
  rua: string;
  numero: string;
  bairro: string;
  cidade: string;
  uf: string;
}

interface ProductContextType {
  ProductsCart: ProductCart[];
  Products: Product[];
  handleDecrease: (AmountNumber: number) => void;
  handleIncrease: (AmountNumber: number) => void;
  handleDecreaseCart: (AmountNumber: number) => void;
  handleIncreaseCart: (AmountNumber: number) => void;
  handleAddToCart: (product: Product) => void;
  handleRemoveFromCart: (indexToRemove: number) => void;
  Values: Values; 
  calculateCartTotal: () => number 
  calculateCartTotalDelivery: () => number
  activeButton: string | null;
  setActiveButton: (buttonName: string) => void;
  addressInfo: AddressInfo;
  setAddressInfo: React.Dispatch<React.SetStateAction<AddressInfo>>;
  handleConfirmPedido: () => boolean;
}

export const ProductContext = createContext({} as ProductContextType);

interface ProductContextProviderProps {
  children: ReactNode;
}

export function ProductContextProvider({children}: ProductContextProviderProps) {

function handleDecrease(AmountNumber: number) {
    const updatedProducts = [...Products];
    if (updatedProducts[AmountNumber].amount > 1) {
      updatedProducts[AmountNumber].amount -= 1;
      setProducts(updatedProducts);
    }
}

function handleIncrease(AmountNumber: number) {
  const updatedProducts = [...Products];
  updatedProducts[AmountNumber].amount += 1;
  setProducts(updatedProducts);
}

function handleDecreaseCart(AmountNumber: number) {
  const updatedProductsCart = [...ProductsCart];
  if (updatedProductsCart[AmountNumber].amount > 1) {
    updatedProductsCart[AmountNumber].amount -= 1;
    updatedProductsCart[AmountNumber].value -= updatedProductsCart[AmountNumber].initialValue;
    setProductsCart(updatedProductsCart);
  }
}

function handleIncreaseCart(AmountNumber: number) {
  const updatedProductsCart = [...ProductsCart];
  updatedProductsCart[AmountNumber].amount += 1;
  updatedProductsCart[AmountNumber].value += updatedProductsCart[AmountNumber].initialValue;
  setProductsCart(updatedProductsCart);
}


function handleAddToCart(product: Product) {

  const totalValue = product.value * product.amount;


  const existingProductIndex = ProductsCart.findIndex(item => item.nameCoffee === product.nameCoffee);

  if (existingProductIndex === -1) { 

    setProductsCart(prevCart => [...prevCart, { ...product, amount: product.amount, value: totalValue }]);
  } else {
   
    const updatedCart = [...ProductsCart]; 
    updatedCart[existingProductIndex].amount += product.amount; 
    updatedCart[existingProductIndex].value += totalValue;
    setProductsCart(updatedCart);
  }
}

const handleRemoveFromCart = (indexToRemove: number) => {
  const updatedCart = [...ProductsCart];
  updatedCart.splice(indexToRemove, 1);
  setProductsCart(updatedCart); 
};

const calculateCartTotal = () => {
  return ProductsCart.reduce((total, item) => total + item.value, 0);
};

const calculateCartTotalDelivery = () => {
  return calculateCartTotal() + Values.entrega;
};

const [addressInfo, setAddressInfo] = useState<AddressInfo>({
  cep: '',
  rua: '',
  numero: '',
  bairro: '',
  cidade: '',
  uf: '',
});

const handleConfirmPedido = () => {
  const isAddressInfoFilled =
    addressInfo.cep.trim() !== '' &&
    addressInfo.rua.trim() !== '' &&
    addressInfo.numero.trim() !== '' &&
    addressInfo.bairro.trim() !== '' &&
    addressInfo.cidade.trim() !== '' &&
    addressInfo.uf.trim() !== '';

    if (isAddressInfoFilled && activeButton !== null) {
    return true;
  } else {
    return false; 
  }
};

const [activeButton, setActiveButton] = useState<string | null>(null);

const [ProductsCart, setProductsCart] = useState<ProductCart[]>([]);

const [Products, setProducts] = useState<Product[]>([
    {
      image: image01,
      nickCoffee1: 'tradicional',
      nickCoffee2: null,
      nickCoffee3: null,
      nameCoffee: 'Expresso Tradicional',
      subtitleCoffee: 'O tradicional café feito com água quente e grãos moídos',
      value: 9.90,
      initialValue: 9.90,
      amount: 1
    },
    {
      image: image02,
      nickCoffee1: 'tradicional',
      nickCoffee2: null,
      nickCoffee3: null,
      nameCoffee: 'Expresso Americano',
      subtitleCoffee: 'Expresso diluído, menos intenso que o tradicional',
      value: 9.90,
      initialValue: 9.90,
      amount: 1
    },
    {

      image: image03,
      nickCoffee1: 'tradicional',
      nickCoffee2: null,
      nickCoffee3: null,
      nameCoffee: 'Expresso Cremoso',
      subtitleCoffee: 'Café expresso tradicional com espuma cremosa',
      value: 9.90,
      initialValue: 9.90,
      amount: 1
    },
    {

      image: image04,
      nickCoffee1: 'tradicional',
      nickCoffee2: 'GELADO',
      nickCoffee3: null,
      nameCoffee: 'Expresso Gelado',
      subtitleCoffee: 'Bebida preparada com café expresso e cubos de gelo',
      value: 9.90,
      initialValue: 9.90,
      amount: 1
    },
    {

      image: image05,
      nickCoffee1: 'tradicional',
      nickCoffee2: 'COM LEITE',
      nickCoffee3: null,
      nameCoffee: 'Café com Leite',
      subtitleCoffee: 'Meio a meio de expresso tradicional com leite vaporizado',
      value: 9.90,
      initialValue: 9.90,
      amount: 1
    },
    {

      image: image06,
      nickCoffee1: 'tradicional',
      nickCoffee2: 'com late',
      nickCoffee3: null,
      nameCoffee: 'Latte',
      subtitleCoffee: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      value: 9.90,
      initialValue: 9.90,
      amount: 1
    },
    {

      image: image07,
      nickCoffee1: 'tradicional',
      nickCoffee2: 'com late',
      nickCoffee3: null,
      nameCoffee: 'Capuccino',
      subtitleCoffee: 'Bebida com canela feita de doses iguais de café, leite e espuma',
      value: 9.90,
      initialValue: 9.90,
      amount: 1
    },
    {

      image: image08,
      nickCoffee1: 'tradicional',
      nickCoffee2: 'com late',
      nickCoffee3: null,
      nameCoffee: 'Macchiato',
      subtitleCoffee: 'Café expresso misturado com um pouco de leite quente e espuma',
      value: 9.90,
      initialValue: 9.90,
      amount: 1
    },
    {

      image: image09,
      nickCoffee1: 'tradicional',
      nickCoffee2: 'com late',
      nickCoffee3: null,
      nameCoffee: 'Mocaccino',
      subtitleCoffee: 'Café expresso com calda de chocolate, pouco leite e espuma',
      value: 9.90,
      initialValue: 9.90,
      amount: 1
    },
    {

      image: image10,
      nickCoffee1: 'especial',
      nickCoffee2: 'com late',
      nickCoffee3: null,
      nameCoffee: 'Chocolate Quente',
      subtitleCoffee: 'Expresso diluído, menos intenso que o tradicional',
      value: 9.90,
      initialValue: 9.90,
      amount: 1
    },
    {

      image: image11,
      nickCoffee1: 'especial',
      nickCoffee2: 'alcoólico',
      nickCoffee3: 'gelado',
      nameCoffee: 'Cubano',
      subtitleCoffee: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
      value: 9.90,
      initialValue: 9.90,
      amount: 1
    },
    {

      image: image12,
      nickCoffee1: 'especial',
      nickCoffee2: null,
      nickCoffee3: null,
      nameCoffee: 'Havaiano',
      subtitleCoffee: 'Bebida adocicada preparada com café e leite de coco',
      value: 9.90,
      initialValue: 9.90,
      amount: 1
    },
    {

      image: image13,
      nickCoffee1: 'especial',
      nickCoffee2: null,
      nickCoffee3: null,
      nameCoffee: 'Árabe',
      subtitleCoffee: 'Bebida preparada com grãos de café árabe e especiarias',
      value: 9.90,
      initialValue: 9.90,
      amount: 1
    },
    {

      image: image14,
      nickCoffee1: 'especial',
      nickCoffee2: 'alcoólico',
      nickCoffee3: null,
      nameCoffee: 'Irlandês',
      subtitleCoffee: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
      value: 9.90,
      initialValue: 9.90,
      amount: 1
    },
]);

const [Values] = useState<Values>({
  totalitens: 0,
  entrega: 3.50,
  total: 0 
});

  return (
    <ProductContext.Provider value={{ Products, 
    ProductsCart,  
    handleDecrease, 
    handleIncrease, 
    handleDecreaseCart, 
    handleIncreaseCart, 
    Values, 
    handleAddToCart, 
    calculateCartTotal, 
    calculateCartTotalDelivery, 
    handleRemoveFromCart, 
    activeButton, 
    setActiveButton, 
    addressInfo, 
    setAddressInfo,
    handleConfirmPedido,
    }}>
      {children}
    </ProductContext.Provider>
  );
}
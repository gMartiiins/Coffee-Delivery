import { useContext } from 'react';
import { ProductContext } from '../../../../contexts/ProductContext';
import { AmoutCartContainer, AmoutContainer, ButtonAddCart, ButtonLess, ButtonPlus, CoffeeContainer, FooterContainer, NickContainer, ValorContainer } from './styles';
import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react';

export function Product() {
   
    const { Products, handleDecrease, handleIncrease, handleAddToCart} = useContext(ProductContext);
    
    return (
        <>
            {Products.map((product, index) => (
                <CoffeeContainer key={index}>
                    <img className='productImage' src={product.image} alt="" />
                    <NickContainer>
                        <span className='nickCoffee'>{product.nickCoffee1}</span>
                        {product.nickCoffee2 && <span className='nickCoffee'>{product.nickCoffee2}</span>}
                        {product.nickCoffee3 && <span className='nickCoffee'>{product.nickCoffee3}</span>}
                    </NickContainer>
                    <p>{product.nameCoffee}</p>
                    <p>{product.subtitleCoffee}</p>
                    <FooterContainer>
                        <ValorContainer>
                            <span className='simbol'>R$</span>
                            <span className='value'>{`${product.value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}</span>
                        </ValorContainer>

                        <AmoutCartContainer>
                            <AmoutContainer>
                                <ButtonLess type='button' onClick={() => handleDecrease(index)}>
                                    <Minus 
                                        size={14} 
                                        weight="bold" 
                                    />
                                </ButtonLess>
                                <span>{product.amount}</span>
                                <ButtonPlus type='button' onClick={() => handleIncrease(index)}>
                                    <Plus 
                                        size={14} 
                                        weight="bold" 
                                    />
                                </ButtonPlus>
                            </AmoutContainer>
                            <ButtonAddCart type='button'  onClick={() => handleAddToCart(product)}>
                                <ShoppingCartSimple
                                    size={22} 
                                    weight="fill" 
                                    color='white'
                                />
                            </ButtonAddCart>
                        </AmoutCartContainer>
                    </FooterContainer>
                </CoffeeContainer>
            ))}   
        </>
    );
}
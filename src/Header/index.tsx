import { HeaderContainer, LocalCartContainer, LocalContainer, NumberItens } from './styles'
import Logo from '../assets/Logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';


export function Header() {

    const { ProductsCart } = useContext(ProductContext);
    
    return (

        <HeaderContainer>
            <NavLink to="/" title="Coffee Delivery">
                <button>
                    <img src={Logo} alt="" />
                </button>
            </NavLink>
            <LocalCartContainer>
                <LocalContainer>
                    <MapPin
                        size={22} 
                    weight="fill" />
                    Goioerê, PR
                </LocalContainer>
                    
                    
                <nav>
                    <NavLink to="/Cart" title="Seu Carrinho">
                        {ProductsCart.length > 0 && (   
                            <NumberItens>
                                <span>{ProductsCart.reduce((total, item) => total + item.amount, 0)}</span> 
                            </NumberItens>
                        )}
                        <ShoppingCart 
                            size={22} 
                            weight="fill" 
                        />
                    </NavLink>
                </nav>   
            </LocalCartContainer>
        </HeaderContainer>
    )
}
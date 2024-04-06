
import { useContext } from 'react';
import { ConfirmButton, ConfirmPayContainer, ProductsAddConfirmPayContainer, ProductsAddContainer, ValueBox1, ValueBox2, ValueBox3 } from './styles'
import { ProductContext } from '../../../../contexts/ProductContext';
import { Pedido } from '../Pedido/'
import { NavLink } from 'react-router-dom';



export function OrderInfo(){
    
    const { ProductsCart, Values, calculateCartTotal, calculateCartTotalDelivery, handleConfirmPedido } = useContext(ProductContext);
    
    const isPedidoConfirmado = handleConfirmPedido();

    const handleConfirmButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    
        if ( ProductsCart.length === 0) {
            event.preventDefault();
            alert('Seu carrinho está vazio. Adicione itens antes de confirmar o pedido.');
        }
    }

    return (
        <>   
            <ProductsAddConfirmPayContainer>
                <ProductsAddContainer>
                    <Pedido/>
                </ProductsAddContainer>

                <ConfirmPayContainer>
                    <ValueBox1>
                        <p>Total de itens</p>
                        <p>{`R$ ${calculateCartTotal().toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}</p>
                    </ValueBox1>
                    <ValueBox2>
                        <p>Entrega</p>
                        <p>{`R$ ${Values.entrega.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}</p>
                    </ValueBox2>
                    <ValueBox3>
                        <p>Total</p>
                        <p>{ProductsCart.length > 0 ? `R$ ${calculateCartTotalDelivery().toLocaleString('pt-BR', { minimumFractionDigits: 2 })}` : 'R$ 0,00'}</p>
                    </ValueBox3>
                </ConfirmPayContainer>
                <NavLink to={isPedidoConfirmado ? "/PedidoConfirmado" : ""} title="Confirmar Pedido">
                    <ConfirmButton type="submit" disabled={!isPedidoConfirmado}  onClick={handleConfirmButtonClick} className={isPedidoConfirmado ? '' : 'disabled'}>
                        <p>Confirmar Pedido</p>
                    </ConfirmButton>
                </NavLink>
            </ProductsAddConfirmPayContainer>
        </> 
    )
}
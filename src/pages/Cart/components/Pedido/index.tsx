
import { AmoutContainer, ButtonLess, DetalhesContainer1, DetalhesContainer2, DetalhesContainer3, FraseNoItems, ImageBox, Product, ProductContainer,  RemoveItem, ValuePedido } from './styles'

import { ButtonPlus } from '../../../Home/components/Product/styles'
import { Minus, Plus, Trash } from 'phosphor-react'
import { useContext } from 'react';
import { ProductContext } from '../../../../contexts/ProductContext';

export function Pedido(){

  const { ProductsCart, handleDecreaseCart, handleIncreaseCart, handleRemoveFromCart } = useContext(ProductContext);

    return (
      <>
        {ProductsCart.length === 0 ? (
          <FraseNoItems>Nenhum café no carrinho</FraseNoItems>
          ) : (
            ProductsCart.map((product, index) => (
              <ProductContainer key={index}>
                <Product>
                  <DetalhesContainer1>
                    <ImageBox>
                      <img src={product.image} alt="" />
                    </ImageBox>
                    <DetalhesContainer2>
                      <p>{product.nameCoffee}</p>
                      <DetalhesContainer3>
                        <AmoutContainer>
                          <ButtonLess type='button' onClick={() => handleDecreaseCart(index)}>
                            <Minus size={14} weight="bold" />
                          </ButtonLess>
                          <span>{product.amount}</span>
                          <ButtonPlus type='button' onClick={() => handleIncreaseCart(index)}>
                            <Plus size={14} weight="bold" />
                          </ButtonPlus>
                        </AmoutContainer>
                        <RemoveItem type="button" onClick={() => handleRemoveFromCart(index)}>
                          <Trash size={16} />
                          <p>Remover</p>
                        </RemoveItem>
                      </DetalhesContainer3>
                    </DetalhesContainer2>
                  </DetalhesContainer1>
                  <ValuePedido>
                  <p>{`R$ ${product.value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}</p>
                  </ValuePedido>
                </Product>
              </ProductContainer>
            ))
          )
        }
      </>
    );
}
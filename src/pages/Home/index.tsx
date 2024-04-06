import { CoffeeText, ProductContainer, HomeContainer, BodyContainer } from './styles'
import { Banner } from './components/Banner'
import { Product } from './components/Product'

export function Home() {
    return (
        <HomeContainer>
            <Banner
                title='Encontre o café perfeito para qualquer hora do dia'
                subtitle='Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora'
                cartText='Compra simples e segura'
                boxText='Embalagem mantém o café intacto'
                timerText='Entrega rápida e rastreada'
                coffeeText='O café chega fresquinho até você'
            />
            <BodyContainer>
                <CoffeeText>
                    <p>Nossos Cafés</p>
                </CoffeeText>
                <ProductContainer>
                    <Product/>  
                </ProductContainer>
            </BodyContainer>
        </HomeContainer>
    )
}
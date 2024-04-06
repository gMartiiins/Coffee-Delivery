
import { AddressContainer, CartForm, CompletedAddress, CompletedAddressContainer, ConfirmContainer, SelectedCoffee, SelectedCoffeeContainer} from './styles'

import { PersonalInfo } from './components/PersonalInfo'
import { OrderInfo } from './components/OrderInfo'

export function Cart(){
    
    return (
        <>
            <CartForm>
                <AddressContainer>
                    <CompletedAddressContainer>
                        <CompletedAddress>Complete seu pedido</CompletedAddress>
                    </CompletedAddressContainer>
                    <PersonalInfo/>
                </AddressContainer>
                < ConfirmContainer>
                    <SelectedCoffeeContainer>
                        <SelectedCoffee>Cafés selecionados</SelectedCoffee>
                    </SelectedCoffeeContainer>
                    <OrderInfo/>
                </ConfirmContainer>
            </CartForm>
        </>    
    )
}
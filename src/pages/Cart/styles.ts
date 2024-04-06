import styled from 'styled-components'

export const CompletedAddressContainer = styled.div`
    display: flex;  
    height: 93px;
`
export const CompletedAddress= styled.p`  
    display: flex;
    margin: 50px 0 15px 0;
    align-items: center;
    font-size: 18px;
    font-family: 'Baloo 2', sans-serif;
`
export const SelectedCoffeeContainer= styled.div`
    display: flex;
   
    height: 93px;
`
export const SelectedCoffee= styled.p`
    display: flex;
    margin: 50px 0 15px 0;
    align-items: center;
    font-size: 18px;
    font-family: 'Baloo 2', sans-serif;
  
`
export const CartForm = styled.form`
    display: flex;
    flex-direction: row;
    justify-content:center;
    min-width: 578px;
    gap: 6.25rem;
    @media (max-width: 1255px) {
        flex-direction: column;
        align-items: center;
        gap: 1px;
        padding-bottom: 20px;
        padding-left: 10px;
        padding-right: 10px;
}
`
export const AddressContainer = styled.form`
display: flex;
flex-direction: column;
`
export const ConfirmContainer = styled.form`
display: flex;
flex-direction: column;
`
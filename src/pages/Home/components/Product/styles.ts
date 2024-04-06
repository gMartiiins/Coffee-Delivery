import styled from 'styled-components'


export const CoffeeContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 6.875rem;
    position: relative;
    margin-top: 0.625rem;
    width: 16rem;
    height: 19.375rem;
    background-color: ${(props) => props.theme['base-card']}; 
    border-radius: 0.375rem 2.25rem 0.375rem 2.25rem;   
    
    img[src*="image"] {
        position: absolute;
        top: -1.25rem; 
        width: 7.5rem;
        height: 7.5rem;
 }
.nickCoffee {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.688rem;
    background-color: ${(props) => props.theme['yellow-light']}; 
    color: ${(props) => props.theme['yellow-dark']}; 
    font-family: 'Roboto', sans-serif;
    font-size: 0.688rem;
    font-weight: 700;
    text-transform: uppercase;
    height: 1.313rem;
    border-radius: 3.125rem;
 }
   
 p:nth-of-type(1) {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.313rem;
    color: ${(props) => props.theme['base-subtitle']};
    padding-bottom: 0.313rem;
  }

  p:nth-of-type(2) {
    width: 13.813rem;
    font-family: 'Roboto', sans-serif;
    font-size: 0.938rem;
    text-align: center;
    color: ${(props) => props.theme['base-label']};
  }
`
export const NickContainer = styled.div`
    display: flex;  
    justify-content: space-between;
    padding-bottom: 0.688rem;
    gap: 5px;    
`
export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2.063rem;
  width: 13rem;
  height: 2.375rem;
`
export const ValorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4.188rem;
  height: 1.938rem;
  gap: 0.2rem;
 
.simbol {
  padding-top: 4px;
  font-family: 'Roboto', sans-serif;
  font-size: 13px;
  font-weight: 500;
  color: ${(props) => props.theme['base-text']};
}
.value {
  font-family: 'Baloo 2',sans-serif;
  font-size: 1.5rem;
  font-weight: 800;
  color: ${(props) => props.theme['base-text']};
 }

`
export const AmoutCartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 7.375rem;
  height: 100%;
  gap: 0.5rem;
`


export const AmoutContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${(props) => props.theme['base-button']};
  width: 4.5rem;
  height: 100%;
  border-radius: 6px;

`
export const BaseButtons = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: ${(props) => props.theme['purple']};
  border: 0;
  background-color: transparent;
  cursor: pointer;
`
export const ButtonLess = styled(BaseButtons)`

  &:hover{
    color: ${(props) => props.theme['purple-dark']};
}
`
export const ButtonPlus= styled(BaseButtons)`
  &:hover{
    color: ${(props) => props.theme['purple-dark']};
}

`
export const ButtonAddCart = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme['purple-dark']};
  width: 2.375rem;
  height: 2.375rem;
  border: 0;
  cursor: pointer;
  border-radius: 6px;
  transition: background-color 0.2s;
  &:hover{
    background-color: ${(props) => props.theme['purple']}
  }
img[src*="ImgCart"] {
  width: 19.74px;
  height: 17.88px;
}
`

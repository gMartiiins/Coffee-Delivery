import styled from 'styled-components'


export const FraseNoItems = styled.text`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 100%;
color: ${(props) => props.theme['purple']};
font-size: 23px;
font-family: 'Baloo 2', sans-serif;
text-transform: uppercase;
`
export const ProductContainer = styled.div`
    width: 100%;
    padding: 24px 0 24px 0 ;
    border-bottom: 2px solid  ${(props) => props.theme['base-button']};  
`
export const Product = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 80px;
`
export const DetalhesContainer1 = styled.div`
display: flex;
align-items: center;
padding: 0 5px;
gap: 20px;
`
export const DetalhesContainer2 = styled.div`
display: flex;
flex-direction: column;
padding: 0 5px;
gap: 13px;
font-family: 'Roboto', sans-serif;
font-weight: 400;
font-size: 16px;
`
export const DetalhesContainer3 = styled.div`
display: flex;
gap: 10px;

    span{
        color:  ${(props) => props.theme['base-text']};
    }

`
export const ImageBox = styled.div`
width: 64px;
height: 64px;

 img{
    width: 100%;
    height: 100%;
    width: 100%;
    height: 100%;
 }
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
  width: 72px;
  height: 32px;
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
export const ButtonPlus = styled(BaseButtons)`
    &:hover{
        color: ${(props) => props.theme['purple-dark']};
    }
`
export const RemoveButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme['base-button']};
    width: 91px;
    height: 32px;
    border: none;
    border-radius: 6px;
    color:  ${(props) => props.theme['purple']};
    gap: 5px;
    transition: background-color 0.2s;
    &:hover{
        background-color: ${(props) => props.theme['base-hover']};
    }
    p:nth-of-type(1) {
    text-transform: uppercase;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 12px;
    color:  ${(props) => props.theme['base-text']};
   
}
`
export const ValuePedido= styled.div`
display: flex;
height: 100%;
padding: 7px 5px 0 0;
font-family: 'Roboto', sans-serif;
font-weight: bold;
font-size: 16px;
`
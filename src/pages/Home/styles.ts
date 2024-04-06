import styled from 'styled-components'

export const HomeContainer = styled.div`
display: flex;
flex-direction: column;
`
export const BodyContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100%;
background-color: ${(props) => props.theme['background']};

@media (max-width: 59.625rem) {
    padding: 0;
}
`
export const CoffeeText = styled.div`
display: flex;
align-items: center;
font-family: 'Baloo 2', sans-serif;
padding-bottom: 2.5rem;
width: 61%;

@media (max-width: 59.625rem) {
    padding: 4rem 0; 
    
 
}
@media (max-width:  1126px) {
    width: 85%;
}
p {
    font-size: 2rem; 
    color:${(props) => props.theme['base-subtitle']};   
}
`
export const ProductContainer = styled.div`
    width: 1200.400px;
    display: flex;
    justify-content: center;
    gap: 3rem;
    flex-wrap: wrap;
    padding-bottom: 13px;
 @media (max-width: 1126px) {
    width: 100%;
    justify-content: center;
}
@media (min-width: 2100px) {
    width: 100%;
   
}
`


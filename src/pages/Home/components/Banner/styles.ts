import styled from 'styled-components'


export const BannerContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 34rem;
    gap: 0.5rem;
    
    @media (max-width: 59.625rem) {
        flex-wrap: wrap;
        flex-wrap: wrap-reverse;
        padding-top: 45rem;
          
    }
`
export const BackgroundContainer = styled.div`
    position: absolute;
    height: 35rem;
    width: 100%;
    min-width: 36rem;
    z-index: -1;
    background-color: ${(props) => props.theme['background']};
    
    @media (max-width: 59.625rem) {
        margin-top: -40rem;
        height: 40rem; 
    }
    img{  
        width: 100%;
        height: 100%; 

    @media (max-width: 59.625rem) {
        object-fit:cover;
    }
   
}
`
export const TitleLegendsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 36.75rem;
    min-width: 36.128rem;
    color:${(props) => props.theme['base-text']};   
    gap: 4.5rem;

    @media (max-width: 59.625rem) {
    text-align: center;
    gap: 4rem;       
    }

`
export const TitleContainer = styled.div`
  min-width: 19.421rem;

    p:first-child{
        font-size: 3rem;
        font-family: 'Baloo 2', sans-serif;
        line-height: 1.1;
        padding-bottom: 1.5rem;
        color:${(props) => props.theme['base-title']};
    }
    p:last-child{
        font-size:  1.25rem ;
        font-family: 'Roboto', sans-serif;
        line-height: 1.1;    
        color:${(props) => props.theme['base-subtitle']};   
}
`
export const LegendsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.3rem;  
    
    @media (max-width: 59.625rem) {
    align-items: center;
    }
`
export const DivisionsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.625rem;
`

export const BaseIconTextContainer  = styled.div`
    align-items: center;
    display: flex;
    gap: 0.7rem;  
    width: 18.125rem;  
`

export const IconTextContainer1  = styled(BaseIconTextContainer)`
    width: 15.625rem;
`
export const IconTextContainer2  = styled(BaseIconTextContainer)`
    width: 18.75rem;
`
export const BaseIcons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    color: white;  
`
export const IconCart = styled(BaseIcons)`
    background-color: ${(props) => props.theme['yellow-dark']};
`
export const IconBox = styled(BaseIcons)`
    background-color: ${(props) => props.theme['base-text']};
`
export const IconTimer = styled(BaseIcons)`
    background-color: ${(props) => props.theme['yellow']};
`
export const IconCoffee = styled(BaseIcons)`
    background-color: ${(props) => props.theme['purple']};
`
export const ImageContainer = styled.div`
    width: 29.75rem;

    img {
        width: 100%;
        min-width: 23rem;

    }
`

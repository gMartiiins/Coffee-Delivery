import styled from 'styled-components'

interface CreditCardBoxProps {
   isActive: boolean;
  }
  interface OptionalTextProps {
    isVisible: boolean;
  }

export const AdressPayCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 36.938rem;
    gap: 0.75rem;
`
export const AdressContainer = styled.div`
    display: flex;
    flex-direction: column;
    color: ${(props) => props.theme['yellow-dark']};
    width: 100%;
    height: 23.25rem;
    background-color: ${(props) => props.theme['base-card']};
    border-radius: 6px;
    padding: 40px;
    gap: 6px;
    
`
export const IconTextContainer = styled.div`
display: flex;

`
export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;

    p:nth-child(1) {
        font-size: 16px;
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        color: ${(props) => props.theme['base-subtitle']};
    }
    p:nth-child(2) {
        font-size: 14px;
        color: ${(props) => props.theme['base-text']};
    }

`
export const InformationsContainer1 = styled.div`
    display: flex;
    flex-direction: column;
    padding-top:  32px;
    gap: 16px; 
    
`;
export const InformationsContainer2 = styled.div`
    display: flex;
    padding-top:  16px;
    gap: 16px; 
    
`;
export const InformationsContainer3 = styled.div`
    display: flex;
    padding-top:  16px;
    gap: 16px; 
   
`;
export const BaseInput = styled.input`
    padding: 10px;
    height: 42px;
    border: solid 2px ${(props) => props.theme['base-button']};;
    border-radius: 4px;  
    background-color: ${(props) => props.theme['base-input']}; 

    &:focus {
    outline: solid 2px ${(props) => props.theme['yellow-dark']};
    box-shadow: none;
    
  }

    &::placeholder {
        color: ${(props) => props.theme['base-label']};
    }
`
export const ComplementoBox = styled.div`
   
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    height: 42px;
    border: solid 2px ${(props) => props.theme['base-button']};;
    border-radius: 4px;  
    background-color: ${(props) => props.theme['base-input']}; 
`

export const OptionalText = styled.span<OptionalTextProps>`
    padding: 10px;
    font-size: 12px;
    color: ${(props) => props.theme['base-label']};
    font-style: italic; 
    display: ${({ isVisible }) => (isVisible ? 'none' : 'block')};
`;

export const CepInput = styled(BaseInput)`
    width: 200px;
    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

`;
export const RuaInput = styled(BaseInput)`
    width: 100%;
`
export const NumeroInput = styled(BaseInput)`
    width: 200px;
    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`
export const ComplementoInput = styled(BaseInput)`
    width: 100%;
    border: none;
`
export const BairroInput = styled(BaseInput)`
    width: 200px;
`
export const CidadeInput = styled(BaseInput)`
    width: 100%;   
`
export const UFInput = styled(BaseInput)`
    width: 60px;
`
export const ContanerTextBase = styled.span`
display: flex;
justify-content: end;
align-items: start;
width: 200px;

p {
    font-size: 13px;
    position: absolute;
    color: #c00000;  
    padding: 2px 5px 0 0;
}
`
export const Type1 = styled(ContanerTextBase)`
width: 200px;
`
export const Type2  = styled(ContanerTextBase)` 
width: 100%;
`
export const Type3  = styled(ContanerTextBase)`
width: 60px;
`
export const Type4  = styled(ContanerTextBase)`
`
export const PayCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 12.938rem;
    padding: 40px;
    gap: 32px;
    background-color: ${(props) => props.theme['base-card']};
    border-radius: 6px;
    color: ${(props) => props.theme['purple']};
`
export const TitlePayContainer = styled.div`
display: flex;
`
export const TextPayBox = styled.div`
padding-left: 8px;
display: flex;
flex-direction: column;

    p:nth-child(1) {
        font-size: 16px;
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        color: ${(props) => props.theme['base-subtitle']};
    }
    p:nth-child(2) {
        font-size: 14px;
        color: ${(props) => props.theme['base-text']};
    }
`
export const Payments = styled.div`
display: flex;
gap: 10px;
`
export const PaymentButtons = styled.button<CreditCardBoxProps>`

    width: 100%;
    height: 51px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    color: ${(props) => props.theme['purple']};
    text-transform: uppercase;
    cursor: pointer;
    border: none;
    border: 2px solid ${(props) => props.isActive ? props.theme['purple'] : props.theme['base-button']};
    background: ${(props) => props.isActive ? props.theme['purple-light'] : props.theme['base-button']};

    p {
        font-size: 12px;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        color: ${(props) => props.theme['base-text']};
    }
`
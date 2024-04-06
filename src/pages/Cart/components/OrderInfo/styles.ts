import styled from 'styled-components'


export const ProductsAddConfirmPayContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px 40px 40px 40px;
    width: 28rem;
    height: 498px;
    gap: 24px;
    background-color: ${(props) => props.theme['base-card']};
    border-radius: 6px 44px 6px 44px;
    
`
export const ProductsAddContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 260px;
    overflow-y: auto;
    scrollbar-width: none; 
`
export const ConfirmPayContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`
export const TotalValue = styled.div`
display: flex;
justify-content: space-between; 
font-size: 14px;
`
export const ValueBox1 = styled(TotalValue)`
`
export const ValueBox2= styled(TotalValue)`
`
export const ValueBox3= styled(TotalValue)`
font-size: 20px;
font-weight: bold;
`
export const ConfirmButton = styled.button`
    width: 100%;
    height: 46px;
    border: none;
    border-radius: 6px;
    background-color: ${(props) => props.theme['yellow']};
    text-transform: uppercase;
    color: ${(props) => props.theme['white']};
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: ${(props) => props.theme['yellow-dark']};
        
    }

    &.disabled {
        opacity: 0.5;
        
        cursor: not-allowed;
    }
    &.disabled:hover {
        background-color: ${(props) => props.theme['yellow']};
    }
`;

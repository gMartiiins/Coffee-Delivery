import styled from 'styled-components'

export const RealizadoContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
export const FraseBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:flex-end;
    width: 1185px;
    height: 150px;

    @media (max-width: 1204px) {
        width: 522px;
        justify-content:center;
        height: 120px;
    }

    p:first-child{
    font-size: 32px;
    font-family: 'Baloo 2', sans-serif;
    color: ${(props) => props.theme['yellow-dark']};
    }
    p:last-child{
    font-size: 20px;
    font-family: 'Roboto', sans-serif;
}
`
export const EndereçoImage= styled.div`
gap: 180px;
display: flex;
align-items: center;
justify-content: space-between;

@media (max-width: 1204px) {
    flex-direction: column;
    gap: 10px;
    }

`
export const BorderGradient = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 35px;
    width: 526px;
    height: 270px;
    border-radius: 6px 36px 6px 36px; 
    background: linear-gradient(135deg, ${(props) => props.theme['yellow']}, ${(props) => props.theme['purple']}); 
`
export const ContainerInfo = styled.div`
    display: flex;
    background-color: white;
    flex-direction: column;
    justify-content: center;
    width: 522px;
    height: 266px;
    padding: 38px;
    border-radius: 5px 35px 4px 35px;     
`
export const InfoBox = styled.div`
     display: flex;
    flex-direction: column;
    gap: 35px;

`
export const IconBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 100%;
    color: ${(props) => props.theme['white']};
`

export const MapPinBox = styled(IconBox)`
 background-color: ${(props) => props.theme['purple']};
`
export const TimerBox = styled(IconBox)`
 background-color: ${(props) => props.theme['yellow']};
`
export const MoneyBox = styled(IconBox)`
 background-color: ${(props) => props.theme['yellow-dark']};
`
export const IconTextBox = styled.div`
    display: flex;
    align-items: center;
`
export const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 15px;
    gap: 2px;
   
`
export const ImageBox = styled.div`
width: 492px;
height: 293px;

`

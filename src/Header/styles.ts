import styled from "styled-components";

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 6.5rem;
    width: 100%;
    min-width: 576px;
    gap: 11rem;
    background-color: ${(props) => props.theme['background']};

    button{
        border: 0;
        background-color: transparent;
        cursor: pointer;
    }
`
export const LocalCartContainer = styled.div`
display: flex;
justify-content: space-between;
height: 2.375rem;
width: 12.063rem;
    nav{
        a{
            display: flex; 
            align-items: center;
            justify-content: center;
            width: 2.375rem;
            height: 100%;
            background-color: ${(props) => props.theme['yellow-light']};
            color: ${(props) => props.theme['yellow-dark']};
            border-radius: 0.375rem;
        }
    }
`
export const LocalContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 0.25rem;
padding: 0.5rem;
height: 100%;
width: 8.938rem;
background-color: ${(props) => props.theme['purple-light']};
border-radius: 0.375rem;
color: ${(props) => props.theme['purple']};
font-size: 16px;
`
export const NumberItens = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-left: 35px;
margin-bottom: 35px;
position: absolute;
background-color: ${(props) => props.theme['yellow-dark']};
width: 20px;
height: 20px;
border-radius: 100%;

span{
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 12px;
    color: ${(props) => props.theme['white']};
}
`

import { MapPin, Timer, CurrencyDollar } from 'phosphor-react'
import { BorderGradient, ContainerInfo, EndereçoImage, FraseBox, IconTextBox, ImageBox, InfoBox, MapPinBox, MoneyBox, RealizadoContainer, TextBox, TimerBox } from './styles'
import { useContext } from 'react';
import { ProductContext } from '../../contexts/ProductContext';
import entrega from '../../assets/imgEntrega/entrega.png';

export function PedidoConfirmado() {

    const { addressInfo, activeButton } = useContext(ProductContext);
    const { rua, numero, bairro, cidade, uf } = addressInfo;

    return (
      
        <RealizadoContainer>
            <FraseBox>
                <p>Uhu! Pedido confirmado</p>
                <p>Agora é só aguardar que logo o fcafé chegará até você</p>
            </FraseBox>
            <EndereçoImage>
                <BorderGradient>
                    <ContainerInfo>
                        <InfoBox>
                            <IconTextBox>
                                <MapPinBox>
                                    <MapPin
                                        size={15} 
                                        weight="fill" 
                                    />
                                </MapPinBox>
                                <TextBox>
                                    <p>
                                        Entrega em <b>{ rua } {numero}</b>
                                    </p>
                                    <p>
                                        {bairro} - {cidade}, {uf}
                                    </p>
                                </TextBox>
                            </IconTextBox>
                            <IconTextBox>
                                <TimerBox>
                                    <Timer
                                        size={15} 
                                        weight="fill" 
                                    />
                                </TimerBox>
                                <TextBox>
                                    <p>
                                        Privisão de entrega
                                    </p>
                                    <p>
                                        <b>20 min - 30 min</b>
                                    </p>
                                </TextBox>
                            </IconTextBox>
                            <IconTextBox>
                                <MoneyBox>
                                    <CurrencyDollar
                                        size={15} 
                                        weight="fill" 
                                    />
                                </MoneyBox>
                                <TextBox>
                                    <p>
                                        Pagamento na entrega
                                    </p>
                                    <p>
                                        <b>{activeButton}</b>
                                    </p>
                                </TextBox>
                            </IconTextBox>
                        </InfoBox>
                    </ContainerInfo>
                </BorderGradient>
                    <ImageBox>
                    <img src={entrega} alt="" />
                    </ImageBox>
            </EndereçoImage>            
        </RealizadoContainer>
    )
}
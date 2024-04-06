
import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from 'phosphor-react'
import { Type1, Type2, Type3 } from './styles'
import { AdressContainer, AdressPayCardContainer, BairroInput, CepInput, CidadeInput, ComplementoBox, ComplementoInput, IconTextContainer, InformationsContainer1, InformationsContainer2, InformationsContainer3, NumeroInput, OptionalText, PayCardContainer, PaymentButtons, Payments,  RuaInput, TextContainer, TextPayBox, TitlePayContainer, UFInput} from './styles'
import { useContext, useState } from 'react';
import { ProductContext } from '../../../../contexts/ProductContext';

export function PersonalInfo(){
    const { activeButton, setActiveButton} = useContext(ProductContext);
    const {addressInfo, setAddressInfo } = useContext(ProductContext);
    const [isInputFocused, setIsInputFocused] = useState(false);
    const [inputValue, setInputValue] = useState('');


    const handleCepInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setAddressInfo(prevAddressInfo => ({
        ...prevAddressInfo,
        cep: value,
      }));
    };
    const handleRuaInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setAddressInfo(prevAddressInfo => ({
          ...prevAddressInfo,
          rua: value,
        }));
      }; 
    const handleNumeroInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setAddressInfo(prevAddressInfo => ({
          ...prevAddressInfo,
          numero: value,
        }));
      }; 
    const handleCidadeInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setAddressInfo(prevAddressInfo => ({
          ...prevAddressInfo,
          cidade: value,
        }));
      };
    const handleBairronputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setAddressInfo(prevAddressInfo => ({
          ...prevAddressInfo,
          bairro: value,
        }));
      };
    const handleUfInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setAddressInfo(prevAddressInfo => ({
          ...prevAddressInfo,
          uf: value
        }));
      };
    const handleClick = (buttonName: string, event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault(); // Prevenir a recarga da página
        setActiveButton(buttonName);
      };
  
    const handleInputFocus = () => {
      setIsInputFocused(true);
    };
    const handleInputBlur = () => {
      setIsInputFocused(false);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
    };
  
  return (
    <>
      <AdressPayCardContainer>  
        <AdressContainer>
          <IconTextContainer>
            <MapPinLine 
              size={22}
            /> 
            <TextContainer>
                <p>Endereço de Entrega</p>
                <p>Informe o endereço onde deseja receber seu pedido</p>
            </TextContainer>
          </IconTextContainer>
            <InformationsContainer1>
              <Type1>
                <p>*</p> 
                <CepInput
                    type="number" 
                    placeholder="CEP" 
                    value={addressInfo.cep}
                    onChange={handleCepInputChange}
                />
                  
              </Type1>
              <Type2>
                <p>*</p> 
                <RuaInput 
                  placeholder="Rua"  
                  value={addressInfo.rua} 
                  onChange={handleRuaInputChange}
                />
              </Type2>  
            </InformationsContainer1>
            <InformationsContainer2>
              <Type1>
                <p>*</p> 
                <NumeroInput 
                  type="number"
                  placeholder="Número" 
                  value={addressInfo.numero} 
                  onChange={handleNumeroInputChange}
                />
              </Type1>  
                <ComplementoBox>
                <ComplementoInput
                  placeholder="Complemento"
                  onBlur={handleInputBlur} 
                  onFocus={handleInputFocus}
                  onChange={handleInputChange}
                />
                <OptionalText isVisible={isInputFocused || inputValue !== ''}>
                        Opcional
                </OptionalText>

                </ComplementoBox>
            </InformationsContainer2>
            <InformationsContainer3>
            <Type1>
              <p>*</p>    
              <BairroInput placeholder="Bairro" value={addressInfo.bairro} onChange={handleBairronputChange}/>
            </Type1>  
            <Type1>
              <p>*</p>   
              <CidadeInput placeholder="Cidade" value={addressInfo.cidade} onChange={handleCidadeInputChange}/>
            </Type1> 
            <Type3>
              <p>*</p>   
              <UFInput placeholder="UF" value={addressInfo.uf} onChange={handleUfInputChange}/>
            </Type3>
            </InformationsContainer3>
        </AdressContainer>
            
        <PayCardContainer>
          <TitlePayContainer>
            <CurrencyDollar 
              size={22}
            />
            <TextPayBox>
              <p>Pagamento</p>
              <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
            </TextPayBox>     
          </TitlePayContainer>
          <Payments>
            <PaymentButtons
              isActive={activeButton === 'Cartão de Crédito'}
              onClick={(e) => handleClick('Cartão de Crédito', e)}
            >
              <CreditCard/>
              <p>Cartão de Crédito</p>
            </PaymentButtons>
            <PaymentButtons
              isActive={activeButton === 'Cartão de Débito'}
              onClick={(e) => handleClick('Cartão de Débito', e)}
            >
              <Bank/>
              <p>Cartão de Débito</p>
            </PaymentButtons>
            <PaymentButtons
              isActive={activeButton === 'Dinheiro'}
              onClick={(e) => handleClick('Dinheiro', e)}
            >
              <Money/>
              <p>Dinheiro</p>
            </PaymentButtons>    
          </Payments>             
        </PayCardContainer>        
      </AdressPayCardContainer>
    </>   
  )
}
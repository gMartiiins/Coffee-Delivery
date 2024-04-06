import { DivisionsContainer, IconBox, IconCart, IconCoffee, IconTimer, ImageContainer, LegendsContainer, TitleContainer, TitleLegendsContainer, IconTextContainer2, IconTextContainer1, BackgroundContainer, BannerContainer } from './styles'
import Imagem from '../../../../assets/Imagem.png'
import Background from '../../../../assets/Background.png'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

interface BannerTypes {
    title: string;
    subtitle: string;
    cartText: string;
    boxText: string;
    timerText: string;
    coffeeText: string;
}

export function Banner({title, subtitle, cartText, boxText, timerText, coffeeText }: BannerTypes) {
    return (
    <>
        <BannerContainer>
            <BackgroundContainer>
                <img src={Background} alt="" />
            </BackgroundContainer>

            <TitleLegendsContainer>
                <TitleContainer>
                    <p>{title}</p>
                    <p>{subtitle}</p>
                </TitleContainer>
                <LegendsContainer>
                    <DivisionsContainer>
                        <IconTextContainer1>
                            <IconCart>
                                <ShoppingCart 
                                    size={17} 
                                    weight="fill" 
                                />
                            </IconCart>
                            <p>{cartText}</p>
                        </IconTextContainer1>
                        <IconTextContainer2>
                            <IconBox>
                                <Package 
                                    size={17} 
                                    weight="fill" 
                                />
                            </IconBox>
                            <p>{boxText}</p>
                        </IconTextContainer2>
                    </DivisionsContainer>
                    <DivisionsContainer>
                        <IconTextContainer1>
                            <IconTimer>
                                <Timer 
                                    size={17} 
                                    weight="fill" 
                                />
                            </IconTimer>
                            <p>{timerText}</p>
                        </IconTextContainer1>
                        <IconTextContainer2>
                            <IconCoffee>
                                <Coffee
                                    size={17} 
                                    weight="fill" 
                                />
                            </IconCoffee>
                                <p>{coffeeText}</p>
                        </IconTextContainer2>
                    </DivisionsContainer>   
                </LegendsContainer>
            </TitleLegendsContainer>
            <ImageContainer>
            <span>
                <img src={Imagem} alt="" />
            </span>
            </ImageContainer>
        </BannerContainer>
    </>
    ) 
}
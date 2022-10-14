import { Center } from "@chakra-ui/react";
import { Card, CardType } from "../AllCards/card";
import { Slide, Slider, SliderProps } from "../Slider";

interface CardsSliderProps {
   cards: CardType[];
}

export function CardSlider({ cards }: CardsSliderProps) {

   if(cards.length === 1) {
      return (
         <Center>
            <Card card={cards[0]} />
         </Center>
      )
   }

   const settings: SliderProps = {
      spaceBetween: 50,
      slidesPerView: cards.length < 3 ? cards.length : 3,
      navigation: cards.length >= 3,
      pagination: cards.length >= 3 && {
         clickable: true
      },
      draggable: cards.length >= 3,
      loop: cards.length >= 3,
   }

   return (
      <Slider settings={settings}>
         {cards.map((card) => (
            <Slide key={card.title}>
               <Card card={card}/>
            </Slide>
         ))}
      </Slider>
   )
}
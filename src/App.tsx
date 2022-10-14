import { Center, VStack } from "@chakra-ui/react"
import { HorizontalCard } from "./components/AllCards/Vcard/VerticalCard"
import { Header } from "./components/header"

import { horizontal_cards } from "./components/components-mock.json"
import { cards } from "./components/card-component-mock.json";
import { Card } from "./components/AllCards/card/Card"

import "swiper/css";
import { Slider, SliderProps, Slide } from "./components/Slider/";

function App() {

  const swiperNavigation: SliderProps = {
    spaceBetween: 50,
    slidesPerView: 3,
    navigation: true,
    pagination: {
      clickable: true,
    }
  }

  return (
    <div>
      <Header />
      <Center
        flexDir='column'
      >
        <VStack spacing="64px" marginY="64px">
          {horizontal_cards.map((horizontal_card) => (
            <HorizontalCard key={horizontal_card.title} card={horizontal_card} />
          ))}
          {cards.map((card: any) => (
            <Card key={card.title} card={card} />
          ))}
        </VStack>
      </Center>

      <Slider settings={swiperNavigation}>
        <Slide>
          teste 1
        </Slide>
        <Slide>
          Teste 2
        </Slide>
        <Slide>
          Teste 3
        </Slide>
        <Slide>
          Teste 4
        </Slide>
      </Slider>
    </div>
  )
}

export default App

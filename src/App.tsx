import { Box, Center, VStack } from "@chakra-ui/react"
import { HorizontalCard } from "./components/AllCards/Vcard/VerticalCard"
import { Header } from "./components/header"

import { horizontal_cards } from "./components/components-mock.json"
import { cards, cards_carrousel } from "./components/card-component-mock.json";
import { Card } from "./components/AllCards/card/Card"

import "swiper/css";
import { CardSlider } from "./components/carrousels/CardCarrousel";

function App() {

  return (
    <div>
      <Header />
      <Center
        flexDir='column'
      >
        <Box maxW="1280px">
           <VStack spacing="64px" marginY="64px">
          {horizontal_cards.map((horizontal_card) => (
            <HorizontalCard key={horizontal_card.title} card={horizontal_card} />
          ))}
          {cards.map((card: any) => (
            <Card key={card.title} card={card} />
          ))}
        </VStack>
        {cards_carrousel && <CardSlider cards={cards_carrousel}/>}
        </Box>
       
      </Center>

      
    </div>
  )
}

export default App

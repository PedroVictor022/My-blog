import { Center, VStack } from "@chakra-ui/react"
import { HorizontalCard } from "./components/card/VerticalCard"
import { Header } from "./components/header"

import { horizontal_cards } from "./components/components-mock.json"
import { cards } from "./components/card-component-mock.json";
import { Card } from "./components/card/Card"

function App() {

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
    </div>
  )
}

export default App

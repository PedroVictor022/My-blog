import { Center } from "@chakra-ui/react"
import { VerticalCard } from "./components/card/VerticalCard"
import { Header } from "./components/header"

import { vertical_cards } from "./components/components-mock.json"

function App() {

  return (
    <div>
      <Header />
      <Center>
        {vertical_cards.map((vertical_card) => (
          <VerticalCard key={vertical_card.title} card={vertical_card}/>
        ))}
      </Center>
    </div>
  )
}

export default App

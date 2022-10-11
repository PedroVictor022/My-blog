import { Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import theme from "../../styles/theme";
import { BtnLink } from "../Links";

export function Header() {
   const [isOpen, setIsOpen] = useState(false);

   const openMenu = () => {
      setIsOpen(!isOpen);

      isOpen ? console.log('Menu aberto') : console.log('Menu fechado')

   }

   return (
      <Flex
         p={{
            base: '4',
            md: '4',
            lg: '5'
         }}
         gap={{
            base: '5',
            md: '5',
            lg: '12'
         }}
         justify={{
            base: 'space-between',
            md: 'space-between',
            lg: 'space-between'
         }}
         bg="gray.800"
         color="whiteAlpha.900"
      >
         {/* <Image /> FAZER UMA LOGO */}
         <Flex
            flexDirection={{base: 'column', md: 'column', lg: 'row'}}
            gap={{base: '2', md: '2', lg: '8'}}
            align={['start', 'center', 'center']}
            justify={['start', 'start', 'center']}

         >
            <Heading>Tech Question</Heading>
            <Text>Artigos de programacao</Text>
         </Flex>

         {/* MENU */}
         <Flex
            display={{
               base: 'none',
               md: 'flex',
               lg: 'flex'
            }}
            gap={{
               base: '2',
               md: '9',
               lg:'12'
            }}
            mt='3'
         >

             {/* Criar componentes para estes botoes */}
            <Text>Artigos</Text>
            <Text>Docs</Text>
            <Text>Donate</Text>

         </Flex>

         <Flex
            display={{
               base: 'flex',
               md: 'none',
               lg: 'none'
            }}
         >
            <Button
               bg='blackAlpha.400'
               colorScheme="blackAlpha"
               onClick={openMenu}
            >Menu</Button>
         </Flex>

      </Flex>
   )
}
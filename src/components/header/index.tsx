import { Flex, Heading, Image, Text } from "@chakra-ui/react";

export function Header() {
   return (
      <Flex 
         p="5" 
         align="center" 
         justify="center" 
         gap="5"
         bg="blackAlpha.800"
         color="whiteAlpha.900"
      >
         {/* <Image /> FAZER UMA LOGO */}
         <Heading>Tech Question</Heading>
         <Text>Artigos de programacao</Text>
      </Flex>
   )
}
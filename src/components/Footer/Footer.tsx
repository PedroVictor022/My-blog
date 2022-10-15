import { Flex, Link, Text } from "@chakra-ui/react";
import { memo } from "react"

const Footer = () => {
   return (
      <Flex
         p="20px"
         width="100%"
         position="fixed"
         bottom="0"
         direction={['column', 'row']}
         justify={['center', 'space-between']}
         zIndex="10"
         backgroundColor="gray.900"
         color="whiteAlpha.900"
      >
         <Text
            textAlign="center"
         >Desenvolvido por Pedro Victor</Text>
        <Link  
         textAlign="center"
         textColor="blue.500"
        href="https://chakra-ui.com/" target="_blank">Chakra-UI docs</Link>
      </Flex>
   )
}

export default memo(Footer);
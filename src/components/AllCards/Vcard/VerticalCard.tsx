import { Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { customScrollbar } from "../../../styles/styles";

// Conteúdo que o componente vai receber
interface HorizontalCardProps {
   card: {
      image: {
         url: string;
         alt: string;
      };
      title: string;
      content: string;
      publishDate: string;
   }
}

export function HorizontalCard({ card }: HorizontalCardProps) {
   const { image, title, content, publishDate } = card;
   return (
      <Flex
         maxW="850px" maxH="400px" borderRadius="8px" bgColor="gray.800" color="whiteAlpha.900"
      >
         <Image 
            src={image.url} alt={image.alt} 
            maxW={["200px", "300px", "400px"]}
            maxH={["200px", "300px", "400px"]}
            objectFit="cover"
            borderLeftRadius="8px"
         />
         <VStack
            p='16px'
            spacing='16px'
            align="flex-start"
            maxW="350px"
            minW="200px"
            h={["200px", "300px", "400px"]}
         >
            <Text
               variant="subtitle"
            >{publishDate}</Text>
            <Heading size="lg">{title}</Heading>
            <Text overflow="auto"
               css={customScrollbar}
            >{content}</Text>
         </VStack>
      </Flex>
   )
}
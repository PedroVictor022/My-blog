import { useSinglePrismicDocument } from "@prismicio/react"

export const handleDocument = () => {
   const [document] = useSinglePrismicDocument('home');
   console.log(document)
}
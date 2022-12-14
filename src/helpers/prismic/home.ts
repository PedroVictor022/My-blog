import { useSinglePrismicDocument } from "@prismicio/react"
import { homeDocument } from "./types/home";

export const handleDocument = () => {
   const [document] = useSinglePrismicDocument('home');

   if(!document?.data) return null;

   const data: homeDocument = document?.data;
   console.log(data)
   return {
      title: data?.title?.[0]?.text,
      description: data?.description?.[0]?.text,
      cardsContainer: {
         title: data?.body?.[0]?.primary?.card_container_title?.[0].text,
         description: data?.body?.[0]?.primary?.card_container_description?.[0].text,
         showAsCarousel: data?.body?.[0]?.primary?.card_container_is_carousel,
         cards: data?.body?.[0]?.items?.map((prismicCard) => ({
            publishDate: prismicCard?.card_publish_date,
            title: prismicCard?.card_title?.[0]?.text,
            content: prismicCard?.card_content?.[0]?.text,
            image: {
               url: prismicCard?.card_image?.recommended?.url ?? prismicCard?.card_image?.url,
               alt: prismicCard?.card_image?.recommended?.alt ?? prismicCard?.card_image?.alt
            }
         }))
      }
   }

}
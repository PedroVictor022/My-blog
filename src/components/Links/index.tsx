import { Link } from "@chakra-ui/react";

export function BtnLink(text: string, href: string) {
   return (
      <Link
         href={href}
      >{text}</Link>
   )
}
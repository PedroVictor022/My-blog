import { extendTheme } from "@chakra-ui/react";

// Include custom ooptions in here, like colors, fonts
const customTheme = {
   breakpoints: {
      sm: '30em',
      md: '48em',
      lg: '62em'
   }
};

const theme = extendTheme(customTheme);

export default theme;

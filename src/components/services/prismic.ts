import * as Prismic from '@prismicio/client';

export const client = Prismic.createClient(`${import.meta.env.VITE_PRISMIC_ENVIROMENT_NAME}`, {
   accessToken: `${import.meta.env.VITE_PRISMIC_ENVIROMENT_ACCESS_TOKEN}`,
});
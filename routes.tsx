import { BrowserRouter, Routes, Route  } from "react-router-dom";

import Home from "./src/pages/Home/home";

export const MappedRoutes = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home />} />
         </Routes>
      </BrowserRouter>
   )
}
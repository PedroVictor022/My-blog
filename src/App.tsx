import {MappedRoutes} from "../routes";
import { handleDocument } from "./helpers/prismic/home";
function App() {
  handleDocument();

  return (
    <MappedRoutes />
  )
}

export default App
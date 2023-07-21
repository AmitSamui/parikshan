import { EthProvider } from "./contexts/EthContext";
import { IconContext } from "react-icons";
import { createBrowserRouter } from "react-router-dom";
import routes from "./utils/routes";
import { RouterProvider } from "react-router-dom";

const router = createBrowserRouter(routes);

function App() {
  return (
    // provides the etherium context to whole application
    <EthProvider>
      <IconContext.Provider value={{ style: { verticalAlign: "middle" } }}>
        <div id="App">
          {/* version 6 of react router dom - router object method implentation */}
          <RouterProvider router={router} />
        </div>
      </IconContext.Provider>
    </EthProvider>
  );
}

export default App;

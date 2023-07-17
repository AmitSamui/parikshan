import { EthProvider } from "./contexts/EthContext";
import { IconContext } from "react-icons";
import { createBrowserRouter } from "react-router-dom";
import routes from "./utils/routes";
import { RouterProvider } from "react-router-dom";
const router = createBrowserRouter(routes);

function App() {
  return (
    <EthProvider>
      {/* <div id="App">
        
          hello there
        
      </div> */}
      <IconContext.Provider value={{ style: { verticalAlign: "middle" } }}>
        <div id="App">
          <RouterProvider router={router} />
        </div>
      </IconContext.Provider>
    </EthProvider>
  );
}

export default App;

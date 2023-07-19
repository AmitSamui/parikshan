import { EthProvider } from "./contexts/EthContext";
import { IconContext } from "react-icons";
import { createBrowserRouter  , Routes , Route} from "react-router-dom";

import routes from "./utils/routes";
import { RouterProvider } from "react-router-dom";
import DashBoard from "./pages/DashBoard/DashBoard";
import Documents from "./components/YourDocument/Documents";
import CandidateCertification from "./components/CandidateCertification/CandidateCertification";
import VerifyCertificate from "./components/verifyCertificate/VerifyCertificate";
import AddIssuer from "./components/AddIssuer/AddIssuer";
import RemoveIssuer from "./components/RemoveIssuer/RemoveIssuer";
const router = createBrowserRouter([
  {
    path: "/",
    element: <DashBoard />,
    children: [
      {
        index: true,
        element: <Documents />,
      },
      {
        path: "verify",
        element: <VerifyCertificate />,
      },
     
    ],
  },
]);

function App() {
  return (
    <EthProvider>
      <IconContext.Provider value={{ style: { verticalAlign: "middle" } }}>
        <div id="App">
          <RouterProvider router={router} />
          
        </div>
      </IconContext.Provider>
    </EthProvider>
  );
}

export default App;

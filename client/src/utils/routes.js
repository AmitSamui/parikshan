import DashBoard from "../pages/DashBoard/DashBoard";
import Documents from "../components/YourDocument/Documents";
import VerifyCertificate from "../components/verifyCertificate/VerifyCertificate";
import CandidateCertification from "../components/CandidateCertification/CandidateCertification";
import AddIssuer from "../components/AddIssuer/AddIssuer";
import RemoveIssuer from "../components/RemoveIssuer/RemoveIssuer";

const routes = [
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
      {
        path: "certify",
        element: <CandidateCertification />,
      },
      {
        path: "add-issuer",
        element: <AddIssuer />,
      },
      {
        path: "remove-issuer",
        element: <RemoveIssuer />,
      },
     
    ],
  },{
    path:"/*",
    element : <div>hallo</div>
  }
];

export default routes;

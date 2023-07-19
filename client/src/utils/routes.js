import DashBoard from "../pages/DashBoard/DashBoard";
import Documents from "../components/YourDocument/Documents";
import VerifyCertificate from "../components/verifyCertificate/VerifyCertificate";

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
     
    ],
  },
];

export default routes;

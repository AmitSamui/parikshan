import React, { useEffect, useState } from "react";
import styles from "./Documents.module.css";
import useEth from "../../contexts/EthContext/useEth";
import { message } from "antd";
import Document from "../Document/Document";
import NoDocument from "../NoDocument/NoDocument";

const Documents = () => {
  const [documentInformations, setDocumentInformations] = useState([]);
  const {
    state: { contract, accounts },
  } = useEth();

  useEffect(() => {
    const getDocuments = async () => {
      try {
        const getCertificate = await contract.methods
          .getCertificates(accounts[0])
          .call({ from: accounts[0] });
        setDocumentInformations(getCertificate);
      } catch (error) {
        console.log(error);
      }
    };
    getDocuments();
    console.log(contract);
  }, [contract]);

  return (
    <div className={`${styles.dashboardContainer}`}>
      <div className={`${styles.heading}`}>Your Certificates</div>
      <div className={`${styles.documentsContainer}`}>
        {/* <Document documentInformation={}/> */}
        {documentInformations.length !== 0 &&
          documentInformations.map((documentInformation, index) => {
            return (
              <Document key={index} documentInformation={documentInformation} />
            );
          })}

        {documentInformations.length === 0 && (
          <NoDocument />
        )}
      </div>
    </div>
  );
};

export default Documents;

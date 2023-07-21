import React, { useEffect, useState } from "react";
import styles from "./Documents.module.css";
import useEth from "../../contexts/EthContext/useEth";
import { message } from "antd";
import Document from "../Document/Document";
import NoDocument from "../NoDocument/NoDocument";

/*
 ** Component usage
 *  shows all the document / certificate present for the user
 */

const Documents = () => {
  // store all the certificates
  const [documentInformations, setDocumentInformations] = useState([]);

  // get the contract obejct and current account user
  const {
    state: { contract, accounts },
  } = useEth();

  useEffect(() => {
    /*
     ** fetches all the document from smart contract
     *  store them in a state
     */

    const getDocuments = async () => {
      try {
        const getCertificate = await contract.methods
          .getCertificates(accounts[0])
          .call({ from: accounts[0] });
        setDocumentInformations(getCertificate);
      } catch (error) {
        console.error("Sorry, wasn't able to fetch the documents");
      }
    };
    getDocuments();
  }, [contract]);

  return (
    <div className={`${styles.dashboardContainer}`}>
      <div className={`${styles.heading}`}>Your Certificates</div>
      <div className={`${styles.documentsContainer}`}>
        {documentInformations.length !== 0 &&
          documentInformations.map((documentInformation, index) => {
            return (
              <Document key={index} documentInformation={documentInformation} />
            );
          })}

        {/* if document is not present */}
        {documentInformations.length === 0 && <NoDocument />}
      </div>
    </div>
  );
};

export default Documents;

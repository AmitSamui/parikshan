import React, { useState } from "react";
import styles from "./VerifyCertificate.module.css";
import useEth from "../../contexts/EthContext/useEth";
import { message } from "antd";
import Document from "../Document/Document";
import { HiDocumentCheck } from "react-icons/hi2";

/*
 ** Component usage
 *  takes input from user i.e. candidate address and ipfs hash of the certificate
 *  sends it to the smart contract
 *  smart contract verifies the certificate by checking the ipfs hash
 */

const VerifyCertificate = () => {
  const [documentInformations, setDocumentInformations] = useState(null);
  const [formValues, setFormValues] = useState({
    candidateAddress: "",
    fileHash: "",
  });

  // accessing contract object and account in use
  const {
    state: { contract, accounts },
  } = useEth();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  // submits the input values and fetches verdict from the contract
  const handleSubmitEvent = async (event) => {
    event.preventDefault();
    try {
      const verifyCertificate = await contract.methods
        .verifyFile(formValues.fileHash, formValues.candidateAddress)
        .call({ from: accounts[0] });
      if (verifyCertificate[1]) {
        setDocumentInformations(verifyCertificate[0]);
        message.success("file verified");
      } else {
        setDocumentInformations(null);
        message.error("File not certified");
      }
    } catch (error) {
      message.error("you cant verify certificate");
    }
  };

  return (
    <div className={`${styles.verifyCertificate}`}>
      <div className={`${styles.section}`}>
        <div className={`${styles.heading}`}>Certificate Verification Form</div>
        <form
          onSubmit={handleSubmitEvent}
          className={`${styles.formContainer}`}
        >
          <input
            className={`${styles.formInput}`}
            name="candidateAddress"
            type="text"
            value={formValues.candidateAddress}
            onChange={handleChange}
            placeholder="Candidate Address"
          />
          <input
            className={`${styles.formInput}`}
            name="fileHash"
            type="text"
            onChange={handleChange}
            value={formValues.fileHash}
            placeholder="File Hash"
          />
          <button type="submit">
            <HiDocumentCheck
              style={{
                marginRight: "0.5rem",
                fontSize: "1rem",
              }}
            />
            Verify
          </button>
        </form>
        <div className={`${styles.documentContainer}`}>
          {documentInformations && (
            <Document
              key={1}
              documentInformation={documentInformations}
              qrCodeEnable={false}
            />
          )}
        </div>
      </div>
      <div className={`${styles.sideContainer}`}>
        <div className={`${styles.ruleSection}`}>
          <div className={`${styles.sideHeading}`}>Verify File</div>
          <div className={`${styles.rules}`}>
            <ul>
              <li>Enter the candidate's address</li>
              <li>Enter the File hash sent to you by the candidate</li>
              {/* <li>
                Alternatively, Switch to mobile and scan the qr code shared by
                the candidate
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyCertificate;

import React ,{useState} from "react";
import styles from "./VerifyCertificate.module.css";
import useEth from "../../contexts/EthContext/useEth";
import { message } from "antd";
import Document from "../Document/Document";
import { HiDocumentCheck } from "react-icons/hi2";

const VerifyCertificate = () => {
  const [documentInformations, setDocumentInformations] = useState(null);

  const {
    state: { contract, accounts },
  } = useEth();

  const [formValues, setFormValues] = useState({
    candidateAddress: "",
    fileHash: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmitEvent = async (event) => {
    event.preventDefault();
    try {
      // const mapping = await contract.methods
      //   .user_roles(accounts[0])
      //   .call({ from: accounts[0] });
      // console.log(mapping);

      //QmVFWvnoSyGwpJUS3V4yFoDTvP9JAAT73CNuztTdHBxBUc

      const verifyCertificate = await contract.methods
        .verifyFile(formValues.fileHash, formValues.candidateAddress)
        .call({ from: accounts[0] });
      console.log(verifyCertificate);
      if(verifyCertificate[1]){
        setDocumentInformations(verifyCertificate[0])
        message.success("file verified");
      }else{
        setDocumentInformations(null)
        message.error("File not certified");
      }
      
    } catch (error) {
      console.log(error);
      message.error("you cant verify certificate");
    }
  };

  return (
    <div className={`${styles.verifyCertificate}`}>
      <div className={`${styles.section}`}>
        <div className={`${styles.heading}`}>Certificate Verification Form</div>
        <form onSubmit={handleSubmitEvent} className={`${styles.formContainer}`}>
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
          {
            documentInformations && (
              <Document key={1} documentInformation = {documentInformations} />
            )
          }
        </div>
      </div>
      <div className={`${styles.sideContainer}`}>
        <div className={`${styles.ruleSection}`}>
          <div className={`${styles.sideHeading}`}>Verify File</div>
          <div className={`${styles.rules}`}>
            <ul>
              <li>Enter the candidate's address</li>
              <li>Enter the File hash sent to you by the candidate</li>
              <li>
                Alternatively, Switch to mobile and scan the qr code shared by
                the candidate
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyCertificate;

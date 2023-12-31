import React, { useState } from "react";
import styles from "./CandidateCertification.module.css";
import useEth from "../../contexts/EthContext/useEth";
import { message } from "antd";
import UploadFile from "../UploadFile/UploadFile";

/*
 ** Component usage
 *  takes input from issuer or admin i.e. candidate and issuer details and the uploaded file hash
 *  add the certificate to the smart contract
 *  
 */

const CandidateCertification = () => {
  const {
    state: { contract, accounts },
  } = useEth();

  const [formValues, setFormValues] = useState({
    issuerName: "",
    issuerAddress: "",
    candidateName: "",
    certificateName: "",
    candidateAddress: "",
    ipfsHash: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmitEvent = async (event) => {
    event.preventDefault();
    try {
      const certifyCandidate = await contract.methods
        .certifyFile(
          formValues.candidateAddress,
          formValues.candidateName,
          20000,
          formValues.issuerAddress,
          formValues.issuerName,
          formValues.ipfsHash,
          formValues.certificateName,
          "new certificate"
        )
        .send({ from: accounts[0] });

      message.success("file certified");
    } catch (error) {
      message.error("you cant certify certificate");
    }
  };

  return (
    <div className={`${styles.candidateCertification}`}>
      <div className={`${styles.section}`}>
        <div className={`${styles.heading}`}>Candidate Certification Form</div>
        <form
          className={`${styles.formContainer}`}
          onSubmit={handleSubmitEvent}
        >
          <div className={`${styles.subFormContainer}`}>
            <div className={`${styles.subHeading}`}>Issuer Information</div>
            <div className={`${styles.subFormContainerTop}`}>
              <input
                className={`${styles.formInput}`}
                style={{
                  marginRight: "1rem",
                }}
                onChange={handleChange}
                required
                name="issuerName"
                type="text"
                value={formValues.issuerName}
                placeholder="Issuer Name"
              />
              <input
                className={`${styles.formInput}`}
                style={{
                  marginLeft: "1rem",
                }}
                onChange={handleChange}
                required
                name="issuerAddress"
                value={formValues.issuerAddress}
                type="text"
                placeholder="Issuer Address"
              />
            </div>
          </div>
          <div className={`${styles.subFormContainer}`}>
            <div className={`${styles.subHeading}`}>Candidate infomation</div>
            <div className={`${styles.subFormContainerTop}`}>
              <input
                className={`${styles.formInput}`}
                style={{
                  marginRight: "1rem",
                }}
                onChange={handleChange}
                value={formValues.candidateName}
                name="candidateName"
                type="text"
                placeholder="Candidate Name"
              />
              <input
                className={`${styles.formInput}`}
                style={{
                  marginLeft: "1rem",
                }}
                onChange={handleChange}
                value={formValues.certificateName}
                name="certificateName"
                type="text"
                placeholder="Certificate Name"
              />
            </div>
            <input
              className={`${styles.formInput}`}
              name="candidateAddress"
              value={formValues.candidateAddress}
              onChange={handleChange}
              type="text"
              placeholder="Candidate Address"
            />
            <input
              className={`${styles.formInput}`}
              name="ipfsHash"
              type="text"
              value={formValues.ipfsHash}
              onChange={handleChange}
              placeholder="IPFS Hash"
            />
          </div>
          <button type="submit">submit</button>
        </form>
      </div>
      <div className={`${styles.uploadContainer}`}>
        <div className={`${styles.ruleSection}`}>
          <div className={`${styles.sideHeading}`}>Upload File</div>
          <div className={`${styles.rules}`}>
            <ul>
              <li>Upload the file first</li>
              <li>After uploading the file, a hash will be generated.</li>
              <li>
                Copy the IPFS HASH by clicking on the button below upload
                button.
              </li>
            </ul>
          </div>
        </div>
        {/* after the contract is integrated */}
        <div className={`${styles.uploadSection}`}>
          <UploadFile />
        </div>
      </div>
    </div>
  );
};

export default CandidateCertification;

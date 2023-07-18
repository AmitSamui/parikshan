import React from "react";
import styles from "./CandidateCertification.module.css";
import UploadFile from "../UploadFile/UploadFile";

const CandidateCertification = () => {
  return (
    <div className={`${styles.candidateCertification}`}>
      <div className={`${styles.section}`}>
        <div className={`${styles.heading}`}>Candidate Certification Form</div>
        <div className={`${styles.formContainer}`}>
          <div className={`${styles.subFormContainer}`}>
            <div className={`${styles.subHeading}`}>Issuer Information</div>
            <div className={`${styles.subFormContainerTop}`}>
              <input
                className={`${styles.formInput}`}
                style={{
                  marginRight: "1rem"
                }}
                name="issuerName"
                type="text"
                placeholder="Issuer Name"
              />
              <input
                className={`${styles.formInput}`}
                style={{
                  marginLeft: "1rem"
                }}
                name="issuerAddress"
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
                  marginRight: "1rem"
                }}
                name="candidateNamr"
                type="text"
                placeholder="Candidate Name"
              />
              <input
                className={`${styles.formInput}`}
                style={{
                  marginLeft: "1rem"
                }}
                name="certificateName"
                type="text"
                placeholder="Certificate Name"
              />
            </div>
            <input
              className={`${styles.formInput}`}
              name="candidateAddress"
              type="text"
              placeholder="Candidate Address"
            />
            <input
              className={`${styles.formInput}`}
              name="ipfsHash"
              type="text"
              placeholder="IPFS Hash"
            />
          </div>
        </div>
      </div>
      <div className={`${styles.uploadContainer}`}>
        <div className={`${styles.ruleSection}`}>
          <div className={`${styles.sideHeading}`}>Upload File</div>
          <div className={`${styles.rules}`}>
            <ul>
              <li>Upload the file first</li>
              <li>
                After uploading the file, a hash will be generated. Copy the
                IPFS HASH and paste it in the form.
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

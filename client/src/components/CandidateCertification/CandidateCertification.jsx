import React from "react";
import styles from "./CandidateCertification.module.css";
import UploadFile from "../UploadFile/UploadFile";

const CandidateCertification = () => {
  return (
    <div className={`${styles.candidateCertification}`}>
      <div className={`${styles.section}`}>
        <div className={`${styles.heading}`}>Candidate Certification Form</div>
        <div className={`${styles.formContainer}`}>
          <input
            className={`${styles.formInput}`}
            name="issuerName"
            type="text"
            placeholder="Issuer Name"
          />
          <input
            className={`${styles.formInput}`}
            name="issuerAddress"
            type="text"
            placeholder="Issuer Name"
          />
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
                hash and paste it in the form.
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

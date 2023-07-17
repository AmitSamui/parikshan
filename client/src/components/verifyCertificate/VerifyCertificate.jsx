import React from 'react'
import styles from "./VerifyCertificate.module.css";
import { HiDocumentCheck } from "react-icons/hi2";


const VerifyCertificate = () => {
  return (
    <div className={`${styles.verifyCertificate}`}>
    <div className={`${styles.section}`}>
      <div className={`${styles.heading}`}>Certificate Verification Form</div>
      <div className={`${styles.formContainer}`}>
        <input
          className={`${styles.formInput}`}
          name="candidateAddress"
          type="text"
          placeholder="Candidate Address"
        />
        <input
          className={`${styles.formInput}`}
          name="fileHash"
          type="text"
          placeholder="File Hash"
        />
       <button>
          <HiDocumentCheck
            style={{
              marginRight: "0.5rem",
              fontSize: "1rem",
            }}
          />
          Verify
        </button>
      </div>
      <div className={`${styles.documentContainer}`} >
        
      </div>
    </div>
    <div className={`${styles.sideContainer}`}>
      <div className={`${styles.ruleSection}`}>
        <div className={`${styles.sideHeading}`}>Verify File</div>
        <div className={`${styles.rules}`}>
          <ul>
            <li>Enter the candidate's address</li>
            <li>
              Enter the File hash sent to you by the candidate
            </li>
            <li>
              Alternatively, Switch to mobile and scan the qr code shared by the candidate
            </li>
          </ul>
        </div>
      </div>
      
    </div>
  </div>
  )
}

export default VerifyCertificate
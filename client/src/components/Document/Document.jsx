import React from "react";
import styles from "./Document.module.css";
import { PiCertificateFill } from "react-icons/pi";
import { HiDocumentDownload } from "react-icons/hi";

const Document = () => {
  return (
    <div className={`${styles.documentContainer}`}>
      <div className={`${styles.documentLeft}`}>
        <div className={`${styles.documentLeftTop}`}>
          <PiCertificateFill style={{ fontSize: "4rem" }} />
          <p className={`${styles.documentHeader}`}>Certificate Name</p>
        </div>
        <div className={`${styles.documentDetails}`}>
          <div className={`${styles.information}`}>
            <p className={`${styles.infoTitle}`}>IPFS Hash:</p>
            <p className={`${styles.info}`}>
              HBLHBakblKJBlkjblKBnljLuloHO98Uo8goiP9oho8IUi0N
            </p>
          </div>

          <div className={`${styles.information}`}>
            <p className={`${styles.infoTitle}`}>File size:</p>
            <p className={`${styles.info}`}>21788</p>
          </div>

          <div className={`${styles.information}`}>
            <p className={`${styles.infoTitle}`}>Issued By:</p>
            <p className={`${styles.info}`}>Amit Samui</p>
          </div>

          <div className={`${styles.information}`}>
            <p className={`${styles.infoTitle}`}>Organisation:</p>
            <p className={`${styles.info}`}>Major League Hacking</p>
          </div>

          <div className={`${styles.information}`}>
            <p className={`${styles.infoTitle}`}>Issued Date:</p>
            <p className={`${styles.info}`}>Wed , 08 Dec 2021</p>
          </div>
        </div>
        <button>
          <HiDocumentDownload
            style={{
              marginRight: "0.5rem",
              fontSize: "1.2rem",
            }}
          />
          Download File
        </button>
      </div>
      <div className={`${styles.documentRight}`}>qr</div>
    </div>
  );
};

export default Document;

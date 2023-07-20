import React from "react";
import styles from "./Document.module.css";
import { PiCertificateFill } from "react-icons/pi";


const Document = ({ documentInformation, qrCodeEnable }) => {
  console.log(documentInformation);
  const { candidate, issuer, fileName, fileHash, timestamp, fileSize } =
    documentInformation;
  const { candidate_name, candidate_address } = candidate;
  const { issuer_address, issuer_institution, issuer_name } = issuer;
  const issuerDate = new Date(parseInt(timestamp) * 1000);

  return (
    <div className={`${styles.documentContainer}`}>
      <div className={`${styles.documentLeft}`}>
        <div className={`${styles.documentLeftTop}`}>
          <PiCertificateFill style={{ fontSize: "4rem" }} />
          <p className={`${styles.documentHeader}`}>{fileName}</p>
        </div>
        <div className={`${styles.documentDetails}`}>
          <div className={`${styles.information}`}>
            <p className={`${styles.infoTitle}`}>IPFS Hash:</p>
            <p className={`${styles.info}`}>{fileHash}</p>
          </div>

          <div className={`${styles.information}`}>
            <p className={`${styles.infoTitle}`}>File size:</p>
            <p className={`${styles.info}`}>{fileSize}</p>
          </div>

          <div className={`${styles.information}`}>
            <p className={`${styles.infoTitle}`}>Issued By:</p>
            <p className={`${styles.info}`}>{issuer_name}</p>
          </div>

          <div className={`${styles.information}`}>
            <p className={`${styles.infoTitle}`}>Organisation:</p>
            <p className={`${styles.info}`}>{issuer_institution}</p>
          </div>

          <div className={`${styles.information}`}>
            <p className={`${styles.infoTitle}`}>Issued Date:</p>
            <p className={`${styles.info}`}>{issuerDate.toDateString()}</p>
          </div>
        </div>
        {/* <button>
          <HiDocumentDownload
            style={{
              marginRight: "0.5rem",
              fontSize: "1.2rem",
            }}
          />
          Download File
        </button> */}
      </div>
      {qrCodeEnable && <div className={`${styles.documentRight}`}>qr</div>}
    </div>
  );
};

export default Document;

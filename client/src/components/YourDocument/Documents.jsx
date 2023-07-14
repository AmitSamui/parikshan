import React from "react";
import styles from "./Documents.module.css";
import Document from "../Document/Document";

const Documents = () => {
  return (
    <div className={`${styles.dashboardContainer}`}>
      <div className={`${styles.heading}`}>YourDocuments</div>
      <div className={`${styles.documentsContainer}`}>
        <Document />
        <Document />
        <Document />
        <Document />
      </div>
    </div>
  );
};

export default Documents;

import React from 'react'
import styles from "./NoDocument.module.css"

const NoDocument = () => {
  return (
    <div className={`${styles.noDocumentContainer}`}>
        <img style={{height: "8rem"}} src="./images/nodocument.svg" alt="nodocument" srcset="" />
        <p style={{
            marginTop: "2rem",
            color: "var(--semi-secondary)",
            fontSize:"var(--text-sm)"
        }}>
            No Certificate Present
        </p>
    </div>
  )
}

export default NoDocument
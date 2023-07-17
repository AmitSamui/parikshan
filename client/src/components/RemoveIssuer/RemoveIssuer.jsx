import React from "react";
import styles from "./RemoveIssuer.module.css";
import { IoPersonRemove } from "react-icons/io5";

const RemoveIssuer = () => {
  return (
    <div className={`${styles.RemoveIssuer}`}>
      <div className={`${styles.section}`}>
        <div className={`${styles.heading}`}>Remove Issuer Form</div>
        <div className={`${styles.formContainer}`}>
          <input
            className={`${styles.formInput}`}
            name="IssuerAddress"
            type="text"
            placeholder="Issuer's Address"
          />
          <button>
            <IoPersonRemove
              style={{
                marginRight: "0.8rem",
                fontSize: "1rem",
              }}
            />
            Remove Issuer
          </button>
        </div>
        <div className={`${styles.documentContainer}`}></div>
      </div>
      <div className={`${styles.sideContainer}`}>
        <div className={`${styles.ruleSection}`}>
          <div className={`${styles.sideHeading}`}>Remove Issuer</div>
          <div className={`${styles.rules}`}>
            <ul>
              <li>Enter the person's address</li>
              <li>Issuer Will be removed from the application</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemoveIssuer;

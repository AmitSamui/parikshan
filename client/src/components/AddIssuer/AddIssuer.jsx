import React from "react";
import styles from "./AddIssuer.module.css";
import { IoPersonAdd } from "react-icons/io5";


const AddIssuer = () => {
  return (
    <div className={`${styles.AddIssuer}`}>
      <div className={`${styles.section}`}>
        <div className={`${styles.heading}`}>Add Issuer Form</div>
        <div className={`${styles.formContainer}`}>
          <input
            className={`${styles.formInput}`}
            name="PersonAddress"
            type="text"
            placeholder="Person's Address"
          />
          <button>
            <IoPersonAdd
              style={{
                marginRight: "0.8rem",
                fontSize: "1rem",
              }}
            />
            Add Issuer
          </button>
        </div>
        <div className={`${styles.documentContainer}`}></div>
      </div>
      <div className={`${styles.sideContainer}`}>
        <div className={`${styles.ruleSection}`}>
          <div className={`${styles.sideHeading}`}>Adding Issuer</div>
          <div className={`${styles.rules}`}>
            <ul>
              <li>Enter the person's address</li>
              <li>Issuer Will be Added to the application</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddIssuer;

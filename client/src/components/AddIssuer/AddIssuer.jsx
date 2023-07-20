import React, { useState } from "react";
import styles from "./AddIssuer.module.css";
import { IoPersonAdd } from "react-icons/io5";
import useEth from "../../contexts/EthContext/useEth";
import { message } from "antd";

const AddIssuer = () => {
  const [address, setAddress] = useState(null);
  const {
    state: { contract, accounts },
  } = useEth();

  const handleOnChange = (event) => {
    setAddress(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const addingIssuer = await contract.methods
        .addIssuer(address)
        .send({ from: accounts[0] });
      message.success("issuer added");
    } catch (error) {
      message.error("you can't add issuer");
    }
  };

  return (
    <div className={`${styles.AddIssuer}`}>
      <div className={`${styles.section}`}>
        <div className={`${styles.heading}`}>Add Issuer Form</div>
        <form onSubmit={handleSubmit} className={`${styles.formContainer}`}>
          <input
            className={`${styles.formInput}`}
            name="PersonAddress"
            type="text"
            value={address}
            onChange={handleOnChange}
            placeholder="Person's Address"
          />
          <button type="submit">
            <IoPersonAdd
              style={{
                marginRight: "0.8rem",
                fontSize: "1rem",
              }}
            />
            Add Issuer
          </button>
        </form>
        <div className={`${styles.documentContainer}`}></div>
      </div>
      <div className={`${styles.sideContainer}`}>
        <div className={`${styles.ruleSection}`}>
          <div className={`${styles.sideHeading}`}>Adding Issuer</div>
          <div className={`${styles.rules}`}>
            <ul>
              <li>Enter the person's address</li>
              <li>Person will be Added as an Issuer to the application</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddIssuer;

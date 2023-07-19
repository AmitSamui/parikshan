import React, { useState } from "react";
import styles from "./AddIssuer.module.css";
import { IoPersonAdd } from "react-icons/io5";
import useEth from "../../contexts/EthContext/useEth";
import Web3 from "web3";

const AddIssuer = () => {
  const [address, setAddress] = useState(null);
  const {
    state: { contract, accounts },
  } = useEth();

  console.log(contract);

  const handleOnChange = (event) => {
    setAddress(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const mapping = await contract.methods
        .user_roles(accounts[0])
        .call({ from: accounts[0] });
      console.log(mapping);

      // const addingIssuer = await contract.methods.addIssuer(address).send({ from: accounts[0] });
      // console.log(addingIssuer);
    } catch (error) {
      console.log(error);
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
              <li>Issuer Will be Added to the application</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddIssuer;

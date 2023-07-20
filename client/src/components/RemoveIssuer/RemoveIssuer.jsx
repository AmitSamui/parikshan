import React, { useState } from "react";
import styles from "./RemoveIssuer.module.css";
import useEth from "../../contexts/EthContext/useEth";
import { message } from "antd";
import { IoPersonRemove } from "react-icons/io5";

const RemoveIssuer = () => {
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
      const remove = await contract.methods
        .removeIssuer(address)
        .send({ from: accounts[0] });
      message.success("issuer removed");
    } catch (error) {
      message.error("The person is not issuer");
    }
  };

  return (
    <div className={`${styles.RemoveIssuer}`}>
      <div className={`${styles.section}`}>
        <div className={`${styles.heading}`}>Remove Issuer Form</div>
        <form onSubmit={handleSubmit} className={`${styles.formContainer}`}>
          <input
            className={`${styles.formInput}`}
            name="IssuerAddress"
            type="text"
            value={address}
            onChange={handleOnChange}
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
        </form>
        <div className={`${styles.documentContainer}`}></div>
      </div>
      <div className={`${styles.sideContainer}`}>
        <div className={`${styles.ruleSection}`}>
          <div className={`${styles.sideHeading}`}>Remove Issuer</div>
          <div className={`${styles.rules}`}>
            <ul>
              <li>Enter the Issuer's address</li>
              <li>Issuer Will be removed from the application</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemoveIssuer;

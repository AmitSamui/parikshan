import React from "react";
import styles from "./SideBar.module.css";
import { HiDocumentText } from "react-icons/hi";
import { HiDocumentCheck } from "react-icons/hi2";
import { IoPersonAdd, IoPersonRemove } from "react-icons/io5";
import { PiStampFill, PiSignOutBold } from "react-icons/pi";
import { Link } from "react-router-dom";
const SideBar = ({ role }) => {
  const [selectedOption, setselectedOption] = React.useState(1);

  return (
    <div className={`${styles.sideBarContainer}`}>
      <div className={`${styles.headingDiv}`}>
        <h3 className={`${styles.heading}`}>Certify</h3>
        <PiSignOutBold className={`${styles.icon} `} />
      </div>
      <div className={`${styles.sidebarOptions} `}>
        <Link
          style={{
            textDecoration: "none",
            width: "100%",
          }}
          to="/"
        >
          <div
            onClick={() => setselectedOption(1)}
            className={`${styles.options} ${
              selectedOption === 1 ? `${styles.selected}` : ""
            }`}
          >
            <HiDocumentText style={{ fontSize: "1rem" }} />
            <p style={{ marginLeft: "1rem" }}> Your Documents</p>
          </div>
        </Link>

        <Link
          style={{
            textDecoration: "none",
            width: "100%",
          }}
          to="/verify"
        >
          <div
            onClick={() => setselectedOption(2)}
            className={`${styles.options} ${
              selectedOption === 2 ? `${styles.selected}` : ""
            }`}
          >
            <HiDocumentCheck style={{ fontSize: "1rem" }} />
            <p style={{ marginLeft: "1rem" }}> Verify Certificate</p>
          </div>
        </Link>

        {(role === "admin") || (role === "issuer") || role === "" && (
          <Link
            style={{
              textDecoration: "none",
              width: "100%",
            }}
            to="/certify"
          >
            <div
              onClick={() => setselectedOption(3)}
              className={`${styles.options} ${
                selectedOption === 3 ? `${styles.selected}` : ""
              }`}
            >
              <PiStampFill style={{ fontSize: "1rem" }} />
              <p style={{ marginLeft: "1rem" }}> Certify Candidate</p>
            </div>
          </Link>
        )}

        {role === "admin"  || role === "" && (
          <Link
            style={{
              textDecoration: "none",
              width: "100%",
            }}
            to="/add-issuer"
          >
            <div
              onClick={() => setselectedOption(4)}
              className={`${styles.options} ${
                selectedOption === 4 ? `${styles.selected}` : ""
              }`}
            >
              <IoPersonAdd style={{ fontSize: "1rem" }} />
              <p style={{ marginLeft: "1rem" }}> Add Issuer</p>
            </div>
          </Link>
        )}

        {role === "admin" || role === "" && (
          <Link
            style={{
              textDecoration: "none",
              width: "100%",
            }}
            to="/remove-issuer"
          >
            <div
              onClick={() => setselectedOption(5)}
              className={`${styles.options} ${
                selectedOption === 5 ? `${styles.selected}` : ""
              }`}
            >
              <IoPersonRemove style={{ fontSize: "1rem" }} />
              <p style={{ marginLeft: "1rem" }}> Remove Issuer</p>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};
export default SideBar;

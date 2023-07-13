import React from "react";
import styles from "./SideBar.module.css";
import { HiDocumentText } from "react-icons/hi";
import { HiDocumentCheck } from "react-icons/hi2";
import { PiStampFill, PiSignOutBold } from "react-icons/pi";
const SideBar = () => {
  const [selectedOption, setselectedOption] = React.useState(1);

  return (
    <div className={`${styles.sideBarContainer}`}>
      <div className={`${styles.headingDiv}`}>
        <h3 className={`${styles.heading}`}>Certify</h3>
        <PiSignOutBold className={`${styles.icon} `} />
      </div>
      <div className={`${styles.sidebarOptions} `}>
        <div
          onClick={() => setselectedOption(1)}
          className={`${styles.options} ${
            selectedOption === 1 ? `${styles.selected}` : ""
          }`}
        >
          <HiDocumentText style={{ fontSize: "1rem" }} />
          <p style={{ marginLeft: "1rem" }}> Your Documents</p>
        </div>

        <div
          onClick={() => setselectedOption(2)}
          className={`${styles.options} ${
            selectedOption === 2 ? `${styles.selected}` : ""
          }`}
        >
          <HiDocumentCheck style={{ fontSize: "1rem" }} />
          <p style={{ marginLeft: "1rem" }}> Verify Certificate</p>
        </div>

        <div
          onClick={() => setselectedOption(3)}
          className={`${styles.options} ${
            selectedOption === 3 ? `${styles.selected}` : ""
          }`}
        >
          <PiStampFill style={{ fontSize: "1rem" }} />
          <p style={{ marginLeft: "1rem" }}> Your Documents</p>
        </div>
      </div>
    </div>
  );
};
export default SideBar;

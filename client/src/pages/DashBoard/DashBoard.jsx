import React, { useEffect, useState } from "react";
import styles from "./Dashboard.module.css";
import useEth from "../../contexts/EthContext/useEth";
import SideBar from "../../components/SideBar/SideBar";
import { Outlet } from "react-router-dom";

const DashBoard = () => {
  const [role, setRole] = useState(null);

  const {
    state: { contract, accounts },
  } = useEth();

  useEffect(() => {
    const getRole = async () => {
      const mapping = await contract.methods
        .user_roles(accounts[0])
        .call({ from: accounts[0] });
      setRole(mapping);
      console.log(mapping);
    };

    getRole();
  }, [contract]);

  return (
    <div className={`${styles.dashBoardContainer}`}>
      <SideBar role={role} />
      <Outlet />
    </div>
  );
};

export default DashBoard;

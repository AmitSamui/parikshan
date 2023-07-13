import React from 'react'
import styles from "./Dashboard.module.css"
import SideBar from '../../components/SideBar/SideBar'
import Documents from '../../components/YourDocument/Documents'

const DashBoard = () => {
  return (
    <div className={`${styles.dashBoardContainer}`}>
      <SideBar/>
      <Documents />
    </div>
  )
}

export default DashBoard
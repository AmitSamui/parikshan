import React from 'react'
import styles from "./Dashboard.module.css"
import SideBar from '../../components/SideBar/SideBar'
import Documents from '../../components/YourDocument/Documents'
import CandidateCertification from '../../components/CandidateCertification/CandidateCertification'
import VerifyCertificate from '../../components/verifyCertificate/VerifyCertificate'
import AddIssuer from '../../components/AddIssuer/AddIssuer'
import RemoveIssuer from '../../components/RemoveIssuer/RemoveIssuer'
import UploadFile from '../../components/UploadFile/UploadFile'

const DashBoard = () => {
  return (
    <div className={`${styles.dashBoardContainer}`}>
      <SideBar/>
      <VerifyCertificate />
      {/* <CandidateCertification /> */}
      {/* <AddIssuer /> */}
    </div>
  )
}

export default DashBoard
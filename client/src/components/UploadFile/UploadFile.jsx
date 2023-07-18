import React, { useState } from "react";
import { create as ipfsHttpClient } from "ipfs-http-client";
import { InboxOutlined } from "@ant-design/icons";
import { message, Upload, Button } from "antd";
import styles from "./UploadFile.module.css";

const projectId = process.env.REACT_APP_IPFS_API_KEY;
const projectSecretKey = process.env.REACT_APP_IPFS_API_SECRET_KEY;
const authorization = "Basic " + btoa(projectId + ":" + projectSecretKey);

const ipfs = ipfsHttpClient({
  url: "https://ipfs.infura.io:5001/api/v0",
  headers: {
    authorization,
  },
});

const UploadFile = () => {
  const [file, setFile] = useState(null);
  const [hash, setHash] = useState(null);
  const [fileList, setFileList] = useState([]);
  const [uploading, setUploading] = useState(false);

  const handleUpload = async () => {
    try {
      setUploading(true);
      const result = await ipfs.add(file);
      const ipfsHash = result.cid.toString();
      console.log(ipfsHash);
      setHash(ipfsHash);
      setUploading(false);
      message.success("upload successfully.");
    } catch (error) {
      message.error("upload failed.");
    }
  };
  const props = {
    onRemove: (file) => {
      setFile(null);
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },
    beforeUpload: (file) => {
      const data = file;
      console.log(data);
      const reader = new window.FileReader();
      reader.readAsArrayBuffer(data);
      reader.onloadend = () => {
        const arrayBuffer = reader.result;
        const uint8Array = new Uint8Array(arrayBuffer);
        console.log("Buffer data: ", uint8Array);
        setFile(uint8Array);
      };

      setFileList([...fileList, file]);
      return false;
    },
    fileList,
  };

  return (
    <div className={`${styles.uploadContainer}`}>
      <Upload className={`${styles.upload}`} {...props}>
        <p className={`${styles.icon}`}>
          <InboxOutlined />
        </p>
        <p className={`${styles.textParagraph}`}>
          Click or drag file to this area to upload
        </p>
        <p className={`${styles.textParagraph}`}>
          Support for a single or bulk upload. Strictly prohibited from
          uploading company data or other banned files.
        </p>
      </Upload>
      <Button
        type="primary"
        onClick={handleUpload}
        disabled={fileList.length === 0}
        loading={uploading}
        style={{
          marginTop: 16,
        }}
        className={`${styles.uploadButton}`}
      >
        {uploading ? "Uploading" : "Start Upload"}
      </Button>
      <Button
        type="primary"
        onClick={() => {
          navigator.clipboard.writeText(hash);
          message.success("successfully copied to clipboard");
        }}
        disabled={!hash && fileList.length === 0}
        loading={uploading}
        style={{
          marginTop: "1rem",
          cursor: "copy",
        }}
        className={`${styles.uploadButton}`}
      >
        {!hash ? "upload file first" : "copy IPFS hash"}
      </Button>
    </div>
  );
};

export default UploadFile;

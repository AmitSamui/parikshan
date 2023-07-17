import React, { useState } from "react";
import { create as ipfsHttpClient } from "ipfs-http-client";

const projectId = "2ShkJMWMZaMfqRHlTCOTMVMvCVQ";
const projectSecretKey = "9c4b8d60a277952a96f40f175c2c239a";
const authorization = "Basic " + btoa(projectId + ":" + projectSecretKey);

const ipfs = ipfsHttpClient({
  url: "https://ipfs.infura.io:5001/api/v0",
  headers: {
    authorization,
  },
});

const UploadFile = () => {
  const [file, setFile] = useState(null);
  const [hash, setHash] = useState();

  const retrieveFile = (e) => {
    const data = e.target.files[0];
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(data);
    reader.onloadend = () => {
      const arrayBuffer = reader.result;
      const uint8Array = new Uint8Array(arrayBuffer);
      console.log("Buffer data: ", uint8Array);
      setFile(uint8Array);
    };

    e.preventDefault();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await ipfs.add(file);
      const ipfsHash = result.cid["/"].toString();
      setHash(ipfsHash);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          id="myFile"
          name="filename"
          onChange={retrieveFile}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default UploadFile;

import { create as ipfsHttpClient } from "ipfs-http-client";

const projectId = process.env.REACT_APP_IPFS_API_KEY;
const projectSecretKey = process.env.REACT_APP_IPFS_API_SECRET_KEY;
const authorization = "Basic " + btoa(projectId + ":" + projectSecretKey);

const ipfs = ipfsHttpClient({
  url: "https://ipfs.infura.io:5001/api/v0",
  headers: {
    authorization,
  },
});

export default ipfs;

// SPDX-License-Identifier: MIT

pragma solidity >=0.5.0 <0.9.0;

contract verifyCertificate {
    event FileCertified(
        address author,
        string fileHash,
        uint256 timestamp,
        uint256 fileSize,
        string fileExtension
    );

    // contract deployer (application owner)
    address owner;

    // declate a structured data that describes issuer
    struct CertificateIssuerStructure {
        address issuer_address;
        string issuer_institution;
        string issuer_name;
    }

    // structure describing candidate
    struct CandidateStructure {
        address candidate_address;
        string candidate_name;
    }

    //structure describing file certificate
    struct FileCertificate {
        CertificateIssuerStructure issuer;
        CandidateStructure candidate;
        string fileHash;
        string fileName;
        uint256 timestamp;
        uint256 fileSize;
        string fileExtension;
    }

    //mapping the file certificates by hash 
    mapping(address => mapping(string => FileCertificate)) public fileCertificatesMap;
    mapping (address => FileCertificate[]) userCertificate;

    mapping(address => string) public user_roles;

    // mapping (address => string) holder_certificate;

    constructor() {
        user_roles[msg.sender] = "admin";
        owner = msg.sender;
    }

    function getCertificates(address candidate_address) public view returns(FileCertificate[] memory){
        return userCertificate[candidate_address];
    }

    function addIssuer(address issuer_address) public {
        // check if the person is owner
        require(msg.sender == owner, "You can't add issuer");
        // check if the issuer is already present
        require(
            keccak256(abi.encodePacked(user_roles[issuer_address])) !=
                keccak256(abi.encodePacked("issuer")),
            "issuer is already present"
        );

        user_roles[issuer_address] = "issuer";
    }

    function removeIssuer(address issuer_address) public {
        // check if the person is owner
        require(msg.sender == owner, "You can't add issuer");
        // check if the issuer is already present
        require(
            keccak256(abi.encodePacked(user_roles[issuer_address])) ==
                keccak256(abi.encodePacked("issuer")),
            "The person is not issuer"
        );

        user_roles[issuer_address] = "user";
    }

    //function to certify the file
    //function that allows issuer to certify a file
    function certifyFile(
        address candidate_address,
        string memory candidate_name,
        uint256 fileSize,
        string memory issuer_institution,
        string memory issuer_name,
        string memory fileHash,
        string memory fileName,
        string memory fileExtension
    ) public payable {
        // check if the person is issuer
        require(
            keccak256(abi.encodePacked(user_roles[msg.sender])) ==
                keccak256(abi.encodePacked("issuer")),
            "You can't certify the certificate"
        );

        CandidateStructure memory candidate = CandidateStructure(
            candidate_address,
            candidate_name
        );
        CertificateIssuerStructure memory issuer = CertificateIssuerStructure(
            msg.sender,
            issuer_name,
            issuer_institution
        );
        FileCertificate memory newFileCertificate = FileCertificate(
            issuer,
            candidate,
            fileHash,
            fileName,
            block.timestamp,
            fileSize,
            fileExtension
        );
        fileCertificatesMap[candidate_address][fileHash] = newFileCertificate;
        userCertificate[candidate_address].push(newFileCertificate);
        emit FileCertified(
            msg.sender,
            fileHash,
            block.timestamp,
            fileSize,
            fileExtension
        );
    }

    //function that allows users to verify if a file has been certified before
    function verifyFile(string memory fileHash, address candidate_address)
        public
        view
        returns (FileCertificate memory, bool)
    {
        FileCertificate memory fileCertificate = fileCertificatesMap[
            candidate_address
        ][fileHash];
        // return's false of certificate is not verified else
        bool exists = (bytes(
            fileCertificatesMap[candidate_address][fileHash].fileHash
        ).length != 0);
        return (fileCertificate, exists);
    }

    // create a function for current user to get the list of his files
    // function getFilesOfCandidate( address candidate_address) public view returns()
}

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ViccAdmin {
    mapping(address => bool) internal adminGroup;
    uint8                    internal adminCount;
    address payable          internal creator;

    constructor() {
        creator = payable(msg.sender);
        addAdmin(msg.sender);
	}

    modifier onlyCreator virtual {
        require(creator != address(0), "Invalid creator address");
        require(msg.sender == creator, "For caller expected be creator");
        _;
    }
    modifier onlyValidAddress(address _address) virtual {
        require(_address != address(0), "Expected non-zero address");
        _;
    }
    modifier onlyAdmin virtual {
        require(msg.sender != address(0), "Invalid creator address");
        require(adminGroup[msg.sender], "Must be admin");
        _;
    }

    function addAdmin(address _admin) public virtual
    onlyCreator onlyValidAddress(_admin) {
        adminGroup[_admin] = true;
        adminCount = adminCount + 1;
    }

    function isAdmin(address _address) public view virtual 
    returns(bool yes) {
        yes = adminGroup[_address];
    }
}
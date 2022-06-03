// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract Sacrifice {
    constructor(address payable _recipient) payable {
        selfdestruct(_recipient);
    }
}

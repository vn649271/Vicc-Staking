// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "../VCStaking.sol";

contract VCStakingMock is VCStaking {
    receive() external payable {}
}

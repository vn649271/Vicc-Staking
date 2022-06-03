// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "./ViccAdmin.sol";

contract ViccToken is ERC20, ViccAdmin {

    uint8           private _decimals = 18;

    event burned(uint256 amount);

    receive() external payable {}

    constructor() ERC20("Victory Cash Coin", "VICC") {
        super._mint(msg.sender, 60100 * (10 ** uint256(_decimals)));
    }

    function burn(uint256 amount) public onlyAdmin {
        require(balanceOf(msg.sender) >= amount, "Insufficient VICC balance to burn");
        super._burn(msg.sender, amount);
        emit burned(amount);
    }
    function decimals() public view virtual override returns (uint8) {
        return _decimals;
    }
}

// SPDX-License-Identifier: MIT

pragma solidity ^0.8.17;

contract Attack {
    address s_owner;
    mapping(address => bool) s_userEligible;

    //Constructor

    constructor() {
        s_owner = msg.sender;
    }

    function isUserEligible(address user) public view returns (bool) {
        if (user == s_owner) {
            return true;
        }
        return false;
    }

    function setUserEligible(address user) public {
        s_userEligible[user] = true;
    }

    fallback() external {}
}

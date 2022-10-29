// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract Helper {
    // User => is eligible
    mapping(address => bool) s_userEligible;

    function isUserEligible(address user) public view returns (bool) {
        return s_userEligible[user];
    }

    // Set a user to eligibility in true
    function setUserEligible(address user) public {
        s_userEligible[user] = true;
    }

    fallback() external {}
}

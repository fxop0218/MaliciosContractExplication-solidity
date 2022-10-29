# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

Let's expalin what it works:

The Good.sol function is the "legitimate" function and Attack.sol is the malicious function.
Attack.sol and Good.sol generate the same ABI, because the ABI only displays the function names. 
Now, the owner of a scammer will first display Good.sol with the address of Attack.sol, when the user enters
the eligibility list using addUserToList functio that will work fine because the function's code is 
the same inside Helper.sol and Attack.sol, but when viewing a user's eligibility it will return false as long as it is not the owner. 

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```

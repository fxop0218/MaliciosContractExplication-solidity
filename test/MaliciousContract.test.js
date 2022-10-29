const { ethers } = require("hardhat")
const { expect } = require("chai")

describe("Attack deployed contract", () => {
    it("Should change the owner of the good contract", async () => {
        const attackContractFunction = await ethers.getContractFactory("Attack")
        const attackContract = await attackContractFunction.deploy()
        await attackContract.deployed()
        console.log(`Deployed the attack contract with ${attackContract.address} address`)

        // Deploy good contract
        const goodContractFactory = await ethers.getContractFactory("Good")
        const goodContract = await goodContractFactory.deploy(attackContract.address, {
            value: ethers.utils.parseEther("3"),
        })
        await goodContract.deployed()
        console.log(`Good contract deployed with ${goodContract.address} address`)

        const [_, address1] = await ethers.getSigners()
        let transaction = await goodContract.connect(address1).addUserToList()
        await transaction.wait()

        const eligible = await goodContract.connect(address1).isUserEligible()
        expect(eligible).to.equal(false)
    })
})

const hre = require("hardhat");
require("dotenv").config({ path: ".env" });

async function main() {

  const metadataURL = "ipfs://QmPWgCBYuHa16xSGjFYxHyRR1riZG5KWZ4Na8NtGfUSNLH";

 const RedWhiteArmyContract = await hre.ethers.deployContract("RedWhiteArmy", [
   metadataURL
 ]);

  await RedWhiteArmyContract.waitForDeployment();


  console.log("RedWhiteArmy Contract Address:", RedWhiteArmyContract.target);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
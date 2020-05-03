const SimpleSmartContract = artifacts.require('SimpleStorageContract');

contract('SimpleStorageContract', ()=> {
    it ('Should deploy smart contract properly', async () =>{
        const  simpleSmartContract = await SimpleSmartContract.deployed();
        console.log(simpleSmartContract.address);
        assert(simpleSmartContract.address != '');

    });

});
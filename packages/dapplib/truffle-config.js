require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey prison suspect venture stool curtain night mistake install permit fringe giant'; 
let testAccounts = [
"0x999c5b75916dfe2b0d7f2112b6af374aa1aebb027b60a5bed327f281727c41fe",
"0xf9a7179e6b1ce8a4cbdd6b6de90fa7c4b61f9aa38bb2b65539d15c2f938c1a09",
"0xd7301f36edd353f8f7d735056f80517e1a3c0e9e8209dc29f1591e6c4db3135a",
"0x03f758321f666c582750c452b322973541ed11ec59c82e5b7737e965b9d59acc",
"0x05e50ea93471f72403e4aba494bf088225a4dd9cc5d4be138f18beefc4389c0e",
"0x4b3316735e2bb0579ba2c4ce32c473c32e7a171f840e52c66c4e627da628d382",
"0x5e5a1e36232c15e7477d907bf0443ddc9b5339dbb759bcfd5d074400b0ff4730",
"0x67fd152e13e050d1ddd2b0839b7fced8dd4ccff4a165e71b6fcae3bca44b746b",
"0x96b688ca899e3a5dcce64a4a5e7b6dddc818469473a03616d8bae3c7e1e0307e",
"0x1e4514e8d72ff9f6b5fffc364cf50a1fd3f0d337d998b65b3cd90fc64ad40ad0"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


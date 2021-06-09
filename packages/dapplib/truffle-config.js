require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give enroll slender sugar blade deny noble method history light army gather'; 
let testAccounts = [
"0x286648795bccef197fccb37d96817944e4e2f0015229cd69c6fc9e711e2b02b6",
"0xde953b6a7bafac6351cb23270101b88512d70d6096f0c78d5b175531cdad3d74",
"0x9c89d4a86c9ad44c096144cc9506ddc301c3b01944b4a313fb671b48f556df7e",
"0x311a983eb50d71f3d85b1d4e83ea003645aff6cdaf9646d6ce64a5ad3dcebf82",
"0x1191740a89aab74d4ce47db2dc743b1d8d70fda50a14b068a7e6ffc804708039",
"0x746353b6751b9f571ad79d9073341cc1f4620c5557b5e486e37ea9cec42633ed",
"0xcd590860bcc059b295afc8da8ccafc712b765d331adf9feb33889546518ebdf0",
"0xec82abacb39fe60bdb89dd260db34cf1030070e0a6d41217f970ce123e5f694a",
"0x5b92bddf1a8936b21091001c1893207d7361ae2895933d2a7ba055c1a3d929b8",
"0x8928f307a6abd15113d6aea21ae8f1697c0881a8a5ab39f1519e0913ea64f1c4"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};


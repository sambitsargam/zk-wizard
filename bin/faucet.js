"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const TWITTER = `https://twitter.com/intent/tweet?text=I%27m+claiming+testnet+tokens+for+%40zksync+era%2C+the+ultimate+zkEVM%21%0A%0AMy+Address%3A+{ADDRESS}%0A%0ALearn+more%3A+&url=https%3A%2F%2Fzksync.io%2F`;
function faucet({ address }) {
    console.log(chalk_1.default.magentaBright(`Funding wallet with address ${address}...`));
    const newURL = TWITTER.replace('{ADDRESS}', address);
    console.log(chalk_1.default.greenBright(`Please visit \n ${newURL} \n to fund your wallet.`));
}
exports.default = faucet;
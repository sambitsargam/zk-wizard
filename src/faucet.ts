import chalk from "chalk";

interface IFundWalletOptions {
    address: string;
}

const TWITTER = `https://twitter.com/intent/tweet?text=I%27m+claiming+testnet+tokens+for+%40zksync+era%2C+the+ultimate+zkEVM%21%0A%0AMy+Address%3A+{ADDRESS}%0A%0ALearn+more%3A+&url=https%3A%2F%2Fzksync.io%2F`;

export default function faucet({ address }: IFundWalletOptions) {
    console.log(chalk.magentaBright(`Funding wallet with address ${address}...`));
    const newURL = TWITTER.replace('{ADDRESS}', address);
    console.log(chalk.greenBright(`Please visit \n ${newURL} \n to fund your wallet.`));
}
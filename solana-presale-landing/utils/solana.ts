import * as web3 from '@solana/web3.js';

export const PRESALE_WALLET = new web3.PublicKey('DLxV18RmY3EwVeHA91AN1W8S2sP24aCZmceTx3aDo4B6'); // Replace with your actual presale wallet address

export async function connectWallet(): Promise<string | null> {
  if (typeof window === 'undefined' || !('solana' in window)) {
    console.error('Solana object not found! Get a Phantom Wallet 👻');
    return null;
  }

  try {
    const resp = await (window as any).solana.connect();
    return resp.publicKey.toString();
  } catch (err) {
    console.error(err);
    return null;
  }
}

export async function disconnectWallet(): Promise<void> {
  if (typeof window === 'undefined' || !('solana' in window)) return;
  await (window as any).solana.disconnect();
}

export async function contributeToPresale(amount: number): Promise<{ success: boolean; message: string }> {
  if (typeof window === 'undefined' || !('solana' in window)) {
    return { success: false, message: 'Solana object not found! Get a Phantom Wallet 👻' };
  }

  try {
    const connection = new web3.Connection(web3.clusterApiUrl('devnet'), 'confirmed');
    const wallet = (window as any).solana;
    const fromPubkey = new web3.PublicKey(wallet.publicKey.toString());

    const transaction = new web3.Transaction().add(
      web3.SystemProgram.transfer({
        fromPubkey,
        toPubkey: PRESALE_WALLET,
        lamports: amount * web3.LAMPORTS_PER_SOL
      })
    );

    const { blockhash } = await connection.getLatestBlockhash();
    transaction.recentBlockhash = blockhash;
    transaction.feePayer = fromPubkey;

    const signedTransaction = await wallet.signTransaction(transaction);
    const signature = await connection.sendRawTransaction(signedTransaction.serialize());
    await connection.confirmTransaction(signature, 'confirmed');

    return { success: true, message: 'Contribution successful!' };
  } catch (error) {
    console.error('Error in contribution:', error);
    return { success: false, message: `An error occurred: ${error instanceof Error ? error.message : String(error)}` };
  }
}


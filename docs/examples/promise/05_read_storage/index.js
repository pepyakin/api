/* eslint-disable @typescript-eslint/no-var-requires */
// Import the API
const { ApiPromise } = require('@polkadot/api');

// Our address for Alice on the dev chain
const ALICE = '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY';

async function main () {
  // Create our API with a default connection to the local node
  const api = await ApiPromise.create();

  // Make our basic chain state/storage queries, all in one go
  const [accountNonce, now, validators] = await Promise.all([
    api.query.system.accountNonce(ALICE),
    api.query.timestamp.now(),
    api.query.session.validators()
  ]);

  console.log(`accountNonce(${ALICE}) ${accountNonce}`);
  console.log(`last block timestamp ${now.toNumber()}`);

  if (validators && validators.length > 0) {
    // Retrieve the balances for all validators
    const validatorBalances = await Promise.all(
      validators.map(authorityId =>
        api.query.balances.freeBalance(authorityId)
      )
    );

    // Print out the authorityIds and balances of all validators
    console.log('validators', validators.map((authorityId, index) => ({
      address: authorityId.toString(),
      balance: validatorBalances[index].toString()
    })));
  }
}

main().catch(console.error).finally(() => process.exit());

export const IDL = {
  "version": "0.1.0",
  "name": "presale",
  "instructions": [
    {
      "name": "presaleContribution",
      "accounts": [
        {
          "name": "contributor",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "presaleWallet",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "solAmount",
          "type": "u64"
        }
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "InsufficientFunds",
      "msg": "Insufficient funds sent."
    }
  ]
};


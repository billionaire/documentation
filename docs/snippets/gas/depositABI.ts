export const depositABI = [
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'chains',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
    ],
    name: 'deposit',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
] as const

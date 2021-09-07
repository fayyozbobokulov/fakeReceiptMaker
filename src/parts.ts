const random_name = require('node-random-name');

const merchants = ["613701a05449c34c35f6b3db", "613701a1eb835bc2470ae27b", "613701a231133d903876d3fb", "613701a3248cdd8669de5bd0", "613701a4c80b06772d774592", "613701a57c42a4b1d9b0e9a5", "613701a6274ff19c948fcd99", "613701a7484bcd5d639e12c6", "613701a8c4501b182ec9de40"];
const paymentTypes = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const receiptStates = [1, 2, 3, 4];


export const merchant = () => merchants[Math.floor(Math.random() * merchants.length)];
export const paymentType = () => paymentTypes[Math.floor(Math.random() * paymentTypes.length)];
export const receiptState = () => receiptStates[Math.floor(Math.random() * receiptStates.length)];
export const amount = () => Math.floor(Math.random() * 100000);
export const cardowner = () => random_name({ seed: 'Based on this', random: Math.random });





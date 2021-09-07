import Redis from "ioredis";
import { receipt } from "./receipt";
import { ReceiptGeneratorImpl } from "./receiptClass";

const redis = new Redis();

const channel = 'payments'

setInterval(() => {
  const newReceipt = new ReceiptGeneratorImpl(receipt).createReceipt();
  redis.publish(channel, JSON.stringify(newReceipt));
  console.log(`New Receipt Generated \n${JSON.stringify(newReceipt)}`);
}, 1000)

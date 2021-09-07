import { idGenerator } from "./idGenerator";
import { amount, cardowner, merchant, paymentType, receiptState } from "./parts";

export interface ReceiptGenerator {
  createReceipt(): any;
}

export class ReceiptGeneratorImpl implements ReceiptGenerator {
  constructor(private receipt: any) { }

  createReceipt(): any {
    this.receipt.account.cardowner = cardowner();
    const receipt: any = {};
    receipt._id = idGenerator();
    receipt.type = paymentType();
    receipt.payer = {
      id: idGenerator()
    };
    receipt.state = receiptState();
    receipt.create_time = Date.now();
    receipt.pay_time = Date.now() - 27;
    receipt.merchant = merchant();
    receipt.amount = amount();
    receipt.account = this.receipt.account;
    return receipt;
  }
}



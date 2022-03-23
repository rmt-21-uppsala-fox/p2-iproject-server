const Xendit = require("xendit-node");
const x = new Xendit({
  secretKey: process.env.XENDIT_API,
});

const { Invoice } = x;
const invoice = new Invoice({});

class XenditInvoice {
  static createInvoice(externalID, amount) {
    return invoice.createInvoice({
      externalID,
      amount,
    });
  }
  static expireInvoice(invoiceID) {
    return invoice.expireInvoice(invoiceID);
  }
}
module.exports = XenditInvoice;

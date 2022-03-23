const Xendit = require("xendit-node");
const x = new Xendit({
  secretKey: process.env.XENDIT_API,
});

const { Invoice } = x;
const invoice = new Invoice({});

class XenditInvoice {
  static createInvoice(externalID, amount) {
    return invoice.createInvoice({
      externalID: externalID,
      amount,
    });
  }
  static expireInvoice(invoiceID) {
    return invoice.expireInvoice({ invoiceID });
  }
  static getInvoice(invoiceID) {
    return invoice.getInvoice({ invoiceID });
  }
}
module.exports = XenditInvoice;

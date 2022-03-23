const Xendit = require("xendit-node");
const x = new Xendit({
  secretKey: process.env.XENDIT_API,
});
const { Invoice } = x;
const invoice = new Invoice({});

class XenditInvoice {
  static createInvoice(externalID, amount, payer_email, description) {
    return invoice.createInvoice({
      externalID,
      amount,
      payer_email,
      description,
    });
  }
  static expireInvoice(invoiceID) {
    return invoice.expireInvoice({
      invoiceID,
    });
  }
}

module.exports = XenditInvoice;

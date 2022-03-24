const Xendit = require("xendit-node");
const x = new Xendit({
  secretKey: process.env.XENDIT_API,
});

const { Invoice } = x;
const invoice = new Invoice({});

class XenditInvoice {
  static createInvoice(externalID, amount, customer) {
    return invoice.createInvoice({
      externalID: externalID,
      amount,
      successRedirectURL: "https://ggstore-andrizalchaidar.web.app/",
      payerEmail: customer.email,
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

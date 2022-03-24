const Xendit = require("xendit-node");
const x = new Xendit({
  secretKey: "xnd_development_CgYT9mkeAWxSsotdsUcFx2kDfE9f8cjeb2PEXR75fOIeolwpJsBTweAP7RJXwCb",
});

const { Invoice } = x;
const invoice = new Invoice({});

class XenditInvoice {
  static createInvoice(externalID, amount, customer) {
    return invoice.createInvoice({
      externalID: externalID,
      amount,
      successRedirectURL: "http://localhost:8080/success",
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

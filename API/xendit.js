const Xendit = require("xendit-node");
const x = new Xendit({
  secretKey: "xnd_development_CgYT9mkeAWxSsotdsUcFx2kDfE9f8cjeb2PEXR75fOIeolwpJsBTweAP7RJXwCb",
});

const { Invoice } = x;
const invoice = new Invoice({});

class XenditInvoice {
  static createInvoice(externalID, amount, RestaurantId, payerEmail) {
    return invoice.createInvoice({
      externalID: externalID,
      amount,
      successRedirectURL: `https://fastorder-ican.web.app/${RestaurantId}/customer`,
      payerEmail: payerEmail,
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

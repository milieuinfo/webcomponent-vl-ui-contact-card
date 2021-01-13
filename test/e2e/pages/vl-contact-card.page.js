const VlContactCard = require('../components/vl-contact-card');
const {Page, Config} = require('vl-ui-core').Test;
const {VlPropertiesList} = require('vl-ui-properties').Test;

class VlContactCardPage extends Page {
  async getContactCard() {
    return this._getContactCard('#contact-card');
  }

  async getPropertiesList(element) {
    return new VlPropertiesList(this.driver, element);
  }

  async load() {
    await super.load(Config.baseUrl + '/demo/vl-contact-card.html');
  }

  async _getContactCard(selector) {
    return new VlContactCard(this.driver, selector);
  }
}

module.exports = VlContactCardPage;

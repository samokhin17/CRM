/// <reference types="cypress" />
const sendAnEmail = (message) => {

  const nodemailer = require('nodemailer');
  const sgTransport = require('nodemailer-sendgrid-transport');
  const options = {
    auth: {
      api_user: 'sendgrid_USER',
      api_key: 'sendgrid_APIKEY'
    }
  }
  const client = nodemailer.createTransport(sgTransport(options));

  const email = {
    from: 'FROM_MAIL.PL',
    to: 'TO_MAIL.PL',
    subject: 'Hello',
    text: message,
    html: '<b>Hello world</b>'
  };
  client.sendMail(email, function(err, info) {
    return err? err.message : 'Message sent: ' + info.response;
  });
}

module.exports = (on, config) => {
  on('task', {
    sendMail (message) {
      return sendAnEmail(message);
    }
  })
}
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
}

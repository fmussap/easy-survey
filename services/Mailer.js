'use strict'

const sendGrid = require('sendgrid')
const keys = require('../config/keys')

const helper = sendGrid.mail

class Mailer extends helper.Mail {
  constructor (survey, content) {
    super()
    const { subject, recipients } = survey
    this.sgApi = sendGrid(keys.sendGridKey)
    this.from_email = new helper.Email('no-replay@easysurvey.com')

    this.subject = subject
    this.body = new helper.Content('text/html', content)
    this.recipients = this.formatAddresses(recipients)

    this.addContent(this.body)
    this.addClickTracking()
    this.addRecipients()
  }

  formatAddresses (recipients) {
    return recipients.map(({ email }) => {
      return new helper.Email(email)
    })
  }

  addClickTracking () {
    const trackingSettings = new helper.TrackingSettings()
    const clickTracking = new helper.ClickTracking(true, true)

    trackingSettings.setClickTracking(clickTracking)
    this.addTrackingSettings(trackingSettings)
  }

  addRecipients () {
    const personalize = new helper.Personalization()
    this.recipients.forEach(recipient => {
      personalize.addTo(recipient)
    })
    this.addPersonalization(personalize)
  }

  async send () {
    try {
      const request = this.sgApi.emptyRequest({
        method: 'POST',
        path: '/v3/mail/send',
        body: this.toJSON()
      })

      const response = await this.sgApi.API(request)
      return response
    } catch (e) {
      console.log('error detail', e)
      console.log('error', e.response.body.errors)
    }
  }
}

module.exports = Mailer

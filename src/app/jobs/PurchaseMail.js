const Mail = require('../services/Mail')

class PurchaseMail {
  get key () {
    return 'PurchaseMail'
  }

  async handle (job, done) {
    const { ad, user, content } = job.data

    await Mail.sendMail({
      from: '"Arthur Barbosa"<arthurbruno03@gmail.com>',
      to: ad.author.email,
      subject: `Solicitacao de compra: ${ad.title}`,
      template: 'purchase',
      context: { user, content, ad }
    })
  }
}

module.exports = new PurchaseMail()

const mail = require('@sendgrid/mail');
mail.setApiKey(process.env.SENDGRID_API_KEY);

export default function handler(req, res) {

const body = JSON.parse(req.body);
console.log('body', body);

const message = `
  Name: ${body.name}\r\n
  Email: ${body.email}\r\n
  Number: ${body.number}\r\n
  Make: ${body.make}\r\n
  Model: ${body.model}\r\n
  Year: ${body.year}\r\n
  Inquiry: ${body.inquiry}
`;
mail.send({
  to: 'info@thegaragesv.com',
  from: 'info@thegaragesv.com',
  subject: 'New Form Submission on Website',
  text: message,
  html: message.replace(/\r\n/g, '<br>' )
}).then(() => {
  res.status(200).json({status: 'OK'});
});

}

const Message = require('../models/Message');
const transporter = require('../config/mail');
const validateInput = require('../utils/validateInput');

exports.submitMessage = async (req, res, next) => {
  try {
    const { name, email, subject, message } = req.body;

    const error = validateInput({ name, email, message });
    if (error) return res.status(400).json({ error });

    const newMsg = new Message({ name, email, subject, message });
    await newMsg.save();

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Merci pour votre message, ${name}!`,
      html: `<p>Bonjour ${name},</p><p>Merci pour votre message. Nous reviendrons vers vous bientôt.</p>`
    });

    res.status(200).json({ msg: "Message reçu et email envoyé avec succès!" });
  } catch (err) {
    next(err);
  }
};

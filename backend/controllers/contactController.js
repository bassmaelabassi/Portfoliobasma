const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');

// Configure nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// @desc    Submit a new contact message
// @route   POST /api/contact
// @access  Public
const submitContact = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        // Save to database
        const contact = await Contact.create({
            name,
            email,
            message
        });

        // Send confirmation email
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Thank you for contacting me',
            html: `
                <h1>Thank you for your message!</h1>
                <p>Dear ${name},</p>
                <p>I have received your message and will get back to you as soon as possible.</p>
                <p>Best regards,</p>
                <p>Your Name</p>
            `
        };

        await transporter.sendMail(mailOptions);

        res.status(201).json({
            success: true,
            message: 'Message sent successfully'
        });
    } catch (error) {
        console.error('Contact submission error:', error);
        res.status(500).json({
            success: false,
            message: 'Error sending message'
        });
    }
};

module.exports = {
  submitContact
}; 
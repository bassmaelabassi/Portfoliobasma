const Contact = require('../models/Contact');

const submitContact = async (req, res) => {
    try {
        const { name, email, message, subject } = req.body;

        const contact = await Contact.create({
            name,
            email,
            message,
            subject: subject || 'No subject'
        });

        res.status(201).json({
            success: true,
            message: 'Message sent successfully',
            data: contact
        });
    } catch (error) {
        console.error('Contact submission error:', error);
      
        if (error.name === 'ValidationError') {
            return res.status(400).json({
                success: false,
                message: 'Validation error',
                errors: Object.values(error.errors).map(err => err.message)
            });
        }

        if (error.code === 11000) {
            return res.status(400).json({
                success: false,
                message: 'Duplicate entry'
            });
        }
        res.status(500).json({
            success: false,
            message: 'Error sending message',
            error: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    }
};

module.exports = {
    submitContact
}; 
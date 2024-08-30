const Info = require('../models/infoModel');

exports.fillInfo = async (req, res) => {
    const { network, phoneNumber, airtimePin } = req.body;
    try {
        const info = new Info({
            userId: req.user.id,
            network,
            phoneNumber,
            airtimePin
        });
        await info.save();
        res.status(201).json({ message: 'Info saved successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

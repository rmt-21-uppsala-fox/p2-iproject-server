const admin = require('../api/firebase');
const authentication = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const verify = await admin.auth().verifyIdToken(token);
        if (!verify) throw { name: 'unauthorized' };
        res.status(200).json({ msg: 'Authenticated!' });
    } catch (err) {
        next(err);
    }
};

module.exports = authentication;

exports.authorize = async (req, res, next) => {
    if (req.headers.authorization.split(' ')[1] != process.env.INTERNAL_TOKEN) {
        return res.status(400).json({
            status: 'error',
            message: 'Unauthorized'
        });
    }

    next();
}

const router = require('express').Router();

router.get('/create', function (req, res) {
    res.render('create');
});

module.exports = router;
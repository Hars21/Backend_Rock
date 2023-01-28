const express = require('express');
const router = express.Router();
const loginService = require('./login.service');

var _ = require('lodash');
const { names } = require('debug');
// const _l = require(`${PROJECT_DIR}/utility/userConsoleLogs`);

// routes
router.post('/loginV2', loginV2);

module.exports = router;


function loginV2(req, res, next) {
    try {
        loginService.loginV2(req)
            .then(states => res.status(states.status).json(states.response))
            .catch(err => next(err));
    } catch (e) {
        res.status(500).json({ "success": false, "error": "Internal server error." });
    }
}
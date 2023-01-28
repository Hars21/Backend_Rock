require("dotenv").config();
const config = {
    "secret": `${process.env.JWT_SECRET}`
}
const jwt = require('jsonwebtoken');
var _ = require('lodash');
const moment = require('moment');
// var validation = require(`${PROJECT_DIR}/utility/validation`);
var response = { "status": 200, "response": "" };
var md5 = require('md5');


module.exports = {
    loginV2
}



async function loginV2(req) {
    try {

        let x = true;
        data = [1,2,3,4,5,6,7,8,9,10]
    


        if (x == true) {
            response.response = { 'success': true, "data": data, "token": data.length };
            response.status = 200;
            return response;
        } else {
            response.response = { 'success': false, "message": "The account associated with this user does not exist in account table", "data": [] };
            response.status = 400;
            return response;
        }


    } catch (e) {
        let error_log = `Error ::::: 010 ::::: ${e}`
        console.log(error_log);
        response.response = { success: false, message: 'Internal Server error.' };
        response.status = 500;
        return response;
    }
}


const express = require("express");
const bodyParser = require("body-parser");
const PORT = require('port')
const url = require('url');
var crypto = require('crypto')
var CryptoJS = require("crypto-js");
var cors = require('cors');
const { json } = require("body-parser");
const { response } = require("express");
const fetch = (...args) =>
import('node-fetch').then(({ default: fetch }) => fetch(...args));
const portData = process.env.PORT || 3001

// create express app
const app = express();

app.use(cors())


// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

app.post("/payment", async (req, res) => {
    var hash = crypto.createHash('sha512').update(req.body.hash + '4R38IvwiV57FwVpsgOvTXBdLE4tHUXFW').digest('hex');
    var body = {
        key: `${req.body.key}`,
        txnid: `${req.body.txnid}`,
        api_version: `${req.body.api_version}`,
        productinfo: `${req.body.productinfo}`,
        firstname: `${req.body.firstname}`,
        lastname: `${req.body.lastname}`,
        amount: `${req.body.amount}`,
        email: `${req.body.email}`,
        phone: `${req.body.phone}`,
        surl: `${req.body.surl}`,
        furl: `${req.body.furl}`,
        hash: `${hash}`
    }
    res.json(body)
});


app.post("/payment_success/:data", async (req, res) => {
    
    console.log(req.params.data)
    var bytes = CryptoJS.AES.decrypt(req.params.data.toString(), 'gtKFFx');
    // var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

    console.log(JSON.parse(bytes.toString(CryptoJS.enc)))
    // console.log(decryptedData)

    res.sendFile('success.html', {root: __dirname })
});

app.post("/payment_failure", async (req, res) => {
    console.log(req)
    res.sendFile('failure.html', {root: __dirname })
});


app.listen(portData, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", portData);
});


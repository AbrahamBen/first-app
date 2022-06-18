const express = require('express');
const nodeMailer = require('nodemailer')
const contactvalidator = require('../middlewares/validators/contact.validators');
const sendEmail = require('../middlewares/services/email.service');
const router = express.Router();

/*
  *  GET home page
 */
router.get('/',(req,res)=>{
    res.render('index',{title:'Home page'});
});


/**
 * GET contact page
 */
router.get('/contact',(req,res)=>{
    res.render('contact',{title:'Contact page'});
});

/**
 * POST contact
 */
router.post('/contact',contactvalidator,sendEmail);

module.exports = router;

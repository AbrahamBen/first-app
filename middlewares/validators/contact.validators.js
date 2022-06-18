const { Validator } = require('node-input-validator');

contactValidators = (req,res,next)=>{
    const formIsValid = new Validator(req.body, {
        email: 'required|email',
        subject: 'required',
        message: 'required'
    });

    formIsValid.check().then((matched) => {
        if (!matched) {
            res.render('contact',{formError:formIsValid.errors});
            return;
        }
        next();
    });
}

module.exports = contactValidators;

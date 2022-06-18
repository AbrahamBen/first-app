const nodeMailer = require("nodemailer");

sendEmail = (req,res,next)=>{
    let transporter = nodeMailer.createTransport({
        service : 'outlook',
        auth:{
            user:'eternelle.vision@outlook.fr',
            pass:'Dahlia.1996'
        }
    });

    let message = `Email : ${req.body.email} <br>Message: '${req.body.message}`;
    let mailOptions = {
        from:req.body.email,
        to: 'eternelle.vision@outlook.fr',
        subject : req.body.subject,
        html: message
    };

    transporter.sendMail(mailOptions,(err,infos)=>{
        if(err){
            console.log(err);
            res.render('contact',
                {
                    title:'Contact page',
                    error:'Erreur lors de l\'envoie de votre message réesssayez svp'
                });
            next();
        }else{
            console.log(infos);
            res.render('contact',{
                title:'Contact page',
                success:'Votre message a bien été envoyé'
            });
            next();
        }
    })
}


module.exports = sendEmail;

const functions = require('firebase-functions');
const admin = require('firebase-admin')
nodemailer =  require('nodemailer')
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

admin.initializeApp()
require('dotenv').config()

const {SENDER_EMAIL,SENDER_PASSWORD} =  process.env;


exports.sendEmailClaimForm = functions.firestore.document("ClaimFormTable/{docId}")
.onCreate( (snap,ctx)=>{
 const data =  snap.data()

 let authData =  nodemailer.createTransport({
    service: 'gmail',
     port:465,
     secure: true,
     auth:{
         user:SENDER_EMAIL,
         pass: SENDER_PASSWORD
     }
 })
 authData.sendMail({
     from:'info.truelly@gmail.com',
     to:`shaunmlax@gmail.com`,
     subject: "Student Claim form for profile",
     text: `this text`,
     html:  `<html>

     <head>
       <meta name="viewport" content="width=device-width" />
       <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
       <title>Simple Email HTML</title>
     
       <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700|Poppins:400,700" rel="stylesheet">
     
       <style>
         /* -------------------------------------
               GLOBAL RESETS
           ------------------------------------- */
     
         /*All the styling goes here*/
     
         img {
           border: none;
           -ms-interpolation-mode: bicubic;
           max-width: 100%;
         }
     
         body {
           background-color: #dbdbdb;
           font-family: 'Poppins', 'Helvetica', sans-serif;
           -webkit-font-smoothing: antialiased;
           font-size: 15px;
           line-height: 28px;
           letter-spacing: .5px;
           margin: 0;
           padding: 0;
           -ms-text-size-adjust: 100%;
           -webkit-text-size-adjust: 100%;
         }
     
         table {
           border-collapse: separate;
           mso-table-lspace: 0pt;
           mso-table-rspace: 0pt;
           width: 100%;
         }
     
         table td {
           font-family: 'Poppins', 'Helvetica', sans-serif;
           font-size: 15px;
           line-height: 28px;
           letter-spacing: .5px;
           text-align: left;
           color: #6F6F6F;
         }
     
         /* -------------------------------------
               BODY & CONTAINER
           ------------------------------------- */
     
         .body {
           background-color: #dbdbdb;
           width: 100%;
         }
     
         /* Set a max-width, and make it display as block so it will automatically stretch to that width, but will also shrink down on a phone or something */
     
         .container {
           display: block;
           Margin: 0 auto !important;
           /* makes it centered */
           max-width: 580px;
           padding: 10px;
           width: 580px;
         }
     
         /* This should also be a block element, so that it will fill 100% of the .container */
     
         .content {
           box-sizing: border-box;
           display: block;
           Margin: 0 auto;
           max-width: 580px;
           padding: 10px;
         }
     
         /* -------------------------------------
               HEADER, FOOTER, MAIN
           ------------------------------------- */
     
         .main {
           background: #ffffff;
           border-radius: 3px;
           width: 100%;
         }
     
         .wrapper {
           box-sizing: border-box;
           padding: 20px;
         }
     
         .content-block {
           padding-bottom: 10px;
           padding-top: 10px;
         }
     
         .footer {
           clear: both;
           Margin-top: 10px;
           text-align: center;
           width: 100%;
         }
     
         .footer td,
         .footer p,
         .footer span,
         .footer a {
           color: #000000;
           font-size: 14px;
           text-align: center;
         }
     
         /* -------------------------------------
               TYPOGRAPHY
           ------------------------------------- */
     
         h1 {
           font-family: 'Montserrat', 'Verdana', sans-serif;
           font-size: 30px;
           font-weight: bold;
           line-height: 42px;
           text-align: left;
           color: #000000;
           padding-bottom: 15px !important;
         }
     
         h2 {
           font-family: 'Montserrat', 'Verdana', sans-serif;
           font-size: 24px;
           font-weight: bold;
           line-height: 32px;
           text-align: left;
           color: #000000;
           padding-bottom: 15px !important;
         }
     
         h3 {
           font-family: 'Montserrat', 'Verdana', sans-serif;
           font-size: 20px;
           font-weight: bold;
           line-height: 28px;
           text-align: left;
           color: #000000;
           padding-bottom: 15px !important;
         }
     
         p,
         ul,
         ol {
           font-family: 'Poppins', 'Helvetica', sans-serif;
           font-size: 15px;
           font-weight: normal;
           margin: 0;
           margin-bottom: 15px;
         }
     
         p li,
         ul li,
         ol li {
           list-style-position: inside;
           margin-left: 5px;
         }
     
         a {
           color: #39b54a;
           text-decoration: underline;
         }
     
         /* -------------------------------------
               BUTTONS
           ------------------------------------- */
     
         .btn {
           box-sizing: border-box;
           width: 100%;
         }
     
         .btn>tbody>tr>td {
           padding-bottom: 15px;
         }
     
         .btn table {
           width: auto;
         }
     
         .btn table td {
           background-color: #ffffff;
           border-radius: 5px;
           text-align: center;
         }
     
         .btn a {
           background-color: #ffffff;
           border: solid 1px #39b54a;
           border-radius: 5px;
           box-sizing: border-box;
           color: #39b54a;
           cursor: pointer;
           display: inline-block;
           font-size: 15px;
           font-weight: bold;
           margin: 0;
           padding: 12px 25px;
           text-decoration: none;
           text-transform: capitalize;
         }
     
         .btn-primary table td {
           background-color: #39b54a;
         }
     
         .btn-primary a {
           background-color: #007179;
           border-color: #FFDD40;
           color: #ffffff;
         }
     
         /* -------------------------------------
               OTHER STYLES THAT MIGHT BE USEFUL
           ------------------------------------- */
     
         .last {
           margin-bottom: 0;
         }
     
         .first {
           margin-top: 0;
         }
     
         .align-center {
           text-align: center;
         }
     
         .align-right {
           text-align: right;
         }
     
         .align-left {
           text-align: left;
         }
     
         .clear {
           clear: both;
         }
     
         .mt0 {
           margin-top: 0;
         }
     
         .mb0 {
           margin-bottom: 0;
         }
     
         .preheader {
           color: transparent;
           display: none;
           height: 0;
           max-height: 0;
           max-width: 0;
           opacity: 0;
           overflow: hidden;
           mso-hide: all;
           visibility: hidden;
           width: 0;
         }
     
         .powered-by a {
           text-decoration: none;
         }
     
         hr {
           border: 0;
           border-bottom: 1px solid #dbdbdb;
           Margin: 20px 0;
         }
     
         /* -------------------------------------
               RESPONSIVE AND MOBILE FRIENDLY STYLES
           ------------------------------------- */
     
         @media only screen and (max-width: 620px) {
           table[class=body] h1 {
             font-size: 28px !important;
             margin-bottom: 10px !important;
           }
           table[class=body] p,
           table[class=body] ul,
           table[class=body] ol,
           table[class=body] td,
           table[class=body] span,
           table[class=body] a {
             font-size: 16px !important;
           }
           table[class=body] .wrapper,
           table[class=body] .article {
             padding: 10px !important;
           }
           table[class=body] .content {
             padding: 0 !important;
           }
           table[class=body] .container {
             padding: 0 !important;
             width: 100% !important;
           }
           table[class=body] .main {
             border-left-width: 0 !important;
             border-radius: 0 !important;
             border-right-width: 0 !important;
           }
           table[class=body] .btn table {
             width: 100% !important;
           }
           table[class=body] .btn a {
             width: 100% !important;
           }
           table[class=body] .img-responsive {
             height: auto !important;
             max-width: 100% !important;
             width: auto !important;
           }
         }
     
         /* -------------------------------------
               PRESERVE THESE STYLES IN THE HEAD
           ------------------------------------- */
     
         @media all {
           .ExternalClass {
             width: 100%;
           }
           .ExternalClass,
           .ExternalClass p,
           .ExternalClass span,
           .ExternalClass font,
           .ExternalClass td,
           .ExternalClass div {
             line-height: 100%;
           }
           .apple-link a {
             color: inherit !important;
             font-family: inherit !important;
             font-size: inherit !important;
             font-weight: inherit !important;
             line-height: inherit !important;
             text-decoration: none !important;
           }
           .btn-primary table td:hover {
             background-color: #2b8838 !important;
           }
           .btn-primary a:hover {
             background-color: #2b8838 !important;
             border-color: #2b8838 !important;
           }
         }
       </style>
     </head>
     
     <body class="">
       <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body">
         <tr>
           <td>&nbsp;</td>
           <td class="container">
             <div class="footer">
               <table border="0" cellpadding="0" cellspacing="0">
                 <tr>
                   <td class="content-block">
                     <a href="https://denvercbdco.com" target="_blank"><img src="https://drive.google.com/uc?export=download&id=19KQD94mApiT7z9RCKjwzKrQcfCynDYEI" alt="Denver CBD" align="center" style="display:block;float:none;margin:0 auto;max-width:200px;outline:0;"></a>
                   </td>
                 </tr>
               </table>
             </div>
             <div class="content">
     
               <!-- START CENTERED WHITE CONTAINER -->
               <span class="preheader">This is preheader text. Some clients will show this text as a preview.</span>
               <table role="presentation" class="main">
     
                 <!-- START MAIN CONTENT AREA -->
                 <tr>
                   <td class="wrapper">
                     <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                       <tr>
                         <td>
                           <h2>Claim form has been sent for creating the Financial profile</h2>
                       
                           <p><b>Group Number of student:</b> 30<br>
                             <b>Claim form Document:</b> ${data.Url}</p>
                           <p>Log in to your <a href="https://denvercbdco.com/partner-dashboard/" target="_blank">Partner Dashboard</a></p>
                           <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="btn btn-primary">
                             <tbody>
                               <tr>
                                 <td align="left">
                                   <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                                     <tbody>
                                       <tr>
                                         <td> <a href="https://denvercbdco.com/partner-dashboard/" target="_blank"><img src="https://denvercbdco.com/wp-content/uploads/2018/11/home-icon.png" style="margin-bottom:-3px;padding-right:10px;width:18px;"></i>Go to Partner Dashboard</a>                                      </td>
                                       </tr>
                                     </tbody>
                                   </table>
                                 </td>
                               </tr>
                             </tbody>
                           </table>
                         </td>
                       </tr>
                     </table>
                   </td>
                 </tr>
     
                 <!-- END MAIN CONTENT AREA -->
               </table>
     
               <!-- START FOOTER -->
               <div class="footer">
                 <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                   <tr>
     
                   </tr>
                   <tr>
                     <td class="content-block">
                     <span class="apple-link">This message and attachments are subject to a disclaimer.
                     Please refer to <a href="http://upnet.up.ac.za/services/it/documentation/docs/004167.pdf" style="background-color: red;">http://upnet.up.ac.za/services/it/documentation/docs/004167.pdf</a> for full details.</span>
                   <br> Copyright © 2020 GoldenDawn
                     </td>
                   </tr>
                   <tr>
                     <td class="content-block powered-by">
                       <a href="https://www.facebook.com/DenverCBD" target="_blank"><img title="Facebook" src="https://hoiqh.stripocdn.email/content/assets/img/social-icons/logo-black/facebook-logo-black.png" alt="Facebook" width="32" height="32" style="display:inline-block;border:0;outline:none;text-decoration:none;"></a>                  &nbsp;
                       <a href="https://www.instagram.com/denvercbd/" target="_blank" style="font-weight:bold"><img title="Instagram" src="https://hoiqh.stripocdn.email/content/assets/img/social-icons/logo-black/instagram-logo-black.png" alt="Instagram" width="32" height="32" style="display:inline-block;border:0;outline:none;text-decoration:none;"></a>                  &nbsp;
                       <a href="https://www.youtube.com/channel/UCVA6ZT2lBB7dH__L3QP-GpA" target="_blank" style="font-weight:bold"><img title="Youtube" src="https://hoiqh.stripocdn.email/content/assets/img/social-icons/logo-black/youtube-logo-black.png" alt="Youtube" width="32" height="32" style="display:inline-block;border:0;outline:none;text-decoration:none;"></a>                  &nbsp;
                       <a href="mailto:marketing@denvercbdco.com" target="_blank" style="font-weight:bold"><img title="Email" src="https://hoiqh.stripocdn.email/content/assets/img/other-icons/logo-black/mail-logo-black.png" alt="Email" width="32" height="32" style="display:inline-block;border:0;outline:none;text-decoration:none;"></a>
                     </td>
                   </tr>
                 </table>
               </div>
               <!-- END FOOTER -->
     
               <!-- END CENTERED WHITE CONTAINER -->
             </div>
           </td>
           <td>&nbsp;</td>
         </tr>
       </table>
     </body>
     
     </html>`,
 }).then(res=>console.log("SUCCESS")).catch(err=>console.log(err))
})

exports.NewUserJCPEmail = functions.firestore.document("Users/{docId}")
.onCreate( (snap,ctx)=>{
 const data =  snap.data()

 let authData =  nodemailer.createTransport({
    service: 'gmail',
     port:465,
     secure: true,
     auth:{
         user:SENDER_EMAIL,
         pass: SENDER_PASSWORD
     }
 })
 authData.sendMail({
     from:'martina@up.ac.za',
     to:`${data.Email}`,
     subject: "Successfully registered on the JCP system",
     text: `this text`,
     html:  `<html>

     <head>
       <meta name="viewport" content="width=device-width" />
       <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
       <title>Simple Email HTML</title>
     
       <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700|Poppins:400,700" rel="stylesheet">
     
       <style>
         /* -------------------------------------
               GLOBAL RESETS
           ------------------------------------- */
     
         /*All the styling goes here*/
     
         img {
           border: none;
           -ms-interpolation-mode: bicubic;
           max-width: 100%;
         }
     
         body {
           background-color: #dbdbdb;
           font-family: 'Poppins', 'Helvetica', sans-serif;
           -webkit-font-smoothing: antialiased;
           font-size: 15px;
           line-height: 28px;
           letter-spacing: .5px;
           margin: 0;
           padding: 0;
           -ms-text-size-adjust: 100%;
           -webkit-text-size-adjust: 100%;
         }
     
         table {
           border-collapse: separate;
           mso-table-lspace: 0pt;
           mso-table-rspace: 0pt;
           width: 100%;
         }
     
         table td {
           font-family: 'Poppins', 'Helvetica', sans-serif;
           font-size: 15px;
           line-height: 28px;
           letter-spacing: .5px;
           text-align: left;
           color: #6F6F6F;
         }
     
         /* -------------------------------------
               BODY & CONTAINER
           ------------------------------------- */
     
         .body {
           background-color: #dbdbdb;
           width: 100%;
         }
     
         /* Set a max-width, and make it display as block so it will automatically stretch to that width, but will also shrink down on a phone or something */
     
         .container {
           display: block;
           Margin: 0 auto !important;
           /* makes it centered */
           max-width: 580px;
           padding: 10px;
           width: 580px;
         }
     
         /* This should also be a block element, so that it will fill 100% of the .container */
     
         .content {
           box-sizing: border-box;
           display: block;
           Margin: 0 auto;
           max-width: 580px;
           padding: 10px;
         }
     
         /* -------------------------------------
               HEADER, FOOTER, MAIN
           ------------------------------------- */
     
         .main {
           background: #ffffff;
           border-radius: 3px;
           width: 100%;
         }
     
         .wrapper {
           box-sizing: border-box;
           padding: 20px;
         }
     
         .content-block {
           padding-bottom: 10px;
           padding-top: 10px;
         }
     
         .footer {
           clear: both;
           Margin-top: 10px;
           text-align: center;
           width: 100%;
         }
     
         .footer td,
         .footer p,
         .footer span,
         .footer a {
           color: #000000;
           font-size: 14px;
           text-align: center;
         }
     
         /* -------------------------------------
               TYPOGRAPHY
           ------------------------------------- */
     
         h1 {
           font-family: 'Montserrat', 'Verdana', sans-serif;
           font-size: 30px;
           font-weight: bold;
           line-height: 42px;
           text-align: left;
           color: #000000;
           padding-bottom: 15px !important;
         }
     
         h2 {
           font-family: 'Montserrat', 'Verdana', sans-serif;
           font-size: 24px;
           font-weight: bold;
           line-height: 32px;
           text-align: left;
           color: #000000;
           padding-bottom: 15px !important;
         }
     
         h3 {
           font-family: 'Montserrat', 'Verdana', sans-serif;
           font-size: 20px;
           font-weight: bold;
           line-height: 28px;
           text-align: left;
           color: #000000;
           padding-bottom: 15px !important;
         }
     
         p,
         ul,
         ol {
           font-family: 'Poppins', 'Helvetica', sans-serif;
           font-size: 15px;
           font-weight: normal;
           margin: 0;
           margin-bottom: 15px;
         }
     
         p li,
         ul li,
         ol li {
           list-style-position: inside;
           margin-left: 5px;
         }
     
         a {
           color: #39b54a;
           text-decoration: underline;
         }
     
         /* -------------------------------------
               BUTTONS
           ------------------------------------- */
     
         .btn {
           box-sizing: border-box;
           width: 100%;
         }
     
         .btn>tbody>tr>td {
           padding-bottom: 15px;
         }
     
         .btn table {
           width: auto;
         }
     
         .btn table td {
           background-color: #ffffff;
           border-radius: 5px;
           text-align: center;
         }
     
         .btn a {
           background-color: #ffffff;
           border: solid 1px #39b54a;
           border-radius: 5px;
           box-sizing: border-box;
           color: #39b54a;
           cursor: pointer;
           display: inline-block;
           font-size: 15px;
           font-weight: bold;
           margin: 0;
           padding: 12px 25px;
           text-decoration: none;
           text-transform: capitalize;
         }
     
         .btn-primary table td {
           background-color: #39b54a;
         }
     
         .btn-primary a {
           background-color: #007179;
           border-color: #FFDD40;
           color: #ffffff;
         }
     
         /* -------------------------------------
               OTHER STYLES THAT MIGHT BE USEFUL
           ------------------------------------- */
     
         .last {
           margin-bottom: 0;
         }
     
         .first {
           margin-top: 0;
         }
     
         .align-center {
           text-align: center;
         }
     
         .align-right {
           text-align: right;
         }
     
         .align-left {
           text-align: left;
         }
     
         .clear {
           clear: both;
         }
     
         .mt0 {
           margin-top: 0;
         }
     
         .mb0 {
           margin-bottom: 0;
         }
     
         .preheader {
           color: transparent;
           display: none;
           height: 0;
           max-height: 0;
           max-width: 0;
           opacity: 0;
           overflow: hidden;
           mso-hide: all;
           visibility: hidden;
           width: 0;
         }
     
         .powered-by a {
           text-decoration: none;
         }
     
         hr {
           border: 0;
           border-bottom: 1px solid #dbdbdb;
           Margin: 20px 0;
         }
     
         /* -------------------------------------
               RESPONSIVE AND MOBILE FRIENDLY STYLES
           ------------------------------------- */
     
         @media only screen and (max-width: 620px) {
           table[class=body] h1 {
             font-size: 28px !important;
             margin-bottom: 10px !important;
           }
           table[class=body] p,
           table[class=body] ul,
           table[class=body] ol,
           table[class=body] td,
           table[class=body] span,
           table[class=body] a {
             font-size: 16px !important;
           }
           table[class=body] .wrapper,
           table[class=body] .article {
             padding: 10px !important;
           }
           table[class=body] .content {
             padding: 0 !important;
           }
           table[class=body] .container {
             padding: 0 !important;
             width: 100% !important;
           }
           table[class=body] .main {
             border-left-width: 0 !important;
             border-radius: 0 !important;
             border-right-width: 0 !important;
           }
           table[class=body] .btn table {
             width: 100% !important;
           }
           table[class=body] .btn a {
             width: 100% !important;
           }
           table[class=body] .img-responsive {
             height: auto !important;
             max-width: 100% !important;
             width: auto !important;
           }
         }
     
         /* -------------------------------------
               PRESERVE THESE STYLES IN THE HEAD
           ------------------------------------- */
     
         @media all {
           .ExternalClass {
             width: 100%;
           }
           .ExternalClass,
           .ExternalClass p,
           .ExternalClass span,
           .ExternalClass font,
           .ExternalClass td,
           .ExternalClass div {
             line-height: 100%;
           }
           .apple-link a {
             color: inherit !important;
             font-family: inherit !important;
             font-size: inherit !important;
             font-weight: inherit !important;
             line-height: inherit !important;
             text-decoration: none !important;
           }
           .btn-primary table td:hover {
             background-color: #2b8838 !important;
           }
           .btn-primary a:hover {
             background-color: #2b8838 !important;
             border-color: #2b8838 !important;
           }
         }
       </style>
     </head>
     
     <body class="">
       <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body">
         <tr>
           <td>&nbsp;</td>
           <td class="container">
             <div class="footer">
               <table border="0" cellpadding="0" cellspacing="0">
                 <tr>
                   <td class="content-block">
                     <a href="https://denvercbdco.com" target="_blank"><img src="https://drive.google.com/uc?export=download&id=19KQD94mApiT7z9RCKjwzKrQcfCynDYEI" alt="Denver CBD" align="center" style="display:block;float:none;margin:0 auto;max-width:200px;outline:0;"></a>
                   </td>
                 </tr>
               </table>
             </div>
             <div class="content">
     
               <!-- START CENTERED WHITE CONTAINER -->
               <span class="preheader">This is preheader text. Some clients will show this text as a preview.</span>
               <table role="presentation" class="main">
     
                 <!-- START MAIN CONTENT AREA -->
                 <tr>
                   <td class="wrapper">
                     <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                       <tr>
                         <td>
                           <h2>Welcome to the JCP Management </h2>
                           <p>You have successfully registered to be part of the JCP</p>
                           <p><b>Your Login Email: </b>${data.Email}<br>
                             <b>Your Password: </b> ${data.TempPassword}</p>

                           <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="btn btn-primary">
                             <tbody>
                               <tr>
                                 <td align="left">
                                   <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                                     <tbody>
                                       <tr>
                                         <td> <a href="https://denvercbdco.com/partner-dashboard/" target="_blank"><img src="https://denvercbdco.com/wp-content/uploads/2018/11/home-icon.png" style="margin-bottom:-3px;padding-right:10px;width:18px;"></i>Go to login on</a>                                      </td>
                                       </tr>
                                     </tbody>
                                   </table>
                                 </td>
                               </tr>
                             </tbody>
                           </table>
                         </td>
                       </tr>
                     </table>
                   </td>
                 </tr>
     
                 <!-- END MAIN CONTENT AREA -->
               </table>
     
               <!-- START FOOTER -->
               <div class="footer">
                 <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                   <tr>
     
                   </tr>
                   <tr>
                     <td class="content-block">
                       <span class="apple-link">This message and attachments are subject to a disclaimer.
                         Please refer to <a href="http://upnet.up.ac.za/services/it/documentation/docs/004167.pdf" style="background-color: red;">http://upnet.up.ac.za/services/it/documentation/docs/004167.pdf</a> for full details.</span>
                       <br> Copyright © 2020 GoldenDawn
                     </td>
                   </tr>
                   <tr>
                     <td class="content-block powered-by">
                       <a href="https://www.facebook.com/DenverCBD" target="_blank"><img title="Facebook" src="https://hoiqh.stripocdn.email/content/assets/img/social-icons/logo-black/facebook-logo-black.png" alt="Facebook" width="32" height="32" style="display:inline-block;border:0;outline:none;text-decoration:none;"></a>                  &nbsp;
                       <a href="https://www.instagram.com/denvercbd/" target="_blank" style="font-weight:bold"><img title="Instagram" src="https://hoiqh.stripocdn.email/content/assets/img/social-icons/logo-black/instagram-logo-black.png" alt="Instagram" width="32" height="32" style="display:inline-block;border:0;outline:none;text-decoration:none;"></a>                  &nbsp;
                       <a href="https://www.youtube.com/channel/UCVA6ZT2lBB7dH__L3QP-GpA" target="_blank" style="font-weight:bold"><img title="Youtube" src="https://hoiqh.stripocdn.email/content/assets/img/social-icons/logo-black/youtube-logo-black.png" alt="Youtube" width="32" height="32" style="display:inline-block;border:0;outline:none;text-decoration:none;"></a>                  &nbsp;
                       <a href="mailto:marketing@denvercbdco.com" target="_blank" style="font-weight:bold"><img title="Email" src="https://hoiqh.stripocdn.email/content/assets/img/other-icons/logo-black/mail-logo-black.png" alt="Email" width="32" height="32" style="display:inline-block;border:0;outline:none;text-decoration:none;"></a>
                     </td>
                   </tr>
                 </table>
               </div>
               <!-- END FOOTER -->
     
               <!-- END CENTERED WHITE CONTAINER -->
             </div>
           </td>
           <td>&nbsp;</td>
         </tr>
       </table>
     </body>
     
     </html>`,
 }).then(res=>console.log("SUCCESS")).catch(err=>console.log(err))
})

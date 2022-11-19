"use strict";
(() => {
var exports = {};
exports.id = 101;
exports.ids = [101];
exports.modules = {

/***/ 5641:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "nodemailer"
const external_nodemailer_namespaceObject = require("nodemailer");
var external_nodemailer_default = /*#__PURE__*/__webpack_require__.n(external_nodemailer_namespaceObject);
;// CONCATENATED MODULE: ./lib/mail.js

const smtpTransport = external_nodemailer_default().createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "anzenkoolga@gmail.com",
        pass: "yjpccgtvudjsqarh"
    },
    tls: 587
}, {
    from: "boiler test <chinim.boiler.service@gmail.com>"
});
const sendEmail = (message)=>{
    smtpTransport.sendMail(message, function(error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log("Email sent successfully", info);
        }
        smtpTransport.close();
    });
};
/* harmony default export */ const mail = (sendEmail);

;// CONCATENATED MODULE: ./pages/api/send-request.js

async function handler(req, res) {
    console.log(req.body);
    const message = {
        to: "chinimboiler@gmail.com",
        subject: `Заявка №${req.body.id}`,
        text: `
			Заявка №${req.body.id},
			Имя: ${req.body.userName}, 
        	Телефон: ${req.body.phone},
        	Сообщение: ${req.body.description},
        `
    };
    mail(message);
    console.log(message);
    res.send(`Hi, ${req.body.userName} ${req.body.id} ${req.body.phone} ${req.body.description}!`);
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5641));
module.exports = __webpack_exports__;

})();
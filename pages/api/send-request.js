import sendEmail from "../../lib/mail";

export default async function handler(req, res) {
	console.log(req.body);
	const message = {
		to: 'chinimboiler@gmail.com',
		subject: `Заявка №${req.body.id}`,
		text: `
			Заявка №${req.body.id},
			Имя: ${req.body.userName}, 
        	Телефон: ${req.body.phone},
        	Сообщение: ${req.body.description},
        `,
	};
	sendEmail(message);
	console.log(message);
	res.send(`Hi, ${req.body.userName} ${req.body.id} ${req.body.phone} ${req.body.description}!`);
}
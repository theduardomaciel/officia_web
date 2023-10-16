import axios from 'axios';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
	const { email, subject, message, questionType, problemType } = await request.json();

	const randomTicket = Math.floor(Math.random() * 100000000 + 1);

	console.log(`Sending contact ticket to Discord webhook...`);

	try {
		const response = await axios.post(
			process.env.DISCORD_SUPPORT_WEBHOOK_URL as string,
			{
				content: `**Ticket #${randomTicket}**\n\n**- Email: **\`${email}\`\n\n**- Assunto (subject): **\`${subject}\`\n\n**- Recado (message): **\`\`\`${message}\`\`\`\n**- Tipo de Pergunta:** \`${questionType}\`\n**Tipo de Problema:** \`${problemType}\``
			},
			{
				headers: {
					'Content-Type': 'application/json'
				}
			}
		);

		if (response.status === 204) {
			return NextResponse.json({
				success: `✅ Success sending contact ticket to Discord webhook - ${response.status}`,
				ticketId: randomTicket
			});
		} else {
			return NextResponse.json({
				error: `❌ Error sending contact ticket to Discord webhook - ${response.status}`
			});
		}
	} catch (error) {
		return NextResponse.json({
			error: `❌ Error - ${error}`
		});
	}
}

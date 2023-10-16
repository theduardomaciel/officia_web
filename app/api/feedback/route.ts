import axios from 'axios';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
	const { email, message } = await request.json();

	if (!email || !message) {
		return NextResponse.json({
			error: '❌ Error - Missing email or message'
		});
	}

	const randomTicket = Math.floor(Math.random() * 100000000 + 1);

	console.log(`Sending feedback ticket to Discord webhook...`);

	try {
		const response = await axios.post(
			process.env.DISCORD_FEEDBACK_WEBHOOK_URL as string,
			{
				content: `**Ticket #${randomTicket}**\n\n**- Email: **\`${email}\`\n\n**- Feedback: **\`\`\`${message}\`\`\``
			},
			{
				headers: {
					'Content-Type': 'application/json'
				}
			}
		);

		if (response.status === 204) {
			return NextResponse.json({
				success: `✅ Success sending feedback ticket to Discord webhook - ${response.status}`,
				ticketId: randomTicket
			});
		} else {
			return NextResponse.json({
				error: `❌ Error sending feedback ticket to Discord webhook - ${response.status}`
			});
		}
	} catch (error) {
		return NextResponse.json({
			error: `❌ Error - ${error}`
		});
	}
}

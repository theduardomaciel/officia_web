import { NextResponse } from 'next/server';

export async function POST(request: Request) {
	try {
		return NextResponse.json({
			success: `✅ Success`
		});
	} catch (error) {
		return NextResponse.json({
			error: `❌ Error`
		});
	}
}

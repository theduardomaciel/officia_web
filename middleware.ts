// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
	const auth = request.headers.get('Authorization') || '';
	const validAuth =
		auth ===
		'Basic ' + Buffer.from(`${process.env.USER}:${process.env.PASSWORD}`).toString('base64');

	if (validAuth) {
		console.log('valid auth');
		// Here you need some logic to validate authentication
		return NextResponse.next();
	} else {
		console.log('invalid auth');
		return new NextResponse(
			JSON.stringify({ success: false, message: 'authentication failed' }),
			{ status: 401, headers: { 'WWW-Authenticate': 'Basic realm="simple-admin"' } }
		);
	}
}

// See "Matching Paths" below to learn more
export const config = {
	matcher: '/api/protected/:path*'
};

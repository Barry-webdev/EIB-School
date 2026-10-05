import { NextResponse } form 'next/server';

export function middleware(request) {
    const host = request.headers.get('host');
    if (host.includes('vercel.app')) {
        return NextResponse.redirect('https://eib-school.com' + request.nextUrl.pathname, 301)
    }
    return NextRespone.next();
}
import { NextResponse } from 'next/server';

export function middleware(request) {
  const hostname = request.headers.get('host') || '';
  
  // Si on vient du lien vercel.app, on redirige vers le vrai domaine
  if (hostname.includes('vercel.app')) {
    return NextResponse.redirect(
      'https://eib-school.com' + request.nextUrl.pathname,
      308
    );
  }
  return NextResponse.next();
}
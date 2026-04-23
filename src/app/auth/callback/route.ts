import { NextResponse } from 'next/server'
// The client you created from the Server-Side Auth instructions
import { createClient } from '@/utils/supabase/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')
  const next = searchParams.get('next') ?? '/'

  if (code) {
    const supabase = await createClient()
    const { error } = await supabase.auth.exchangeCodeForSession(code)
    
    if (!error) {
      // Hardcoded redirect to localhost
      return NextResponse.redirect(`http://localhost:3000${next}`)
    }
  }

  // return the user to an error page with instructions
  return NextResponse.redirect(`http://localhost:3000/login?error=Could not authenticate user`)
}

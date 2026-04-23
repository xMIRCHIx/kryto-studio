import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  const ADMIN_EMAIL = "gamermirchi08@gmail.com"; // Hardcoded admin email

  if (!user || user.email !== ADMIN_EMAIL) {
    redirect('/login'); // Redirect to login or home
  }

  return <>{children}</>;
}

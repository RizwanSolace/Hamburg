'use client'

import { useRouter } from 'next/navigation'
import { Admin } from '../page'

export default function AdminPage() {
  const router = useRouter()
  return <Admin onNavigate={(path) => path === 'home' ? router.push('/') : undefined} />
}

import Link from 'next/link'
import { FilmIcon } from 'lucide-react'

export default function Header() {
  return (
    <header className=" flex gap-4 py-5 px-5 bg-slate-900 text-slate-50">
      <FilmIcon />
      <Link href="/" className="text-xl font-bold">
        <h1>Our Favorite Movies</h1>
      </Link>
      <Link href="/add" className="text-xl font-light">
        Add movie
      </Link>
    </header>
  )
}

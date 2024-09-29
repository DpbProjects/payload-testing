import Link from 'next/link'

export const CmsLink = ({ label, url }: { label: string; url: string }) => {
  return (
    <Link
      className="px-8 py-4 bg-blue-600 text-white rounded-full text-lg hover:bg-blue-700 transition"
      href={url}
    >
      {label}
    </Link>
  )
}

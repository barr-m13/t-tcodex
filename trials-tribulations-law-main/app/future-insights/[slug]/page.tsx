import { redirect } from 'next/navigation'
interface Params { slug: string }
export default function FutureInsightsSlug({ params }: { params: Params }) {
  redirect(`/articles/${params.slug}`)
}

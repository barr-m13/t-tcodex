import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc'
import Image from 'next/image'
import VideoPlayer from './video-player'
import { highlight } from 'sugar-high'
import { MDXComponents } from 'mdx/types'

function Code({ children, ...props }: any) {
  const html = highlight(children)
  return <code dangerouslySetInnerHTML={{ __html: html }} {...props} />
}

function Img(props: any) {
  const { src, alt = '', width = 800, height = 450 } = props
  return <Image src={src} alt={alt} width={width} height={height} className="rounded-lg" />
}

const components: MDXComponents = {
  code: Code,
  img: Img,
  VideoPlayer
}

export default function MDXRenderer(props: JSX.IntrinsicAttributes & MDXRemoteProps) {
  return <MDXRemote {...props} components={{ ...components, ...(props.components || {}) }} />
}

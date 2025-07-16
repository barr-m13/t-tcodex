import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc'
import Image from 'next/image'
import rehypePrism from 'rehype-prism-plus'
import { MDXComponents } from 'mdx/types'
import VideoPlayer from './video-player'

function Code({ children, className = '', ...props }: any) {
  const content =
    typeof children === 'string'
      ? children
      : Array.isArray(children)
      ? children.map(child => (typeof child === 'string' ? child : '')).join('')
      : ''

  return (
    <pre className="my-4 rounded-lg bg-gray-800 p-4 overflow-x-auto">
      <code className={className} {...props}>
        {content}
      </code>
    </pre>
  )
}

function Img(props: any) {
  const { src, alt = '', width = 800, height = 450 } = props
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className="rounded-lg"
    />
  )
}

const components: MDXComponents = {
  code: Code,
  img: Img,
  VideoPlayer,
}

export default function MDXRenderer(
  props: JSX.IntrinsicAttributes & MDXRemoteProps
) {
  return (
    <MDXRemote
      {...props}
      options={{
        mdxOptions: {
          rehypePlugins: [rehypePrism],
        },
      }}
      components={{ ...components, ...(props.components || {}) }}
    />
  )
}


import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc'
import Image from 'next/image'
import rehypePrism from 'rehype-prism-plus'
import { MDXComponents } from 'mdx/types'
import VideoPlayer from './video-player'

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
  img: Img,
  VideoPlayer,
  // ❌ REMOVE 'code' OVERRIDE HERE
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


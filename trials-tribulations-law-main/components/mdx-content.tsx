import { JSX } from 'react'
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc'
import Image from 'next/image'
import rehypePrism from 'rehype-prism-plus'
import { MDXComponents } from 'mdx/types'

import Counter from '@/components/counter'

function CustomImage(props: JSX.IntrinsicElements['img']) {
  const { src, alt = "", width: widthProp, height: heightProp, ...rest } = props;
  
  if (!src) return null;
  
  // Convert string width/height to numbers or use defaults
  const width = typeof widthProp === 'string' ? parseInt(widthProp, 10) || 800 : widthProp || 800;
  const height = typeof heightProp === 'string' ? parseInt(heightProp, 10) || 450 : heightProp || 450;
  
  return (
    <div className="my-8 relative overflow-hidden rounded-lg">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="object-cover"
        {...rest}
      />
    </div>
  );
}

function Video(props: JSX.IntrinsicElements['video']) {
  const { src, poster, ...rest } = props;
  
  if (!src) return null;
  
  return (
    <div className="my-8 relative overflow-hidden rounded-lg">
      <video 
        src={src} 
        controls 
        className="w-full" 
        poster={poster}
        {...rest}
      />
    </div>
  );
}

const mdxComponents: MDXComponents = {
  img: CustomImage,
  Counter
}

export default function MDXContent(props: JSX.IntrinsicAttributes & MDXRemoteProps) {
  return (
    <MDXRemote
      {...props}
      options={{ mdxOptions: { rehypePlugins: [rehypePrism] } }}
      components={{ ...mdxComponents, ...(props.components || {}) }}
    />
  );
}
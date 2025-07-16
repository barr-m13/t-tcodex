'use client'
import { useRef, useEffect } from 'react'

export default function VideoPlayer({ src, poster, autoPlay = true, loop = true }: { src: string; poster?: string; autoPlay?: boolean; loop?: boolean }) {
  const ref = useRef<HTMLVideoElement>(null)
  useEffect(() => {
    if (ref.current && autoPlay) {
      ref.current.muted = true
      ref.current.playsInline = true
      ref.current.play().catch(() => {})
    }
  }, [autoPlay])
  return <video ref={ref} src={src} poster={poster} loop={loop} controls={!autoPlay} className="w-full h-auto object-cover" />
}

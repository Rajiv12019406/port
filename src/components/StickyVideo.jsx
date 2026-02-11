import { useState, useRef } from 'react'

export default function StickyVideo({ src, poster, className = '', maxWidth = 'max-w-3xl', aspectClass = 'aspect-video', objectPosition = 'center' }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handlePlay = () => setIsPlaying(true)
  const handlePause = () => setIsPlaying(false)
  const handleEnded = () => setIsPlaying(false)

  return (
    <div className={`w-full mx-auto ${maxWidth} ${className}`}>
      <div
        className={`relative overflow-hidden rounded-2xl border border-gray-100 shadow-card bg-gray-100 ${
          isPlaying ? 'sticky top-20' : ''
        }`}
      >
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          className={`${aspectClass} w-full object-cover`}
          style={{ objectPosition }}
          onClick={togglePlay}
          onPlay={handlePlay}
          onPause={handlePause}
          onEnded={handleEnded}
          playsInline
        />
        {!isPlaying && (
          <button
            onClick={togglePlay}
            className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors"
            aria-label="Play video"
          >
            <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
              <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-brand-accent border-b-[12px] border-b-transparent ml-1" />
            </div>
          </button>
        )}
      </div>
    </div>
  )
}

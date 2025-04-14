'use client'

import { useEffect, useState } from 'react'

export function TypeWriter({ words = [], typingSpeed = 100, deletingSpeed = 75, pauseTime = 1800 }) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      const currentWord = words[wordIndex]
      
      if (isDeleting) {
        setText(currentWord.substring(0, text.length - 1))
        if (text === '') {
          setIsDeleting(false)
          setWordIndex((prev) => (prev + 1) % words.length)
        }
      } else {
        setText(currentWord.substring(0, text.length + 1))
        if (text === currentWord) {
          setTimeout(() => setIsDeleting(true), pauseTime)
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed)

    return () => clearTimeout(timer)
  }, [text, wordIndex, isDeleting, words, typingSpeed, deletingSpeed, pauseTime])

  return <span className="text-[#5ebc67] font-sans font-bold">{text}</span>
} 
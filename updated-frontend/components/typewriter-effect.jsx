'use client'

import { useState, useEffect } from 'react'

export default function TypewriterEffect({ strings, speed = 100, deleteSpeed = 50, delayBetweenStrings = 2000 }) {
  const [currentStringIndex, setCurrentStringIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentString = strings[currentStringIndex]
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentText.length < currentString.length) {
          setCurrentText(currentString.slice(0, currentText.length + 1))
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => setIsDeleting(true), delayBetweenStrings)
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1))
        } else {
          // Finished deleting, move to next string
          setIsDeleting(false)
          setCurrentStringIndex((prev) => (prev + 1) % strings.length)
        }
      }
    }, isDeleting ? deleteSpeed : speed)

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentStringIndex, strings, speed, deleteSpeed, delayBetweenStrings])

  return (
    <div className="h-8 flex items-center justify-center">
      <span className="text-lg text-primary font-medium">
        {currentText}
        <span className="animate-pulse">|</span>
      </span>
    </div>
  )
}

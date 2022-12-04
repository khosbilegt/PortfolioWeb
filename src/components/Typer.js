import { React, useState, useEffect } from 'react';
import "../pages/Home.css"

export function Typer() {
     const sentences = [
          "I am a programmer",
          "I am a coder",
          "I am a game developer",
          "I am a software developer"
     ]

     const [content, setContent] = useState("")
     const [currentIndex, setCurrentIndex] = useState(0)
     const [currentSentence, setCurrentSentence] = useState(0)
     const [isReverse, setIsReverse] = useState(false)

     const getTime = () => {
          if(!isReverse) {
               //sentences[currentSentence].length
               if(currentIndex < sentences[currentSentence].length) {
                    setCurrentIndex(currentIndex + 1)
                    setContent(content + sentences[currentSentence][currentIndex])
               } else {
                    setIsReverse(true)
               }
          }
          if(isReverse) {
               if(currentIndex > 6) {
                    setCurrentIndex(currentIndex - 1)
                    setContent(sentences[currentSentence].substring(0, currentIndex))
               } else {
                    setCurrentIndex(6)
                    setContent(sentences[currentSentence].substring(0, 6))
                    setIsReverse(false)
                    if(currentSentence < sentences.length - 1) {
                         setCurrentSentence(currentSentence + 1)
                    } else {
                         setCurrentSentence(0)
                    }
               }
          }
     }

     useEffect(() => {
          const interval = setInterval(() => getTime(), 150)
          return () => clearInterval(interval)
     })

     return (
          <div className="typer">
               <p id="text">{content}|</p>
          </div>
     )
}
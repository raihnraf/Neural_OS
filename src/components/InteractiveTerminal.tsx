import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Copy, Check } from 'lucide-react'
import { cn } from '@/utils'

interface TerminalBlockProps {
  code: string
  language?: string
  className?: string
}

export function InteractiveTerminal({ code, language = 'python', className }: TerminalBlockProps) {
  const [copied, setCopied] = useState(false)
  const [displayedCode, setDisplayedCode] = useState('')
  const [isTyping, setIsTyping] = useState(true)

  // Typing effect
  useEffect(() => {
    let index = 0
    setIsTyping(true)
    setDisplayedCode('')
    
    const typingInterval = setInterval(() => {
      if (index < code.length) {
        setDisplayedCode((prev) => prev + code.charAt(index))
        index++
      } else {
        setIsTyping(false)
        clearInterval(typingInterval)
      }
    }, 15) // Adjust typing speed here

    return () => clearInterval(typingInterval)
  }, [code])

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className={cn("glass-panel rounded-xl overflow-hidden shadow-2xl border border-outline-variant/30", className)}>
      <div className="bg-surface-container-high px-4 py-3 flex items-center justify-between border-b border-outline-variant/20">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-error/40"></div>
          <div className="w-3 h-3 rounded-full bg-secondary/40"></div>
          <div className="w-3 h-3 rounded-full bg-tertiary/40"></div>
        </div>
        <div className="flex gap-4 text-[10px] font-mono font-bold tracking-widest text-on-surface-variant">
          <span className={cn("border-b border-primary pb-0.5 cursor-pointer", language === 'python' ? 'text-primary' : 'hover:text-primary')}>
            PYTHON
          </span>
          <span className="hover:text-primary cursor-pointer transition-colors">JAVASCRIPT</span>
          <span className="hover:text-primary cursor-pointer transition-colors">CURL</span>
        </div>
        <button 
          onClick={handleCopy}
          className="hover:text-primary transition-colors"
          aria-label="Copy code"
        >
          {copied ? (
            <Check className="w-4 h-4" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
        </button>
      </div>
      <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto bg-surface-container-lowest min-h-[200px]">
        <pre className="text-outline whitespace-pre-wrap">
          <code>{displayedCode}</code>
          {isTyping && (
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block w-2 h-4 bg-primary ml-1"
            />
          )}
        </pre>
      </div>
    </div>
  )
}

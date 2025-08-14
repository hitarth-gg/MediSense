"use client"

import { Brain, Sparkles } from "lucide-react"
import { useState } from "react"

export default function AiReportCard({ aiSummary }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false)

  const handleGenerateReport = () => {
    setIsGenerating(true)
    // Simulate AI report generation
    setTimeout(() => {
      setIsGenerating(false)
      setIsExpanded(true)
    }, 2000)
  }

  const truncatedSummary = aiSummary.length > 150 ? aiSummary.substring(0, 150) + "..." : aiSummary

  return (
    <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border border-purple-200 p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
          <Brain className="h-5 w-5 text-purple-600" />
          <span>AI Medical Summary</span>
        </h2>
        <button
          onClick={handleGenerateReport}
          disabled={isGenerating}
          className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          aria-label="Generate new AI report"
        >
          <Sparkles className={`h-4 w-4 ${isGenerating ? "animate-spin" : ""}`} />
          <span>{isGenerating ? "Generating..." : "Regenerate"}</span>
        </button>
      </div>

      <div className="bg-white rounded-lg p-4 border border-purple-100">
        <p className="text-gray-700 leading-relaxed">{isExpanded ? aiSummary : truncatedSummary}</p>

        {aiSummary.length > 150 && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-3 text-purple-600 hover:text-purple-700 text-sm font-medium"
            aria-label={isExpanded ? "Show less" : "Show more"}
          >
            {isExpanded ? "Show Less" : "Read More"}
          </button>
        )}
      </div>

      {isGenerating && (
        <div className="mt-4 flex items-center space-x-2 text-sm text-purple-600">
          <div className="animate-pulse flex space-x-1">
            <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
            <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
          </div>
          <span>AI is analyzing patient data...</span>
        </div>
      )}
    </div>
  )
}

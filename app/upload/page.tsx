'use client'

import { useState } from 'react'
import { Upload, Image as ImageIcon, Video, Music, X } from 'lucide-react'

export default function UploadPage() {
  const [dragActive, setDragActive] = useState(false)
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const files = Array.from(e.dataTransfer.files)
      setSelectedFiles((prev) => [...prev, ...files])
    }
  }

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const files = Array.from(e.target.files)
      setSelectedFiles((prev) => [...prev, ...files])
    }
  }

  const removeFile = (index: number) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index))
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Upload Your Content</h1>
          <p className="text-gray-600 mb-8">
            Share your photos, videos, and music with our community
          </p>

          {/* Upload Area */}
          <div
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            className={`border-2 border-dashed rounded-lg p-12 text-center transition ${
              dragActive
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-300 hover:border-gray-400'
            }`}
          >
            <Upload className="w-16 h-16 mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Drag and drop your files here
            </h3>
            <p className="text-gray-600 mb-4">or</p>
            <label className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 cursor-pointer transition">
              Browse Files
              <input
                type="file"
                multiple
                className="hidden"
                onChange={handleFileInput}
                accept="image/*,video/*,audio/*"
              />
            </label>
            <p className="text-sm text-gray-500 mt-4">
              Supported formats: JPG, PNG, GIF, MP4, MOV, MP3, WAV
            </p>
          </div>

          {/* Selected Files */}
          {selectedFiles.length > 0 && (
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Selected Files ({selectedFiles.length})
              </h3>
              <div className="space-y-3">
                {selectedFiles.map((file, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center space-x-3">
                      {file.type.startsWith('image/') && (
                        <ImageIcon className="w-8 h-8 text-blue-600" />
                      )}
                      {file.type.startsWith('video/') && (
                        <Video className="w-8 h-8 text-purple-600" />
                      )}
                      {file.type.startsWith('audio/') && (
                        <Music className="w-8 h-8 text-green-600" />
                      )}
                      <div>
                        <p className="font-medium text-gray-900">{file.name}</p>
                        <p className="text-sm text-gray-500">
                          {(file.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFile(index)}
                      className="p-2 hover:bg-gray-200 rounded-lg transition"
                    >
                      <X className="w-5 h-5 text-gray-500" />
                    </button>
                  </div>
                ))}
              </div>
              <button className="mt-6 w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold">
                Upload {selectedFiles.length} File{selectedFiles.length !== 1 ? 's' : ''}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}


import { useState } from 'react'
import CVUploadZone from '../CVUploadZone'

export default function CVUploadZoneExample() {
  const [file, setFile] = useState<File | null>(null)

  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-xl font-bold mb-4">Upload Your CV</h2>
      <CVUploadZone
        selectedFile={file}
        onFileSelect={(f) => {
          console.log('File selected:', f.name)
          setFile(f)
        }}
        onFileRemove={() => {
          console.log('File removed')
          setFile(null)
        }}
      />
    </div>
  )
}

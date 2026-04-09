import FloatingShapes from '../FloatingShapes'

export default function FloatingShapesExample() {
  return (
    <div className="relative h-screen w-full bg-background">
      <FloatingShapes />
      <div className="relative z-10 flex items-center justify-center h-full">
        <p className="text-foreground">Content appears above floating shapes</p>
      </div>
    </div>
  )
}

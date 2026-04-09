export default function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute top-20 left-10 w-64 h-64 rounded-full opacity-20 blur-3xl animate-float-slow"
        style={{
          background: "linear-gradient(135deg, hsl(212, 100%, 50%), hsl(270, 70%, 60%))",
        }}
      />
      <div
        className="absolute top-1/2 right-20 w-96 h-96 rounded-full opacity-10 blur-3xl animate-float-slow"
        style={{
          background: "linear-gradient(225deg, hsl(270, 70%, 60%), hsl(160, 84%, 39%))",
          animationDelay: "5s",
        }}
      />
      <div
        className="absolute bottom-20 left-1/3 w-80 h-80 rounded-full opacity-15 blur-3xl animate-float-slow"
        style={{
          background: "linear-gradient(45deg, hsl(160, 84%, 39%), hsl(212, 100%, 50%))",
          animationDelay: "10s",
        }}
      />
    </div>
  );
}

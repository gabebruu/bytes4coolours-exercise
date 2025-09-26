import FirstComponent from "@/Components/FirstComponent";

export default function FirstComponent() {
  return (
    <div className="min-h-screen bg-blue-500 flex flex-col items-center justify-center">
      <h1 className="text-7xl font-bold text-white">Bytes 4 Coolours</h1>
      <FirstComponent />
    </div>
  )
}
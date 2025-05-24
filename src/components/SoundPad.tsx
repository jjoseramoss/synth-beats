import Pad from "./Pad.tsx";

const SoundPad = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="box-content size-150 border-4 p-4 bg-emerald-500 flex justify-center items-center">
        <Pad/>
        <Pad/>
        <Pad/>
        <Pad/>

      </div>
    </div>
  )
}

export default SoundPad
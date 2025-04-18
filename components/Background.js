import { Squares } from "@/components/ui/squares-background"
import BeamLengthPredictor from "./BeamLengthPredictor"



export function SquaresDemo() {
  return (
    <div className="space-y-8">
      <div className="relative h-[600px] overflow-hidden bg-[#060606]">

        {/* Overlay content */}
       

        {/* Grid Background Canvas */}
        <Squares
          direction="diagonal"
          speed={0.5}
          squareSize={40}
          borderColor="#333"
          hoverFillColor="#222"
        />

        {/* Beam Length Predictor Centered Form */}
        <div className="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <BeamLengthPredictor />
        </div>
      </div>
    </div>
  )
}

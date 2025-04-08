import { CubeFace } from "@/utils/Cube";
import CubeFaceButton from "./cubeFaceButton";
import Button from "../button";

export default function CubeButtons({
  rotateFace,
  resetCube,
}: {
  rotateFace: (face: CubeFace, inverted: boolean) => Promise<void>;
  resetCube: () => Promise<void>;
}) {
  return (
    <div className="flex items-center justify-center flex-col gap-5 mt-5">
      <div className="flex items-center justify-center gap-5">
        {Object.values(CubeFace).map((face) => (
          <CubeFaceButton
            key={face}
            face={face}
            inverted={false}
            rotateFace={rotateFace}
          />
        ))}
      </div>
      <div className="flex items-center justify-center gap-5">
        {Object.values(CubeFace).map((face) => (
          <CubeFaceButton
            key={face}
            face={face}
            inverted={true}
            rotateFace={rotateFace}
          />
        ))}
      </div>
      <div>
        <Button onClick={resetCube}>Reset</Button>
      </div>
    </div>
  );
}

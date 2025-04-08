import { CubeFace } from "@/utils/Cube";
import Button from "@/components/button";

const faceColorMap: Record<CubeFace, string> = {
  U: "bg-white",
  D: "bg-yellow-400",
  R: "bg-red-500",
  L: "bg-orange-500",
  F: "bg-green-500",
  B: "bg-blue-500",
};

export default function CubeFaceButton({
  face,
  inverted,
  rotateFace,
}: {
  face: CubeFace;
  inverted: boolean;
  rotateFace: (face: CubeFace, inverted: boolean) => Promise<void>;
}) {
  const invertedFace = `${face}'`;

  return (
    <div
      className={`w-11 h-8 border border-black rounded-md ${faceColorMap[face]} flex items-center justify-start`}
    >
      <Button
        widthClass="w-9"
        heightClass="h-8"
        onClick={async () => await rotateFace(face, inverted)}
      >
        {inverted ? invertedFace : face}
      </Button>
    </div>
  );
}

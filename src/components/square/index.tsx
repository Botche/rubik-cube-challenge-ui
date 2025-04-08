import { CubeColor } from "@/utils/Cube";

const colorMap: Record<CubeColor, string> = {
  W: "bg-white",
  Y: "bg-yellow-400",
  R: "bg-red-500",
  O: "bg-orange-500",
  G: "bg-green-500",
  B: "bg-blue-500",
};

export default function Square({ color }: { color: string }) {
  const bgClass = colorMap[color as CubeColor];

  return (
    <>
      {color.trim() !== "" ? (
        <div
          className={`w-10 h-10 border border-black ${bgClass}`}
        ></div>
      ) : (
        <div className="w-10 h-10 border border-transparent"></div>
      )}
    </>
  );
}

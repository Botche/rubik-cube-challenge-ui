import Square from "../square";

export default function Cube({ data }: { data?: string }) {
  if (data === undefined) {
    return;
  }

  const rows = data.split("\n");

  return (
    <>
      <h2 className="text-xl font-bold my-3">2D representation</h2>
      <div className="flex flex-col items-center justify-center">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex">
            {row.split("").map((char, colIndex) => (
              <Square key={colIndex} color={char} />
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

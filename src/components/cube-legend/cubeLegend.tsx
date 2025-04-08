export default function CubeLegend() {
  return (
    <div className="mt-4 p-6 rounded-lg max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-center mb-4">
        🧩 Rubik's Cube Face Legend
      </h1>

      <div className="mb-6 text-lg">
        <pre className="inline-block bg-white p-4 rounded shadow text-lg text-start">
          {"    U\nL   F   R   B\n    D"}
        </pre>
      </div>

      <div className="overflow-x-auto mb-8">
        <table className="min-w-full text-left border border-gray-300 bg-white shadow rounded">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 border">Face</th>
              <th className="px-4 py-2 border">Abbreviation</th>
              <th className="px-4 py-2 border">Description</th>
              <th className="px-4 py-2 border">Color</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border">Up</td>
              <td className="px-4 py-2 border">U</td>
              <td className="px-4 py-2 border">Top face of the cube</td>
              <td className="px-4 py-2 border text-black bg-white">⬜ White</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">Down</td>
              <td className="px-4 py-2 border">D</td>
              <td className="px-4 py-2 border">Bottom face of the cube</td>
              <td className="px-4 py-2 border text-white bg-yellow-400">
                🟨 Yellow
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">Left</td>
              <td className="px-4 py-2 border">L</td>
              <td className="px-4 py-2 border">Left face of the cube</td>
              <td className="px-4 py-2 border text-white bg-orange-500">
                🟧 Orange
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">Right</td>
              <td className="px-4 py-2 border">R</td>
              <td className="px-4 py-2 border">Right face of the cube</td>
              <td className="px-4 py-2 border text-white bg-red-500">🟥 Red</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">Front</td>
              <td className="px-4 py-2 border">F</td>
              <td className="px-4 py-2 border">Front face of the cube</td>
              <td className="px-4 py-2 border text-white bg-green-500">
                🟩 Green
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">Back</td>
              <td className="px-4 py-2 border">B</td>
              <td className="px-4 py-2 border">Back face of the cube</td>
              <td className="px-4 py-2 border text-white bg-blue-500">
                🟦 Blue
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold mb-2">🔁 Move Notation</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-left border border-gray-300 bg-white shadow rounded">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 border">Notation</th>
              <th className="px-4 py-2 border">Meaning</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border">F</td>
              <td className="px-4 py-2 border">
                Rotate <strong>Front</strong> clockwise
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">F'</td>
              <td className="px-4 py-2 border">
                Rotate <strong>Front</strong> counterclockwise
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">R</td>
              <td className="px-4 py-2 border">
                Rotate <strong>Right</strong> clockwise
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">R'</td>
              <td className="px-4 py-2 border">
                Rotate <strong>Right</strong> counterclockwise
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">U</td>
              <td className="px-4 py-2 border">
                Rotate <strong>Up</strong> clockwise
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">U'</td>
              <td className="px-4 py-2 border">
                Rotate <strong>Up</strong> counterclockwise
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">B</td>
              <td className="px-4 py-2 border">
                Rotate <strong>Back</strong> clockwise
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">B'</td>
              <td className="px-4 py-2 border">
                Rotate <strong>Back</strong> counterclockwise
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">L</td>
              <td className="px-4 py-2 border">
                Rotate <strong>Left</strong> clockwise
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">L'</td>
              <td className="px-4 py-2 border">
                Rotate <strong>Left</strong> counterclockwise
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">D</td>
              <td className="px-4 py-2 border">
                Rotate <strong>Down</strong> clockwise
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">D'</td>
              <td className="px-4 py-2 border">
                Rotate <strong>Down</strong> counterclockwise
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

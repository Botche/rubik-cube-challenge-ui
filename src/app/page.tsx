"use client";

import { useEffect, useState } from "react";
import Cube from "@/components/cube";
import CubeButtons from "@/components/cube-buttons";
import { CubeFace } from "@/utils/Cube";
import apiClient from "@/utils/apiClient";
import CubeLegend from "@/components/cube-legend/cubeLegend";

export default function Home() {
  const [cubeData, setCubeData] = useState<string | undefined>(undefined);

  const fetchData = async () => {
    try {
      const res = await apiClient.get("/rubik-cube/state");
      setCubeData(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setCubeData(undefined);
    }
  };

  const rotateFace = async (face: CubeFace, inverted: boolean) => {
    const displayName =
      Object.entries(CubeFace).find(([_, val]) => val === face)?.[0] ?? face;

    try {
      await apiClient.post(`/rubik-cube/rotate/${displayName}`, undefined, {
        params: { inverted: inverted },
      });

      await fetchData();
    } catch (error) {
      console.error("Error rotating face:", error);
    }
  };

  const resetCube = async () => {
    try {
      await apiClient.post("/rubik-cube/reset", undefined);

      await fetchData();
    } catch (error) {
      console.error("Error reseting cube:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container text-center mx-auto mt-10">
      <h1 className="text-4xl font-extrabold">Rubik's Cube</h1>
      <Cube data={cubeData} />
      <CubeButtons rotateFace={rotateFace} resetCube={resetCube} />
      <CubeLegend />
    </div>
  );
}

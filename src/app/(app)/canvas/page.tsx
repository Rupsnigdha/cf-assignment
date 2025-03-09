"use client";

import ExecutionScreen from "@/components/canvas/execution-screen";
import { ReactFlow, Background, Controls } from "@xyflow/react";
import "@xyflow/react/dist/style.css";

export default function Home() {
  return (
    <>
      <ExecutionScreen />
      <ReactFlow>
        <Background />
        <Controls />
      </ReactFlow>
    </>
  );
}

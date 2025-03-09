"use client";

import { ReactFlow, Background, Controls } from "@xyflow/react";
import "@xyflow/react/dist/style.css";

export default function Home() {
  return (
    <ReactFlow>
      <Background />
      <Controls />
    </ReactFlow>
  );
}

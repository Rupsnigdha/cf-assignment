"use client";

import { Button } from "@/components/ui/button";
import { counterStore } from "@/stores/counterStore";
export default function Page() {
  const { count, increment, decrement } = counterStore();
  return (
    <div>
      <div>Count: {count}</div>
      <Button onClick={increment}>+</Button>
      <Button onClick={decrement}>-</Button>
    </div>
  );
}

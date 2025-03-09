"use client";
import { Button } from "@/components/ui/button";
import { counterStore } from "@/stores/counterStore";

export default function Home() {
  const { count, increment, decrement } = counterStore();
  return (
    <>
      <div>Count: {count}</div>
      <Button onClick={increment}>+</Button>
      <Button onClick={decrement}>+</Button>
    </>
  );
}

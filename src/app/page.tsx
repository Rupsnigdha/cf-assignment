"use client";

import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function Page() {
  return (
    <main className="w-screen h-screen flex items-center justify-center">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold text-primary">
          Curiflow Takehome Assignment
        </h1>
        <p className="text-muted-foreground">
          This is my submission for the Curiflow Takehome assignment.
        </p>
        <div className="flex justify-end gap-4">
          <Link
            href="/canvas"
            className={buttonVariants({ variant: "outline" })}
          >
            Canvas
          </Link>
          <Link
            href="/dashboard"
            className={buttonVariants({ variant: "default" })}
          >
            Dashboard
          </Link>
        </div>
      </div>
      <footer className="absolute bottom-0 w-full bg-primary text-primary-foreground py-2 text-center">
        Made with ❤️ by{" "}
        <Link
          href="https://rupsnigdha.com/"
          target="_blank"
          className="text-primary-foreground underline underline-offset-2 hover:text-teal-400 transition-colors duration-200"
        >
          Rupsnigdha
        </Link>
      </footer>
    </main>
  );
}

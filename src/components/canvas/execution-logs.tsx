import { useLogsStore } from "@/stores/logsStore";
import { Ellipsis, Hourglass, Loader2Icon } from "lucide-react";
import { cn } from "@/lib/utils";

export function ExecutionLogs() {
  const { logs } = useLogsStore();
  return (
    <>
      <div className="text-xs font-bold">LOGS</div>
      <div className="max-h-60 overflow-y-scroll">
        <div className="w-full grid grid-cols-12">
          <div className="text-xs col-span-2 border py-1 px-2">
            Time Completed
          </div>
          <div className="text-xs col-span-8 border py-1 px-2">Process</div>
          <div className="text-xs col-span-2 text-right border py-1 px-2">
            Time to Complete
          </div>
        </div>
        {logs.map((log, index) => (
          <div className="w-full grid grid-cols-12" key={index}>
            <div
              className={cn(
                "text-xs col-span-2 border py-1 px-2",
                log.status === "FAILED" ? "text-red-500" : ""
              )}
            >
              {log.status === "NOT_STARTED" ? (
                <Ellipsis className="text-muted-foreground" />
              ) : log.status === "QUEUED" ? (
                <Hourglass className="text-muted-foreground" />
              ) : log.status === "EXECUTING" ? (
                <Loader2Icon className="text-primary animate-spin" />
              ) : log.status === "EXECUTED" ? (
                log.timeEnded ? (
                  <div>{new Date(log.timeEnded).toLocaleTimeString()}</div>
                ) : (
                  <div>Ran into an error</div>
                )
              ) : log.status === "FAILED" ? (
                log.timeEnded ? (
                  <div>{new Date(log.timeEnded).toLocaleTimeString()}</div>
                ) : (
                  <div>Ran into an error</div>
                )
              ) : (
                <></>
              )}
            </div>
            <div
              className={cn(
                "text-xs col-span-8 border py-1 px-2",
                log.status === "FAILED" && "text-red-400"
              )}
            >
              {log.name}
            </div>
            <div className="text-xs col-span-2 text-right border py-1 px-2">
              {log.status === "NOT_STARTED" ? (
                ""
              ) : log.status === "FAILED" ? (
                <i className="text-red-500">Process Failed</i>
              ) : log.timeToComplete ? (
                log.timeToComplete.toString() + " ms"
              ) : (
                <i>Processing...</i>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

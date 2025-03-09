import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { useExecutionStore } from "@/stores/executionStore";

import { Button } from "@/components/ui/button";
import { SelectDeployment } from "./select-deployment";
import { DeploymentInput } from "./deployment-input";
import { ExecutionLogs } from "./execution-logs";
import { useLogsStore } from "@/stores/logsStore";

import { Copy, Download } from "lucide-react";

export default function ExecutionScreen() {
  const {
    isExecuting,
    setIsExecuting,
    input,
    output,
    setOutput,
    isDialogOpen,
    closeDialog,
    setInput,
  } = useExecutionStore();
  const { logs, updateLogMetadata, setAllLogsToStatus, resetLogs } =
    useLogsStore();

  const executeSuccess = async () => {
    setAllLogsToStatus("QUEUED");
    for (let i = 0; i < logs.length; i++) {
      const startTime = Date.now();
      updateLogMetadata(i, {
        status: "EXECUTING",
        timeStarted: startTime,
      });
      const delay = Math.floor(Math.random() * (4000 - 2000 + 1)) + 2000;
      await new Promise((resolve) => setTimeout(resolve, delay));

      const endTime = Date.now();
      const duration = endTime - startTime;

      updateLogMetadata(i, {
        status: "EXECUTED",
        timeEnded: endTime,
        timeToComplete: duration,
      });
    }
    setOutput(true);
    setIsExecuting(false);
  };

  const executeFail = async () => {
    setAllLogsToStatus("QUEUED");
    for (let i = 0; i < 4; i++) {
      const startTime = Date.now();
      updateLogMetadata(i, {
        status: "EXECUTING",
        timeStarted: startTime,
      });
      const delay = Math.floor(Math.random() * (4000 - 2000 + 1)) + 2000;
      await new Promise((resolve) => setTimeout(resolve, delay));

      const endTime = Date.now();
      const duration = endTime - startTime;

      updateLogMetadata(i, {
        status: "EXECUTED",
        timeEnded: endTime,
        timeToComplete: duration,
      });
    }
    // fail case
    const startTime = Date.now();
    updateLogMetadata(4, {
      status: "EXECUTING",
      timeStarted: startTime,
    });
    const delay = Math.floor(Math.random() * (4000 - 2000 + 1)) + 2000;
    await new Promise((resolve) => setTimeout(resolve, delay));

    const endTime = Date.now();
    const duration = endTime - startTime;

    updateLogMetadata(4, {
      status: "FAILED",
      timeEnded: endTime,
      timeToComplete: duration,
    });
    // remaining cases
    for (let i = 5; i < logs.length; i++) {
      const startTime = Date.now();
      updateLogMetadata(i, {
        status: "FAILED",
        timeStarted: startTime,
      });
      const endTime = Date.now();
      const duration = endTime - startTime;

      updateLogMetadata(i, {
        status: "FAILED",
        timeEnded: endTime,
        timeToComplete: duration,
      });
    }
    setOutput(false);
    setIsExecuting(false);
  };

  const executeFlow = async () => {
    resetLogs();
    setIsExecuting(true);
    console.log(isExecuting);
    if (input !== "{fail}") {
      executeSuccess();
    } else {
      executeFail();
    }
  };
  const resetForm = () => {
    resetLogs();
    setInput("{}");
  };
  return (
    <Dialog
      open={isDialogOpen}
      onOpenChange={(open) => {
        if (!open) closeDialog();
      }}
    >
      <DialogContent className="lg:max-w-screen-lg max-h-screen">
        <DialogHeader>
          <DialogTitle>Execute Flow</DialogTitle>
          <DialogDescription className="text-sm">
            Enter the Deployment Name and Request Payload to execute the flow.
            {isExecuting ? "t" : "f"}
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <SelectDeployment />
            <DeploymentInput />
            <ExecutionLogs />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <div className="text-xs font-bold uppercase">OUTPUT</div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    if (output) {
                      navigator.clipboard.writeText(
                        JSON.stringify(output, null, 2)
                      );
                    }
                  }}
                  className="cursor-pointer"
                  disabled={!output}
                >
                  <Copy />
                  Copy
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    if (output) {
                      const blob = new Blob([JSON.stringify(output, null, 2)], {
                        type: "application/json",
                      });
                      const url = URL.createObjectURL(blob);
                      const a = document.createElement("a");
                      a.href = url;
                      a.download = "output.json";
                      a.click();
                      URL.revokeObjectURL(url);
                    }
                  }}
                  className="cursor-pointer"
                  disabled={!output}
                >
                  <Download />
                  Download
                </Button>
              </div>
            </div>
            <pre className="bg-gray-100 p-2 rounded-md text-xs overflow-auto h-60 max-h-60">
              {isExecuting
                ? "Processing..."
                : output
                ? output
                : "No output yet. Click 'Execute' to run the flow."}
            </pre>
          </div>
        </div>
        <DialogFooter>
          <Button
            variant="outline"
            onClick={resetForm}
            disabled={isExecuting}
            className="cursor-pointer"
          >
            Reset
          </Button>
          <Button
            onClick={executeFlow}
            disabled={isExecuting}
            className="cursor-pointer"
          >
            {isExecuting ? "Executing..." : "Execute"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

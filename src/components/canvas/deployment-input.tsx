import { useExecutionStore } from "@/stores/executionStore";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export function DeploymentInput() {
  const {
    selectedVersion,
    versionInputs,
    isInputJsonView,
    toggleInputJsonView,
    input,
    setInput,
  } = useExecutionStore();
  return (
    <>
      {isInputJsonView ? (
        <Textarea
          placeholder="Request Payload"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="font-mono h-40 max-h-40 resize-none overflow-y-auto"
        />
      ) : (
        <div className="h-40 max-h-40 overflow-y-scroll flex flex-col gap-2">
          {versionInputs.map((versionData) =>
            versionData.version === selectedVersion
              ? versionData.inputs.map((input, index) => (
                  <div
                    className="flex gap-8 justify-between items-center"
                    key={index}
                  >
                    <span>{input}</span>
                    <Input className="max-w-3/4" />
                  </div>
                ))
              : null
          )}
        </div>
      )}
      <div className="flex justify-end">
        <Button onClick={toggleInputJsonView} className="cursor-pointer">
          {isInputJsonView === true
            ? "Switch to Form Input"
            : "Switch to JSON Input"}
        </Button>
      </div>
    </>
  );
}

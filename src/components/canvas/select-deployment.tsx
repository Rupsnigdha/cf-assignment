import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { useExecutionStore } from "@/stores/executionStore";
import { CheckIcon, ChevronDownIcon } from "lucide-react";

export function SelectDeployment() {
  const { selectedVersion, selectVersion, availableVersions } =
    useExecutionStore();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="flex justify-between items-center cursor-pointer"
        >
          <div>Deployment Name</div>
          <div className="flex items-center gap-2 overflow-hidden flex-1 justify-end">
            <div className="text-muted-foreground font-normal truncate">
              {selectedVersion}
            </div>
            <ChevronDownIcon className="w-4 h-4 flex-shrink-0" />
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="">
        {availableVersions.map((version, index) => (
          <DropdownMenuItem
            key={index}
            className="cursor-pointer hover:bg-primary-foreground flex justify-between items-center"
            onClick={() => selectVersion(version)}
          >
            {selectedVersion === version ? (
              <CheckIcon className="w-4 h-4" />
            ) : (
              <div className="w-4 h-4" />
            )}
            <div>{version}</div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

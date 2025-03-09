import { create } from "zustand";
import { output } from "@/lib/data/execution-output";

interface ExecutionStore {
  isDialogOpen: boolean;
  input: string;
  setInput: (input : string) => void;

  output: string | undefined;
  setOutput: (success: boolean) => void;

  openDialog: () => void;
  closeDialog: () => void;

  availableVersions: string[];
  selectedVersion: string;
  selectVersion: (version : string) => void;

  isInputJsonView: boolean;
  toggleInputJsonView: () => void;

  isExecuting: boolean,
  setIsExecuting: (input : boolean) => void,

  versionInputs: {
    version: string,
    inputs: string[]
  }[]
};

export const useExecutionStore = create<ExecutionStore>((set) => ({
  isDialogOpen: true,
  input: "{}",
  output: undefined,
  selectedVersion: 'v3.0.0 beta',
  isInputJsonView: false,
  availableVersions: ['v3.0.0 beta', 'v2.0.0', 'v1.1.0', 'v1.0.0'],
  versionInputs: [
    {
      version: 'v3.0.0 beta',
      inputs: ['Data', 'Email','A Property', 'Another Property']
    },
    {
      version: 'v2.0.0',
      inputs: ['Data', 'Email', 'Another Property']
    },
    {
      version: 'v1.1.0',
      inputs: ['Data', 'Email', 'A Property']
    },
    {
      version: 'v1.0.0',
      inputs: ['Data', 'Email',]
    }
  ],
  isExecuting: false,
  setInput: (input) => set({input: input}),
  setIsExecuting: (input) => set({isExecuting: input}),
  selectVersion: (version : string) => set({selectedVersion: version}),
  openDialog: () => set({ isDialogOpen: true }),
  closeDialog: () => set({ isDialogOpen: false }),
  toggleInputJsonView: () => set((state) => ({isInputJsonView: !state.isInputJsonView})),
  setOutput: (success) => {
    if(success){
      set({output: output})
    } else {
      set({output: "Error processing response. Please check your inputs."})
    }
  }
})); 
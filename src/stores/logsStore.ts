import { create } from "zustand";

interface LogsStore {
	logs: {
		name: string,
		status: 'NOT_STARTED' | 'QUEUED' | 'EXECUTING' | 'EXECUTED' | 'FAILED',
		timeStarted: number | undefined,
		timeEnded: number | undefined,
		timeToComplete: number | undefined
	}[],
	updateLogMetadata: (i : number, updates: {
		status?: LogsStore["logs"][number]["status"],
		timeStarted?: LogsStore["logs"][number]["timeStarted"],
		timeToComplete?: LogsStore["logs"][number]["timeToComplete"],
		timeEnded?: LogsStore["logs"][number]["timeEnded"]
	}) => void;
	setAllLogsToStatus: (status: 'NOT_STARTED' | 'QUEUED' | 'EXECUTING' | 'EXECUTED' | 'FAILED') => void;
	resetLogs: () => void;
}

export const useLogsStore = create<LogsStore>((set, get) => ({
	logs: [
		{
			name: 'Cloud Storage',
			status: 'NOT_STARTED',
			timeStarted: undefined,
			timeEnded: undefined,
			timeToComplete: undefined
		},
		{
			name: 'Guidelines',
			status: 'NOT_STARTED',
			timeStarted: undefined,
			timeEnded: undefined,
			timeToComplete: undefined
		},
		{
			name: 'Guardrails Manager',
			status: 'NOT_STARTED',
			timeStarted: undefined,
			timeEnded: undefined,
			timeToComplete: undefined
		},
		{
			name: 'Input Preprocessor',
			status: 'NOT_STARTED',
			timeStarted: undefined,
			timeEnded: undefined,
			timeToComplete: undefined
		},
		{
			name: 'Document Understanding Engine',
			status: 'NOT_STARTED',
			timeStarted: undefined,
			timeEnded: undefined,
			timeToComplete: undefined
		},
		{
			name: 'Document Parser',
			status: 'NOT_STARTED',
			timeStarted: undefined,
			timeEnded: undefined,
			timeToComplete: undefined
		},
		{
			name: 'LLM Preprocessor',
			status: 'NOT_STARTED',
			timeStarted: undefined,
			timeEnded: undefined,
			timeToComplete: undefined
		},
		{
			name: 'JSON Formatter',
			status: 'NOT_STARTED',
			timeStarted: undefined,
			timeEnded: undefined,
			timeToComplete: undefined
		},
		{
			name: 'Report Generator',
			status: 'NOT_STARTED',
			timeStarted: undefined,
			timeEnded: undefined,
			timeToComplete: undefined
		}
	],
	updateLogMetadata: (i, updates) => {
		const newLogs = [...get().logs];
		newLogs[i] = { ...newLogs[i], ...updates };
		set({ logs: newLogs });
	  },
	setAllLogsToStatus: (status : 'NOT_STARTED' | 'QUEUED' | 'EXECUTING' | 'EXECUTED' | 'FAILED') => {
		const newLogs = [...get().logs];
		for(let i = 0; i < newLogs.length; i++) {
			newLogs[i] = {...newLogs[i], status}
		}
		set({logs: newLogs})
	},
	resetLogs: () => {
		const newLogs = [...get().logs];
		for(let i = 0; i < newLogs.length; i++) {
			newLogs[i] = {...newLogs[i], status: 'NOT_STARTED', timeEnded: undefined, timeStarted: undefined, timeToComplete: undefined}
		}
		set({logs: newLogs})
	}
}))
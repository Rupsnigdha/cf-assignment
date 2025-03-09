import { create } from "zustand";
import { FileInput, FileOutput, Bot, FileSpreadsheetIcon, Mail, LucideProps } from "lucide-react";
import { ForwardRefExoticComponent } from "react";

interface CanvasComponent {
	name: string,
	icon: ForwardRefExoticComponent<Omit<LucideProps, "ref">>
}

type CanvasComponentsStore = {
  components: CanvasComponent[]
};

export const useCanvasComponentsStore = create<CanvasComponentsStore>(() => ({
 components: [
	{
		name: 'File Input',
		icon: FileInput
	},
	{
		name: 'File Output',
		icon: FileOutput,
	},
	{
		name: 'LLM Preprocessor',
		icon: Bot
	},
	{
		name: 'Google Sheets Writer',
		icon: FileSpreadsheetIcon
	},
	{
		name: 'Email Client',
		icon: Mail
	}
 ]
}));

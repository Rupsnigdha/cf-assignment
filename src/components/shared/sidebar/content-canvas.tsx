import { cn } from "@/lib/utils";

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenu,
  SidebarGroupContent,
} from "@/components/ui/sidebar";

import { Plus } from "lucide-react";
import { useCanvasComponentsStore } from "@/stores/canvasComponentsStore";

export default function ContentCanvas() {
  const { components } = useCanvasComponentsStore();
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Add Components</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {components.map((component, index) => (
            <SidebarMenuItem key={index}>
              <SidebarMenuButton
                size="lg"
                className={cn(
                  "data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground relative hover:cursor-pointer h-full border"
                )}
              >
                <div className="h-full w-auto aspect-square">
                  <component.icon />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <div className="flex justify-between">
                    <div className="truncate text-sm">{component.name}</div>
                    <div className="flex gap-1 text-[10px] items-center"></div>
                  </div>
                  <span className="truncate text-[10px] font-bold"></span>
                </div>
                <Plus className="ml-auto size-4" />
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}

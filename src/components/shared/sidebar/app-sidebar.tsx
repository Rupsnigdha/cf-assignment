"use client";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

import { NavUser } from "./nav-user";
import ContentDashboard from "./content-dashboard";
import { NavHeader } from "./nav-header";

import { ArrowRightLeft, BookText, ChevronRight } from "lucide-react";
import Link from "next/link";
import ContentCanvas from "./content-canvas";

export function AppSidebar() {
  const sidebar = useSidebar();
  const pathname = usePathname();

  return (
    <Sidebar collapsible="icon">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => {
          sidebar.toggleSidebar();
        }}
        className={cn(
          "absolute top-1/2 right-0 translate-x-1/2 bg-background rounded-full border-2 border-sidebar-border cursor-pointer transition-transform duration-300",
          sidebar.open && "rotate-180"
        )}
      >
        <ChevronRight />
      </Button>
      <SidebarHeader>
        <NavHeader />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Switch view</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                size="lg"
                className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground relative hover:cursor-pointer"
                asChild
              >
                <Link
                  href={
                    pathname.endsWith("dashboard") ? "/canvas" : "/dashboard"
                  }
                >
                  <div className="h-8 w-8">
                    <ArrowRightLeft />
                  </div>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    Switch to{" "}
                    {pathname.endsWith("dashboard") ? "Canvas" : "Dashboard"}{" "}
                  </div>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                size="lg"
                className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground relative hover:cursor-pointer"
                asChild
              >
                <Link href="/docs">
                  <div className="h-8 w-8">
                    <BookText />
                  </div>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    View Docs
                  </div>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>

        {pathname.endsWith("dashboard") && <ContentDashboard />}
        {pathname.endsWith("canvas") && <ContentCanvas />}
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}

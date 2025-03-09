"use client";

import { Settings } from "lucide-react";
import React from "react";
import { columns } from "@/components/dashboard/columns";
import { DataTable } from "@/components/dashboard/data-table";
import { useTableDataStore } from "@/stores/tableDataStore";
import { useDashboardSettingsStore } from "@/stores/dashboardSettingsStore";
import { Button } from "@/components/ui/button";
import { DashboardSettings } from "@/components/dashboard/dashboard-settings";

function Page() {
  const { data } = useTableDataStore();
  const { openDialog } = useDashboardSettingsStore();
  return (
    <>
      <DashboardSettings />
      <div className="flex flex-col gap-4">
        <div className="border rounded-lg p-2 px-4 shadow">
          <div className="flex justify-between">
            <div className="flex gap-2 items-end">
              <p className="text-lg line-clamp-1 leading-none">v1.1.0</p>
              <p className="font-bold text-sm leading-none">Primary Workflow</p>
            </div>
            <div>
              <Button
                size="icon"
                variant="outline"
                onClick={openDialog}
                className="cursor-pointer"
              >
                <Settings />
              </Button>
            </div>
          </div>
          <div className="flex gap-2 flex-wrap my-2 text-xs">
            <div className="px-2 py-1 bg-primary text-primary-foreground rounded-md">
              prod
            </div>
            <div className="px-2 py-1 bg-primary text-primary-foreground rounded-md">
              email
            </div>
          </div>
          <div className="text-muted-foreground text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
            illo aliquam aut aperiam perspiciatis, possimus asperiores ab fugit
            animi assumenda dolorum quisquam, eos cum libero quam beatae
            corrupti omnis! Facere.
          </div>
          <div className="text-sm mt-2">
            <span>Deployed on:</span>{" "}
            <span className="font-bold">08th March, 2025; 12:00PM</span>
          </div>
        </div>
        <DataTable columns={columns} data={data} />
      </div>
    </>
  );
}

export default Page;

"use client";

import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  getFilteredRowModel,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "../ui/button";
import { Check, Copy, Download, Expand, Filter } from "lucide-react";
import { useState } from "react";
import { Input } from "../ui/input";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../ui/dropdown-menu";
import { useTableDataStore } from "@/stores/tableDataStore";
import { cn } from "@/lib/utils";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const { filterKeys, setFilterKey, selectedFilterKey } = useTableDataStore();
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
    },
  });

  return (
    <>
      <div className="flex items-center py-4 gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="cursor-pointer w-48">
              {" "}
              <Filter />
              Filter by{" "}
              {
                filterKeys.find((filter) => filter.key === selectedFilterKey)
                  ?.name
              }
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48">
            {filterKeys.map((filterOption) => (
              <DropdownMenuItem
                key={filterOption.key}
                onClick={() => setFilterKey(filterOption.key)}
                className="cursor-pointer"
              >
                <Check
                  className={cn(
                    selectedFilterKey === filterOption.key
                      ? "opacity-100"
                      : "opacity-0"
                  )}
                />
                Filter by {filterOption.name}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <Input
          placeholder={
            "Filter by " +
            filterKeys.find((filter) => filter.key === selectedFilterKey)?.name
          }
          value={
            (table.getColumn(selectedFilterKey)?.getFilterValue() as string) ??
            ""
          }
          onChange={(event) =>
            table
              .getColumn(selectedFilterKey)
              ?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                <td />
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <Collapsible key={row.id} asChild>
                  <>
                    <TableRow
                      data-state={row.getIsSelected() ? "selected" : undefined}
                      key={row.id}
                    >
                      <TableCell>
                        <CollapsibleTrigger asChild>
                          <Button
                            variant={"ghost"}
                            size="icon"
                            className="cursor-pointer"
                          >
                            <Expand />
                          </Button>
                        </CollapsibleTrigger>
                      </TableCell>
                      {row.getVisibleCells().map((cell) => (
                        <TableCell
                          key={cell.id}
                          className="truncate max-w-[200px]"
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                    <CollapsibleContent asChild>
                      <TableRow>
                        <TableCell colSpan={columns.length + 1}>
                          <div className="flex justify-between gap-4">
                            <div className="w-1/2">
                              <div className="flex justify-between items-center mb-2">
                                <p className="text-sm font-medium">
                                  Input details
                                </p>
                                <div className="flex gap-2">
                                  <Button
                                    variant="outline"
                                    size="icon"
                                    className="cursor-pointer"
                                    onClick={() =>
                                      navigator.clipboard.writeText(
                                        JSON.stringify(
                                          typeof row.getValue("input") ===
                                            "string"
                                            ? JSON.parse(row.getValue("input"))
                                            : row.getValue("input"),
                                          null,
                                          2
                                        )
                                      )
                                    }
                                  >
                                    <Copy className="h-4 w-4 mr-1" />
                                  </Button>
                                  <Button
                                    size="icon"
                                    className="cursor-pointer"
                                    onClick={() => {
                                      const blob = new Blob(
                                        [
                                          JSON.stringify(
                                            typeof row.getValue("input") ===
                                              "string"
                                              ? JSON.parse(
                                                  row.getValue("input")
                                                )
                                              : row.getValue("input"),
                                            null,
                                            2
                                          ),
                                        ],
                                        { type: "application/json" }
                                      );
                                      const url = URL.createObjectURL(blob);
                                      const a = document.createElement("a");
                                      a.href = url;
                                      a.download = `input-${row.id}.json`;
                                      document.body.appendChild(a);
                                      a.click();
                                      document.body.removeChild(a);
                                      URL.revokeObjectURL(url);
                                    }}
                                  >
                                    <Download className="h-4 w-4 mr-1" />
                                  </Button>
                                </div>
                              </div>
                              <pre className="bg-gray-200/60 rounded-md p-2 whitespace-pre-wrap break-words overflow-y-auto max-h-[200px] overflow-x-auto">
                                {JSON.stringify(
                                  typeof row.getValue("input") === "string"
                                    ? JSON.parse(row.getValue("input"))
                                    : row.getValue("input"),
                                  null,
                                  2
                                )}
                              </pre>
                            </div>
                            <div className="w-1/2">
                              <div className="flex justify-between items-center mb-2">
                                <p className="text-sm font-medium">
                                  Output details
                                </p>
                                <div className="flex gap-2">
                                  <Button
                                    variant="outline"
                                    size="icon"
                                    className="cursor-pointer"
                                    onClick={() =>
                                      navigator.clipboard.writeText(
                                        JSON.stringify(
                                          typeof row.getValue("output") ===
                                            "string"
                                            ? JSON.parse(row.getValue("output"))
                                            : row.getValue("output"),
                                          null,
                                          2
                                        )
                                      )
                                    }
                                  >
                                    <Copy className="h-4 w-4 mr-1" />
                                  </Button>
                                  <Button
                                    size="icon"
                                    className="cursor-pointer"
                                    onClick={() => {
                                      const blob = new Blob(
                                        [
                                          JSON.stringify(
                                            typeof row.getValue("output") ===
                                              "string"
                                              ? JSON.parse(
                                                  row.getValue("output")
                                                )
                                              : row.getValue("output"),
                                            null,
                                            2
                                          ),
                                        ],
                                        { type: "application/json" }
                                      );
                                      const url = URL.createObjectURL(blob);
                                      const a = document.createElement("a");
                                      a.href = url;
                                      a.download = `output-${row.id}.json`;
                                      document.body.appendChild(a);
                                      a.click();
                                      document.body.removeChild(a);
                                      URL.revokeObjectURL(url);
                                    }}
                                  >
                                    <Download className="h-4 w-4 mr-1" />
                                  </Button>
                                </div>
                              </div>
                              <pre className="bg-gray-200/60 rounded-md p-2 whitespace-pre-wrap break-words overflow-y-auto max-h-[200px]">
                                {JSON.stringify(
                                  typeof row.getValue("output") === "string"
                                    ? JSON.parse(row.getValue("output"))
                                    : row.getValue("output"),
                                  null,
                                  2
                                )}
                              </pre>
                            </div>
                          </div>
                        </TableCell>
                      </TableRow>
                    </CollapsibleContent>
                  </>
                </Collapsible>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </>
  );
}

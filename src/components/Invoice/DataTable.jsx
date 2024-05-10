import React, { useState } from "react";
import {
  Table,
  Button,
} from "reactstrap";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";
import './DataTable.css'

export function DataTable({ columns, data, heading, desc }) {
  const [sorting, setSorting] = useState([]);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5,
  });

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onPaginationChange: setPagination,
    state: {
      sorting,
      pagination
    },
  });

  return (
    <>
      <div  className="data-table-container">
        <div className="data-table-header">
          <div className="data-table-heading">
            <h5 className="text-md font-medium">{heading}</h5>
            <span className="data-table-description">{desc}</span>
          </div>
        </div>
        <Table className="data-table dark-text">
          <thead>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th key={header.id}  className="data-table-header-cell">
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map(row => (
                <tr key={row.id} data-state={row.getIsSelected() && "selected"}>
                  {row.getVisibleCells().map(cell => (
                    <td className="text-center" key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length} className="h-24 text-center">
                  No results.
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
      <div className="pagination">
        <div className="pagination-info">
          Page {table.getState().pagination.pageIndex + 1} of {Math.ceil(table.getPrePaginationRowModel().rows.length / table.getState().pagination.pageSize)}
        </div>
        <div  className="pagination-buttons">
          <Button
            className="pagination-button"
            // color="secondary"
            // color="#172554"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            className="pagination-button"
            // color="secondary"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </>
  );
}

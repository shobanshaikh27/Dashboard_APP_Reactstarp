import React from "react";
import { Button } from "reactstrap";
import { ArrowUpDown } from "lucide-react";  

export const columns = [
  {
    accessorKey: "invoice",
    header: "Invoice",
  },
  {
    accessorKey: "pending_amount",
    header: ({ column }) => {
      return (
        <Button
          // color="link"
          className="bg-transparent text-black "
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Pending Amount 
          <ArrowUpDown className="mx-2" size={18} />
        </Button>
      );
    },  
  },
  {
    accessorKey: "date",
    header: ({ column }) => {
      return (
        <Button
          // color="link"
          className="bg-transparent text-black font-semibold"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Date
          <ArrowUpDown className="mx-2" size={18} />
        </Button>
      );
    },  
  },
];

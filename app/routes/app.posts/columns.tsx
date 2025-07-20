"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { Link } from "react-router";

// This type is used to define the shape of our data.
// Using Zod schema

export type Post = {
  id: string;
  slug: string;
  title: string;
  content: string;
};

export const columns: ColumnDef<Post>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => {
      return (
        <Link to={`/cms/posts/edit/${row.original.slug}`}>
          {row.getValue("title")}
        </Link>
      );
    },
  },
];

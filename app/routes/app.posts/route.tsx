import { columns } from "./columns";
import { DataTable } from "./data-table";

const Posts = () => {
  const data = [
    {
      id: "1",
      title: "First Post",
      slug: "first-post",
      content: "This is the first post.",
    },
    {
      id: "2",
      title: "Second Post",
      slug: "second-post",
      content: "This is the second post.",
    },
  ];

  return (
    <>
      <h1>Posts</h1>

      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} />
      </div>
    </>
  );
};

export default Posts;

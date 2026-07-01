import React from "react";
import Button from "../ui/Button";
import Card from "../ui/Card";

const Blog = ({ blog }) => {
  return (
    <Card className="flex h-full flex-col overflow-hidden p-0">
      <div className="h-[220px] w-full overflow-hidden">
        <img
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          src={blog?.thumbnail}
          alt={blog?.title || ""}
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-bold text-text-primary line-clamp-2">
          {blog?.title}
        </h3>
        {blog?.createdAt && (
          <p className="mt-2 text-sm text-text-muted">
            {new Date(blog.createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        )}
        <div className="mt-auto pt-5">
          <Button href={`/blogs/${blog?.slug}`} size="sm">
            Read More
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default Blog;

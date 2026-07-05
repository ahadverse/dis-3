"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getBlogs, deleteBlog } from "../../../lib/actions/blogActions";
import Link from "next/link";
import { Eye, Pencil, Trash2 } from "lucide-react";
import TableToolbar from "../../../components/shared/TableToolbar";
import Button from "../../../components/ui/Button";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Input from "@/components/ui/Input";
import Tooltip from "@/components/ui/Tooltip";

export default function BlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("desc");
  const [pagination, setPagination] = useState({
    totalCount: 0,
    totalPages: 0,
    currentPage: 1,
  });
  const router = useRouter();

  useEffect(() => {
    loadBlogs();
  }, [page, search, sort, limit]);

  async function loadBlogs() {
    setLoading(true);
    setError("");
    const result = await getBlogs({ page, limit, search, sort });

    if (result.success) {
      setBlogs(result.blogs);
      setPagination(result.pagination);
    } else {
      setError(result.error);
      setBlogs([]);
    }
    setLoading(false);
  }

  async function handleDelete(id) {
    if (!confirm("Are you sure you want to delete this blog?")) return;

    const result = await deleteBlog(id);

    if (result.success) {
      setBlogs(blogs.filter((b) => b._id !== id));
      setPagination((prev) => ({
        ...prev,
        totalCount: prev.totalCount - 1,
      }));
    } else {
      setError(result.error);
    }
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="font-display text-4xl font-bold text-text-primary">
          Blogs
        </h1>
        <Button href="/dashboard/blogs/create" size="sm">
          + New Blog
        </Button>
      </div>

      {error && (
        <div className="mb-4 p-4 bg-error/10 border border-error/30 text-error rounded-md text-sm">
          {error}
        </div>
      )}

      {/* Filters */}
      <Card hover={false} className="p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-2">
              Search
            </label>
            <Input
              type="text"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
              placeholder="Search by title..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-text-secondary mb-2">
              Sort
            </label>
            <select
              value={sort}
              onChange={(e) => {
                setSort(e.target.value);
                setPage(1);
              }}
              className="w-full rounded-md border border-border bg-bg-surface2 px-4 py-2.5 text-text-primary outline-none transition-colors duration-200 focus:border-accent-blue-500 focus:ring-2 focus:ring-accent-blue-500/20"
            >
              <option value="desc">Newest First</option>
              <option value="asc">Oldest First</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-text-secondary mb-2">
              Page Size
            </label>
            <select
              value={limit}
              onChange={(e) => {
                setLimit(parseInt(e.target.value));
                setPage(1);
              }}
              className="w-full rounded-md border border-border bg-bg-surface2 px-4 py-2.5 text-text-primary outline-none transition-colors duration-200 focus:border-accent-blue-500 focus:ring-2 focus:ring-accent-blue-500/20"
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
            </select>
          </div>
        </div>
      </Card>

      {loading ? (
        <div className="text-center py-12 text-text-secondary">
          Loading blogs...
        </div>
      ) : blogs.length === 0 ? (
        <Card hover={false} className="p-8 text-center">
          <p className="text-text-secondary">No blogs found.</p>
        </Card>
      ) : (
        <Card hover={false} className="overflow-hidden">
          <div className="max-h-[70vh] overflow-auto">
            <table className="w-full">
              <thead className="sticky top-0 z-10 bg-bg-surface3 border-b border-border-subtle">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-text-primary">
                    Thumbnail
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-text-primary">
                    Title
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-text-primary">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-text-primary">
                    Date
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-text-primary">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {blogs.map((blog) => (
                  <tr
                    key={blog._id}
                    className="border-b border-border-subtle hover:bg-white/[0.03] transition-colors duration-150"
                  >
                    <td className="px-6 py-4 text-sm">
                      {blog.thumbnail ? (
                        <img
                          src={blog.thumbnail}
                          alt={blog.title}
                          className="w-16 h-16 rounded object-cover border border-border"
                        />
                      ) : (
                        <div className="w-16 h-16 rounded bg-bg-surface3 flex items-center justify-center text-xs text-text-muted">
                          No image
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm font-semibold text-text-primary">
                        {blog.title}
                      </p>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <Badge
                        variant={
                          blog.status === "published" ? "success" : "neutral"
                        }
                      >
                        {blog.status}
                      </Badge>
                    </td>
                    <td className="px-6 py-4 text-sm text-text-secondary">
                      <div className="space-y-1">
                        <p>{new Date(blog.createdAt).toLocaleDateString()}</p>
                        <p className="text-xs text-text-muted">
                          {new Date(blog.createdAt).toLocaleTimeString()}
                        </p>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <TableToolbar>
                        <Tooltip label="View blog">
                          <Link
                            href={`/blogs/${blog.slug}`}
                            target="_blank"
                            className="inline-flex items-center justify-center bg-success/15 text-success p-2 rounded hover:bg-success/25 transition-colors duration-150"
                          >
                            <Eye className="w-4 h-4" />
                          </Link>
                        </Tooltip>
                        <Tooltip label="Edit blog">
                          <Link
                            href={`/dashboard/blogs/edit/${blog._id}`}
                            className="inline-flex items-center justify-center bg-accent-blue-500/15 text-accent-blue-400 p-2 rounded hover:bg-accent-blue-500/25 transition-colors duration-150"
                          >
                            <Pencil className="w-4 h-4" />
                          </Link>
                        </Tooltip>
                        <Tooltip label="Delete blog">
                          <button
                            onClick={() => handleDelete(blog._id)}
                            className="inline-flex items-center justify-center bg-error/15 text-error p-2 rounded hover:bg-error/25 transition-colors duration-150"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </Tooltip>
                      </TableToolbar>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="bg-bg-surface3 px-6 py-4 border-t border-border-subtle flex items-center justify-between">
            <div className="text-sm text-text-secondary">
              Page {pagination.currentPage} of {pagination.totalPages}
            </div>
            <div className="space-x-2">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="px-4 py-2 border border-border rounded-lg text-text-secondary hover:bg-white/5 hover:text-text-primary transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              <button
                onClick={() =>
                  setPage((p) => Math.min(pagination.totalPages, p + 1))
                }
                disabled={page === pagination.totalPages}
                className="px-4 py-2 border border-border rounded-lg text-text-secondary hover:bg-white/5 hover:text-text-primary transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}

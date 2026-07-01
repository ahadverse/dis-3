"use client";
import Blog from "../../components/blogs/blog";
import Subcribe from "../../components/subscribe/subcribe";
import { getBlogs } from "../../lib/actions/blogActions";
import React, { useEffect, useState } from "react";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import Container from "../../components/ui/Container";
import Input from "../../components/ui/Input";
import Reveal from "../../components/motion/Reveal";
import StaggerGrid, { StaggerItem } from "../../components/motion/StaggerGrid";

function BlogPagination({ page, totalPages, onChange }) {
  if (totalPages <= 1) return null;

  const getPages = () => {
    const pages = [];
    const delta = 2;
    const left = Math.max(1, page - delta);
    const right = Math.min(totalPages, page + delta);

    if (left > 1) {
      pages.push(1);
      if (left > 2) pages.push("...");
    }
    for (let i = left; i <= right; i++) pages.push(i);
    if (right < totalPages) {
      if (right < totalPages - 1) pages.push("...");
      pages.push(totalPages);
    }

    return pages;
  };

  const btnBase =
    "h-9 min-w-[36px] px-2 rounded-lg text-sm font-medium transition-colors duration-150 flex items-center justify-center";
  const activeBtn = "bg-accent-blue-500 text-white shadow-glowBlue";
  const inactiveBtn =
    "border border-border bg-bg-surface2 text-text-secondary hover:bg-white/5 hover:text-text-primary";
  const disabledBtn =
    "border border-border bg-bg-surface2 text-text-muted opacity-40 cursor-not-allowed";

  return (
    <div className='mt-16 flex justify-center items-center gap-1.5'>
      <button
        onClick={() => onChange(page - 1)}
        disabled={page === 1}
        className={`${btnBase} ${page === 1 ? disabledBtn : inactiveBtn}`}
      >
        <ChevronLeft size={16} />
      </button>

      {getPages().map((p, i) =>
        p === "..." ? (
          <span key={`ellipsis-${i}`} className='px-1 text-text-muted text-sm'>
            …
          </span>
        ) : (
          <button
            key={p}
            onClick={() => {
              onChange(p);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className={`${btnBase} ${p === page ? activeBtn : inactiveBtn}`}
          >
            {p}
          </button>
        ),
      )}

      <button
        onClick={() => onChange(page + 1)}
        disabled={page === totalPages}
        className={`${btnBase} ${page === totalPages ? disabledBtn : inactiveBtn}`}
      >
        <ChevronRight size={16} />
      </button>
    </div>
  );
}

const Blogs = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(9);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("desc");
  const [pagination, setPagination] = useState({
    totalCount: 0,
    totalPages: 0,
    currentPage: 1,
  });

  useEffect(() => {
    loadBlogs();
  }, [page, limit, search, sort]);

  async function loadBlogs() {
    setLoading(true);
    const result = await getBlogs({
      page,
      limit,
      search,
      sort,
      onlyPublished: true,
    });
    if (result.success) {
      setData(result.blogs);
      setPagination(result.pagination);
    }
    setLoading(false);
  }

  return (
    <div className='bg-bg-base'>
      {/* Filters */}
      <div className='relative overflow-hidden pt-6 pb-4'>
        <Reveal delay={0.1}>
          <Container>
            <div className='rounded-xl border border-border bg-black p-4 shadow-card md:p-6'>
              <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
                <div>
                  <label className='mb-2 block text-sm font-medium text-text-secondary'>
                    Search
                  </label>
                  <div className='relative'>
                    <Search
                      className='pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted'
                      size={16}
                    />
                    <Input
                      type='text'
                      value={search}
                      onChange={(e) => {
                        setSearch(e.target.value);
                        setPage(1);
                      }}
                      placeholder='Search by title...'
                      className='pl-10'
                    />
                  </div>
                </div>

                <div>
                  <label className='mb-2 block text-sm font-medium text-text-secondary'>
                    Sort
                  </label>
                  <select
                    value={sort}
                    onChange={(e) => {
                      setSort(e.target.value);
                      setPage(1);
                    }}
                    className='w-full rounded-md border border-border bg-bg-surface2 px-4 py-2.5 text-text-primary outline-none transition-colors duration-200 focus:border-accent-blue-500 focus:ring-2 focus:ring-accent-blue-500/20'
                  >
                    <option value='desc'>Newest First</option>
                    <option value='asc'>Oldest First</option>
                  </select>
                </div>

                <div>
                  <label className='mb-2 block text-sm font-medium text-text-secondary'>
                    Page Size
                  </label>
                  <select
                    value={limit}
                    onChange={(e) => {
                      setLimit(parseInt(e.target.value));
                      setPage(1);
                    }}
                    className='w-full rounded-md border border-border bg-bg-surface2 px-4 py-2.5 text-text-primary outline-none transition-colors duration-200 focus:border-accent-blue-500 focus:ring-2 focus:ring-accent-blue-500/20'
                  >
                    <option value={3}>3</option>
                    <option value={6}>6</option>
                    <option value={9}>9</option>
                    <option value={12}>12</option>
                  </select>
                </div>
              </div>
            </div>
          </Container>
        </Reveal>
      </div>

      {/* Blogs Grid */}
      <Container className='pb-section'>
        {loading ? (
          <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {Array.from({ length: limit }).map((_, i) => (
              <div
                key={i}
                className='h-[340px] rounded-xl border border-border bg-bg-surface2 animate-pulse'
              />
            ))}
          </div>
        ) : data.length === 0 ? (
          <div className='py-8 text-center text-text-muted'>
            No blogs found. Try adjusting your search or filters.
          </div>
        ) : (
          <StaggerGrid className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {data.map((blog) => (
              <StaggerItem key={blog._id}>
                <Blog blog={blog} />
              </StaggerItem>
            ))}
          </StaggerGrid>
        )}

        <BlogPagination
          page={page}
          totalPages={pagination.totalPages}
          onChange={setPage}
        />
      </Container>

      <Subcribe blog={true} />
    </div>
  );
};

export default Blogs;

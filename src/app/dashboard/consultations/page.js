"use client";

import { useState, useEffect } from "react";
import {
  getConsultations,
  markConsultationAsReplied,
  deleteConsultation,
} from "../../../lib/actions/consultationActions";
import { Trash2, Eye, X, Reply } from "lucide-react";
import TableToolbar from "../../../components/shared/TableToolbar";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Input from "@/components/ui/Input";
import Tooltip from "@/components/ui/Tooltip";

export default function ConsultationsPage() {
  const [consultations, setConsultations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("desc");
  const [selected, setSelected] = useState(null);
  const [pagination, setPagination] = useState({
    totalCount: 0,
    totalPages: 0,
    currentPage: 1,
  });

  useEffect(() => {
    loadConsultations();
  }, [page, search, sort, limit]);

  async function loadConsultations() {
    setLoading(true);
    setError("");
    const result = await getConsultations({ page, limit, search, sort });

    if (result.success) {
      setConsultations(result.consultations);
      setPagination(result.pagination);
    } else {
      setError(result.error);
      setConsultations([]);
    }
    setLoading(false);
  }

  async function handleMarkReplied(id) {
    const result = await markConsultationAsReplied(id);
    if (result.success) {
      setConsultations(
        consultations.map((c) => (c._id === id ? { ...c, replied: true } : c)),
      );
    } else {
      setError(result.error);
    }
  }

  async function handleDelete(id) {
    if (!confirm("Are you sure you want to delete this consultation?")) return;
    const result = await deleteConsultation(id);
    if (result.success) {
      setConsultations(consultations.filter((c) => c._id !== id));
      setPagination((prev) => ({ ...prev, totalCount: prev.totalCount - 1 }));
      if (selected?._id === id) setSelected(null);
    } else {
      setError(result.error);
    }
  }

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <h1 className="font-display text-4xl font-bold text-text-primary">
          Consultations
        </h1>
        <div className="text-sm text-text-secondary">
          Total: {pagination.totalCount}
        </div>
      </div>

      {error && (
        <div className="mb-4 p-4 bg-error/10 border border-error/30 text-error rounded-md text-sm">
          {error}
        </div>
      )}

      {/* View Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <Card hover={false} className="max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-bg-surface2 border-b border-border-subtle px-6 py-4 flex justify-between items-center">
              <h2 className="font-display text-2xl font-bold text-text-primary">
                Consultation Details
              </h2>
              <button
                onClick={() => setSelected(null)}
                className="text-text-muted hover:text-text-primary transition-colors duration-150"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-text-muted mb-1">NAME</label>
                  <p className="text-base text-text-primary font-medium">{selected.name}</p>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-text-muted mb-1">EMAIL</label>
                  <p className="text-base text-text-primary break-all">{selected.email}</p>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-text-muted mb-1">PHONE</label>
                  <p className="text-base text-text-primary">{selected.phone || "Not provided"}</p>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-text-muted mb-1">STATUS</label>
                  <Badge variant={selected.replied ? "success" : "amber"}>
                    {selected.replied ? "Replied" : "Pending"}
                  </Badge>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-text-muted mb-1">DATE</label>
                  <p className="text-base text-text-primary">{selected.date}</p>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-text-muted mb-1">TIME</label>
                  <p className="text-base text-text-primary">{selected.time}</p>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-text-muted mb-1">SUBMITTED ON</label>
                  <p className="text-base text-text-primary">
                    {new Date(selected.createdAt).toLocaleString("en-US", {
                      year: "numeric", month: "long", day: "numeric",
                      hour: "2-digit", minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-text-muted mb-1">MESSAGE</label>
                <p className="text-base text-text-primary bg-bg-surface3 p-4 rounded-lg whitespace-pre-wrap">
                  {selected.message || "No message provided"}
                </p>
              </div>
              <div className="pt-4 border-t border-border-subtle">
                <TableToolbar className="w-full gap-3">
                  {!selected.replied && (
                    <button
                      onClick={() => {
                        handleMarkReplied(selected._id);
                        setSelected({ ...selected, replied: true });
                      }}
                      className="flex items-center gap-2 bg-success/15 text-success px-4 py-2 rounded-lg hover:bg-success/25 transition-colors duration-150"
                    >
                      <Reply /> Mark as Replied
                    </button>
                  )}
                  <a
                    href={`mailto:${selected.email}`}
                    className="flex items-center gap-2 bg-accent-blue-500/15 text-accent-blue-400 px-4 py-2 rounded-lg hover:bg-accent-blue-500/25 transition-colors duration-150"
                  >
                    <Reply /> Send Email
                  </a>
                  <div className="ml-auto">
                    <button
                      onClick={() => {
                        handleDelete(selected._id);
                        setSelected(null);
                      }}
                      className="flex items-center gap-2 bg-error/15 text-error px-4 py-2 rounded-lg hover:bg-error/25 transition-colors duration-150"
                    >
                      <Trash2 size={16} /> Delete
                    </button>
                  </div>
                </TableToolbar>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* Filters */}
      <Card hover={false} className="p-4 md:p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-2">Search</label>
            <Input
              type="text"
              value={search}
              onChange={(e) => { setSearch(e.target.value); setPage(1); }}
              placeholder="Search by name or email..."
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-2">Sort</label>
            <select
              value={sort}
              onChange={(e) => { setSort(e.target.value); setPage(1); }}
              className="w-full rounded-md border border-border bg-bg-surface2 px-4 py-2.5 text-text-primary outline-none transition-colors duration-200 focus:border-accent-blue-500 focus:ring-2 focus:ring-accent-blue-500/20"
            >
              <option value="desc">Newest First</option>
              <option value="asc">Oldest First</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-2">Page Size</label>
            <select
              value={limit}
              onChange={(e) => { setLimit(parseInt(e.target.value)); setPage(1); }}
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
        <div className="text-center py-12 text-text-secondary">Loading consultations...</div>
      ) : consultations.length === 0 ? (
        <Card hover={false} className="p-8 text-center">
          <p className="text-text-secondary">No consultations found.</p>
        </Card>
      ) : (
        <Card hover={false} className="overflow-hidden">
          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead className="bg-bg-surface3 border-b border-border-subtle">
                <tr>
                  <th className="px-3 py-4 text-left text-sm font-semibold text-text-primary">Name</th>
                  <th className="px-3 py-4 text-left text-sm font-semibold text-text-primary">Email</th>
                  <th className="px-3 py-4 text-left text-sm font-semibold text-text-primary">Phone</th>
                  <th className="px-3 py-4 text-left text-sm font-semibold text-text-primary">Appointment</th>
                  <th className="px-3 py-4 text-left text-sm font-semibold text-text-primary">Status</th>
                  <th className="px-3 py-4 text-left text-sm font-semibold text-text-primary">Submitted</th>
                  <th className="px-3 py-4 text-left text-sm font-semibold text-text-primary">Actions</th>
                </tr>
              </thead>
              <tbody>
                {consultations.map((c) => (
                  <tr
                    key={c._id}
                    className="border-b border-border-subtle hover:bg-white/[0.03] transition-colors duration-150"
                  >
                    <td className="px-3 py-4 text-sm text-text-primary font-medium w-[140px]">{c.name}</td>
                    <td className="px-3 py-4 text-sm text-text-secondary">{c.email}</td>
                    <td className="px-3 py-4 w-[140px] text-sm text-text-secondary">{c.phone || "N/A"}</td>
                    <td className="px-3 py-4 text-sm text-text-secondary">
                      <div className="flex flex-col">
                        <span className="font-medium text-text-primary">{c.date}</span>
                        <span className="text-xs text-text-muted">{c.time}</span>
                      </div>
                    </td>
                    <td className="px-3 py-4 text-sm">
                      <Badge variant={c.replied ? "success" : "amber"}>
                        {c.replied ? "Replied" : "Pending"}
                      </Badge>
                    </td>
                    <td className="px-3 py-4 text-sm text-text-secondary">
                      {new Date(c.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-2 py-2 text-sm">
                      <TableToolbar>
                        <Tooltip label="View Details">
                          <button
                            onClick={() => setSelected(c)}
                            className="inline-flex items-center justify-center bg-bg-surface4 text-text-secondary p-1.5 rounded hover:bg-white/10 hover:text-text-primary transition-colors duration-150"
                          >
                            <Eye size={14} />
                          </button>
                        </Tooltip>
                        {!c.replied && (
                          <Tooltip label="Mark as Replied">
                            <button
                              onClick={() => handleMarkReplied(c._id)}
                              className="inline-flex items-center justify-center bg-success/15 text-success p-1.5 rounded hover:bg-success/25 transition-colors duration-150"
                            >
                              <Reply size={14} />
                            </button>
                          </Tooltip>
                        )}
                        <Tooltip label="Send Email">
                          <a
                            href={`mailto:${c.email}`}
                            className="inline-flex items-center justify-center bg-accent-blue-500/15 text-accent-blue-400 p-1.5 rounded hover:bg-accent-blue-500/25 transition-colors duration-150"
                          >
                            <Reply size={14} />
                          </a>
                        </Tooltip>
                        <Tooltip label="Delete">
                          <button
                            onClick={() => handleDelete(c._id)}
                            className="inline-flex items-center justify-center bg-error/15 text-error p-1.5 rounded hover:bg-error/25 transition-colors duration-150"
                          >
                            <Trash2 size={14} />
                          </button>
                        </Tooltip>
                      </TableToolbar>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="md:hidden">
            <div className="space-y-4 p-4">
              {consultations.map((c) => (
                <div
                  key={c._id}
                  className="border border-border rounded-lg p-4 hover:border-accent-blue-500/40 transition-colors duration-150"
                >
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs text-text-muted font-semibold">NAME</p>
                      <p className="text-sm font-bold text-text-primary">{c.name}</p>
                    </div>
                    <div>
                      <p className="text-xs text-text-muted font-semibold">EMAIL</p>
                      <p className="text-sm text-text-secondary">{c.email}</p>
                    </div>
                    {c.phone && (
                      <div>
                        <p className="text-xs text-text-muted font-semibold">PHONE</p>
                        <p className="text-sm text-text-secondary">{c.phone}</p>
                      </div>
                    )}
                    <div>
                      <p className="text-xs text-text-muted font-semibold">APPOINTMENT</p>
                      <p className="text-sm text-text-secondary">{c.date} at {c.time}</p>
                    </div>
                    {c.message && (
                      <div>
                        <p className="text-xs text-text-muted font-semibold">MESSAGE</p>
                        <p className="text-sm text-text-secondary line-clamp-2">{c.message}</p>
                      </div>
                    )}
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-xs text-text-muted font-semibold">STATUS</p>
                        <Badge variant={c.replied ? "success" : "amber"}>
                          {c.replied ? "Replied" : "Pending"}
                        </Badge>
                      </div>
                      <div>
                        <p className="text-xs text-text-muted font-semibold">SUBMITTED</p>
                        <p className="text-sm text-text-secondary">
                          {new Date(c.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <div className="pt-2">
                      <TableToolbar className="w-full flex-wrap gap-2">
                        <button
                          onClick={() => setSelected(c)}
                          className="bg-bg-surface4 text-text-secondary px-3 py-1 rounded hover:bg-white/10 hover:text-text-primary transition-colors duration-150 text-xs font-medium"
                        >
                          View Details
                        </button>
                        {!c.replied && (
                          <button
                            onClick={() => handleMarkReplied(c._id)}
                            className="bg-success/15 text-success px-3 py-1 rounded hover:bg-success/25 transition-colors duration-150 text-xs font-medium"
                          >
                            Mark Replied
                          </button>
                        )}
                        <a
                          href={`mailto:${c.email}`}
                          className="bg-accent-blue-500/15 text-accent-blue-400 px-3 py-1 rounded hover:bg-accent-blue-500/25 transition-colors duration-150 text-xs font-medium text-center"
                        >
                          Reply
                        </a>
                        <button
                          onClick={() => handleDelete(c._id)}
                          className="bg-error/15 text-error px-3 py-1 rounded hover:bg-error/25 transition-colors duration-150 text-xs font-medium"
                        >
                          Delete
                        </button>
                      </TableToolbar>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination */}
          <div className="bg-bg-surface3 px-4 md:px-6 py-4 border-t border-border-subtle flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-text-secondary">
              Page {pagination.currentPage} of {pagination.totalPages}
            </div>
            <div className="flex gap-2 flex-wrap justify-center md:justify-end">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="px-4 py-2 border border-border rounded-lg text-text-secondary hover:bg-white/5 hover:text-text-primary transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
              >
                Previous
              </button>
              <button
                onClick={() => setPage((p) => Math.min(pagination.totalPages, p + 1))}
                disabled={page === pagination.totalPages}
                className="px-4 py-2 border border-border rounded-lg text-text-secondary hover:bg-white/5 hover:text-text-primary transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
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

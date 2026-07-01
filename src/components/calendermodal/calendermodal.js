"use client";
import { Calendar } from "@mantine/dates";
import dayjs from "dayjs";
import React, { useState, useEffect } from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { ArrowLeft, CalendarDays, Clock, Phone, Video, CalendarCheck, X } from "lucide-react";
import Button from "../ui/Button";
import Input from "../ui/Input";
import Textarea from "../ui/Textarea";
import Modal from "../ui/Modal";
import Reveal from "../motion/Reveal";

const generateTimes = () => {
  const times = [];
  let hour = 10;

  for (let i = 0; i <= 12; i++) {
    const period = hour < 12 || hour === 24 ? "am" : "pm";
    const displayHour = hour % 12 === 0 ? 12 : hour % 12;
    times.push(`${displayHour}:00 ${period}`);
    hour++;
  }

  return times;
};

const times = generateTimes();

const Calender_Modal = () => {
  const [openModal, setOpenModal] = useState(false);
  const [mTime, setMTime] = useState("");
  const [tab, setTab] = useState("1");
  const [selected, setSelected] = useState([]);
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [modalSize, setModalSize] = useState("50%");

  useEffect(() => {
    const updateSize = () => {
      setModalSize(window.innerWidth < 640 ? "90%" : "50%");
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const handleSelect = (date) => {
    const newDate = new Date(date);
    const day = newDate.getDate();
    const month = newDate.toLocaleString("en-US", { month: "long" });
    const year = newDate.getFullYear();
    return setSelected(() => [`${day} ${month} ${year}`]);
  };

  const handleCheck = () => {
    setTab("2");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitStatus(null);

    const name = e.target.name.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const message = e.target.message.value;

    const data = {
      name,
      email,
      phone,
      message,
      date: selected[0] || "",
      time: mTime,
    };

    try {
      const response = await fetch("/api/consultations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({
          type: "success",
          message: "Consultation booked successfully! We'll contact you soon.",
        });
        e.target.reset();
        setTimeout(() => {
          setOpenModal(false);
          setTab("1");
          setSelected([]);
          setMTime("");
          setSubmitStatus(null);
        }, 2000);
      } else {
        setSubmitStatus({
          type: "error",
          message: result.error || "Failed to submit. Please try again.",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus({
        type: "error",
        message: "An error occurred. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Reveal>
      <Modal size={modalSize} opened={openModal} onClose={() => setOpenModal(false)} title="">
        {tab == 2 ? (
          <ArrowLeft
            className="mb-2 rounded-full border border-border p-1 text-3xl text-accent-blue-400 cursor-pointer"
            size={32}
            onClick={() => setTab("1")}
          />
        ) : (
          ""
        )}
        <div className="relative mb-5 rounded-lg border border-border-subtle px-4 py-3">
          <button
            onClick={() => setOpenModal(false)}
            className="absolute right-2 top-2 rounded-full p-1 text-text-muted hover:bg-white/10 hover:text-text-primary transition-colors"
          >
            <X size={16} />
          </button>
          <h1 className="pr-6 text-center text-lg font-semibold text-text-primary">
            Website Consultation Meeting
          </h1>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-sm text-text-secondary">
            <span className="flex items-center gap-1.5"><Clock size={14} /> 30 min</span>
            <span className="text-border">|</span>
            <span className="flex items-center gap-1.5"><Phone size={14} /> Phone call</span>
            <span className="text-border">|</span>
            <span className="flex items-center gap-1.5"><Video size={14} /> Google Meet</span>
            {tab == 2 && selected.length > 0 && (
              <>
                <span className="text-border">|</span>
                <span className="flex items-center gap-1.5 text-accent-blue-400 font-medium">
                  <CalendarCheck size={14} />
                  {selected[0]}{mTime ? `, ${mTime}` : ""}
                </span>
              </>
            )}
          </div>
        </div>

        {tab == 1 ? (
          <div>
            <AnimatePresence mode="wait">
              <motion.p
                key={selected[0] || "placeholder"}
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="my-6 text-center text-xl font-bold text-accent-blue-400"
              >
                {selected.length ? selected : "Select Date"}
                {mTime ? `, ${mTime}` : ""}
              </motion.p>
            </AnimatePresence>

            <LayoutGroup>
              <motion.div layout className="flex w-full gap-5">

                {/* Calendar — centered when alone, slides left on date pick */}
                <motion.div
                  layout
                  transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                  className={`flex justify-center ${selected?.length > 0 ? "w-7/12" : "w-full"}`}
                >
                  <Calendar
                    getDayProps={(date) => ({
                      selected: selected.some((s) => dayjs(date).isSame(s, "date")),
                      onClick: () => handleSelect(date),
                    })}
                  />
                </motion.div>

                {/* Time pills — appear on the right */}
                <AnimatePresence>
                  {selected?.length > 0 && (
                    <motion.div
                      key="timeslots"
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                      className="w-5/12"
                    >
                      <p className="mb-3 text-sm font-semibold text-text-secondary">Select a time</p>
                      <div className="flex flex-wrap gap-2">
                        {times?.map((a, i) => (
                          <motion.button
                            key={a}
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.18, delay: 0.2 + i * 0.025 }}
                            onClick={() => setMTime(a)}
                            className={`rounded-full border px-4 py-1.5 text-sm font-semibold transition-all duration-150 ${
                              mTime == a
                                ? "border-accent-blue-500 bg-accent-blue-500 text-white"
                                : "border-border bg-bg-surface2 text-accent-blue-400 hover:border-accent-blue-500 hover:bg-accent-blue-500/10"
                            }`}
                          >
                            {a}
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            </LayoutGroup>
            <div className="flex justify-center">
              <Button
                pill
                size="sm"
                className="mb-5 mt-6"
                disabled={!(selected?.length > 0)}
                onClick={() => handleCheck()}
              >
                Next
              </Button>
            </div>
          </div>
        ) : (
          <div className="mx-auto w-full md:w-[60%]">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-text-secondary">
                    Name <span className="text-error">*</span>
                  </label>
                  <Input name="name" placeholder="Your full name" required />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-text-secondary">
                    Email <span className="text-error">*</span>
                  </label>
                  <Input name="email" type="email" placeholder="your@email.com" required />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-text-secondary">
                  Phone <span className="text-xs font-normal text-text-muted">(optional)</span>
                </label>
                <Input name="phone" placeholder="+1 234 567 8900" />
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-text-secondary">
                  Anything to help prepare for the meeting?
                </label>
                <Textarea name="message" placeholder="Brief description of your project or goals..." rows={3} />
              </div>

              {submitStatus && (
                <div
                  className={`rounded-lg border px-4 py-3 text-sm ${
                    submitStatus.type === "success"
                      ? "border-success/30 bg-success/10 text-success"
                      : "border-error/30 bg-error/10 text-error"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <Button type="submit" pill disabled={loading} className="w-full">
                {loading ? "Booking…" : "Confirm Booking"}
              </Button>
            </form>
          </div>
        )}
      </Modal>
      <div className="mt-5 flex items-center justify-center gap-1">
        <CalendarDays className="rounded-lg bg-gradient-primary p-1.5 text-white" size={36} />
        <Button size="sm" className="my-5" onClick={() => setOpenModal(true)}>
          30 Min Free Consultation
        </Button>
      </div>
    </Reveal>
  );
};

export default Calender_Modal;

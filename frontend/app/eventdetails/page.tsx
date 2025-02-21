"use client"; // Required for Next.js App Router

import { useState } from "react";

type Event = {
  name: string;
  description: string;
  date: string;
  venue: string;
  organizerId: string;
  pricePerPass: string;
  lastDayToBuy: string;
  passesSold: string;
};

const EventForm = () => {
  const [event, setEvent] = useState<Event>({
    name: "",
    description: "",
    date: "",
    venue: "",
    organizerId: "",
    pricePerPass: "",
    lastDayToBuy: "",
    passesSold: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [editing, setEditing] = useState(false);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setEditing(false);
  };

  // Handle Edit
  const handleEdit = () => {
    setEditing(true);
    setSubmitted(false);
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-gray-100 shadow-lg rounded-xl mt-10">
      <h2 className="text-4xl font-bold text-center mb-6 text-indigo-600">
        {editing ? "Edit Event" : "Create Event"}
      </h2>

      {!submitted || editing ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Event Name"
              value={event.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              required
            />
            <textarea
              name="description"
              placeholder="Event Description"
              value={event.description}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 h-24"
              required
            />
            <label className="text-gray-700 font-semibold">Event Date</label>
            <input
              type="date"
              name="date"
              value={event.date}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              required
            />
            <input
              type="text"
              name="venue"
              placeholder="Venue"
              value={event.venue}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              required
            />
            <input
              type="text"
              name="organizerId"
              placeholder="Organizer ID"
              value={event.organizerId}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              required
            />
            <input
              type="number"
              name="pricePerPass"
              placeholder="Amount for One Pass (₹)"
              value={event.pricePerPass}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              required
            />

            {/* Label for Last Day to Register */}
            <label className="text-gray-700 font-semibold">Last Day to Register</label>
            <input
              type="date"
              name="lastDayToBuy"
              value={event.lastDayToBuy}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              required
            />

            <input
              type="number"
              name="passesSold"
              placeholder="Number of Passes to sell"
              value={event.passesSold}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-500 text-white p-3 rounded-lg font-bold hover:bg-indigo-600 transition duration-300"
          >
            {editing ? "Update Event" : "Submit Event"}
          </button>
        </form>
      ) : (
        <div className="text-center p-6 bg-white border border-gray-300 shadow-md rounded-xl">
          <h3 className="text-3xl font-bold text-green-600">Event Created Successfully 🎉</h3>
          <p className="mt-2"><strong>Name:</strong> {event.name}</p>
          <p><strong>Description:</strong> {event.description}</p>
          <p><strong>Date:</strong> {event.date}</p>
          <p><strong>Venue:</strong> {event.venue}</p>
          <p><strong>Organizer ID:</strong> {event.organizerId}</p>
          <p><strong>Amount for One Pass:</strong> ₹{event.pricePerPass}</p>
          <p><strong>Last Day to Register:</strong> {event.lastDayToBuy}</p>
          <p><strong>Passes Sold:</strong> {event.passesSold}</p>

          {/* Always Visible Edit Button */}
          <button
            onClick={handleEdit}
            className="mt-6 bg-yellow-500 text-white p-3 rounded-lg font-bold hover:bg-yellow-600 transition duration-300"
          >
            Edit Event
          </button>
        </div>
      )}
    </div>
  );
};

export default EventForm;

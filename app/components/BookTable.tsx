'use client';

import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { CiCalendar } from 'react-icons/ci';
import { MdAccessTime } from 'react-icons/md';

export default function BookTable() {
  const [startDate, setStartDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());

  return (
    <div
      className="bg-neutral3 py-28 xs:max-md:py-16 md:max-xl:py-24 xs:max-xl:px-5"
      id="booktable"
    >
      <div className="max-w-[1140px] mx-auto text-neutral1">
        <div className="mb-16">
          <p className="text-primary text-lg pb-6 text-center">
            Book your Table
          </p>
          <h2 className="text-center text-6xl font-gilda">
            Make a Reservation
          </h2>
        </div>

        <form className="grid grid-cols-2 xs:max-md:grid-cols-1 gap-x-8 gap-y-6 font-jost">
          <div>
            <label
              htmlFor="booking-name"
              className="block mb-2 font-medium text-xl font-jost"
            >
              Booking Name
            </label>
            <input
              type="text"
              placeholder="Enter Your Name"
              id="booking-name"
              className="text-opacity-70 w-full p-5 bg-transparent outline-0 border border-primary/50 focus:border-primary "
            />
          </div>
          <div>
            <label
              htmlFor="phone-number"
              className="block mb-2 font-medium text-xl font-jost"
            >
              Phone Number
            </label>
            <input
              type="text"
              placeholder="Enter Your Phone Number"
              id="phone-number"
              className="text-opacity-70 w-full p-5 bg-transparent outline-0 border border-primary/50 focus:border-primary "
            />
          </div>
          <div>
            <label
              htmlFor="booking-date"
              className="block mb-2 font-medium text-xl font-jost "
            >
              Date
            </label>
            <div className="relative text-neutral1/70">
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date || new Date())}
                dateFormat="MM/dd/yyyy"
                minDate={new Date()}
                wrapperClassName="w-full"
                className="text-opacity-70 w-full p-5 bg-transparent outline-0 border border-primary/50 focus:border-primary"
                id="booking-date"
              />
              <span className="absolute right-6 top-1/2 -translate-y-1/2">
                <CiCalendar />
              </span>
            </div>
          </div>
          <div>
            <label
              htmlFor="booking-time"
              className="block mb-2 font-medium text-xl font-jost "
            >
              Time
            </label>
            <div className="relative text-neutral1/70">
              <DatePicker
                selected={selectedTime}
                onChange={(date) => setSelectedTime(date || new Date())}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                dateFormat="h:mm aa"
                wrapperClassName="w-full"
                className="text-opacity-70 w-full p-5 bg-transparent outline-0 border border-primary/50 focus:border-primary"
                id="booking-time"
              />
              <span className="absolute right-6 top-1/2 -translate-y-1/2">
                <MdAccessTime />
              </span>
            </div>
          </div>
          <div className="col-span-full mb-6">
            <label
              htmlFor="person-of-number"
              className="block mb-2 font-medium text-xl font-jost "
            >
              Person of Number
            </label>
            <input
              type="number"
              placeholder="Person Of Number"
              id="person-of-number"
              className="text-opacity-70 w-full p-5 bg-transparent outline-0 border border-primary/50 focus:border-primary"
            />
          </div>
          <button className="col-span-full px-10 py-5 bg-primary uppercase font-semibold hover:bg-neutral1 hover:text-black transition-all duration-300 ease-in">
            book your table
          </button>
        </form>
      </div>
    </div>
  );
}

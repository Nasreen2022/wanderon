import FilterSidebar from "./FilterSidebar";
import AllTripCard from "./AllTripCard";

export default function FilterSection() {
  const months = [
    "Jan-26","Feb-26","Mar-26","Apr-26","May-26","Jun-26",
    "Jul-26","Aug-26","Sep-26","Oct-26","Nov-26","Dec-26"
  ];

  // ---------- YOUR SAME TRIP DATA (UNCHANGED) ----------
  const trips = [
    {
      id: 1,
      title: "11 Days Ultimate Philippines Group Tour",
      duration: "10N/11D",
      route: "Manila airport - Manila airport",
      date: "18 Feb, 11 Mar • +1 batches",
      oldPrice: "1,23,999",
      price: "1,19,999",
      image: "/trip/trip.jpg",
    },
    {
      id: 2,
      title: "8 Days Philippines Community Trip",
      duration: "7N/8D",
      route: "Manila airport - Cebu airport",
      date: "18 Feb, 11 Mar • +1 batches",
      oldPrice: "1,20,999",
      price: "84,999",
      image: "/trip/trip.jpg",
    },
    {
      id: 3,
      title: "3 Days Chopta & Tungnath Trek",
      duration: "2N/3D",
      route: "Delhi - Delhi",
      date: "20 Feb, 27 Feb • +7 batches",
      oldPrice: "11,999",
      price: "7,499",
      image: "/trip/trip.jpg",
    },
    {
      id: 4,
      title: "Manali Solang Trip",
      duration: "2N/3D",
      route: "Delhi - Delhi",
      date: "20 Feb, 27 Feb • +4 batches",
      oldPrice: "12,999",
      price: "8,499",
      image: "/trip/trip.jpg",
    },
    {
      id: 5,
      title: "Manali Solang Trip",
      duration: "2N/3D",
      route: "Delhi - Delhi",
      date: "20 Feb, 27 Feb • +4 batches",
      oldPrice: "12,999",
      price: "8,499",
      image: "/trip/trip.jpg",
    },
    {
      id: 6,
      title: "Manali Solang Trip",
      duration: "2N/3D",
      route: "Delhi - Delhi",
      date: "20 Feb, 27 Feb • +4 batches",
      oldPrice: "12,999",
      price: "8,499",
      image: "/trip/trip.jpg",
    },
    {
      id: 6,
      title: "Manali Solang Trip",
      duration: "2N/3D",
      route: "Delhi - Delhi",
      date: "20 Feb, 27 Feb • +4 batches",
      oldPrice: "12,999",
      price: "8,499",
      image: "/trip/trip.jpg",
    },
    {
      id: 6,
      title: "Manali Solang Trip",
      duration: "2N/3D",
      route: "Delhi - Delhi",
      date: "20 Feb, 27 Feb • +4 batches",
      oldPrice: "12,999",
      price: "8,499",
      image: "/trip/trip.jpg",
    },
    {
      id: 6,
      title: "Manali Solang Trip",
      duration: "2N/3D",
      route: "Delhi - Delhi",
      date: "20 Feb, 27 Feb • +4 batches",
      oldPrice: "12,999",
      price: "8,499",
      image: "/trip/trip.jpg",
    },
    {
      id: 6,
      title: "Manali Solang Trip",
      duration: "2N/3D",
      route: "Delhi - Delhi",
      date: "20 Feb, 27 Feb • +4 batches",
      oldPrice: "12,999",
      price: "8,499",
      image: "/trip/trip.jpg",
    },
    {
      id: 6,
      title: "Manali Solang Trip",
      duration: "2N/3D",
      route: "Delhi - Delhi",
      date: "20 Feb, 27 Feb • +4 batches",
      oldPrice: "12,999",
      price: "8,499",
      image: "/trip/trip.jpg",
    },
    {
      id: 6,
      title: "Manali Solang Trip",
      duration: "2N/3D",
      route: "Delhi - Delhi",
      date: "20 Feb, 27 Feb • +4 batches",
      oldPrice: "12,999",
      price: "8,499",
      image: "/trip/trip.jpg",
    },
    {
      id: 6,
      title: "Manali Solang Trip",
      duration: "2N/3D",
      route: "Delhi - Delhi",
      date: "20 Feb, 27 Feb • +4 batches",
      oldPrice: "12,999",
      price: "8,499",
      image: "/trip/trip.jpg",
    },
    {
      id: 6,
      title: "Manali Solang Trip",
      duration: "2N/3D",
      route: "Delhi - Delhi",
      date: "20 Feb, 27 Feb • +4 batches",
      oldPrice: "12,999",
      price: "8,499",
      image: "/trip/trip.jpg",
    },
    {
      id: 6,
      title: "Manali Solang Trip",
      duration: "2N/3D",
      route: "Delhi - Delhi",
      date: "20 Feb, 27 Feb • +4 batches",
      oldPrice: "12,999",
      price: "8,499",
      image: "/trip/trip.jpg",
    },
    {
      id: 6,
      title: "Manali Solang Trip",
      duration: "2N/3D",
      route: "Delhi - Delhi",
      date: "20 Feb, 27 Feb • +4 batches",
      oldPrice: "12,999",
      price: "8,499",
      image: "/trip/trip.jpg",
    },
    // your remaining trips...
  ];

  return (
    <section className="bg-gray-100 py-10">

      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* ================= MONTH BAR (STICKY AFTER NAVBAR) ================= */}
        <div
          className="
            sticky top-[80px] z-30
            bg-gray-100 py-4 mb-8
            shadow-sm
          "
        >
          <div className="flex items-center gap-3 overflow-x-auto">

            <button className="min-w-[40px] h-[40px] rounded-full bg-gray-200 shrink-0">
              ‹
            </button>

            {months.map((month) => (
              <button
                key={month}
                className="px-6 py-3 border rounded-lg bg-white whitespace-nowrap hover:bg-gray-50"
              >
                {month}
              </button>
            ))}

            <button className="min-w-[40px] h-[40px] rounded-full bg-gray-200 shrink-0">
              ›
            </button>

          </div>
        </div>

        {/* ================= FILTER + TRIPS ================= */}
        <div className="flex flex-col lg:flex-row gap-8">

          {/* LEFT SIDEBAR */}
          <div className="lg:w-[300px] shrink-0">
            <FilterSidebar />
          </div>

          {/* RIGHT TRIPS */}
          <div className="flex-1">

            <h2 className="text-xl font-semibold mb-4">
              All Upcoming Trips
            </h2>

            {/* 👇 SHOW ONLY 6 CARDS AREA — CARD UI UNCHANGED */}
            <div
              className="
                grid md:grid-cols-2 gap-6
                max-h-[720px]
                overflow-y-auto
                pr-2
              "
            >
              {trips.map((trip) => (
                <AllTripCard key={trip.id} trip={trip} />
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

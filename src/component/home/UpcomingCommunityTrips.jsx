export default function UpcomingCommunityTrips() {
  return (
    <section className="py-8 md:py-10 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Banner Container */}
        <div
          className="
          w-full overflow-hidden
          rounded-xl md:rounded-2xl
          shadow-md
          cursor-pointer
          "
        >
          {/* Banner Image */}
          <img
            src="/upcomingTrip.jpg"
            alt="Upcoming Community Trips"
            className="w-full h-auto object-contain block"
          />
        </div>

      </div>
    </section>
  );
}

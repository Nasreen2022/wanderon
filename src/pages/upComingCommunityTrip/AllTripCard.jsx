export default function AllTripCard({ trip }) {
  return (
    <div
      className="
        flex flex-col sm:flex-row
        items-stretch
        bg-white border rounded-xl shadow-sm
        overflow-hidden
        hover:shadow-md transition
        w-full
        h-[160px] sm:h-[140px]
      "
    >
      {/* ---------- IMAGE ---------- */}
      <div className="w-full sm:w-[160px] shrink-0">
        <img
          src={trip.image}
          alt={trip.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* ---------- CONTENT ---------- */}
      <div className="flex flex-col justify-between flex-1 p-3 min-w-0">

        {/* TOP CONTENT */}
        <div>
          {/* smaller title */}
          <h3 className="font-semibold text-sm text-gray-800 truncate">
            {trip.title}
          </h3>

          {/* smaller details */}
          <div className="text-xs text-gray-500 mt-1 space-y-0.5">
            <p className="truncate">🕒 {trip.duration}</p>
            <p className="truncate">📍 {trip.route}</p>
            <p className="truncate">📅 {trip.date}</p>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="flex items-center justify-between gap-2 mt-2">

          {/* PRICE — smaller */}
          <div className="bg-gray-100 rounded-full px-2 py-1 text-xs flex items-center">
            <span className="line-through text-gray-400 mr-1 whitespace-nowrap">
              ₹{trip.oldPrice}
            </span>

            <span className="font-semibold text-gray-800 whitespace-nowrap">
              ₹{trip.price}
            </span>

            <span className="text-[10px] text-gray-500 ml-1">
              Onwards
            </span>
          </div>

          {/* smaller button */}
          <button className="w-7 h-7 rounded-full bg-black text-white flex items-center justify-center shrink-0 text-sm">
            →
          </button>

        </div>
      </div>
    </div>
  );
}

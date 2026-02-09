import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { SiTripadvisor } from "react-icons/si";
import { AiFillStar } from "react-icons/ai";

export default function ReviewsBar() {
  return (
    <section className="bg-[#f4fbfc] py-6">
      <div className="max-w-5xl mx-auto flex items-center justify-center gap-16 flex-wrap">

        {/* Google */}
        <ReviewItem
          icon={<FaGoogle className="text-3xl" />}
          rating="4.9"
          reviews="14001 reviews"
        />

        {/* TripAdvisor */}
        <ReviewItem
          icon={<SiTripadvisor className="text-3xl text-green-600" />}
          rating="5.0"
          reviews="3850 reviews"
        />

        {/* Facebook */}
        <ReviewItem
          icon={<FaFacebookF className="text-3xl text-blue-600" />}
          rating="4.9"
          reviews="1031 reviews"
        />

      </div>
    </section>
  );
}

function ReviewItem({ icon, rating, reviews }) {
  return (
    <div className="flex items-center gap-3">

      {/* Platform Icon */}
      <div className="flex items-center justify-center w-10 h-10">
        {icon}
      </div>

      {/* Rating Text */}
      <div className="text-sm">
        <div className="flex items-center gap-1 font-semibold">
          <AiFillStar className="text-yellow-400" />
          {rating}
        </div>
        <div className="text-gray-600 text-xs">
          ({reviews})
        </div>
      </div>

    </div>
  );
}

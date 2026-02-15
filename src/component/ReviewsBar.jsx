import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { SiTripadvisor } from "react-icons/si";
import { AiFillStar } from "react-icons/ai";

export default function ReviewsBar() {
  return (
    <section className="bg-[#f4fbfc] py-4">
      <div className="max-w-md md:max-w-4xl mx-auto px-4">

        {/* 3 equal columns */}
        <div className="grid grid-cols-3 text-center items-center">

          <ReviewItem
            icon={<FaGoogle className="text-[28px] text-[#EA4335]" />}
            rating="4.9"
            reviews="14001"
          />

          <ReviewItem
            icon={<SiTripadvisor className="text-[28px] text-green-600" />}
            rating="5.0"
            reviews="3850"
          />

          <ReviewItem
            icon={<FaFacebookF className="text-[26px] text-blue-600" />}
            rating="4.9"
            reviews="1031"
          />

        </div>

      </div>
    </section>
  );
}

/* ================= ITEM ================= */

function ReviewItem({ icon, rating, reviews }) {
  return (
    <div className="flex flex-col items-center gap-1">

      {/* Star + rating */}
      <div className="flex items-center gap-1 text-sm font-semibold">
        <AiFillStar className="text-yellow-400 text-sm" />
        {rating}
      </div>

      {/* Icon */}
      <div>{icon}</div>

      {/* Reviews */}
      <div className="text-xs text-gray-600 whitespace-nowrap">
        ({reviews} reviews)
      </div>

    </div>
  );
}

  import React, { useState, useEffect } from "react";
  import { ChevronLeft, ChevronRight } from "lucide-react";
import EnquirySection from "./EnquirySection";

  /* ================= MAIN COMPONENT ================= */

  export default function LadakhPackages() {
    /* ================= RESPONSIVE CARDS ================= */
    const [cardsToShow, setCardsToShow] = useState(4);

    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth < 640) setCardsToShow(1);
        else if (window.innerWidth < 768) setCardsToShow(2);
        else if (window.innerWidth < 1024) setCardsToShow(3);
        else setCardsToShow(4);
      };

      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    /* ================= FILTER CHIPS ================= */

    const chips = [
      "Duration ▼",
      "Routes ▼",
      "Budget ▼",
      "Reset ↻",
      "⚡ Summer Sale",
      "Best-Selling",
      "Group Tour",
      "Family Tours",
    ];

    /* ================= DATA ================= */

    const createTours = (prefix) => [
      {
        title: `${prefix} - 6 Days Package`,
        price: "38,999",
        oldPrice: "43,999",
        duration: "5N/6D",
        route: "Leh - Leh",
        date: "Any date of your choice",
        places: ["Leh", "Nubra Valley", "Pangong"],
        more: 4,
        image: "/earlyBird/seasonTrip/kerala-trips-1.jpg",
      },
      {
        title: `${prefix} - Premium Tour`,
        price: "48,999",
        oldPrice: "52,999",
        duration: "6N/7D",
        route: "Leh - Leh",
        date: "Any date of your choice",
        places: ["Leh", "Sham Valley", "Khardung La"],
        more: 6,
        image: "/earlyBird/seasonTrip/kerala-trips-1.jpg",
      },
      {
        title: `${prefix} - Adventure Edition`,
        price: "36,999",
        oldPrice: "40,999",
        duration: "6N/7D",
        route: "Leh - Leh",
        date: "Any date of your choice",
        places: ["Leh", "Diskit", "Pangong"],
        more: 4,
        image: "/earlyBird/seasonTrip/kerala-trips-1.jpg",
      },
      {
        title: `${prefix} - Luxury Trip`,
        price: "1,27,999",
        oldPrice: "1,45,999",
        duration: "9N/10D",
        route: "Delhi - Srinagar",
        date: "Any date of your choice",
        places: ["Delhi", "Manali", "Sarchu"],
        more: 6,
        image: "/earlyBird/seasonTrip/kerala-trips-1.jpg",
      },
    ];

    const sections = [
      "Best-Selling Ladakh Tours",
      "Ladakh Group Trips - WanderOn Exclusive",
      "Iconic Ladakh Road Trips",
      "Top Family Trips to Ladakh",
      "Romantic Ladakh Tours for Couples",
      "Luxury Trips to Leh Ladakh",
      "Leh Ladakh Tour Package with Flights",
    ];

    return (
      <section className="relative max-w-5xl mx-auto px-4 py-12">
        {/* ================= INFO ================= */}
        <div className="bg-gray-100 rounded-xl p-6 mb-6">
          <h2 className="text-lg font-semibold mb-2">
            Explore the Best Leh Ladakh Tour Packages
          </h2>
          <p className="text-gray-600 text-sm">
            Discover curated Ladakh tours covering Pangong Lake,
            Nubra Valley and Khardung La.
          </p>
        </div>

        {/* ================= STICKY FILTER ================= */}
        <div className="sticky top-[56px] z-40 bg-white border-b py-4 mb-12 shadow-sm">
          <div className="flex gap-3 overflow-x-auto scrollbar-hide">
            {chips.map((chip, i) => (
              <button
                key={i}
                className="px-4 py-2 rounded-full text-sm border whitespace-nowrap bg-white"
              >
                {chip}
              </button>
            ))}
          </div>
        </div>

        {/* ================= SECTIONS ================= */}
        {sections.map((title, i) => (
        <React.Fragment key={i}>
          <SectionSlider
            title={title}
            tours={createTours(title)}
            cardsToShow={cardsToShow}
          />

          {/* Reviews after 2 sections */}
          {i === 1 && <ReviewsSection />}

          {/* ✅ ENQUIRY SECTION after "Top Family Trips to Ladakh" */}
          {title === "Top Family Trips to Ladakh" && <EnquirySection />}
        </React.Fragment>
      ))}
    </section>
  );
}

/* ================= ENQUIRY SECTION ================= */

<EnquirySection />
  /* ================= REVIEWS SECTION ================= */

function ReviewsSection() {
  return (
    <section className="py-20 bg-[#f4f4f4] mb-20">
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-6">
          <div className="h-[1px] w-32 bg-gray-400" />
          <h2 className="tracking-[4px] text-gray-600 text-sm font-semibold">
            UNFILTERED REVIEWS
          </h2>
          <div className="h-[1px] w-32 bg-gray-400" />
        </div>
      </div>

      <ReviewsSlider />
    </section>
  );
}

  /* ================= REVIEWS SLIDER ================= */

  function ReviewsSlider() {
  const [index, setIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsToShow(1);
      } else {
        setCardsToShow(2);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const reviews = [
    {
      text:
        "I recently went on a Leh-to-Leh trip with Turtuk, organized by WanderOn, and it turned out to be an unforgettable experience! Since it was my first community trip, I wasn’t quite sure what to expect — but it exceeded every expectation. Ladakh’s breathtaking landscapes were truly mesmerizing.",
      author: "Bhawna Raikwar",
      images: [
        "/earlyBird/seasonTrip/kerala-trips-1.jpg",
        "/earlyBird/seasonTrip/kerala-trips-1.jpg",
        "/earlyBird/seasonTrip/kerala-trips-1.jpg",
      ],
    },
    {
      text:
        "This was my second bike trip with WanderOn, and once again, it was an unforgettable experience! After witnessing breathtaking views and enjoying top-notch facilities on the 9-day Spiti circuit, we chose WanderOn again for our Leh-Ladakh adventure — and they did not disappoint.",
      author: "Kavya Jha",
      images: [
        "/earlyBird/seasonTrip/kerala-trips-1.jpg",
        "/earlyBird/seasonTrip/kerala-trips-1.jpg",
        "/earlyBird/seasonTrip/kerala-trips-1.jpg",
      ],
    },
    {
      text:
        "This was my second bike trip with WanderOn, and once again, it was an unforgettable experience! After witnessing breathtaking views and enjoying top-notch facilities on the 9-day Spiti circuit, we chose WanderOn again for our Leh-Ladakh adventure — and they did not disappoint.",
      author: "Kavya Jha",
      images: [
        "/earlyBird/seasonTrip/kerala-trips-1.jpg",
        "/earlyBird/seasonTrip/kerala-trips-1.jpg",
        "/earlyBird/seasonTrip/kerala-trips-1.jpg",
      ],
    },
    {
      text:
        "This was my second bike trip with WanderOn, and once again, it was an unforgettable experience! After witnessing breathtaking views and enjoying top-notch facilities on the 9-day Spiti circuit, we chose WanderOn again for our Leh-Ladakh adventure — and they did not disappoint.",
      author: "Kavya Jha",
      images: [
        "/earlyBird/seasonTrip/kerala-trips-1.jpg",
        "/earlyBird/seasonTrip/kerala-trips-1.jpg",
        "/earlyBird/seasonTrip/kerala-trips-1.jpg",
      ],
    },
    {
      text:
        "This was my second bike trip with WanderOn, and once again, it was an unforgettable experience! After witnessing breathtaking views and enjoying top-notch facilities on the 9-day Spiti circuit, we chose WanderOn again for our Leh-Ladakh adventure — and they did not disappoint.",
      author: "Kavya Jha",
      images: [
        "/earlyBird/seasonTrip/kerala-trips-1.jpg",
        "/earlyBird/seasonTrip/kerala-trips-1.jpg",
        "/earlyBird/seasonTrip/kerala-trips-1.jpg",
      ],
    },
    {
      text:
        "This was my second bike trip with WanderOn, and once again, it was an unforgettable experience! After witnessing breathtaking views and enjoying top-notch facilities on the 9-day Spiti circuit, we chose WanderOn again for our Leh-Ladakh adventure — and they did not disappoint.",
      author: "Kavya Jha",
      images: [
        "/earlyBird/seasonTrip/kerala-trips-1.jpg",
        "/earlyBird/seasonTrip/kerala-trips-1.jpg",
        "/earlyBird/seasonTrip/kerala-trips-1.jpg",
      ],
    },
    {
      text:
        "This was my second bike trip with WanderOn, and once again, it was an unforgettable experience! After witnessing breathtaking views and enjoying top-notch facilities on the 9-day Spiti circuit, we chose WanderOn again for our Leh-Ladakh adventure — and they did not disappoint.",
      author: "Kavya Jha",
      images: [
        "/earlyBird/seasonTrip/kerala-trips-1.jpg",
        "/earlyBird/seasonTrip/kerala-trips-1.jpg",
        "/earlyBird/seasonTrip/kerala-trips-1.jpg",
      ],
    },
    {
      text:
        "This was my second bike trip with WanderOn, and once again, it was an unforgettable experience! After witnessing breathtaking views and enjoying top-notch facilities on the 9-day Spiti circuit, we chose WanderOn again for our Leh-Ladakh adventure — and they did not disappoint.",
      author: "Kavya Jha",
      images: [
        "/earlyBird/seasonTrip/kerala-trips-1.jpg",
        "/earlyBird/seasonTrip/kerala-trips-1.jpg",
        "/earlyBird/seasonTrip/kerala-trips-1.jpg",
      ],
    },
  ];

  const maxIndex = Math.max(0, reviews.length - cardsToShow);

  return (
    <div className="relative max-w-6xl mx-auto px-4">

      {/* LEFT ARROW */}
      <button
        onClick={() => setIndex((p) => Math.max(p - 1, 0))}
        className="absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-gray-400 flex items-center justify-center bg-white z-10"
      >
        <ChevronLeft />
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={() => setIndex((p) => Math.min(p + 1, maxIndex))}
        className="absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-gray-400 flex items-center justify-center bg-white z-10"
      >
        <ChevronRight />
      </button>

      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${index * (100 / cardsToShow)}%)`,
          }}
        >
          {reviews.map((review, i) => (
            <div
              key={i}
              className="flex-shrink-0 px-10"
              style={{ width: `${100 / cardsToShow}%` }}
            >
              <ReviewCard review={review} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
  /* ================= SECTION SLIDER ================= */

  function SectionSlider({ title, tours, cardsToShow }) {
    const [index, setIndex] = useState(0);
    const maxIndex = Math.max(0, tours.length - cardsToShow);

    return (
      <>
        <h2 className="text-2xl font-bold text-[#0a6c74] mb-6 mt-14">
          {title}
        </h2>

        <div className="relative mb-12">
          <SliderControls
            onPrev={() => setIndex((p) => Math.max(p - 1, 0))}
            onNext={() => setIndex((p) => Math.min(p + 1, maxIndex))}
          />

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{
                transform: `translateX(-${index * (100 / cardsToShow)}%)`,
              }}
            >
              {tours.map((item, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 px-3"
                  style={{ width: `${100 / cardsToShow}%` }}
                >
                  <Card item={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }

  /* ================= SLIDER BUTTONS ================= */

  function SliderControls({ onPrev, onNext }) {
    return (
      <>
        <button
          onClick={onPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-white shadow rounded-full flex items-center justify-center z-10"
        >
          <ChevronLeft />
        </button>

        <button
          onClick={onNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-10 h-10 bg-white shadow rounded-full flex items-center justify-center z-10"
        >
          <ChevronRight />
        </button>
      </>
    );
  }

  /* ================= TOUR CARD ================= */

  function Card({ item }) {
    return (
      <div className="rounded-2xl overflow-hidden shadow-md relative h-[360px]">
        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />

        <div className="absolute top-3 left-3 bg-yellow-300 text-black px-4 py-1 rounded-full text-xs font-semibold">
          <span className="line-through mr-2 text-gray-700">
            ₹{item.oldPrice}
          </span>
          ₹{item.price}/- onwards
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

        <div className="absolute bottom-0 p-4 text-white w-full">
          <h3 className="text-sm font-semibold mb-3 line-clamp-2">
            {item.title}
          </h3>

          <div className="text-xs flex gap-2 flex-wrap mb-3">
            {item.places.map((place, i) => (
              <span key={i} className="bg-white/20 px-2 py-1 rounded">
                {place}
              </span>
            ))}
            <span className="text-yellow-400 font-medium">
              +{item.more} More
            </span>
          </div>

          <div className="flex justify-between text-xs mb-2">
            <span>⏱ {item.duration}</span>
            <span>📍 {item.route}</span>
          </div>

          <div className="text-xs text-gray-200">
            📅 {item.date}
          </div>
        </div>
      </div>
    );
  }

  /* ================= REVIEW CARD ================= */

  function ReviewCard({ review }) {
  return (
    <div className="bg-[#f4f4f4] max-w-[420px] mx-auto">

      {/* IMAGE STACK (SMALLER) */}
      <div className="relative h-[220px] mb-6">

        {/* LEFT IMAGE */}
        <div className="absolute left-0 top-0 w-[120px] h-[150px] rotate-[-6deg] shadow-md border-4 border-white overflow-hidden">
          <img
            src={review.images[0]}
            className="w-full h-full object-cover"
          />
        </div>

        {/* CENTER IMAGE */}
        <div className="absolute left-16 top-8 w-[140px] h-[180px] shadow-lg border-4 border-white overflow-hidden z-10">
          <img
            src={review.images[1]}
            className="w-full h-full object-cover"
          />

          {/* yellow tape */}
          <div className="absolute -top-3 left-10 w-24 h-5 bg-yellow-300 rotate-[-25deg]" />
        </div>
      </div>

      {/* TEXT (SMALLER SPACING) */}
      <p className="text-gray-700 text-xs leading-relaxed mb-3">
        "{review.text}"
      </p>

      <div className="font-semibold text-sm mb-2 hover:underline cursor-pointer">
        continue reading ...
      </div>

      <div className="text-right text-[#0a6c74] font-medium text-xs">
        {review.author}
      </div>
    </div>
  );
}
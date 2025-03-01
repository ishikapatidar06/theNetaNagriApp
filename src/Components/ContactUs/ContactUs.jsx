import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { useState } from "react";
import google from "../../assets/google_play.webp";
import appStore from "../../assets/app_store.webp";
import { RxCrossCircled } from "react-icons/rx";
const pricingList = [
  {
    planTitle: "Trial",
    price: "₹49",
    timeline: "/5 Days",
    features: [
      { isActive: true, label: "Free 1 Custom Footer Frame" },
      { isActive: true, label: "5 Posts (Max 1 Post Per Day)" },
      { isActive: true, label: "Ad Free" },
    ],
    isActive: false,
  },
  {
    planTitle: "Silver",
    price: "₹499",
    timeline: "/31 Days",
    features: [
      { isActive: true, label: "Free 1 Custom Footer Frame" },
      { isActive: true, label: "35 Posts (Max 2 Post Per Day)" },
      { isActive: true, label: "Ad Free" },
    ],
    isActive: false,
  },
  {
    planTitle: "Gold",
    price: "₹2499",
    timeline: "/186 Days",
    features: [
      { isActive: true, label: "Free 1 Custom Footer Frame" },
      { isActive: true, label: "45 Posts (Max 2 Post Per Day)" },
      { isActive: true, label: "Ad Free" },
    ],
    isActive: false,
  },
  {
    planTitle: "Diamond",
    price: "₹3999",
    timeline: "/365 Days",
    features: [
      { isActive: true, label: "Free 1 Custom Footer Frame" },
      { isActive: true, label: "60 Posts (Unlimited)" },
      { isActive: true, label: "Ad Free" },
    ],
    isActive: false,
  },
];

export const PricingItem = ({ pricing }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  if (!pricing) {
    return null;
  }

  const { planTitle, price, timeline, description, features, isActive } =
    pricing;

  return (
    <div className=" border-2 border-[#7f2e50]/[.2] bg-pink-100 text-zinc-900 dark:bg-[#101D2C] dark:text-white rounded-2xl shadow p-4 lg:p-12 h-full">
      <h3 className="text-2xl font-bold mb-1">{planTitle}</h3>
      <div className="mb-1">
        <span
          className={`text-2xl font-bold ${isActive ? "text-[#7f2e50]" : ""}`}
        >
          {price}
        </span>
        <span className={`ml-1 text-sm ${isActive ? "text-[#7f2e50]" : ""}`}>
          {timeline}
        </span>
      </div>
      <p className="opacity-50 mb-2">{description}</p>
      <ul className="flex flex-col">
        {features.map((item, i) => (
          <li className="mb-2" key={i}>
            <FontAwesomeIcon
              icon={faCheckCircle}
              className={`${
                item.isActive ? "text-[#7f2e50]" : "opacity-50"
              } mr-2`}
            />
            <span className={item.isActive ? "opacity-100" : "opacity-50"}>
              {item.label}
            </span>
          </li>
        ))}
      </ul>

      <div>
        {/* Choose Plan Button */}
        <button
          className={`${
            isPopupOpen
              ? "bg-[#7f2e50] text-white"
              : " rounded-xl border-2 border-[#7f2e50]/[.4] hover:text-white dark:bg-[#7f2e50] dark:bg-opacity-20 dark:hover:bg-opacity-100 bg-white"
          } hover:bg-[#7f2e50] py-2 px-7 rounded-md duration-300 w-full mt-3`}
          onClick={() => setIsPopupOpen(true)}
        >
          Choose plan
        </button>

        {/* Popup Modal */}
        {isPopupOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-lg ">
              <RxCrossCircled
                size={30}
                onClick={() => {
                  setIsPopupOpen(false);
                }}
              />

              <div className="flex flex-col items-center justify-center text-center ">
                <div className="text-2xl px-2  text-black font-bold py-3">
                  Download the App Now !!
                </div>
                <div className="md:flex gap-4 mt-2">
                  <div
                    className=" mb-2 md:mb-0 self-center"
                    onClick={() => {
                      // Handle confirm action
                      setIsPopupOpen(false);
                    }}
                  >
                    <a
                      href="https://play.google.com/store/apps/details?id=com.app.thenetanagri"
                      target="_blank"
                    >
                      <img
                        src={google}
                        alt="play Store"
                        className="rounded-lg w-[200px]"
                      />
                    </a>
                  </div>
                  <div className=" self-center">
                    <a
                      href="https://apps.apple.com/in/app/the-netanagri-poster-maker/id6581488660"
                      target="_blank"
                    >
                      <img
                        src={appStore}
                        alt="app Store"
                        className="rounded-xl w-[200px]"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

PricingItem.propTypes = {
  pricing: PropTypes.shape({
    planTitle: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    timeline: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(
      PropTypes.shape({
        isActive: PropTypes.bool.isRequired,
        label: PropTypes.string.isRequired,
      })
    ).isRequired,
    isActive: PropTypes.bool.isRequired,
  }).isRequired,
};

const Pricing7 = () => {
  return (
    <section className=" ezy__pricing7 light py-4 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white relative z-[1] ">
      <div className="container px-4 ">
        <div className="grid grid-cols-12 mb-6">
          <div className="col-span-12 lg:col-span-6 lg:col-start-4 xl:px-32 text-center">
            <h2 className="text-[#7f2e50] text-3xl font-bold leading-none md:text-[45px] mb-4">
              Flexible Plan for you
            </h2>
            <p>Choose suitable plan for you.</p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-2 mt-9">
          {pricingList.map((pricing, i) => (
            <div className="col-span-6 md:col-span-6 xl:col-span-3 " key={i}>
              <PricingItem pricing={pricing} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing7;

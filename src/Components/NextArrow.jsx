import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const NextArrow = ({ onClick }) => {
  return (
    <button
      className="p-4 sm:p-2 xm:p-2 rounded-full border cursor-pointer text-[#A8A196] border-[#A8A196]
       text-opacity-50 hover:text-opacity-85 lg:absolute lg:-right-28 lg:top-[35%] lg:mr-4 md:ml-[45%]
        md:mt-12 sm:ml-[45%] sm:mt-14  xm:ml-[45%] xm:mt-12 hover:scale-110 transition-transform"
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faArrowRight} className="xl:h-10 lg:h-10 md:h-8 sm:h-6 xm:h-6 px-3 py-2" />
    </button>
  );
};

export default NextArrow;

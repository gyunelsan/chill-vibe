import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PevArrow = ({onClick }) => {
  return (
    <button
      className="p-4 sm:p-2 xm:p-2 rounded-full border cursor-pointer text-[#A8A196] text-opacity-70 hover:text-opacity-95
       border-[#A8A196] lg:absolute lg:-ml-24 lg:top-[45%] md:mb-12 md:ml-[45%] sm:ml-[45%] sm:mb-12 xm:ml-[45%] xm:mb-12
       hover:scale-110 transition-transform"
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faArrowLeft} className="xl:h-10 lg:h-10 md:h-8 sm:h-6 xm:h-6 px-3 py-2"/>
    </button>
  );
};

export default PevArrow;

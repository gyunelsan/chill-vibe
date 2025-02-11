import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Comments = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow:1,
        slidesToScroll: 1,
    }

    const comments = [
        {
            bigText:"“Effortlessly stylish, just like you.",
            smallText : "Effortless style"
        },

        {
            bigText:"“Casual never looked this good!",
            smallText : "Casual, but chic."
        },

        {
            bigText:"“Wear comfort, own confidence.",
            smallText : "Confidence in comfort."
        },

        {
            bigText:"Your style, your vibe, your rules.",
            smallText : "Your vibe, your way."
        }
    ];
  return (
    <div className="bg-main-light-grey w-full font-serif py-16">
        <h1 className="font-semibold text-center text-3xl w-full" style={{color: " rgb(121, 21, 21)"}}>Because Style Speaks</h1>

        <div className="py-12 w-full">
            <Slider className="w-[100%] mx-auto" {...settings}>
                {
                    comments.map((comment , index) =>(
                        <ul key={index}>
                            <li>
                                <blockquote className="lg:w-1/2 xl:w-1/2 md:w-2/3 mx-auto lg:text-5xl md:text-3xl sm:text-3xl xm:text-2xl
                                 font-semibold text-main-medium-grey font-serif text-center leading-[3.8rem]">
                                    {comment.bigText}
                                </blockquote>
                                <p className="text-center text-2xl text-main-medium-grey mt-4">
                                    {comment.smallText}
                                </p>
                            </li>
                        </ul>
                    ))
                }
            </Slider>
        </div>
    </div>
  )
}

export default Comments

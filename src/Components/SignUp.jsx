import image1 from '../assets/images/IMG1.jpg'
import image2 from '../assets/images/IMG2.jpg'
import image3 from '../assets/images/IMG3.jpg'
import image4 from '../assets/images/IMG4.jpg'
import image5 from '../assets/images/IMG5.jpg'
import image6 from '../assets/images/IMG6.jpg'
const SignUp = () => {
  return (
    <div className="bg-main-light-grey pt-24 bg-cover bg-no-repeat bg-signUpImage bg-center" >
        <h1 className="font-sans text-5xl font-normal text-center uppercase">signUp for our newsletter</h1>
        <form  className="text-center pt-12">
            <input type="text" placeholder="Your Email Adress" className="rounded-xl border-2 border-main-medium-grey
            lg:w-[60%] xl:w-[60%] py-3 px-4 outline-none xl:text-4xl lg:text-4xl md:text-2xl sm:text-2xl xm:text-xl mb-3"/><br />
            <button className="w-[60%] md:w-[30%] sm:w-[30%] bg-strong-grey text-white rounded-sm text-3xl py-2">SIGN UP</button>
        </form>

        <div className="flex flex-wrap w-full mt-24 z-0 ">
            <img src={image1} alt="img1" className='md:w-1/6 lg:w-1/6 xl:w-1/6 w-1/3' />
            <img src={image2} alt="img2" className='md:w-1/6 lg:w-1/6 xl:w-1/6 w-1/3' />
            <img src={image3} alt="img3" className='md:w-1/6 lg:w-1/6 xl:w-1/6 w-1/3' />
            <img src={image4} alt="img4" className='md:w-1/6 lg:w-1/6 xl:w-1/6 w-1/3' />
            <img src={image5} alt="img5" className='md:w-1/6 lg:w-1/6 xl:w-1/6 w-1/3' />
            <img src={image6} alt="img6" className='md:w-1/6 lg:w-1/6 xl:w-1/6 w-1/3' />
        </div>

      
    </div>
  )
}

export default SignUp

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faPinterest } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

const Contacts = () => {
  return (
    <div className="flex w-[90%] mx-auto gap-5 flex-col flex-wrap md:flex-row lg:flex-row xl:flex-row mt-24 mb-16 xm:gap-16 sm:gap-16">
        {/* col1 */}
        <div className='md:w-[23%] lg:w-[23%] xl:w-[23%] w-[70%] mx-auto'>
            <h1 className='text-4xl mb-5'>ChillVibe</h1>
            <p className='text-main-medium-grey text-xl'>Effortless Casual Fashion.
            Have questions or need help? We're here for you! Contact us anytime and let’s make your style even better.
            </p>
            <div className='mt-5'>
                <FontAwesomeIcon icon={faFacebook} className='w-1/5 h-[30px]' color='grey'/>
                <FontAwesomeIcon icon={faTwitter} className='w-1/5 h-[30px]' color='grey'/>
                <FontAwesomeIcon icon={faYoutube} className='w-1/5 h-[30px]' color='grey'/>
                <FontAwesomeIcon icon={faPinterest} className='w-1/5 h-[30px]' color='grey'/>
                <FontAwesomeIcon icon={faInstagram} className='w-1/5 h-[30px]' color='grey'/>
           

            </div>
        </div>

        {/* col2 */}
        <div className='md:w-[23%] lg:w-[23%] xl:w-[23%] w-[70%] mx-auto flex flex-col items-center gap-0 leading-4'>
            <h1 className='uppercase mb-8 text-3xl'>quick links</h1>
            <a href="#" className='hover:underline'>HOME</a><br />
            <a href="#" className='hover:underline'>ABOUT</a><br />
            <a href="#" className='hover:underline'>SERVICES</a><br />
            <a href="#" className='hover:underline'>SINGLE ITEM</a><br />
            <a href="#" className='hover:underline'>CONTACT</a><br />
        </div>


        {/* col3 */}
        <div className='uppercase md:w-[23%] lg:w-[23%] xl:w-[23%] w-[70%] flex flex-col items-center gap-0 mx-auto leading-6'>
            <h1 className='uppercase text-3xl'>help and info</h1>
            <a href="#" className='hover:underline'>track your order</a><br />
            <a href="#" className='hover:underline'>returns+exchanges</a><br />
            <a href="#" className='hover:underline'>shipping+delivery</a><br />
            <a href="#" className='hover:underline'>contact us</a>
            <a href="#" className='hover:underline'>faqs</a>
        </div>


        {/* col4 */}
        <div className='md:w-[23%] lg:w-[23%] xl:w-[23%] w-[70%] mx-auto flex flex-col items-center gap-0 leading-10'>
            <h1 className='uppercase text-3xl'>Contact us</h1>
            <a href="contact@yourcompany.com" className='hover:underline'>support@chilevibe.com</a>
            <p className='text-main-medium-grey xm:text-center sm:text-center'>Do you need Support? Give us a call</p>
            <a href="#" className='hover:underline'>+1 710 16 58 88</a>
        </div>
    </div>
  )
}

export default Contacts

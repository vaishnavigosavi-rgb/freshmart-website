import React from 'react'
import Grocery from '../../assets/grocery.png'
import Button from '../Button/Button'

const Hero = () => {
    return (
        <section>
            <div className='min-h-screen max-w-[1400px] mx-auto px-10 flex md:flex-row flex-col items-center md:pt-25 pt-35'>
                  
                  {/* Hero Content   ctl + / comment */}
                  <div className='flex-1'>
                   <span className='bg-green-100 text-green-500 text-lg px-5 py-2 rounded-full'>100% Organic. Zero Compromise.</span>
                    <h1 className='md:text-6xl/20 text-6xl/20 font-bold mt-4'>
                        Pure <span className='text-green-700'>Fruits</span> & <span className='text-green-700'>Veggies</span> <br />From the Farm. <br />  Fresh to Your Basket.</h1>
                    <p className='text-zinc-600 md:text-lg text-md max-w-[530px] mt-5 mb-10'>
                        Handpicked organic produce, grown without chemicals - delivered fresh to your city every day.
                    </p>
                    <Button  content="Shop Now"/>
                  </div>

                  {/* hero image */}
                <div className='flex-1'>
                    <img src={Grocery} alt="Hero Image" />
                </div>
                
            </div>
        </section>
    )
}

export default Hero
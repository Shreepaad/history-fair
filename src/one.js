import logo from './logo.svg';
// import './App.css';
import bgImage from './bg.png';

function One() {
  return (
    <div className='bg-[black] h-[screen] font-orpheus'>
                <div style={{height:"60px", width:"100%", backgroundColor:"black", borderBottom: "1px solid #B3B3B3"}}>
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 ">
            <div className="flex justify-between items-center h-[60px] text-[2vw] sm:text-[10px] lg:text-[15px] pl-[10vw] pr-[10vw]">
            <a href="/" className="text-[white] font-futura" style={{fontWeight:400}}>HOME</a>
            <a href="/prior" className="text-[white] font-futura">PRIOR TECHNOLOGIES</a>
            <a href="/development" className="text-[white] font-futura">DEVELOPMENT</a>
            <a href="/short-term" className="text-[white] font-futura">SHORT-TERM EFFECTS</a>
            <a href="/legacy" className="text-[white] font-futura">LEGACY</a>
            </div>
            </div>
                </div>
                                    <div style={{display:"flex", justifyContent: "center"}}>
                    <h1 className='text-white font-futura text-[min(3.3vw,15px)] sm:text-[15px] lg:text-[20px] pt-[2vw] pb-[5vw]' style={{fontWeight:1000}}>PRIOR TECHNOLOGIES</h1>
                    </div>
                <div style={{gridTemplateColumns:"30% 60%"}} className='grid grid-cols-2 w-[100%] pr-[10vw] pl-[10vw] gap-[10vw]'>
                <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src='radio.webp'></img>
    </div>
                    <div>
                    <h1 className='text-white sm:text-[40px] lg:text-[60px] text-[min(8vw,40px)]'>Radio
</h1>
                <p className='text-[#FFFFFFB3] text-[min(3.3vw,15px)] sm:text-[15px] lg:text-[20px]'>Following the discovery of the phenomenon of radio waves, Italian inventor Guglielmo Marconi began creating a new wireless communication and transmitted the first message to cross the Atlantic from North America in 1902 which proved the practicality of long-distance wireless communication. During World War I, radio was used heavily by the military for communication and the 1920s Radio Boom saw the rapid growth of radio as means of mass communication with radio networks like NBC and CBS. The 1930s-1940s are considered the golden age of radio due to the widespread ownership of radio and the variety of programming, including news, dramas, comedies, and live music.

                </p>
                </div>
                </div>
              <img
                src="arrow.png"
                className="w-[40vw] translate-x-[20vw] h-[10vw] mt-[3vw] mb-[3vw]"
              />
              <div style={{gridTemplateColumns:"60% 30%"}} className='grid grid-cols-2 w-[100%] pr-[10vw] pl-[10vw] gap-[10vw]'>
                    <div>
                    <h1 className='text-white sm:text-[40px] lg:text-[60px] text-[min(8vw,40px)]'>Telephone
</h1>
                <p className='text-[#FFFFFFB3] text-[min(3.3vw,15px)] sm:text-[15px] lg:text-[20px]'>In 1877, Thomas Edison created the carbon microphone which enhanced the sound clarity and amplification and allowed for more efficient conversion of sound waves into electrical signals. The first commercial telephone exchange in 1878 with switching functions enabled multiple subscribers to connect through a single exchange. The invention of long-distance telephone lines in 1881 made telecommunication more reliable and accessible. In the early 20th century, the telephone saw significant advancements with the introduction of Bell's model 102 telephone, featuring a unified transmitter and receiver in a molded plastic handle. The expansion of the telephone network led to the integration of bells and induction coils into the telephone base, simplifying design and enhancing convenience. Additionally, the inauguration of the TAT-1 cable in 1956 and the first cellular-phone call in 1973 marked important events in the globalization and miniaturization of telecommunications technology.
                </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src='telephone.png'></img>
    </div>
                </div>


                <img
                src="arrow.png"
                className="w-[40vw] h-[10vw] mt-[3vw] mb-[3vw] ml-[30%]" style={{transform:"scaleX(-1)"}}
              />

<div className='pr-[10vw] pl-[10vw] mt-[5vw]'>

                
<ol class="relative border-s border-[#b3b3b3]">                  
    <li class="mb-5 ms-4">
        <div class="absolute w-3 h-3 bg-[#b3b3b3] rounded-full mt-1.5 -start-1.5 border border-[#b3b3b3]"></div>
        <time class="mb-1 text-sm font-futura leading-none text-gray-400 dark:text-gray-500">1983</time>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">DynaTAC 8000x</h3>
        <p class="mb-2 text-base font-normal text-[#b3b3b3]">DynaTAC 8000x, also known as the brick, was invented in 1983, it weighed 1.75 lbs, took 10 hours to charge and only gave 30 minutes of talk time. Additionally, the usage was limited as it could only remember 30 phone numbers and cost 4,000 dollars. However, this was a step in the right direction as this was the first cellular device which did not require a constant supply of energy from something like a car engine.</p>
        {/* <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg class="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
  </svg></a> */}
    </li>
    <li class="mb-5 ms-4">
        <div class="absolute w-3 h-3 bg-[#b3b3b3] rounded-full -start-1.5 border border-[#b3b3b3]"></div>
        <time class="mb-1 text-sm font-futura leading-none text-gray-400 dark:text-gray-500">1989</time>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">MicroTAC 9800x</h3>
        <p class="mb-2 text-base font-normal text-[#b3b3b3]">MicroTAC 9800x made in 1989 was a significant improvement from the previous models as it only weighs 12.3 ounces and was small enough to fit into a shirt pocket. Still quite limited in the usage the MicroTAC continued the progress of its predecessor as it continued to shrink and become more available to the public.</p>
        {/* <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg class="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
  </svg></a> */}
    </li>
    <li class="mb-5 ms-4">
        <div class="absolute w-3 h-3 bg-[#b3b3b3] rounded-full mt-1.5 -start-1.5 border border-[#b3b3b3]"></div>
        <time class="mb-1 text-sm font-futura leading-none text-gray-400 dark:text-gray-500">1992</time>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Nokia Model 1011</h3>
        <p class="mb-2 text-base font-normal text-[#b3b3b3]">Nokia model 1011 was the first phone not produced by Motorola, marking the beginning of the opening of the market. With dimensions of 195 by 60 by 45 mm it was known as the candy bar phone which also introduced the ability to send SMS messages, only adding to the usages of a phone.</p>
        {/* <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg class="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
  </svg></a> */}
    </li>
    <li class="mb-5 ms-4">
        <div class="absolute w-3 h-3 bg-[#b3b3b3] rounded-full mt-1.5 -start-1.5 border border-[#b3b3b3]"></div>
        <time class="mb-1 text-sm font-futura leading-none text-gray-400 dark:text-gray-500">1992</time>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">IBM's Simon</h3>
        <p class="mb-2 text-base font-normal text-[#b3b3b3]">IBM's Simon, introduced the now essential touch screen to phones, making it the first “smartphone”. It also introduced a new feature as applications such as an address book, calendar and calculator among others which weren’t available to the public. However, this wasn’t enough to become a dominant contender in the cell phone market as it still lacked some functionality.</p>
        {/* <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg class="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
  </svg></a> */}
    </li>
    <li class="mb-5 ms-4">
        <div class="absolute w-3 h-3 bg-[#b3b3b3] rounded-full mt-1.5 -start-1.5 border border-[#b3b3b3]"></div>
        <time class="mb-1 text-sm font-futura leading-none text-gray-400 dark:text-gray-500">1996</time>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Motorola's StarTAC</h3>
        <p class="mb-2 text-base font-normal text-[#b3b3b3]">Motorola’s StarTAC, the predecessor of the MicroTAC was 3.1 oz and advertised as a “wearable” phone. It introduced many new features like the vibrate function. It was the first flip phone and due to its small size and lightweight became popular among consumers for multiple years.</p>
        {/* <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg class="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
  </svg></a> */}
    </li>
    <li class="mb-5 ms-4">
        <div class="absolute w-3 h-3 bg-[#b3b3b3] rounded-full mt-1.5 -start-1.5 border border-[#b3b3b3]"></div>
        <time class="mb-1 text-sm font-futura leading-none text-gray-400 dark:text-gray-500">2007</time>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Apple & Android</h3>
        <p class="mb-2 text-base font-normal text-[#b3b3b3]">The two tech giants we think of today, Apple and Android, didn’t join the cell phone market until 2007, over two decades after the first cell phone was introduced. Both these companies are tech giants, which continue to control the market today, had different views on where the development of phones would go. Apple focused on adding features, like iTunes and iMessages, while Android focused on allowing its users to create as much as they wanted.</p>
        {/* <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg class="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
  </svg></a> */}
    </li>
</ol>




</div>


                 <div className="grid grid-cols-2 w-[100%]">
                        <button onClick={() => window.location.href = '/'} className="text-[white] mt-[5vw] mb-[4vw] text-[1.25vw] bg-[black] font-futura text-[2vw] sm:text-[10px] lg:text-[15px] text-left ml-[8vw]">← HOME</button>
                        <button onClick={() => window.location.href = '/development'} className="text-[white] mt-[5vw] mb-[4vw] text-[1.25vw] bg-[black] text-right mr-[8vw] font-futura text-[2vw] sm:text-[10px] lg:text-[15px]">PRIOR TECHNOLOGIES →</button>
                        </div>
    </div>
  );
}

export default One;

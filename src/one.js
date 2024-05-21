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
                <p className='text-[#FFFFFFB3] text-[min(3.3vw,15px)] sm:text-[15px] lg:text-[20px]'>In response to the limitations of landline communication, the invention of the mobile cell phone in 1983 revolutionized connectivity, enabling instantaneous remote communication across industries and sectors. It facilitated seamless interactions, transforming business operations and enhancing law enforcement's information gathering. Simultaneously, it sparked a new era of personal connectivity, allowing new interactions, reducing costs, and saving time, ultimately contributing to a more interconnected world.
                </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src='telephone.png'></img>
    </div>
                </div>


<div className='pr-[10vw] pl-[10vw] mt-[10vw]'>

                <ol class="items-center sm:flex">
    <li class="relative mb-6 sm:mb-0">
        <div class="flex items-center">
            <div class="z-10 flex items-center justify-center w-6 h-6 bg-[#b3b3b3] rounded-full shrink-0">
            </div>
            <div class="hidden sm:flex w-full h-0.5 bg-[white]"></div>
        </div>
        <div class="mt-3 sm:pe-8">
            <h3 class="text-[min(3.3vw,15px)] sm:text-[15px] lg:text-[20px] font-semibold text-gray-900 dark:text-white">Flowbite Library v1.0.0</h3>
            <time class="block mb-2 text-sm font-futura leading-none text-gray-400 dark:text-gray-500">Released on December 2, 2021</time>
            <p class="text-base font-normal text-[#b3b3b3]">Get started with dozens of web components and interactive elements.</p>
        </div>
    </li>
    <li class="relative mb-6 sm:mb-0">
        <div class="flex items-center">
            <div class="z-10 flex items-center justify-center w-6 h-6 bg-[#b3b3b3] rounded-full shrink-0">
            </div>
            <div class="hidden sm:flex w-full h-0.5 bg-[white]"></div>
        </div>
        <div class="mt-3 sm:pe-8">
            <h3 class="text-[min(3.3vw,15px)] sm:text-[15px] lg:text-[20px] font-semibold text-gray-900 dark:text-white">Flowbite Library v1.2.0</h3>
            <time class="block mb-2 text-sm font-futura leading-none text-gray-400 dark:text-gray-500">Released on December 23, 2021</time>
            <p class="text-base font-normal text-[#b3b3b3]">Get started with dozens of web components and interactive elements.</p>
        </div>
    </li>
    <li class="relative mb-6 sm:mb-0">
        <div class="flex items-center">
            <div class="z-10 flex items-center justify-center w-6 h-6 bg-[#b3b3b3] rounded-full shrink-0">
            </div>
            <div class="hidden sm:flex w-full h-0.5 bg-[white]"></div>
        </div>
        <div class="mt-3 sm:pe-8">
            <h3 class="text-[min(3.3vw,15px)] sm:text-[15px] lg:text-[20px] font-semibold text-gray-900 dark:text-white">Flowbite Library v1.3.0</h3>
            <time class="block mb-2 text-sm font-futura leading-none text-gray-400 dark:text-gray-500">Released on January 5, 2022</time>
            <p class="text-base font-normal text-[#b3b3b3]">Get started with dozens of web components and interactive elements.</p>
        </div>
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

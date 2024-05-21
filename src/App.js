import logo from './logo.svg';
// import './App.css';
// import bgImage from './bg.png';
import { useEffect, useState } from 'react';

function App() {

  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    const checkOverflow = () => {
      const doc = document.documentElement;
      const hasVerticalScroll = doc.scrollHeight > doc.clientHeight;
      const hasHorizontalScroll = doc.scrollWidth > doc.clientWidth;
      setIsOverflowing(hasVerticalScroll || hasHorizontalScroll);
      console.log()
    };
    checkOverflow();

    window.addEventListener('resize', checkOverflow);
    return () => {
      window.removeEventListener('resize', checkOverflow);
    };

}, []);


  return (
    <div>

        <div className='bg-[black] h-[screen] font-orpheus'>
              <div style={{height:"60px", width:"100%", backgroundColor:"black", borderBottom: "1px solid #B3B3B3"}}>
              <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 ">
        <div className="flex justify-between items-center h-[60px] text-[2vw] sm:text-[10px] lg:text-[15px] sm:pl-[10vw] sm:pr-[10vw] pr-[2vw] pl-[2vw]">
          <a href="/" className="text-[white] font-futura" style={{fontWeight:400}}>HOME</a>
          <a href="/prior" className="text-[white] font-futura">PRIOR TECHNOLOGIES</a>
          <a href="/development" className="text-[white] font-futura">DEVELOPMENT</a>
          <a href="/short-term" className="text-[white] font-futura">SHORT-TERM EFFECTS</a>
          <a href="/legacy" className="text-[white] font-futura">LEGACY</a>
          <a href='https://docs.google.com/document/d/18kxeN3GyDqI-WndIOAV1FvfXbefhKKFjMHSv-Z-eVZM/edit?usp=sharing'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-card-text" viewBox="0 0 16 16">
  <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z"/>
  <path d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8m0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5"/>
</svg>
</a>
        </div>
      </div>

              </div>
              <div style={{backgroundImage:"url('./bg.png')", height:"calc(100vh - 60px)", backgroundSize:"cover", backgroundRepeat:"no-repeat", backgroundPosition:"40%"}}>
                <div  className = "xl:pt-[20vh] pt-[5vh]" style={{paddingRight:"8vw"}}>
                <h1 className='text-white sm:text-[40px] lg:text-[60px] text-[min(8vw,40px)] pl-[50%]'>The invention of the mobile cell phone
</h1>
                <p className='text-[#FFFFFFB3] text-[min(3.3vw,15px)] sm:text-[15px] lg:text-[20px] pl-[50%]'>In response to the limitations of landline communication, the invention of the mobile cell phone in 1983 revolutionized connectivity, enabling instantaneous remote communication across industries and sectors. It facilitated seamless interactions, transforming business operations and enhancing law enforcement's information gathering. Simultaneously, it sparked a new era of personal connectivity, allowing new interactions, reducing costs, and saving time, ultimately contributing to a more interconnected world.
                </p>
                </div>
                <button style={{bottom: isOverflowing ? "" : "0px", paddingBottom: isOverflowing ? "3vw" : "", paddingTop: isOverflowing ? "5vw" : ""}} onClick={() => window.location.href = '/prior'} className='absolute text-white right-0 mr-[8vw] mb-[4vw] font-futura text-[2vw] sm:text-[10px] lg:text-[15px]'>PRIOR TECHNOLOGIES →</button>
              </div>
              {/* <div className="grid grid-cols-2 w-[100%]">
                        <div className="justify-center text-[white] pt-[1vw] pb-[3vw] text-[1.25vw] bg-[black] pl-[5vw]"></div>
                        <div className="justify-center text-[white] pt-[1vw] pb-[3vw] text-[1.25vw] bg-[black] text-right pr-[5vw]">PRIOR TECHNOLOGIES</div>
                        </div> */}
        </div>
    </div>
  );
}

export default App;

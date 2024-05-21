import { useEffect, useState } from 'react';

function Three() {


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
                <div style={{display:"flex", justifyContent: "center"}}>
                    <h1 className='text-white font-futura text-[min(3.3vw,15px)] sm:text-[15px] lg:text-[20px] pt-[2vw] pb-[3vw]' style={{fontWeight:1000}}>SHORT-TERM EFFECTS</h1>
                    </div>
                <div style={{gridTemplateColumns:"35% 55%"}} className='grid grid-cols-2 w-[100%] pr-[10vw] pl-[10vw] gap-[10vw]'>
                <div style={{ display: 'flex', alignItems: 'center' }}>
        <img style={{borderRadius:"15px"}} src='impacts.jpg'></img>
    </div>
                    <div>
                    <h1 className='text-white sm:text-[40px] lg:text-[40px] xl:text-[60px] text-[min(8vw,40px)]'>Rise of Portable Phones
</h1>
                <p className='text-[#FFFFFFB3] text-[min(3.3vw,15px)] sm:text-[15px] lg:text-[20px]'>The immediate effects of the invention of the cell phone wasn’t felt by most Americans. With a price tag of $4,000 and an unwieldy weight of nearly 2 pounds the people of the United States did not immediately pick up these phones. However, with the invention of these cellular devices, a concept which many people believed to be only science fiction was proved to be possible spurring on a period of technological invocation which still continues today.

                </p>
                </div>
                </div>
                <img
                src="arrow.png"
                className="w-[40vw] translate-x-[20vw] h-[10vw] mt-[3vw] mb-[3vw]"
              />

                <div style={{gridTemplateColumns:"35% 55%"}} className='grid grid-cols-2 w-[100%] pr-[10vw] pl-[10vw] gap-[10vw] pt-[3vw]'>
                <div style={{ display: 'flex', alignItems: 'center' }}>
        {/* <img style={{borderRadius:"15px"}} src='dev.jpg'></img> */}
        <div style={{borderLeft: "1px solid #B3B3B3", paddingLeft:"1vw"}} className='text-[#b3b3b3] italic font-futura text-[min(3.3vw,15px)] sm:text-[15px] lg:text-[20px]'>"We found that using a cellular telephone was associated with a risk of having a motor vehicle collision that was about four times as high as that among the same drivers when they were not using their cellular telephones..." - Using Cell Phones while Driving Rings Up Risk, Medical Post 33.8 (1997)</div>
    </div>
                    <div>
                    {/* <h1 className='text-white sm:text-[40px] lg:text-[40px] xl:text-[60px] text-[min(8vw,40px)]'>Rise of Portable Phones */}
{/* </h1> */}
                <p className='text-[#FFFFFFB3] text-[min(3.3vw,15px)] sm:text-[15px] lg:text-[20px]'>In this study, researchers in Toronto found that using cellular phones while driving increased the risk of a motor vehicle collision by 4x, similar to driving with a blood alcohol level at the legal limit. Furthermore, hands-free devices didn't seem to lower this risk, challenging laws that only ban handheld units. However, a highlighted benefit was that drivers could easily contact emergency services if needed. This source highlighted the new concerns that arose as a result of the popularization of mobile phones, and also the unseen dangers. This source also indicates a turning point as it signifies the start the overwhelming digital age that we live in right now.

                </p>
                </div>
                </div>


                <button style={{bottom: isOverflowing ? "" : "0px", paddingBottom: isOverflowing ? "3vw" : "", paddingTop: isOverflowing ? "3vw" : ""}} onClick={() => window.location.href = '/development'} className='absolute text-white left-0 ml-[8vw] mb-[4vw] font-futura text-[2vw] sm:text-[10px] lg:text-[15px]'>← DEVELOPMENT</button>
                <button style={{bottom: isOverflowing ? "" : "0px", paddingBottom: isOverflowing ? "3vw" : "", paddingTop: isOverflowing ? "3vw" : ""}} onClick={() => window.location.href = '/legacy'} className='absolute text-white right-0 mr-[8vw] mb-[4vw] font-futura text-[2vw] sm:text-[10px] lg:text-[15px]'>LEGACY →</button>
    </div>
  );
}

export default Three;

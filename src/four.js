import { useEffect, useState } from 'react';

function Four() {


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
            <a href="/legacy" className="text-[white] font-futura" style={{fontWeight:1000}}>LEGACY</a>
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
                    <h1 className='text-white font-futura text-[min(3.3vw,15px)] sm:text-[15px] lg:text-[20px] pt-[2vw] pb-[3vw]' style={{fontWeight:1000}}>LEGACY</h1>
                    </div>
                <div style={{gridTemplateColumns:"35% 55%"}} className='grid grid-cols-2 w-[100%] pr-[10vw] pl-[10vw] gap-[10vw]'>
                <div style={{ display: 'flex', alignItems: 'center' }}>
        <img style={{borderRadius:"15px"}} src='legacy.png'></img>
    </div>
                    <div>
                    <h1 className='text-white sm:text-[40px] lg:text-[40px] xl:text-[60px] text-[min(8vw,40px)]'>The Digital Age
</h1>
                <p className='text-[#FFFFFFB3] text-[min(3.3vw,15px)] sm:text-[15px] lg:text-[20px]'>Today it is almost unthinkable to imagine a world without cell phones. Having expanded past just sending and receiving calls, cell phones have become deeply embedded into every aspect of our lives, from working to leisure. But these mobile phones had a deeper effect than just that. They allowed businesses to better communicate with their customers and suppliers allowing them to run more efficiently and expand their operations. Not only that, they also connected developing countries and urban areas allowing places with more sparse populations to be as connected as thriving cities. And even in those cities, cell phones can help reduce crime with projects such as the Crime Watch Project and hotlines like 911 allowing quicker responses to emergencies. But despite all of these benefits brought by cell phones, it is important to keep in mind that progress can still be made. Tighter regulations may need to be placed on the internet to prevent cyber crimes while usage of cell phones needs to be limited in dangerous situations like driving or crossing the road. Ultimately, cell phones have found themselves affecting almost all parts of human life, and will only continue to grow in functionality.

                </p>
                </div>
                </div>
               


                <button style={{bottom: isOverflowing ? "" : "0px", paddingBottom: isOverflowing ? "3vw" : "", paddingTop: isOverflowing ? "3vw" : ""}} onClick={() => window.location.href = '/short-term'} className='absolute text-white left-0 ml-[8vw] mb-[4vw] font-futura text-[2vw] sm:text-[10px] lg:text-[15px]'>← SHORT-TERM EFFECTS</button>
                <a style={{bottom: isOverflowing ? "" : "0px", paddingBottom: isOverflowing ? "3vw" : "", paddingTop: isOverflowing ? "3vw" : ""}} href='https://docs.google.com/document/d/18kxeN3GyDqI-WndIOAV1FvfXbefhKKFjMHSv-Z-eVZM/edit?usp=sharing' className='absolute text-white right-0 mr-[8vw] mb-[4vw] font-futura text-[2vw] sm:text-[10px] lg:text-[15px]'>BIBLIOGRAPHY →</a>
    </div>
  );
}

export default Four;

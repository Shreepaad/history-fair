import logo from './logo.svg';
// import './App.css';
// import bgImage from './bg.png';

function App() {
  return (
    <div>

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
              <div style={{backgroundImage:"url('./bg.png')", height:"calc(100vh - 60px)", backgroundSize:"cover", backgroundRepeat:"no-repeat", backgroundPosition:"40%"}}>
                <div  className = "sm:pt-[20vh] pt-[10vh]" style={{paddingRight:"8vw"}}>
                <h1 className='text-white sm:text-[40px] lg:text-[60px] text-[min(8vw,40px)] pl-[50%]'>The invention of the mobile cell phone
</h1>
                <p className='text-[#FFFFFFB3] text-[min(3.3vw,15px)] sm:text-[15px] lg:text-[20px] pl-[50%]'>In response to the limitations of landline communication, the invention of the mobile cell phone in 1983 revolutionized connectivity, enabling instantaneous remote communication across industries and sectors. It facilitated seamless interactions, transforming business operations and enhancing law enforcement's information gathering. Simultaneously, it sparked a new era of personal connectivity, allowing new interactions, reducing costs, and saving time, ultimately contributing to a more interconnected world.
                </p>
                </div>
                <button onClick={() => window.location.href = '/prior'} className='absolute text-white right-0 bottom-0 mr-[8vw] mb-[4vw] font-futura text-[2vw] sm:text-[10px] lg:text-[15px]'>PRIOR TECHNOLOGIES →</button>
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

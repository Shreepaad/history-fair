import logo from './logo.svg';
import './App.css';
import bgImage from './bg.png';

function App() {
  return (
    <div>

        <div className='bg-[black] h-[screen] font-orpheus'>
              <div style={{height:"60px", width:"100%", backgroundColor:"black", borderBottom: "1px solid #FFFFFFB3"}}>
              <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 ">
        <div className="flex justify-between items-center h-[60px] text-[min(15px,2vw)] pl-[10vw] pr-[10vw]">
          <a href="#" className="text-[white] font-[futura]" style={{fontWeight:400}}>HOME</a>
          <a href="#" className="text-[white] font-[futura]">PRIOR TECHNOLOGIES</a>
          <a href="#" className="text-[white] font-[futura]">DEVELOPMENT</a>
          <a href="#" className="text-[white] font-[futura]">SHORT-TERM EFFECTS</a>
          <a href="#" className="text-[white] font-[futura]">LEGACY</a>
        </div>
      </div>

              </div>
              <div style={{backgroundImage:"url('./bg.png')", height:"100vh", backgroundSize:"cover", backgroundRepeat:"no-repeat", backgroundPosition:"40%"}}>
                <div style={{paddingTop:"20vh", paddingRight:"8vw"}}>
                <h1 className='text-white text-[60px] pl-[50%]'>The invention of the mobile cell phone
</h1>
                <p className='text-[#FFFFFFB3] text-[20px] pl-[50%]'>In response to the limitations of landline communication, the invention of the mobile cell phone in 1983 revolutionized connectivity, enabling instantaneous remote communication across industries and sectors. It facilitated seamless interactions, transforming business operations and enhancing law enforcement's information gathering. Simultaneously, it sparked a new era of personal connectivity, allowing new interactions, reducing costs, and saving time, ultimately contributing to a more interconnected world.
                </p>
                </div>
              </div>
        </div>
    </div>
  );
}

export default App;

import React ,{useState , useEffect} from 'react';


export default function Prgressbar() {

    const  [filled , setFilled] =  useState(0);

    const [isRunning , setIsRunning] = useState(false);

    useEffect(() => {

        if(filled < 100 && isRunning){
            setTimeout(()=> setFilled (prev => prev += 2), 50)
        }
    },[filled , isRunning])


  return (
    <div>
        <h1 style={{textAlign:"center" , fontSize:"300" , fontWeight:"bolder",}}>Progress Bar</h1>
      <div className='progressbar'>
        <div style={{

            height: "100%",
            width:"${filled}%",
            backgroundColor:"red",
            transition:"width 0.5s ease-in-out",


        }}></div>
        <span className='progresspercentage'>{filled}%</span>
      </div>
      <button className='btn' onClick={()=> setIsRunning(true)}>Run</button>
    </div>
  )
}

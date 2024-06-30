import { useEffect, useState } from "react"

const Timer = () => {
  const [time, setTime] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((time) => {
        if(time===30){     
          //clearInterval(interval);
          return 0;
        }
        return time+1
      }); 
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  
  const progress = ((time/30)*100);
  
  return (
    <div>
      <div>{time}</div>
      <div className="mx-5">
        <div className="m-auto w-full h-10 bg-green-300 shadow rounded-xl">
          <div className="h-full bg-green-900 rounded-xl" style={{width: `${progress}%` , transition: "width 2s" }}></div>
        </div>
      </div>
    </div>
  )
}

export default Timer
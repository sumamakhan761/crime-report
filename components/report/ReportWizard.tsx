'use client'
import { useState} from 'react'
import ReportForm from "./ReportForm";

function ReportWizard() {
    const [currentState, setCurrentState] = useState(1);
    const [reportData , setReportData] = useState<any>(null);

    const handleStepComplete = async(data:any) => {
      setReportData({...reportData , ...data});
      if (currentState === 2){
        return;
      }
      setCurrentState((prev) => prev +1);
    }

  return (
    <div className='rounded-2xl bg-zinc-900 p-8'>
      {currentState === 1 && <ReportForm/>}
      
    </div>
  )
}

export default ReportWizard;

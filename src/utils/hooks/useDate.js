import { useEffect, useState } from "react";

const useDate =(value)=>{
    const [date,setDate] =useState({
        year:null,
       month:null,
        day:null,
    })

    const month = value.slice(5,7)
    const getMonthName=()=>{
        switch (month) {
            case '01':
                
                return 'January';
            case '02':
                
                return 'Febuary';
            case '03':
                
                return 'March';
            case '04':
                
                return 'April';
            case '05':
                
                return 'May';
            case '06':
                
                return 'June';
            case '07':
                
                return 'July';
            case '08':
                
                return 'August';
            case '09':
                
                return 'September';
            case '10':
                
                return 'October';
            case '11':
                
                return 'November';
            case '12':
                
                return 'December';
        
            default:
                break;
        }
    }

    useEffect(()=>{

        setDate(state=>{
            return{
                ...state,
                year:value.slice(0,4),
                month:getMonthName(),
                day:value.slice(8,10)
            }

        })

        
        
     
        
     
    },[])
  
  return[date.year,date.month,date.day]
}

export default useDate



const NavigateMenu = (e,setPages)=>{



  /*  ==== EASY NAVIGATION UTILITY

        FUNCTION SHARED AMONG DESKTOP 

        NAVIGATION AND MOBILE 

        SIDBAR NABIGATION ====
 
 */
        

    switch (e.target.textContent) {
        
      case 'Portfolio':
      
        
        
        setPages(state=>{
          return {
            ...state,
            portfolio:true,
            coins:false,
           newcoins:false,
           category:false,
        
          }
        })
        break;
  
  
      case 'New Cryptocurrencies':
       
            
       setPages(state=>{
        return {
          ...state,
          coins:false,
          newcoins:true,
          category:false,
          portfolio:false,
       
        }
      })
        break;
  
      case 'Categories':
  
       
            
     
       setPages(state=>{
        return {
          ...state,
          coins:false,
          newcoins:false,
          category:true,
          portfolio:false,
       
        }
      })
        break;
  
      case 'By Market Cap':
   
       
        
   
  
      setPages(state=>{
        return {
          ...state,
          coins:true,
          newcoins:false,
          category:false,
          portfolio:false,
       
        }
      })
       break;
     
     
    
      default:
       return ;
       
    }
  
  }
  export default NavigateMenu
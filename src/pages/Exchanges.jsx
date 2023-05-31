
const Exchange =()=>{


    return <>
    <section>
    <ul className={`relative md:pb-7 pb-2 h-min border-b-[1px] w-full overflow-y-hidden border-neutral-400
 gap-5 top-24 flex`} >
  
     <li onClick={navigateMenu}  className={`${portfolio ? 'border-b-2 -mb-2 md:-mb-7 ' :'hover:border-b-2  cursor-pointer min-w-max -mb-2 md:-mb-7 border-cyan-100'} cursor-pointer` }>Crypto Exchanges</li>
   <li   onClick={navigateMenu}  className={`${coins ?'border-b-2 -mb-2 md:-mb-7 ' :"hover:border-b-2  cursor-pointer md:-mb-7 -mb-2  min-w-max border-cyan-100"} cursor-pointer`}>Decentralized Exchanges</li>
    <li onClick={navigateMenu}className={`${newcoins ?'border-b-2 -mb-2 md:-mb-7 ' :"hover:border-b-2  cursor-pointer  -mb-2 md:-mb-7 border-cyan-100"} cursor-pointer min-w-max`}>Derivatives</li>
  
</ul> 
    </section>
    </>
}

export default Exchange
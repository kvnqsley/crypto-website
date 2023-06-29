const Header1 =({children,variant})=>{

    return(<h2 className={`${variant} text-xl font-semibold`}>
        {children}
    </h2>)
}
const Header2 =({children,variant})=>{

    return(<h2 className={`${variant} text-lg font-semibold`}>
        {children}
    </h2>)
}
const P1 =({children,variant})=>{

    return(<p className={` ${variant} font-light`}>
        {children}
    </p>)
}




export {Header1,Header2,P1}
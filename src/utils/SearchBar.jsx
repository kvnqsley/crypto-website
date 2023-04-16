import {useSelector} from 'react-redux'


export default function SearchBar() {
    const theme = useSelector(state=>state.theme.mytheme)
    return <>
          <input className={` ${theme ? 'bg-neutral-900 text-white' :'bg-sky-600'} ml-8 block sm:inline-block mt-8 h-12 rounded-lg w-[90%] sm:w-56 pl-10 sm:pl-4 border   z-50 border-sky-900`} type="search" placeholder="Search..." name="" id="" />
    </>
}
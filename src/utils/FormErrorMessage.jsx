

const FormErrorMessage = ({formError,theme}) => {
  return (
    <div className={` ${formError.active ? 'block' : 'hidden'} ${theme ? 'bg-[rgb(146,134,135)] text-[rgb(100,36,57)] ' : 'bg-[rgb(248,215,218)] text-[rgb(151,28,98)]'} w-full py-3 pl-5 rounded text-sm mt-4`}>
    <span className='bg-[rgb(100,36,57)] inline-block  rounded-full h-2 w-2'></span> {formError.message}
</div>
  )
}

export default FormErrorMessage
import file from '../Assets/Image3.jpg'
const ExampleFile = () => {
    return(
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-20">
        <div className="top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[--primary-color] text-white flex flex-col font-['Poppins'] relative font-regular rounded-md w-[600px] h-[600px] z-30 p-4">
            <img src={file}
            width={500}
            height={400} 
            className='object-contain'
            />
        </div>
        </div>
    )
}

export default ExampleFile
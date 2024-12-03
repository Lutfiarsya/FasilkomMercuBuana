const InputSearch = ({setFilter, filter}) => {
    return(
        <div>
          <input className="bg-gray-300 w-[300px] rounded-md h-8 px-2 text-[12px] italic font-['Poppins']"
              placeholder="Nama, NIM, Dosen Pembimbing"
              onChange={(e) => setFilter(e.target.value)}
              value={filter}
              />
        </div>
    )
}

export default InputSearch
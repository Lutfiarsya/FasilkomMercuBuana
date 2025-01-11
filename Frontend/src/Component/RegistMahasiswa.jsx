import { motion, AnimatePresence } from "framer-motion"

const RegistMahasiswa = ({additional}) => {
 


    const slideVariantsEnter = {
        hidden: { x: "100%", opacity: 0 },
        visible: { x: 0, opacity: 1 },
        exit: { x: "-100%", opacity: 0 },
    }
    

    return(
        <div className="overflow-hidden  flex flex-col w-full justify-center items-center">
            <AnimatePresence mode="wait">
            {!additional ? 
            (
                <motion.div
                initial="hidden"
                key='personal-form'
                animate="visible"
                exit="exit"
                variants={slideVariantsEnter}
                transition={{ duration: 0.5 }} 
                className="relative w-full h-full flex flex-col justify-center items-center">
                    <div className="flex flex-col w-full h-full justify-start items-center">
                        <label className="text-start w-[90%] font-semibold text-md ml-2">NIM</label>
                        <input placeholder="Contoh: 41524010185" maxLength={8} className="w-[90%] h-10  p-2 border-2 border-black rounded-md"/>
                    </div>
                    <div className="flex flex-col w-full h-full justify-start items-center mt-4">
                        <label className="text-start w-[90%] font-semibold text-md ml-2">Nama Lengkap</label>
                        <input placeholder="Contoh: Luthfie Arsya Darmaputra" maxLength={8} className="w-[90%] h-10  p-2 border-2 border-black rounded-md"/>
                    </div>
                    <div className="flex flex-col w-full h-full justify-start items-center mt-4">
                        <label className="text-start w-[90%] font-semibold text-md ml-2">Tanggal Lahir</label>
                        <input type="date" placeholder="DD/MM/YYYY" maxLength={8} className="w-[90%] h-10  p-2 border-2 border-black rounded-md"/>
                    </div>
                    <div className="flex flex-col w-full h-full justify-start items-center mt-4">
                        <label className="text-start w-[90%] font-semibold text-md ml-2">No Handphone</label>
                        <input  placeholder="Contoh: 08577401300" maxLength={8} className="w-[90%] h-10  p-2 border-2 border-black rounded-md"/>
                    </div>
                </motion.div>
            ) : (
                    <motion.div
                    initial="hidden"
                    key='additional-form'
                    animate="visible"
                    exit="exit"
                    variants={slideVariantsEnter}
                    transition={{ duration: 0.5 }} 
                    className="relative w-full h-full flex flex-col justify-center items-center">
                        {/* Jenis Kelas */}
                        <div className="flex flex-col w-full h-full justify-start items-center">
                          <label className="text-start w-[90%] font-semibold text-md ml-2">Jenis Kelas</label>
                          <select className="w-[90%] h-10 text-md px-2 border-2 border-black rounded-md">
                            <option disabled selected>Silahkan Pilih Jenis Kelas yang sesuai</option>
                            <option>Reguler 1</option>
                            <option>Reguler 2</option>
                          </select>
                        </div>
                        {/* Prodi */}
                        <div className="flex flex-col w-full h-full justify-start items-center mt-4">
                          <label className="text-start w-[90%] font-semibold text-md ml-2">Program Studi</label>
                          <select className="w-[90%] h-10 text-md px-2 border-2 border-black rounded-md">
                            <option disabled selected>Silahkan Pilih Program Studi yang sesuai</option>
                            <option>Teknik Informatika</option>
                            <option>Sistem Informasi</option>
                          </select>
                        </div>
                        {/* Cabang Kampus */}
                        <div className="flex flex-col w-full h-full justify-start items-center mt-4">
                          <label className="text-start w-[90%] font-semibold text-md ml-2">Lokasi Kampus</label>
                          <select className="w-[90%] h-10 text-md px-2 border-2 border-black rounded-md">
                            <option disabled selected>Silahkan Pilih Lokasi Kampus yang sesuai</option>
                            <option>Meruya</option>
                            <option>Menteng</option>
                            <option>Warung Buncit</option>
                          </select>
                        </div>
                        {/* Periode */}
                        <div className="flex flex-col w-full h-full justify-start items-center mt-4">
                          <label className="text-start w-[90%] font-semibold text-md ml-2">Periode</label>
                          <select className="w-[90%] h-10 text-md px-2 border-2 border-black rounded-md">
                            <option disabled selected>Silahkan Pilih Tahun Periode yang sesuai</option>
                            <option>2020-2021</option>
                            <option>2021-2022</option>
                            <option>2022-2023</option>
                            <option>2023-2024</option>
                          </select>
                        </div>
                    </motion.div>
            )
            }
            </AnimatePresence>
        </div>
    )
}


export default RegistMahasiswa
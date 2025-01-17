import { motion, AnimatePresence } from "framer-motion"

const RegistDosen = ({additional}) => {
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
                        <label className="text-start w-[90%] font-semibold text-md ml-2">NID</label>
                        <input placeholder="Contoh: 41524010185" maxLength={8} className="w-[90%] h-10  p-2 border border-black rounded-md"/>
                    </div>
                    <div className="flex flex-col w-full h-full justify-start items-center mt-4">
                        <label className="text-start w-[90%] font-semibold text-md ml-2">Nama Lengkap</label>
                        <input placeholder="Contoh: Luthfie Arsya Darmaputra" maxLength={8} className="w-[90%] h-10  p-2 border border-black rounded-md"/>
                    </div>
                    <div className="flex flex-col w-full h-full justify-start items-center mt-4">
                        <label className="text-start w-[90%] font-semibold text-md ml-2">Tanggal Lahir</label>
                        <input type="date" placeholder="DD/MM/YYYY" maxLength={8} className="w-[90%] h-10  p-2 border border-black rounded-md"/>
                    </div>
                    <div className="flex flex-col w-full h-full justify-start items-center mt-4">
                        <label className="text-start w-[90%] font-semibold text-md ml-2">No Handphone</label>
                        <input  placeholder="Contoh: 08577401300" maxLength={8} className="w-[90%] h-10  p-2 border border-black rounded-md"/>
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
                          <label className="text-start w-[90%] font-semibold text-md ml-2">Keahlian</label>
                          <select className="w-[90%] h-10 text-md px-2 border border-black rounded-md">
                            <option disabled selected>Silahkan Pilih Keahlian Teknologi yang sesuai</option>
                            <option>Artificial Intelligence</option>
                            <option>Data Science</option>
                            <option>Network And Communication</option>
                            <option>Software Engineer</option>
                          </select>
                        </div>
                        {/* Prodi */}
                        <div className="flex flex-col w-full h-full justify-start items-center mt-4">
                          <label className="text-start w-[90%] font-semibold text-md ml-2">Departemen</label>
                          <select className="w-[90%] h-10 text-md px-2 border border-black rounded-md">
                            <option disabled selected>Silahkan Pilih Departemen yang sesuai</option>
                            <option>Teknik Informatika</option>
                            <option>Sistem Informasi</option>
                          </select>
                        </div>
                        <div className="flex flex-col w-full h-full justify-start items-center mt-4">
                          <label className="text-start w-[90%] font-semibold text-md ml-2">Tipe Dosen</label>
                          <select className="w-[90%] h-10 text-md px-2 border border-black rounded-md">
                            <option disabled selected>Silahkan Pilih Tipe Dosen yang sesuai</option>
                            <option value='Dosen Pembimbing'>Dosen Pembimbing</option>
                            <option value='Dosen MPTI'>Dosen MPTI</option>
                          </select>
                        </div>
                    </motion.div>
            )
            }
            </AnimatePresence>
        </div>
    )
}

export default RegistDosen
import { VscThreeBars } from 'react-icons/vsc';

export default function NavBar({setMenu, menu}: any) {

    return (
        <div className="flex flex-row text-white justify-between bg-skyblue px-4 py-3">
            <div className="flex flex-row font-semibold text-xl items-center">
                <div onClick={() => setMenu(!menu)} className=' h-8 w-8 mr-6'><VscThreeBars className='text-white h-8 w-6' /></div>
                <p>Mark My Words</p>
            </div>
            <div className="hidden lg:flex flex-row text-base gap-3 items-center">
                <p>Alphington Grammer School</p>
                <p className='text-2xl'>|</p>
                <div className="flex flex-row text-base gap-1">
                    <div className="rounded-full h-4 w-4 bg-white mt-1" />
                    <p>James Smith</p>
                </div>
            </div>
        </div>
    )
}

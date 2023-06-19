import CommonButton from './commonButton';

import { IoHome } from 'react-icons/io5';
import { ImCheckmark2 } from 'react-icons/im';
import { FaGraduationCap } from 'react-icons/fa';
import { BsFillQuestionSquareFill, BsFillPersonBadgeFill } from 'react-icons/bs';
import { MdAnalytics } from 'react-icons/md';
import { GiEarthAmerica } from 'react-icons/gi';
import { CgList } from 'react-icons/cg';
import { IoIosPeople } from 'react-icons/io';
import { AiFillSetting } from 'react-icons/ai';
import { LuPanelLeftClose } from 'react-icons/lu';

export default function SideBar({ menu, setMenu }: any) {

    return (
        <main className={menu ? `min-h-screen md:w-1/5 w-4/5 absolute top-0 shadow-md bg-menuWhite z-10` : "hidden"}>
            <div className="flex flex-col px-5 py-4">
                <div className="flex flex-row justify-between lg:justify-end">
                    <div className="flex lg:hidden flex-col text-xs gap-1 mb-1 ml-1 font-semibold">
                        <p>Alphington Grammer School</p>
                        <p>James Smith</p>
                    </div>
                    <LuPanelLeftClose onClick={() => setMenu(!menu)} />
                </div>
                <CommonButton name="Home" Icon={IoHome} bottomborder={true} />
                <CommonButton name="Mark" Icon={ImCheckmark2} bottomborder={false} />
                <CommonButton name="Classes" Icon={FaGraduationCap} bottomborder={false} />
                <CommonButton name="Templates" Icon={BsFillQuestionSquareFill} bottomborder={false} />
                <CommonButton name="Analytics" Icon={MdAnalytics} bottomborder={false} />
                <CommonButton name="Discovery" Icon={GiEarthAmerica} bottomborder={false} isSelected={true} />
                <CommonButton name="Tasks" Icon={CgList} bottomborder={true} />
                <CommonButton name="Students" Icon={IoIosPeople} bottomborder={false} />
                <CommonButton name="Teachers" Icon={BsFillPersonBadgeFill} bottomborder={false} />

                <div className=" mt-8 md:mt-6">
                    <CommonButton name="Settings" Icon={AiFillSetting} bottomborder={false} />
                </div>
            </div>
        </main >
    )
}

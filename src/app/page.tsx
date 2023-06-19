
import { BsGlobe2 } from 'react-icons/bs';
import { IoAnalyticsOutline } from 'react-icons/io5';
import { AiOutlineSearch } from 'react-icons/ai';
import { RiEqualizerLine } from 'react-icons/ri';
import CourseComponent from '@/components/courseComponent';

const data = {
  title: "Critical Analysis",
  subTitle: "Year 8 English",
  name: "James Smith",
  subName: "Alphington Grammer, VIC",
  rating: 4,
  reviews: 123
}

const data2 = {
  title: "Critical Analysis",
  subTitle: "Year 8 English",
  name: "Alex Smith",
  subName: "Alphington Grammer, VIC",
  rating: 5,
  reviews: 177
}

export default function Home() {
  return (
    <div className="flex flex-col w-11/12 mx-auto">
      <div className="flex flex-row justify-center gap-4 mt-2">
        <div className='flex flex-row gap-2 items-center font-semibold text-sm py-2 px-2 border-b-2 border-gray-200'>
          <BsGlobe2 className='' />
          <p>Explore</p>
        </div>
        <div className='flex flex-row gap-2 items-center font-semibold text-sm py-2 px-2'>
          <IoAnalyticsOutline className='h-6 w-4 text-textGray' />
          <p className='text-textGray'>My School</p>
        </div>
      </div>

      <p className='text-xl md:text-3xl font-bold py-2'>Explore</p>
      <p className='text-base md:text-lg font-medium text-textGray py-1'>Discover assessment templates and tasks created and shared by other teachers.</p>

      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-row gap-8">
          <div className='flex flex-col'>
            <label className=" mb-2 text-base font-bold text-gray-900">Subject</label>
            <select className="bg-white text-textGray mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 px-1 md:pl-3 md:pr-20">
              <option selected className='py-1 text-sm px-2'>Filter by subject</option>
              <option value="US" className='py-1 text-sm px-2'>English</option>
              <option value="CA" className='py-1 text-sm px-2'>French</option>
            </select>
          </div>
          <div className='flex flex-col'>
            <label className=" mb-2 text-base font-bold text-gray-900">Year Level</label>
            <select className="bg-white text-textGray mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 px-1 md:pl-3 md:pr-20">
              <option selected className='py-1 text-sm px-2'>Filter by year level</option>
              <option value="US" className='py-1 text-sm px-2'>Second</option>
              <option value="CA" className='py-1 text-sm px-2'>First</option>
            </select>
          </div>

        </div>
        <div className="flex flex-row border border-textGray text-xs rounded-full px-2 py-1 gap-2">
          <p className='px-6 py-2.5 bg-darkBlack text-white rounded-2xl'>All Assessments</p>
          <p className='text-lg mt-1 text-textGray'>|</p>
          <p className='pl-2 pr-6 py-2.5'>My Public Assessments</p>
        </div>
      </div>

      <div className='flex flex-row w-full justify-between bg-white items-center mt-4 px-2 py-2'>
        <div className='flex flex-row gap-2 items-center'>
          <AiOutlineSearch className='h-4 w-4' />
          <input className='border-0 focus:border-0 pr-8 pl-2 py-1' placeholder='Search' type="text" value="Search" />
        </div>
        <RiEqualizerLine />
      </div>

      <div className="flex flex-row justify-end mt-2">
        <select className="bg-white text-textGray mb-6 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 p-2.5 px-1 md:pl-3 md:pr-10">
          <option selected className='py-2 text-darkBlack text-sm px-2'>Relevance</option>
          <option value="US" className='py-2 text-darkBlack text-sm px-2'>Date</option>
          <option value="CA" className='py-2 text-darkBlack text-sm px-2'>Reviews</option>
        </select>
      </div>

      <div className='bg-white rounded-xl w-full flex flex-wrap justify-around md:px-8 py-10 gap-6 mb-10'>
        <CourseComponent data={data} />
        <CourseComponent data={data2} />
        <CourseComponent data={data} />
        <CourseComponent data={data} />
        <CourseComponent data={data2} />
        <CourseComponent data={data} />
        <CourseComponent data={data} />
        <CourseComponent data={data2} />
      </div>

    </div>
  )
}

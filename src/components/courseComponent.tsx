import {BsFillStarFill} from 'react-icons/bs';

export default function CourseComponent({ data }: any) {

    return (
        <div className={`bg-white drop-shadow-lg rounded-lg flex flex-col px-6 md:px-4 py-1.5 pt-3`}>
            <div className="flex flex-row justify-between gap-20 md:gap-16">
                <p className="text-lg font-bold text-black">{data.title}</p>
                <div className="text-textGray items-center -mt-2">
                    <p className="cursor-auto bg-white drop-shadow-lg rounded-full h-fit px-1.5">+</p>
                </div>
            </div>

            <p className='py-1.5 font-medium text-textGray text-base'>{data.subTitle}</p>

            <p className='text-sm font-normal text-textGray'>{data.name}</p>
            <p className='text-sm font-normal text-textGray pb-1.5'>{data.subName}</p>
            
            <div className="flex flex-row gap-1 items-center py-1.5">
                {[...Array(data.rating)].map((e, i) => 
                    <span className="h-6 w-6" key={i}>
                        <BsFillStarFill className='text-golden h-6 w-6'/>
                    </span>
                )}
                {[...Array(5 - data.rating)].map((e, i) => 
                    <span className="h-6 w-6" key={i}>
                        <BsFillStarFill className='text-textGray h-6 w-6'/>
                    </span>
                )}

                <p className='text-sm text-textGray ml-2 md:ml-1 italic pb-3 -mb-2'>{data.reviews} reviews</p>
            </div>
        </div>

    )
}

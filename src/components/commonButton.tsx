
export default function CommonButton({ name, Icon, bottomborder, isSelected }: any) {

    return (
        <div className={` ${bottomborder && 'border-b border-gray-950 mb-2'}`}>
            <div className={`cursor-auto flex flex-row mx-1 px-5 py-3 my-1 md:my-2 gap-4 ${isSelected ? 'bg-skyblue' : 'bg-white'} items-center rounded-lg shadow ${bottomborder && 'mb-4'}`}>
                <Icon className="md:w-5 md:h-5" />
                <div className='cursor-auto font-bold md:font-bold text-sm md:text-base'>{name}</div>
            </div >
        </div>

    )
}

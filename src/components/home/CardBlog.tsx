import down from '@public/winkHappyGreetings.png';
import topLeftCorner from '@public/topLeftCorner.png';

export default function CardBlog({ blog }: { blog: any }) {
    return (
        <div className="h-full w-[400px] m-2 flex-shrink-0 cursor-pointer">
            <div className="rounded-3xl overflow-hidden mb-4 relative h-[250px]">
                <img
                    src={down}
                    alt="Css Logo"
                />
                <span className="absolute top-3 left-4 border border-blue-200 text-xs rounded-xl px-4 py-2 font-semibold capitalize">
                    category
                </span>
            </div>

            <div className="px-4 flex gap-4">
                <img src={topLeftCorner} alt="Author" className='object-cover w-12 h-12 rounded-full' />

                <div className="flex flex-col w-full gap-2">
                    <h3 className='text-lg font-bold text-slate-700 leading-7 whitespace-normal'>
                        Title
                    </h3>
                    <div>
                        autor
                        fecha
                    </div>
                </div>
            </div>

        </div>
    )
}
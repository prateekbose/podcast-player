import {ArrowLeft, MoreVertical} from 'react-feather'

export default function Home() {
    return (
        <>
            <nav className={"px-4 py-5 flex justify-between items-center"}>
                <div className={"p-2 flex justify-center items-center bg-gray-100 rounded-xl"}>
                    <ArrowLeft/>
                </div>
                <div className={"flex flex-col items-center"}>
                    <h3 className={"text-xs text-slate-400 tracking-[0.015rem]"}>Now Playing from Podcast</h3>
                    <h1 className={"text-xl font-bold text-slate-700 uppercase tracking-tighter"}>Thomas Larson</h1>
                </div>
                <div className={"p-2 flex justify-center items-center bg-gray-100 rounded-xl"}>
                    <MoreVertical/>
                </div>
            </nav>
            <div className={""}></div>
            <div>
                <div className={"p-4 w-[calc(100vw)] h-[100vw] rounded-xl"}>
                    <img src="02.01.19_-_the_impact_2x.webp" className={"h-full object-cover rounded-xl"} />
                </div>
            </div>
        </>
    )
}
import {ArrowLeft, MoreVertical, Play, SkipBack, SkipForward} from 'react-feather'

export default function Home() {
    return (
        <div className={"w-[100vw] h-[100vh] bg-no-repeat bg-cover bg-center flex flex-col gap-2"} 
            style={{
                background: "url('02.01.19_-_the_impact_2x.webp'), rgba(255,255,255,0.85)",
                backgroundBlendMode: "overlay",
                backgroundPosition: "center center",
        }}>
            <nav className={"px-4 py-5 flex justify-between items-center"}>
                <div className={"p-2.5 flex justify-center items-center bg-white rounded-full"}>
                    <ArrowLeft/>
                </div>
                <div className={"flex flex-col items-center"}>
                    <h3 className={"text-xs text-slate-600 tracking-tight"}>Now Playing from Podcast</h3>
                    <h1 className={"text-lg font-bold text-slate-700 uppercase tracking-tighter"}>Thomas Larson</h1>
                </div>
                <div className={"p-2.5 flex justify-center items-center bg-white rounded-full"}>
                    <MoreVertical/>
                </div>
            </nav>
            <div className={""}></div>
            <div>
                <div className={"p-4 w-[calc(100vw)] h-[100vw] flex flex-col gap-2"}>
                    <img src="02.01.19_-_the_impact_2x.webp" className={"h-full object-cover rounded-xl"} />
                    <div className={"flex flex-col justify-center items-center gap-1"}>
                        <h1 className={"text-lg font-bold text-blue-800"}>Comedy Lessons - Episode 1</h1>
                        <h3 className={"text-sm"}>Thomas Larson</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
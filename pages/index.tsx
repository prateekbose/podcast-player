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
                <div className={"p-4 w-[calc(100vw)] h-[125vw] flex flex-col gap-6"}>
                    <img src="02.01.19_-_the_impact_2x.webp" className={"h-full object-cover rounded-xl"} />
                    <div className={"flex flex-col justify-center items-center gap-1"}>
                        <h1 className={"text-xl font-bold text-blue-800 tracking-tight"}>Comedy Lessons - Episode 1</h1>
                        <h3 className={"text-base uppercase tracking-tight"}>Thomas Larson</h3>
                    </div>
                </div>
            </div>
            <div className={"py-8 h-[calc(33vh_-_1.5rem)] w-full bg-black flex flex-col gap-4 rounded-t-3xl"}>
                <div className={"mx-6 w-[calc(100vw_-_3rem)] h-1/3 flex justify-between items-center"}>
                    {Array.from(Array(50).keys()).map((item, index) => <div className={`w-[0.9%] bg-white rounded-full`}
                        style={{
                            height: `${Math.round(Math.random() * 19 + 1) * 5}%`
                        }}
                    ></div>)}
                </div>
                <div className={"h-3/4 flex items-center justify-center gap-10"}>
                    <SkipBack  className={"stroke-white fill-white scale-125"}/>
                    <div className={"h-[20vw] w-[20vw] flex justify-center items-center bg-white rounded-full"}>
                        <Play className={"fill-black pl-1 scale-150"}/>
                    </div>
                    <SkipForward className={"stroke-white fill-white scale-125"}/>
                </div>
            </div>
        </div>
    )
}
const FilterSection = () => {
    return (
        <section className="from-darker flex h-[150px] w-full items-center justify-between bg-gradient-to-l from-40% to-black px-48">
            <div className="relative h-fit">
                <input
                    type="text"
                    className="rounded-xl bg-white px-16 py-4 text-lg font-bold outline-offset-4"
                    placeholder="ค้นหาตำแหน่งงาน"
                />
                <i className="fa-solid fa-magnifying-glass absolute top-1/2 left-8 -translate-x-1/2 -translate-y-1/2 text-lg text-stone-500"></i>
            </div>
            <div className="relative h-fit">
                <input
                    type="text"
                    className="rounded-xl bg-white px-16 py-4 text-lg font-bold outline-offset-4"
                    placeholder="วุฒิการศึกษา"
                />
                <i className="fa-solid fa-graduation-cap absolute top-1/2 left-8 -translate-x-1/2 -translate-y-1/2 text-lg text-stone-500"></i>
            </div>
            <button className="relative cursor-pointer rounded-xl bg-white px-16 py-4 text-lg font-bold text-stone-500 outline-offset-4 outline-white focus:outline">
                ประเภทงาน
                <i className="fa-solid fa-briefcase absolute top-1/2 left-8 -translate-x-1/2 -translate-y-1/2 text-lg text-stone-500"></i>
                <i className="fa-solid fa-angle-down absolute top-1/2 right-8 translate-x-1/2 -translate-y-1/2 text-lg text-stone-500"></i>
            </button>
            <button className="bg-normal hover:bg-normal-hover cursor-pointer rounded-full px-16 py-4 text-lg font-bold text-white transition-all duration-300 hover:scale-105">
                ค้นหา
            </button>
        </section>
    );
};

export default FilterSection;

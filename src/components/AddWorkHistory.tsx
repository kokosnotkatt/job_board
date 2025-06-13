import { useEffect, useRef, type Dispatch, type SetStateAction } from 'react';

const AddWorkHistory = ({
    openWorkHistory,
    setOpenWorkHistory,
}: {
    openWorkHistory: boolean;
    setOpenWorkHistory: Dispatch<SetStateAction<boolean>>;
}) => {
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        const closeSidebar = (event: MouseEvent) => {
            if (
                formRef.current &&
                !formRef.current.contains(event.target as Node)
            ) {
                setOpenWorkHistory(false);
            }
        };
        document.addEventListener('mousedown', closeSidebar);
        return () => document.removeEventListener('mousedown', closeSidebar);
    }, []);

    return (
        <form
            ref={formRef}
            className={`fixed top-0 right-0 z-100 flex h-screen w-[700px] flex-col gap-4 bg-white p-12 shadow-2xl ${openWorkHistory ? 'translate-x-0' : 'translate-x-full'} transition-all duration-300`}
        >
            <h1 className="text-2xl font-bold">ประวัติการทำงานของคุณ</h1>
            <div className="mt-4 flex flex-col gap-2">
                <label htmlFor="position" className="text-lg font-bold">
                    ตำแหน่งงาน
                </label>
                <input
                    type="text"
                    id="position"
                    placeholder="ตำแหน่ง..."
                    className="outline-normal-active rounded-lg border-2 border-stone-500 px-4 py-4 outline-offset-4"
                />
            </div>
            <div className="mt-4 flex flex-col gap-2">
                <label htmlFor="company" className="text-lg font-bold">
                    บริษัท
                </label>
                <input
                    type="text"
                    id="company"
                    placeholder="บริษัท..."
                    className="outline-normal-active rounded-lg border-2 border-stone-500 px-4 py-4 outline-offset-4"
                />
            </div>
            <div className="mt-4 flex w-full flex-col gap-2">
                <label htmlFor="start-date" className="text-lg font-bold">
                    วันที่เริ่ม
                </label>
                <div className="flex w-full justify-between gap-8">
                    <input
                        type="text"
                        placeholder="DD"
                        className="outline-normal-active w-1/3 rounded-lg border-2 border-stone-500 px-4 py-4 outline-offset-4"
                    />
                    <input
                        type="text"
                        placeholder="MM"
                        className="outline-normal-active w-1/3 rounded-lg border-2 border-stone-500 px-4 py-4 outline-offset-4"
                    />
                    <input
                        type="text"
                        placeholder="YYYY"
                        className="outline-normal-active w-1/3 rounded-lg border-2 border-stone-500 px-4 py-4 outline-offset-4"
                    />
                </div>
            </div>
            <div className="mt-4 flex w-full flex-col gap-2">
                <label htmlFor="end-date" className="text-lg font-bold">
                    วันที่สิ้นสุด
                </label>
                <div className="flex w-full justify-between gap-8">
                    <input
                        type="text"
                        placeholder="DD"
                        className="outline-normal-active w-1/3 rounded-lg border-2 border-stone-500 px-4 py-4 outline-offset-4"
                    />
                    <input
                        type="text"
                        placeholder="MM"
                        className="outline-normal-active w-1/3 rounded-lg border-2 border-stone-500 px-4 py-4 outline-offset-4"
                    />
                    <input
                        type="text"
                        placeholder="YYYY"
                        className="outline-normal-active w-1/3 rounded-lg border-2 border-stone-500 px-4 py-4 outline-offset-4"
                    />
                </div>
            </div>
            <div className="mt-4 flex flex-col gap-2">
                <label htmlFor="description" className="text-lg font-bold">
                    รายระเอียดการทำงาน
                </label>
                <textarea
                    id="description"
                    placeholder="บริษัท..."
                    className="outline-normal-active max-h-[300px] min-h-[300px] rounded-lg border-2 border-stone-500 px-4 py-4 outline-offset-4"
                />
            </div>
            <button
                onClick={() => {
                    setOpenWorkHistory(false);
                }}
                type="button"
                className="absolute top-12 right-12 aspect-square h-8 cursor-pointer text-xl text-red-500 transition-all hover:scale-110"
            >
                <i className="fa-solid fa-xmark"></i>
            </button>
        </form>
    );
};

export default AddWorkHistory;

import { useState } from 'react';
import WorkHistorySide from '../components/WorkHistorySide';
import Sidebar from '../components/Sidebar';
import EducationSide from '../components/EducationSide';

const ProfilePage = () => {
    const [openPSIF, setOpenPSIF] = useState(false);
    const [openWHS, setOpenWHS] = useState(false);
    const [openEDS, setOpenEDS] = useState(false);
    const [openLC, setOpenLC] = useState(false);
    const [openSkill, setOpenSkill] = useState(false);

    return (
        <main className="w-full px-48 py-8">
            <section className="to-darker relative flex h-[300px] w-full gap-16 rounded-2xl bg-gradient-to-r from-black p-4">
                <div className="text-darker flex aspect-square h-full items-center justify-center rounded-lg bg-white text-7xl">
                    <i className="fa-solid fa-user"></i>
                </div>
                <div className="flex flex-col justify-center gap-4 text-lg text-white">
                    <h1 className="text-3xl font-bold">ชื่อ</h1>
                    <p>ตำแหน่งงาน</p>
                    <p>มหาลัย</p>
                    <p>อีเมล</p>
                </div>
                <button className="absolute right-4 bottom-4 cursor-pointer rounded-lg bg-white px-12 py-2 text-lg font-bold transition-all duration-300 hover:scale-105">
                    แก้ไข
                </button>
            </section>
            <section className="relative flex w-full flex-col gap-8 p-4">
                <div className="flex flex-col gap-2">
                    <h1 className="text-2xl font-bold">ข้อมูลส่วนตัว</h1>
                    <p>เพิ่มข้อมูลส่วนตัวโดยย่อ เพื่อแนะนำตัว</p>
                    <button
                        className="border-normal text-normal w-[10%] cursor-pointer rounded-lg border px-4 py-2 transition-all duration-300 hover:scale-105"
                        onClick={() => setOpenPSIF(!openPSIF)}
                    >
                        เพิ่มข้อมูลส่วนตัว
                    </button>
                </div>
                <div className="flex flex-col gap-2">
                    <h1 className="text-2xl font-bold">ประวัติการทำงาน</h1>
                    <p>
                        เพิ่มประวัติการทำงานเพื่อให้บริษัททราบถึงประสบการณ์ของคุณ
                    </p>
                    <button
                        className="border-normal text-normal w-[15%] cursor-pointer rounded-lg border px-4 py-2 transition-all duration-300 hover:scale-105"
                        onClick={() => {
                            setOpenWHS(!openWHS);
                        }}
                    >
                        เพิ่มประวัติการทำงาน
                    </button>
                </div>
                <div className="flex flex-col gap-2">
                    <h1 className="text-2xl font-bold">ข้อมูลการศึกษา</h1>
                    <p>แจ้งให้บริษัททราบเกี่ยวกับข้อมูลการศึกษาของคุณ</p>
                    <button
                        className="border-normal text-normal w-[15%] cursor-pointer rounded-lg border px-4 py-2 transition-all duration-300 hover:scale-105"
                        onClick={() => setOpenEDS(!openEDS)}
                    >
                        เพิ่มข้อมูลการศึกษา
                    </button>
                </div>
                <div className="flex flex-col gap-2">
                    <h1 className="text-2xl font-bold">
                        ใบอนุญาตหรือประกาศนียบัตร
                    </h1>
                    <p>
                        แสดงข้อมูลทีเกี่ยวข้องเพิ่มใบอนุญาตหรือประกาศนียบัตรที่เกี่ยวข้องกับงาน
                    </p>
                    <button
                        className="border-normal text-normal w-[10%] cursor-pointer rounded-lg border px-4 py-2 transition-all duration-300 hover:scale-105"
                        onClick={() => setOpenLC(!openLC)}
                    >
                        เพิ่มใบอนุญาต
                    </button>
                </div>
                <div className="flex flex-col gap-2">
                    <h1 className="text-2xl font-bold">ทักษะ</h1>
                    <p>บอกให้บริษัททราบถึงทักษะความสามารถของคุณ</p>
                    <button
                        className="border-normal text-normal w-[10%] cursor-pointer rounded-lg border px-4 py-2 transition-all duration-300 hover:scale-105"
                        onClick={() => setOpenSkill(!openSkill)}
                    >
                        เพิ่มทักษะ
                    </button>
                </div>
                <div className="flex flex-col gap-2">
                    <h1 className="text-2xl font-bold">คลิปวิดีโอ</h1>
                    <p>
                        คลิปวิดีโอแนะนำตัวคุณเองสั้นๆเกี่ยวกับงานที่ทำและทักษะความสามารถที่คุณมี
                    </p>
                    <button className="border-normal text-normal w-[10%] cursor-pointer rounded-lg border px-4 py-2 transition-all duration-300 hover:scale-105">
                        อัปโหลดคลิปวิดีโอ
                    </button>
                </div>
                <div className="absolute top-4 right-4 flex w-fit flex-col gap-2 text-end">
                    <p className="text-2xl font-bold">ความสมบูรณ์ของโปรไฟล์</p>
                    <div className="h-4 w-full rounded-full bg-stone-200"></div>
                    <p className="text-stone-500">0%</p>
                </div>
            </section>
            {/* Sidebar */}
            <Sidebar openSidebar={openPSIF} setOpenSidebar={setOpenPSIF}>
                <div>ยังไม่ได้ใส่</div>
            </Sidebar>
            <Sidebar openSidebar={openWHS} setOpenSidebar={setOpenWHS}>
                <WorkHistorySide />
            </Sidebar>
            <Sidebar openSidebar={openEDS} setOpenSidebar={setOpenEDS}>
                <EducationSide />
            </Sidebar>
            <Sidebar openSidebar={openLC} setOpenSidebar={setOpenLC}>
                <div>ใบอนุญาติ</div>
            </Sidebar>
            <Sidebar openSidebar={openSkill} setOpenSidebar={setOpenSkill}>
                <div>ทักษะ</div>
            </Sidebar>
        </main>
    );
};

export default ProfilePage;

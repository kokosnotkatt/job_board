const AboutPage = () => {
    return (
        <main className="w-full px-48 py-8">
            <h1 className="text-2xl font-bold">ติดต่อเรา</h1>
            <section className="mt-4 flex w-full justify-between border-t py-8">
                <div className="flex w-1/3 flex-col gap-4">
                    <div className="flex flex-col">
                        <p>Pi Securities Public Company Limited </p>
                        <p>บริษัทหลักทรัพย์ พาย จำกัด (มหาชน)</p>
                    </div>
                    <p>
                        132 อาคารสินธร ทาวเวอร์ 3 ชั้น 27 ถนนวิทยุ แขวงลุมพินี
                        เขตปทุมวัน กรุงเทพมหานคร 10330
                    </p>
                    <div>
                        <p>โทรศัพท์: 02 205 7041</p>
                        <p>อีเมล : yanisa.ph@pi.financial</p>
                        <p>ญาณิศา แผ่รุ่งเรื่อง</p>
                        <p>ผู้ช่วยกรรมการผู้จัดการ</p>
                    </div>
                    <p>เวลาทำการ : จันทร์ - ศุกร์ 8:30 น. - 17:00 น.</p>
                    <div className="w-full aspect-square bg-stone-200 rounded-xl"></div>
                </div>
                <div className="w-1/2">
                    <h2 className="text-lg font-bold">
                        หากต้องการสอบถามข้อมูลเพิ่มเติม กรอกรายละเอียดด้านล่าง
                    </h2>
                    <form className="mt-4 flex w-full flex-col gap-4 rounded-xl bg-stone-200 p-8">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="title">หัวเรื่อง</label>
                            <input
                                type="text"
                                placeholder="หัวข้อเรื่อง"
                                className="rounded-lg bg-white px-4 py-2 outline-offset-4"
                                id="title"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="body">รายระเอียด</label>
                            <textarea
                                className="max-h-[250px] min-h-[250px] rounded-lg bg-white p-4 outline-offset-4"
                                name="body"
                                id="body"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name">ชื่อผู้ติดต่อ</label>
                            <input
                                type="text"
                                placeholder="ผู้ติดต่อ"
                                className="rounded-lg bg-white px-4 py-2 outline-offset-4"
                                id="name"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email">อีเมล</label>
                            <input
                                type="text"
                                placeholder="อีเมล"
                                className="rounded-lg bg-white px-4 py-2 outline-offset-4"
                                id="email"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="phone">เบอร์โทรศัพท์</label>
                            <input
                                type="text"
                                placeholder="เบอร์โทรศัพท์"
                                className="rounded-lg bg-white px-4 py-2 outline-offset-4"
                                id="phone"
                            />
                        </div>
                        <button
                            className="bg-normal hover:bg-dark w-fit cursor-pointer self-center rounded-full px-8 py-2 font-bold text-white transition-all duration-300 hover:scale-105"
                            type="submit"
                        >
                            ส่งข้อมูล
                        </button>
                    </form>
                </div>
            </section>
        </main>
    );
};

export default AboutPage;

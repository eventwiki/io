import { profileImg } from "@/public/assets";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="About Me" titleNo="α" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p>
            Hello! ปรีดิ์ปราโมทย์ เวชบุตร อายุ 16 ปี
            มุ่งมั่นเพื่อก้าวสู่เส้นทาง: กีฬาและการเรียนรู้!
            การเดินทางของฉันเริ่มต้นในปี 2020 แต่ด้วยมินิมาราธอน 5 กม.
            ที่จุดประกายความรักในการวิ่ง
            ฉันไม่รู้เลยว่ารอบแห่งชัยชนะจะเริ่มต้นการเดินทาง
            เพื่อก้าวข้ามขีดจำกัดและบรรลุเป้าหมาย
          </p>
          <p>
            ประสบการณ์แต่ละครั้ง ทำให้มุมมองของฉันกว้างขึ้น,และเพิ่มพูนทักษะ,
            ของฉัน,{" "}
            <span className="text-textGreen">
              แต่ นอกเหนือจาก การเรียนเเละการทำงาน พิเศษ.
            </span>
            กีฬาคือสนามฝึกฝนทักษะอยู่เสมอ! มินิมาราธอนทำให้ฉันมีร่างกายถึงขีดสุด
            และในสนาม คุณจะพบว่าฉันกำลังวางกลยุทธ์ในฐานะกองกลางในเกมฟุตบอล ⚽️{" "}
            <span className="text-textGreen">
              ในปี 2020 ฉันยังเข้าเส้นชัย ด้วยการชนะประเภท อายุต่ำกว่า 15 ปี
              มินิมาราธอน 5 กม.!!
            </span>
          </p>
          <p>
            ตอนนี้ฉันกระตือรือร้นที่จะเผชิญกับความท้าทายครั้งต่อไป
            และมุ่งมั่นที่จะศึกษาต่อ ไม่ใช่แค่การเรียนรู้สิ่งใหม่ๆ เท่านั้น
            แต่ยังเป็นการค้นหาเส้นทางที่เติมพลังให้กับความตั้งใจ
            และช่วยให้ฉันได้พัฒนา ศักยภาพสูงสุดของตัวเอง.
          </p>
          <p>นี่คือประสบการณ์ และ แรงบันดาลใจของฉัน</p>
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              JavaScript (ES6+)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Next.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              React
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Node.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              TypeScript
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Express.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              MongoDB
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Tailwindcss
            </li>
          </ul>
        </div>
        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg ">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
              <Image
                className="rounded-lg h-full object-cover"
                src={profileImg}
                alt="profileImg"
              />
              <div className="hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </div>
          <div className="hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default About;

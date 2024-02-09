import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const Amazon = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        a waiter
        <span className="text-textGreen tracking-wide">@Amazon</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Aug 2023 - Dec 2023
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          @Amazon สำหรับฉัน อาจหมายความถึง,@สามเสี่ยว : วังสามหมอ ตามนั้นละ
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          หากลูกค้า.. เขาหรือเธอจะสามารถบรรลุผลตามที่ต้องการได้ ความแตกต่าง
          เพื่อให้สามารถไปฝึกจาก..ได้เมื่อเกิดปฏิเสธ
          จิตใจของผู้กล่าวหาถูกผูกมัดด้วยสิ่งของความผิดของบางคน!
          ก็จะเป็นไปตามนั้น "นี่เป็นวิธีที่ลำบากที่สุดในบรรดาวิธีการเหล่านี้".
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          ขอบคุณมาก. อย่างไรและ ความต้องการทางกายภาพ? ปล่อยให้ความสุขถูกกำจัดไป
          แต่พวกเขาก็ทิ้งมันไว้ที่นี่เช่นกัน ติดตาม?
        </li>
      </ul>
    </motion.div>
  );
};

export default Amazon;

/** @format */
import React from "react";

import { MdDriveFileRenameOutline } from "react-icons/md";
import { FaBirthdayCake } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaRegAddressBook, FaStickyNote } from "react-icons/fa";
import styles from "./Detailinfo.module.css";
const DetailInfo = () => {
  return (
    <div className={styles.DetailInfoBox}>
      <strong>
        <MdDriveFileRenameOutline />
        <span>이름 : 손대훈</span>
      </strong>
      <strong>
        <FaBirthdayCake />
        <span>생년월일 : 1995년 1월 2일</span>
      </strong>
      <strong>
        <AiOutlineMail />
        <span>이메일 : thseo1758@naver.com</span>
      </strong>
      <strong>
        <BiSolidPhoneCall />
        <span>연락처 : 010-7599-1758</span>
      </strong>
      <strong>
        <FaRegAddressBook />
        <span>주소 : 경기도 평택시 현화중앙길53 </span>
      </strong>
    </div>
  );
};

export default DetailInfo;

import { useState } from "react";

export const useClock = (): [string, string, string] => {
  const [time, setTime] = useState("");
  const [todayDate, setTodayDate] = useState("");
  const [aP, setAP] = useState("");
  let stringMonth = "";
  let stringDate = "";
  let stringMinutes = "";

  setInterval(() => {
    clock();
  }, 1000);

  function clock() {
    let today = new Date();

    let year = today.getFullYear(); // 년도
    let month = today.getMonth() + 1; // 월
    let date = today.getDate(); // 날짜
    let hours = today.getHours(); // 시
    let minutes = today.getMinutes(); // 분

    //시간
    if (month < 10 && month.toString().length < 3) {
      stringMonth = "0" + month.toString();
    } else {
      stringMonth = month.toString();
    }

    if (date < 10 && date.toString().length < 3) {
      stringDate = "0" + date.toString();
    } else {
      stringDate = date.toString();
    }
    if (minutes < 10 && minutes.toString().length < 3) {
      stringMinutes = "0" + minutes.toString();
    } else {
      stringMinutes = minutes.toString();
    }
    if (hours > 12) {
      if (hours > 11) {
        setAP("오후");
      } else {
        setAP("오전");
      }

      hours = hours - 12;
    }
    if (hours === 0) {
      hours = 12;
    }
    setTime(hours + ":" + stringMinutes);
    setTodayDate(year + "-" + stringMonth + "-" + stringDate);
  }
  return [time, todayDate, aP];
};

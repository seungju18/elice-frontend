export const ChipType = {
  courseType: {
    "1": {
      value: JSON.stringify([{ courseType: 0 }, { courseType: 2 }]),
      name: "과목",
    },
    "2": {
      value: JSON.stringify([{ courseType: 2 }]),
      name: "챌린지",
    },
    "3": {
      value: JSON.stringify([{ courseType: 3 }]),
      name: "테스트",
    },
  },
  format: {
    "4": {
      value: JSON.stringify([{ format: 4 }]),
      name: "자유 선택형",
    },
    "5": {
      value: JSON.stringify([{ format: 5 }]),
      name: "순차 완료형",
    },
  },
  category: {
    "6": {
      value: JSON.stringify([{ category: 6 }]),
      name: "프로그래밍 기초",
    },
    "7": {
      value: JSON.stringify([{ category: 7 }]),
      name: "데이터 분석",
    },
    "8": {
      value: JSON.stringify([{ category: 8 }]),
      name: "웹",
    },
    "9": {
      value: JSON.stringify([{ category: 9 }]),
      name: "인공지능",
    },
    "10": {
      value: JSON.stringify([{ category: 10 }]),
      name: "알고리즘",
    },
  },
  level: {
    "11": {
      value: JSON.stringify([{ level: 11 }]),
      name: "입문",
    },
    "12": {
      value: JSON.stringify([{ level: 12 }]),
      name: "초급",
    },
    "13": {
      value: JSON.stringify([{ level: 13 }]),
      name: "중급",
    },
    "14": {
      value: JSON.stringify([{ level: 14 }]),
      name: "고급",
    },
    "15": {
      value: JSON.stringify([{ level: 15 }]),
      name: "심화",
    },
  },
  programmingLanguage: {
    "16": {
      value: JSON.stringify([{ programmingLanguage: 16 }]),
      name: "C",
    },
    "17": {
      value: JSON.stringify([{ programmingLanguage: 17 }]),
      name: "C++",
    },
    "18": {
      value: JSON.stringify([{ programmingLanguage: 18 }]),
      name: "자바",
    },
    "19": {
      value: JSON.stringify([{ programmingLanguage: 19 }]),
      name: "파이썬",
    },
    "20": {
      value: JSON.stringify([{ programmingLanguage: 20 }]),
      name: "자바스크립트",
    },
    "21": {
      value: JSON.stringify([{ programmingLanguage: 21 }]),
      name: "R",
    },
    "22": {
      value: JSON.stringify([{ programmingLanguage: 22 }]),
      name: "HTML/CSS",
    },
    "23": {
      value: JSON.stringify([{ programmingLanguage: 23 }]),
      name: "SQL",
    },
    "24": {
      value: JSON.stringify([{ programmingLanguage: 24 }]),
      name: "아두이노",
    },
    "25": {
      value: JSON.stringify([{ programmingLanguage: 25 }]),
      name: "스크래치",
    },
    "26": {
      value: JSON.stringify([{ programmingLanguage: 26 }]),
      name: "코틀린",
    },
    "27": {
      value: JSON.stringify([{ programmingLanguage: 27 }]),
      name: "스위프트",
    },
    "28": {
      value: JSON.stringify([{ programmingLanguage: 28 }]),
      name: "엔트리",
    },
  },
  price: {
    "29": {
      value: JSON.stringify([{ price: 29 }]),
      name: "무료",
    },
    "30": {
      value: JSON.stringify([{ price: 30 }]),
      name: "유료",
    },
    "31": {
      value: JSON.stringify([{ price: 31 }]),
      name: "구독",
    },
    "32": {
      value: JSON.stringify([{ price: 32 }]),
      name: "학점",
    },
  },
};

export type ChipURL =
  | "courseType"
  | "format"
  | "category"
  | "level"
  | "programmingLanguage"
  | "price";

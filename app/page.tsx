"use client";

import { useState } from "react";

export default function Home() {
  const [meme, setMeme] = useState("");

  const memeData = {
    process: [
      "오늘도 장비와 3시간째 대화 중...",
      "수율 99%인데 왜 혼나는지 모르겠다",
      "공정은 끝났지만 문제는 이제 시작이다",
      "야근은 공정의 일부입니다"
    ],

    design: [
      "버그 하나 잡았더니 세 개가 생겼다",
      "시뮬레이션은 성공했는데 현실은 실패",
      "RTL은 맞는데 결과가 틀리다",
      "설계보다 디버깅 시간이 더 길다"
    ],

    quality: [
      "불량률 0.01% 때문에 회의 3시간",
      "품질팀이 오면 모두 긴장한다",
      "문제는 없지만 보고서는 써야 한다",
      "원인 분석이 원인이다"
    ],

    equipment: [
      "장비는 정상인데 결과가 이상하다",
      "재부팅으로 해결되었습니다",
      "교체했더니 더 안 된다",
      "장비와의 눈치 싸움"
    ]
  };

  const generateMeme = (job: keyof typeof memeData) => {
    const list = memeData[job];
    const random = Math.floor(Math.random() * list.length);

    setMeme(list[random]);
  };

  return (
    <main className="min-h-screen p-10 flex flex-col items-center">

      <h1 className="text-4xl font-bold mb-2">
        🤣 반도체 밈 생성기
      </h1>

      <p className="mb-8">
        엔지니어들의 현실...
      </p>

      <div className="flex flex-wrap gap-4">

        <button
          onClick={() => generateMeme("process")}
          className="bg-blue-500 text-white px-5 py-3 rounded"
        >
          공정 엔지니어
        </button>

        <button
          onClick={() => generateMeme("design")}
          className="bg-green-500 text-white px-5 py-3 rounded"
        >
          설계 엔지니어
        </button>

        <button
          onClick={() => generateMeme("quality")}
          className="bg-red-500 text-white px-5 py-3 rounded"
        >
          품질 엔지니어
        </button>

        <button
          onClick={() => generateMeme("equipment")}
          className="bg-purple-500 text-white px-5 py-3 rounded"
        >
          장비 엔지니어
        </button>

      </div>

      <div className="mt-10 border rounded-lg p-8 w-full max-w-2xl text-center text-2xl">

        {meme || "직무를 선택하세요"}

      </div>

    </main>
  );
}
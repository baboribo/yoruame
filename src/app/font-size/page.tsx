"use client"
import { motion } from "motion/react";

export default function fontsizes() {
  return (
    <div>
      <header className="pt-24 pb-5 flex flex-col gap-1">
        <h3>폰트 사이즈</h3>
        <p>m_ny29*에서 쓰이는 폰트 크기들을 모아둔 페이지입니다.</p>
      </header>
      <motion.section initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.38, ease: [.15,.26,0,1] }} className="mt-0 gap-10 flex flex-col lg:ml-100">
        <div className="flex flex-col gap-1">
          <h4 className="text-[#e7c2f8]">h1</h4>
          <h1>
            거울 앞에 섰을 때, 반사되는 건 빛뿐이었다.
            <br />
            現実に気づいて、自分が何者でもないって分かった。
            <br />
            Standing before the mirror, only light reflected back.
            <br />
            我意识到现实，明白了自己什么都不是。
          </h1>
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="text-[#e7c2f8]">h2</h4>
          <h2>
            거울 앞에 섰을 때, 반사되는 건 빛뿐이었다.
            <br />
            現実に気づいて、自分が何者でもないって分かった。
            <br />
            Standing before the mirror, only light reflected back.
            <br />
            我意识到现实，明白了自己什么都不是。
          </h2>
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="text-[#e7c2f8]">h3</h4>
          <h3>
            거울 앞에 섰을 때, 반사되는 건 빛뿐이었다.
            <br />
            現実に気づいて、自分が何者でもないって分かった。
            <br />
            Standing before the mirror, only light reflected back.
            <br />
            我意识到现实，明白了自己什么都不是。
          </h3>
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="text-[#e7c2f8]">h4</h4>
          <h4>
            거울 앞에 섰을 때, 반사되는 건 빛뿐이었다.
            <br />
            現実に気づいて、自分が何者でもないって分かった。
            <br />
            Standing before the mirror, only light reflected back.
            <br />
            我意识到现实，明白了自己什么都不是。
          </h4>
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="text-[#e7c2f8]">h5</h4>
          <h5>
            거울 앞에 섰을 때, 반사되는 건 빛뿐이었다.
            <br />
            現実に気づいて、自分が何者でもないって分かった。
            <br />
            Standing before the mirror, only light reflected back.
            <br />
            我意识到现实，明白了自己什么都不是。
          </h5>
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="text-[#e7c2f8]">h6</h4>
          <h6>
            거울 앞에 섰을 때, 반사되는 건 빛뿐이었다.
            <br />
            現実に気づいて、自分が何者でもないって分かった。
            <br />
            Standing before the mirror, only light reflected back.
            <br />
            我意识到现实，明白了自己什么都不是。
          </h6>
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="text-[#e7c2f8]">p</h4>
          <p>
            거울 앞에 섰을 때, 반사되는 건 빛뿐이었다.
            <br />
            現実に気づいて、自分が何者でもないって分かった。
            <br />
            Standing before the mirror, only light reflected back.
            <br />
            我意识到现实，明白了自己什么都不是。
          </p>
        </div>
      </motion.section>
    </div>
  );
}

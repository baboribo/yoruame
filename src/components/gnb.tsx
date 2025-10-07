import { SiGithub } from '@icons-pack/react-simple-icons';
import Link from 'next/link';

export default function Gnb() {
  return (
    <div className="fixed backdrop-blur-xs top-0 left-0 right-0 bg-[#0f0e12cd] hover:bg-[#1c1a21] transition">
      <div className='flex pt-2 pb-2 pl-6 pr-6 w-full justify-between items-center'>
        <div className='flex gap-4 items-center'>
          <Link href='/' className='flex gap-4 items-center'>
            <img className="w-8.5 h-8.5 rounded-4xl" src="https://avatars.githubusercontent.com/u/71020988?v=4" alt="profile"/>
            <div className='flex gap-2 items-center'>
              <h5>m_ny9*</h5>
            </div>
          </Link>
          <div className='flex'>
            <Link href='/' className='pl-3 pr-3 pt-1 pb-1 rounded-4xl hover:bg-blend-overlay hover:bg-[#35313f] hover:blend-multiply transition' >
              <p>홈</p>
            </Link>
            <Link href='/about' className='pl-3 pr-3 pt-1 pb-1 rounded-4xl hover:bg-blend-overlay hover:bg-[#35313f] hover:blend-multiply transition' >
              <p>소개</p>
            </Link>
          </div>
        </div>
        <div className='flex gap-4 items-center'>
            <Link href='https://sora.yume.place'>
                <p className='opacity-70 hover:opacity-100 transition cursor-pointer'>날씨</p>
            </Link>
            <Link href='https://github.com/baboribo'>
                <SiGithub size={26} color="#ffffff" className='opacity-70 hover:opacity-100 transition cursor-pointer' />
            </Link>
        </div>
      </div>
    </div>
  );
}

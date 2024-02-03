import { GlobeAltIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function Logo() {
  return (
    <div
      className={`flex flex-row items-center leading-none text-white`}
    >
      <Image src='/sprite.PNG' alt='Chase sprite' width={88} height={88} />
      <p className="text-[44px]">Chase Malcom</p>
    </div>
  );
}

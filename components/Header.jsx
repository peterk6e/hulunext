import Image from "next/image"
import HeaderItem from "./HeaderItem"
import { HomeIcon, BadgeCheckIcon, CollectionIcon, LightningBoltIcon, SearchIcon, UserCircleIcon } from '@heroicons/react/outline'

const Header = () => {
  return (
    <header className='flex justify-between'>
    <div className="flex justify-evenly w-[400px] ">
        <HeaderItem title="HOME" Icon={<HomeIcon className='h-8 mb-1'/>} />
        <HeaderItem title="" icon=""/>
        <HeaderItem title="" icon=""/>
        <HeaderItem title="" icon=""/>
    </div>

      <Image
        width={280}
        height={100}
        className='object-contain'
        src='https://links.papareact.com/ua6'
      />
    </header>
  )
}

export default Header

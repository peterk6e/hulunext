import Image from "next/image"
import HeaderItem from "./HeaderItem"
import { HomeIcon, BadgeCheckIcon, CollectionIcon, LightningBoltIcon, SearchIcon, UserCircleIcon } from '@heroicons/react/outline'

const Header = () => {
  return (
    <header className='flex justify-between flex-col sm:flex-row m-5'>
    <div className="flex flex-grow justify-evenly max-w-2xl ">
        <HeaderItem title="HOME" Icon={<HomeIcon className='h-8 mb-1'/>} />
        <HeaderItem title="TRENDING" Icon={<LightningBoltIcon className='h-8 mb-1'/> }/>
        <HeaderItem title="VERIFIED" Icon={<BadgeCheckIcon className='h-8 mb-1'/>} />
        <HeaderItem title="SEARCH" Icon={<SearchIcon className='h-8 mb-1'/>} />
        <HeaderItem title="ACCOUNT" Icon={<UserCircleIcon className='h-8 mb-1'/>} />
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

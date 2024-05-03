import Image from 'next/image'

const OldAvatar = () => {
  return (
    <Image
      className="w-6 h-6 mr-4 border-2 rounded-full md:w-8 md:h-8 md:mr-6 lg:mr-0 lg:w-10 lg:h-10 lg:mb-8 border-entertainment-pure-white"
      src="/image-avatar.png"
      alt="icon"
      width={80}
      height={80}
    />
  )
}

export default OldAvatar

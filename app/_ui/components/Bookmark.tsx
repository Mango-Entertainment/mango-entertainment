import Image from 'next/image'

const Bookmark = ({bookmarked}: {bookmarked: boolean}) => {
  return (
    <>
      {bookmarked ? (
        <Image
          src="/icon-bookmark-full.svg"
          height={32}
          width={32}
          alt="bookmark icon"
        />
      ) : (
        <Image
          src="/icon-bookmark-empty.svg"
          height={32}
          width={32}
          alt="bookmark icon"
        />
      )}
    </>
  )
}

export default Bookmark

import { cx } from "class-variance-authority";

const HomeIcon = ({pathName}: {pathName: string}) => {
  return (
    <svg
      viewBox="0 0 20 20"
      className={cx(
        'hover:scale-125',
        pathName === '/'
          ? 'fill-entertainment-pure-white'
          : 'fill-entertainment-greyish-blue',
      )}
    >
      <path d="M8 0H1C.4 0 0 .4 0 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11H1c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1ZM19 0h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1Z" />
    </svg>
  )
};

export default HomeIcon;

'use client'
import Image from 'next/image'
import type {
  ChangeEvent,
  KeyboardEvent,
  Dispatch,
  SetStateAction,
} from 'react'
import { useRef } from 'react'
import { Input } from '@/components/ui/input'
import { useHotkeys } from 'react-hotkeys-hook'
import { Key } from 'ts-key-enum'
import { Button } from '@/components/ui/button'

const Search = ({
  search,
  setSearch,
  handleChange,
}: {
  search: string
  setSearch: Dispatch<SetStateAction<string>>
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Escape') {
      e.currentTarget.blur()
    }
  }

  useHotkeys(`${Key.Meta}+k, ${Key.Control}+k`, () => {
    inputRef.current?.focus()
  })

  return (
    <div className="my-2 ml-4 flex items-center pr-4 md:my-4 lg:mt-12">
      <Image
        className="mr-2 h-6 w-6 md:h-8 md:w-8"
        src="icon-search.svg"
        height={32}
        width={32}
        alt="search icon"
      />
      <Input
        className="block w-full border-0 bg-transparent text-base font-light text-entertainment-pure-white caret-entertainment-red placeholder:text-sm focus:border-entertainment-pure-white md:text-2xl md:placeholder:text-xl"
        type="text"
        placeholder="Search for movies or TV series ⌘/^ K"
        value={search}
        ref={inputRef}
        onChange={(e) => handleChange(e)}
        onKeyDown={(e) => handleKeyPress(e)}
      />
      <Button
        size="icon"
        onClick={() => setSearch('')}
        className="ml-2 bg-transparent text-xl text-entertainment-pure-white"
      >
        <div className="h-7 w-7 md:h-8 md:w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            fill="#e8eaed"
          >
            <path d="M360-200q-20 0-37.5-9T294-234L120-480l174-246q11-16 28.5-25t37.5-9h400q33 0 56.5 23.5T840-680v400q0 33-23.5 56.5T760-200H360Zm400-80v-400 400Zm-400 0h400v-400H360L218-480l142 200Zm96-40 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Z" />
          </svg>
        </div>
      </Button>
    </div>
  )
}

export default Search

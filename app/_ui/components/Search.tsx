'use client'
import Image from 'next/image'
import type {
  ChangeEvent,
  KeyboardEvent,
  Dispatch,
  SetStateAction,
} from 'react'
import {useRef} from 'react'
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
        className="h-6 w-6 md:h-8 md:w-8 mr-2"
        src="icon-search.svg"
        height={32}
        width={32}
        alt="search icon"
      />
      <Input
        className="block w-full border-0 bg-transparent text-base placeholder:text-sm md:placeholder:text-xl font-light text-entertainment-pure-white caret-entertainment-red focus:border-entertainment-pure-white md:text-2xl"
        type="text"
        placeholder="Search for movies or TV series ⌘/^ K"
        value={search}
        ref={inputRef}
        onChange={(e) => handleChange(e)}
        onKeyDown={(e) => handleKeyPress(e)}
      />
      <Button size="icon" onClick={() => setSearch('')} className="ml-2 bg-transparent text-xl text-entertainment-pure-white">
        ⌫
      </Button>
    </div>
  )
}

export default Search

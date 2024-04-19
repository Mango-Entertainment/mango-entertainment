'use client'
import Image from 'next/image'
import React, { type ChangeEvent, useRef, useState } from 'react'
import { Input } from '@/components/ui/input'
import { useHotkeys } from 'react-hotkeys-hook'
import { Key } from 'ts-key-enum'

const Search = ({
  search,
  handleChange,
}: {
  search: string
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}) => {
  const [focus, setFocus] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement>(null)
  useHotkeys(
    `${Key.Meta}+k, ${Key.Control}+k`,
    () => {
      setFocus(!focus)
      console.log(focus)
      // if (focus) {
      //   inputRef.current?.focus()
      // } else {
      //   inputRef.current?.blur()
      // }
    }
  )

  // useHotkeys(Key.Escape, () => {
  //   if (document.activeElement === inputRef.current) {
  //     inputRef.current?.blur()
  //   }
  // })

  return (
    <div className="my-2 ml-4 flex items-center pr-4 md:my-4 lg:mt-12">
      <Image
        className="h-6 w-6 md:h-8 md:w-8"
        src="icon-search.svg"
        height={32}
        width={32}
        alt="search icon"
      />
      <Input
        className="block w-full border-0 bg-transparent text-base font-light text-entertainment-pure-white caret-entertainment-red focus:border-entertainment-pure-white md:text-2xl"
        type="text"
        placeholder="Search for movies or TV series ⌘/^ K"
        value={search}
        ref={inputRef}
        onChange={(e) => handleChange(e)}
      />
    </div>
  )
}

export default Search

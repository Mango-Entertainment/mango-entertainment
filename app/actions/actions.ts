"use server"

import {auth} from "@clerk/nextjs"

export const bookmarkItem = async (selection_id: string) => {
    const {userId} = auth()
    console.log(`user with id ${userId} is bookmarking selection ${selection_id}`)
}
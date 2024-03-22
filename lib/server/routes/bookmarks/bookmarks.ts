import { z } from 'zod'
import { t } from '@/lib/server/trpc-server'
import prisma from '@/prisma/prisma.db'

export const bookmarkRouter = t.router({
    getBookmark: t.procedure
    .input(z.object({ user_id: z.string(), selection_id: z.string()}))
    .query(async ({ ctx, input }) => {
        const is_bookmarked = await prisma.bookmarks.findFirst({
            where: {
                user_id: input.user_id,
                selection_id: input.selection_id
            },
        })
        return is_bookmarked
    })
})
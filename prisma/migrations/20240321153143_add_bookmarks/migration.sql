/*
  Warnings:

  - You are about to drop the column `is_bookmarked` on the `Selection` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Selection" DROP COLUMN "is_bookmarked";

-- CreateTable
CREATE TABLE "Bookmarks" (
    "user_id" TEXT NOT NULL,
    "selection_id" TEXT NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Bookmarks_pkey" PRIMARY KEY ("user_id","selection_id")
);

-- AddForeignKey
ALTER TABLE "Bookmarks" ADD CONSTRAINT "Bookmarks_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bookmarks" ADD CONSTRAINT "Bookmarks_selection_id_fkey" FOREIGN KEY ("selection_id") REFERENCES "Selection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

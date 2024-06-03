/*
  Warnings:

  - You are about to drop the `Movies` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Series` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `selection_poster_path` to the `Bookmarks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `selection_title` to the `Bookmarks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `selection_year` to the `Bookmarks` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Bookmarks" ADD COLUMN     "selection_poster_path" TEXT NOT NULL,
ADD COLUMN     "selection_title" TEXT NOT NULL,
ADD COLUMN     "selection_year" TEXT NOT NULL;

-- DropTable
DROP TABLE "Movies";

-- DropTable
DROP TABLE "Series";

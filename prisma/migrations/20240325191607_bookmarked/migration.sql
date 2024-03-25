/*
  Warnings:

  - Added the required column `bookmarked` to the `Bookmarks` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Bookmarks" ADD COLUMN     "bookmarked" BOOLEAN NOT NULL;

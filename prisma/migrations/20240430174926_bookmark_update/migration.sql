/*
  Warnings:

  - Added the required column `selection_type` to the `Bookmarks` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Bookmarks" ADD COLUMN     "selection_type" TEXT NOT NULL;

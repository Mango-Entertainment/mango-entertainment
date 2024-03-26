/*
  Warnings:

  - You are about to drop the column `clerk_id` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "clerk_id";

-- CreateIndex
CREATE INDEX "Bookmarks_user_id_selection_id_idx" ON "Bookmarks"("user_id", "selection_id");

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

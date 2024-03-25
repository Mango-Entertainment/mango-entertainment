/*
  Warnings:

  - A unique constraint covering the columns `[user_id,selection_id]` on the table `Bookmarks` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Bookmarks_user_id_selection_id_key" ON "Bookmarks"("user_id", "selection_id");

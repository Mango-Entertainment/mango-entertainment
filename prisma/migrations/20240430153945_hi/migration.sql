/*
  Warnings:

  - You are about to drop the `RegularThumb` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Selection` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TrendingThumb` table. If the table is not empty, all the data it contains will be lost.
  - Changed the type of `selection_id` on the `Bookmarks` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Bookmarks" DROP CONSTRAINT "Bookmarks_selection_id_fkey";

-- DropForeignKey
ALTER TABLE "RegularThumb" DROP CONSTRAINT "RegularThumb_selection_id_fkey";

-- DropForeignKey
ALTER TABLE "TrendingThumb" DROP CONSTRAINT "TrendingThumb_selection_id_fkey";

-- AlterTable
ALTER TABLE "Bookmarks" DROP COLUMN "selection_id",
ADD COLUMN     "selection_id" INTEGER NOT NULL;

-- DropTable
DROP TABLE "RegularThumb";

-- DropTable
DROP TABLE "Selection";

-- DropTable
DROP TABLE "TrendingThumb";

-- CreateIndex
CREATE INDEX "Bookmarks_user_id_selection_id_idx" ON "Bookmarks"("user_id", "selection_id");

-- CreateIndex
CREATE UNIQUE INDEX "Bookmarks_user_id_selection_id_key" ON "Bookmarks"("user_id", "selection_id");

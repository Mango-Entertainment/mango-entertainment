-- CreateTable
CREATE TABLE "Movies" (
    "id" INTEGER NOT NULL,
    "adult" BOOLEAN NOT NULL,
    "backdrop_path" TEXT NOT NULL,
    "genre_ids" INTEGER[],
    "original_language" TEXT NOT NULL,
    "original_title" TEXT NOT NULL,
    "overview" TEXT NOT NULL,
    "popularity" INTEGER NOT NULL,
    "poster_path" TEXT NOT NULL,
    "release_date" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "video" BOOLEAN NOT NULL,
    "vote_average" INTEGER NOT NULL,
    "vote_count" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Series" (
    "id" INTEGER NOT NULL,
    "adult" BOOLEAN NOT NULL,
    "backdrop_path" TEXT NOT NULL,
    "genre_ids" INTEGER[],
    "origin_country" TEXT[],
    "original_language" TEXT NOT NULL,
    "original_name" TEXT NOT NULL,
    "overview" TEXT NOT NULL,
    "popularity" INTEGER NOT NULL,
    "poster_path" TEXT NOT NULL,
    "first_air_date" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "vote_average" INTEGER NOT NULL,
    "vote_count" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Movies_id_key" ON "Movies"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Series_id_key" ON "Series"("id");

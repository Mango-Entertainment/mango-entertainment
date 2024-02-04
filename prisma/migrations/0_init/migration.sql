-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255),
    "email" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Selection" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "year" INTEGER NOT NULL,
    "category" VARCHAR(255) NOT NULL,
    "rating" VARCHAR(255) NOT NULL,
    "is_bookmarked" BOOLEAN NOT NULL,
    "is_trending" BOOLEAN NOT NULL,

    CONSTRAINT "Selection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RegularThumb" (
    "id" TEXT NOT NULL,
    "large" VARCHAR(255) NOT NULL,
    "small" VARCHAR(255) NOT NULL,
    "medium" VARCHAR(255) NOT NULL,
    "selection_id" TEXT NOT NULL,

    CONSTRAINT "RegularThumb_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TrendingThumb" (
    "id" TEXT NOT NULL,
    "large" VARCHAR(255) NOT NULL,
    "small" VARCHAR(255) NOT NULL,
    "selection_id" TEXT NOT NULL,

    CONSTRAINT "TrendingThumb_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "RegularThumb_selection_id_key" ON "RegularThumb"("selection_id");

-- CreateIndex
CREATE UNIQUE INDEX "TrendingThumb_selection_id_key" ON "TrendingThumb"("selection_id");

-- AddForeignKey
ALTER TABLE "RegularThumb" ADD CONSTRAINT "RegularThumb_selection_id_fkey" FOREIGN KEY ("selection_id") REFERENCES "Selection"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "TrendingThumb" ADD CONSTRAINT "TrendingThumb_selection_id_fkey" FOREIGN KEY ("selection_id") REFERENCES "Selection"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;


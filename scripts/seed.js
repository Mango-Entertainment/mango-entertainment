const {db} = require('@vercel/postgres')
const {selections} = require('@/app/lib/data')

async function seedSelections(client) {
    try {
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`
        const createTable =
          await client.sql`CREATE TABLE IF NOT EXISTS selections (
            "title" text,
            "thumbnail.trending.small" text NULL,
            "thumbnail.trending.large" text NULL,
            "thumbnail.regular.small" text,
            "thumbnail.regular.medium" text,
            "thumbnail.regular.large" text,
            "year" bigint,
            "category" text,
            "rating" text,
            "isBookmarked" boolean,
            "isTrending" boolean
        );`;
        console.log('created selections table')
        const insertedSelections =
          await client.sql`('Beyond Earth','./assets/thumbnails/beyond-earth/trending/small.jpg','./assets/thumbnails/beyond-earth/trending/large.jpg','./assets/thumbnails/beyond-earth/regular/small.jpg','./assets/thumbnails/beyond-earth/regular/medium.jpg','./assets/thumbnails/beyond-earth/regular/large.jpg',2019,'Movie','PG',FALSE,TRUE),
('Bottom Gear','./assets/thumbnails/bottom-gear/trending/small.jpg','./assets/thumbnails/bottom-gear/trending/large.jpg','./assets/thumbnails/bottom-gear/regular/small.jpg','./assets/thumbnails/bottom-gear/regular/medium.jpg','./assets/thumbnails/bottom-gear/regular/large.jpg',2021,'Movie','PG',FALSE,TRUE),
('Undiscovered Cities','./assets/thumbnails/undiscovered-cities/trending/small.jpg','./assets/thumbnails/undiscovered-cities/trending/large.jpg','./assets/thumbnails/undiscovered-cities/regular/small.jpg','./assets/thumbnails/undiscovered-cities/regular/medium.jpg','./assets/thumbnails/undiscovered-cities/regular/large.jpg',2019,'TV Series','E',FALSE,TRUE),
('1998','./assets/thumbnails/1998/trending/small.jpg','./assets/thumbnails/1998/trending/large.jpg','./assets/thumbnails/1998/regular/small.jpg','./assets/thumbnails/1998/regular/medium.jpg','./assets/thumbnails/1998/regular/large.jpg',2021,'Movie','18+',FALSE,TRUE),
('Dark Side of the Moon','./assets/thumbnails/dark-side-of-the-moon/trending/small.jpg','./assets/thumbnails/dark-side-of-the-moon/trending/large.jpg','./assets/thumbnails/dark-side-of-the-moon/regular/small.jpg','./assets/thumbnails/dark-side-of-the-moon/regular/medium.jpg','./assets/thumbnails/dark-side-of-the-moon/regular/large.jpg',2018,'TV Series','PG',TRUE,TRUE),
('The Great Lands',NULL,NULL,'./assets/thumbnails/the-great-lands/regular/small.jpg','./assets/thumbnails/the-great-lands/regular/medium.jpg','./assets/thumbnails/the-great-lands/regular/large.jpg',2019,'Movie','E',FALSE,FALSE),
('The Diary',NULL,NULL,'./assets/thumbnails/the-diary/regular/small.jpg','./assets/thumbnails/the-diary/regular/medium.jpg','./assets/thumbnails/the-diary/regular/large.jpg',2019,'TV Series','PG',FALSE,FALSE),
('Earth’s Untouched',NULL,NULL,'./assets/thumbnails/earths-untouched/regular/small.jpg','./assets/thumbnails/earths-untouched/regular/medium.jpg','./assets/thumbnails/earths-untouched/regular/large.jpg',2017,'Movie','18+',TRUE,FALSE),
('No Land Beyond',NULL,NULL,'./assets/thumbnails/no-land-beyond/regular/small.jpg','./assets/thumbnails/no-land-beyond/regular/medium.jpg','./assets/thumbnails/no-land-beyond/regular/large.jpg',2019,'Movie','E',FALSE,FALSE),
('During the Hunt',NULL,NULL,'./assets/thumbnails/during-the-hunt/regular/small.jpg','./assets/thumbnails/during-the-hunt/regular/medium.jpg','./assets/thumbnails/during-the-hunt/regular/large.jpg',2016,'TV Series','PG',FALSE,FALSE),
('Autosport the Series',NULL,NULL,'./assets/thumbnails/autosport-the-series/regular/small.jpg','./assets/thumbnails/autosport-the-series/regular/medium.jpg','./assets/thumbnails/autosport-the-series/regular/large.jpg',2016,'TV Series','18+',FALSE,FALSE),
('Same Answer II',NULL,NULL,'./assets/thumbnails/same-answer-2/regular/small.jpg','./assets/thumbnails/same-answer-2/regular/medium.jpg','./assets/thumbnails/same-answer-2/regular/large.jpg',2017,'Movie','E',FALSE,FALSE),
('Below Echo',NULL,NULL,'./assets/thumbnails/below-echo/regular/small.jpg','./assets/thumbnails/below-echo/regular/medium.jpg','./assets/thumbnails/below-echo/regular/large.jpg',2016,'TV Series','PG',FALSE,FALSE),
('The Rockies',NULL,NULL,'./assets/thumbnails/the-rockies/regular/small.jpg','./assets/thumbnails/the-rockies/regular/medium.jpg','./assets/thumbnails/the-rockies/regular/large.jpg',2015,'TV Series','E',TRUE,FALSE),
('Relentless',NULL,NULL,'./assets/thumbnails/relentless/regular/small.jpg','./assets/thumbnails/relentless/regular/medium.jpg','./assets/thumbnails/relentless/regular/large.jpg',2017,'Movie','PG',TRUE,FALSE),
('Community of Ours',NULL,NULL,'./assets/thumbnails/community-of-ours/regular/small.jpg','./assets/thumbnails/community-of-ours/regular/medium.jpg','./assets/thumbnails/community-of-ours/regular/large.jpg',2018,'TV Series','18+',FALSE,FALSE),
('Van Life',NULL,NULL,'./assets/thumbnails/van-life/regular/small.jpg','./assets/thumbnails/van-life/regular/medium.jpg','./assets/thumbnails/van-life/regular/large.jpg',2015,'Movie','PG',FALSE,FALSE),
('The Heiress',NULL,NULL,'./assets/thumbnails/the-heiress/regular/small.jpg','./assets/thumbnails/the-heiress/regular/medium.jpg','./assets/thumbnails/the-heiress/regular/large.jpg',2021,'Movie','PG',TRUE,FALSE),
('Off the Track',NULL,NULL,'./assets/thumbnails/off-the-track/regular/small.jpg','./assets/thumbnails/off-the-track/regular/medium.jpg','./assets/thumbnails/off-the-track/regular/large.jpg',2017,'Movie','18+',TRUE,FALSE),
('Whispering Hill',NULL,NULL,'./assets/thumbnails/whispering-hill/regular/small.jpg','./assets/thumbnails/whispering-hill/regular/medium.jpg','./assets/thumbnails/whispering-hill/regular/large.jpg',2017,'Movie','E',FALSE,FALSE),
('112',NULL,NULL,'./assets/thumbnails/112/regular/small.jpg','./assets/thumbnails/112/regular/medium.jpg','./assets/thumbnails/112/regular/large.jpg',2013,'TV Series','PG',FALSE,FALSE),
('Lone Heart',NULL,NULL,'./assets/thumbnails/lone-heart/regular/small.jpg','./assets/thumbnails/lone-heart/regular/medium.jpg','./assets/thumbnails/lone-heart/regular/large.jpg',2017,'Movie','E',TRUE,FALSE),
('Production Line',NULL,NULL,'./assets/thumbnails/production-line/regular/small.jpg','./assets/thumbnails/production-line/regular/medium.jpg','./assets/thumbnails/production-line/regular/large.jpg',2018,'TV Series','PG',FALSE,FALSE),
('Dogs',NULL,NULL,'./assets/thumbnails/dogs/regular/small.jpg','./assets/thumbnails/dogs/regular/medium.jpg','./assets/thumbnails/dogs/regular/large.jpg',2016,'TV Series','E',TRUE,FALSE),
('Asia in 24 Days',NULL,NULL,'./assets/thumbnails/asia-in-24-days/regular/small.jpg','./assets/thumbnails/asia-in-24-days/regular/medium.jpg','./assets/thumbnails/asia-in-24-days/regular/large.jpg',2020,'TV Series','PG',FALSE,FALSE),
('The Tasty Tour',NULL,NULL,'./assets/thumbnails/the-tasty-tour/regular/small.jpg','./assets/thumbnails/the-tasty-tour/regular/medium.jpg','./assets/thumbnails/the-tasty-tour/regular/large.jpg',2016,'TV Series','PG',FALSE,FALSE),
('Darker',NULL,NULL,'./assets/thumbnails/darker/regular/small.jpg','./assets/thumbnails/darker/regular/medium.jpg','./assets/thumbnails/darker/regular/large.jpg',2017,'Movie','18+',TRUE,FALSE),
('Unresolved Cases',NULL,NULL,'./assets/thumbnails/unresolved-cases/regular/small.jpg','./assets/thumbnails/unresolved-cases/regular/medium.jpg','./assets/thumbnails/unresolved-cases/regular/large.jpg',2018,'TV Series','18+',FALSE,FALSE),
('Mission: Saturn',NULL,NULL,'./assets/thumbnails/mission-saturn/regular/small.jpg','./assets/thumbnails/mission-saturn/regular/medium.jpg','./assets/thumbnails/mission-saturn/regular/large.jpg',2017,'Movie','PG',TRUE,FALSE);`;
// console.log(`seeded${insertedSelections.length} selections`)
return {createTable, selections: insertedSelections}
    } catch (error) {
        console.error("error seeding")
        throw error
    }
}

async function main() {
    const client = await db.connect()
    await seedSelections(client)
    await client.end()
}
main().catch((error) => {
    console.error("an error occured, ", error)
})
/*
  Warnings:

  - You are about to drop the column `isRetweeted` on the `Tweets` table. All the data in the column will be lost.
  - You are about to drop the column `ownerId` on the `Tweets` table. All the data in the column will be lost.
  - You are about to drop the column `referenceTweetId` on the `Tweets` table. All the data in the column will be lost.
  - Added the required column `userId` to the `Tweets` table without a default value. This is not possible if the table is not empty.
  - Made the column `textContent` on table `Tweets` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Tweets` DROP COLUMN `isRetweeted`,
    DROP COLUMN `ownerId`,
    DROP COLUMN `referenceTweetId`,
    ADD COLUMN `userId` VARCHAR(191) NOT NULL,
    MODIFY `textContent` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `Likes` (
    `userId` VARCHAR(191) NOT NULL,
    `tweetId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`userId`, `tweetId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Retweets` (
    `userId` VARCHAR(191) NOT NULL,
    `referenceTweetId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`referenceTweetId`, `userId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Feed` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Feed_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FeedTweets` (
    `id` VARCHAR(191) NOT NULL,
    `tweetId` VARCHAR(191) NOT NULL,
    `feedId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Tweets` ADD CONSTRAINT `Tweets_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Likes` ADD CONSTRAINT `Likes_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Likes` ADD CONSTRAINT `Likes_tweetId_fkey` FOREIGN KEY (`tweetId`) REFERENCES `Tweets`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Retweets` ADD CONSTRAINT `Retweets_referenceTweetId_fkey` FOREIGN KEY (`referenceTweetId`) REFERENCES `Tweets`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Retweets` ADD CONSTRAINT `Retweets_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Feed` ADD CONSTRAINT `Feed_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FeedTweets` ADD CONSTRAINT `FeedTweets_tweetId_fkey` FOREIGN KEY (`tweetId`) REFERENCES `Tweets`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FeedTweets` ADD CONSTRAINT `FeedTweets_feedId_fkey` FOREIGN KEY (`feedId`) REFERENCES `Feed`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

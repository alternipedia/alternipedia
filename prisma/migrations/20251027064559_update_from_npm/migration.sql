/*
  Warnings:

  - Added the required column `language` to the `ModeratorBias` table without a default value. This is not possible if the table is not empty.
  - Added the required column `language` to the `Thread` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ModeratorBias" ADD COLUMN     "language" "Language" NOT NULL;

-- AlterTable
ALTER TABLE "Thread" ADD COLUMN     "language" "Language" NOT NULL;

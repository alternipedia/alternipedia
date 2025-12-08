/*
  Warnings:

  - You are about to alter the column `name` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(300)`.
  - You are about to drop the `BiasBan` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UploadedBlobs` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[slug]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "ThreadStatus" AS ENUM ('OPEN', 'IN_REVIEW', 'RESOLVED', 'DUPLICATE');

-- CreateEnum
CREATE TYPE "ReportStatus" AS ENUM ('PENDING', 'RESOLVED', 'DISMISSED');

-- DropForeignKey
ALTER TABLE "public"."BiasBan" DROP CONSTRAINT "BiasBan_bannedByUserId_fkey";

-- DropForeignKey
ALTER TABLE "public"."BiasBan" DROP CONSTRAINT "BiasBan_biasId_fkey";

-- DropForeignKey
ALTER TABLE "public"."BiasBan" DROP CONSTRAINT "BiasBan_userEmail_fkey";

-- DropForeignKey
ALTER TABLE "public"."UploadedBlobs" DROP CONSTRAINT "UploadedBlobs_biasId_fkey";

-- DropForeignKey
ALTER TABLE "public"."UploadedBlobs" DROP CONSTRAINT "UploadedBlobs_uploadedByUserId_fkey";

-- DropIndex
DROP INDEX "public"."Article_title_language_key";

-- AlterTable
ALTER TABLE "Feedback" ALTER COLUMN "content" SET DATA TYPE VARCHAR(2000);

-- AlterTable
ALTER TABLE "Revision" ADD COLUMN     "violatesLaw" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "violatesLawSetByUserId" INTEGER;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "slug" VARCHAR(100),
ALTER COLUMN "name" SET DATA TYPE VARCHAR(300);

-- DropTable
DROP TABLE "public"."BiasBan";

-- DropTable
DROP TABLE "public"."UploadedBlobs";

-- CreateTable
CREATE TABLE "Ban" (
    "id" SERIAL NOT NULL,
    "userEmail" TEXT NOT NULL,
    "biasId" INTEGER NOT NULL,
    "bannedByUserId" TEXT NOT NULL,
    "reason" VARCHAR(2000) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiresAt" TIMESTAMP(3),

    CONSTRAINT "Ban_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PageView" (
    "id" SERIAL NOT NULL,
    "articleId" INTEGER,
    "revisionId" INTEGER,
    "viewerId" TEXT,
    "ipAddress" TEXT,
    "userAgent" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PageView_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Thread" (
    "id" SERIAL NOT NULL,
    "articleId" INTEGER NOT NULL,
    "biasId" INTEGER NOT NULL,
    "authorId" TEXT NOT NULL,
    "referencesRevisionId" INTEGER,
    "violatesLaw" BOOLEAN NOT NULL DEFAULT false,
    "violationSetByUserId" INTEGER,
    "status" "ThreadStatus" NOT NULL DEFAULT 'OPEN',
    "title" VARCHAR(300) NOT NULL,
    "content" VARCHAR(2000) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Thread_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reports" (
    "id" SERIAL NOT NULL,
    "reportedById" TEXT NOT NULL,
    "status" "ReportStatus" NOT NULL,
    "reason" VARCHAR(2000) NOT NULL,
    "threadId" INTEGER,
    "commentId" INTEGER,
    "revisionId" INTEGER,
    "blobId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Reports_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ThreadComment" (
    "id" SERIAL NOT NULL,
    "threadId" INTEGER NOT NULL,
    "authorId" TEXT NOT NULL,
    "content" VARCHAR(2000) NOT NULL,
    "violatesLaw" BOOLEAN NOT NULL DEFAULT false,
    "violationSetByUserId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ThreadComment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ThreadCommentLikes" (
    "id" SERIAL NOT NULL,
    "commentId" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ThreadCommentLikes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Blob" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "biasId" INTEGER NOT NULL,
    "tier" "SubscriptionTier" NOT NULL DEFAULT 'FREE',
    "uploadedByUserId" TEXT NOT NULL,
    "violatesLaw" BOOLEAN NOT NULL DEFAULT false,
    "violatesLawSetByUserId" INTEGER,
    "uploadedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Blob_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Ban_userEmail_biasId_key" ON "Ban"("userEmail", "biasId");

-- CreateIndex
CREATE UNIQUE INDEX "Reports_reportedById_threadId_key" ON "Reports"("reportedById", "threadId");

-- CreateIndex
CREATE UNIQUE INDEX "Reports_reportedById_commentId_key" ON "Reports"("reportedById", "commentId");

-- CreateIndex
CREATE UNIQUE INDEX "Reports_reportedById_revisionId_key" ON "Reports"("reportedById", "revisionId");

-- CreateIndex
CREATE UNIQUE INDEX "Reports_reportedById_blobId_key" ON "Reports"("reportedById", "blobId");

-- CreateIndex
CREATE UNIQUE INDEX "ThreadCommentLikes_commentId_userId_key" ON "ThreadCommentLikes"("commentId", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "Blob_url_key" ON "Blob"("url");

-- CreateIndex
CREATE UNIQUE INDEX "User_slug_key" ON "User"("slug");

-- AddForeignKey
ALTER TABLE "Ban" ADD CONSTRAINT "Ban_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ban" ADD CONSTRAINT "Ban_biasId_fkey" FOREIGN KEY ("biasId") REFERENCES "Bias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ban" ADD CONSTRAINT "Ban_bannedByUserId_fkey" FOREIGN KEY ("bannedByUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PageView" ADD CONSTRAINT "PageView_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "Article"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PageView" ADD CONSTRAINT "PageView_revisionId_fkey" FOREIGN KEY ("revisionId") REFERENCES "Revision"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PageView" ADD CONSTRAINT "PageView_viewerId_fkey" FOREIGN KEY ("viewerId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Thread" ADD CONSTRAINT "Thread_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "Article"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Thread" ADD CONSTRAINT "Thread_biasId_fkey" FOREIGN KEY ("biasId") REFERENCES "Bias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Thread" ADD CONSTRAINT "Thread_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Thread" ADD CONSTRAINT "Thread_referencesRevisionId_fkey" FOREIGN KEY ("referencesRevisionId") REFERENCES "Revision"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Thread" ADD CONSTRAINT "Thread_violationSetByUserId_fkey" FOREIGN KEY ("violationSetByUserId") REFERENCES "ModeratorBias"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reports" ADD CONSTRAINT "Reports_reportedById_fkey" FOREIGN KEY ("reportedById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reports" ADD CONSTRAINT "Reports_threadId_fkey" FOREIGN KEY ("threadId") REFERENCES "Thread"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reports" ADD CONSTRAINT "Reports_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "ThreadComment"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reports" ADD CONSTRAINT "Reports_revisionId_fkey" FOREIGN KEY ("revisionId") REFERENCES "Revision"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reports" ADD CONSTRAINT "Reports_blobId_fkey" FOREIGN KEY ("blobId") REFERENCES "Blob"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ThreadComment" ADD CONSTRAINT "ThreadComment_threadId_fkey" FOREIGN KEY ("threadId") REFERENCES "Thread"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ThreadComment" ADD CONSTRAINT "ThreadComment_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ThreadComment" ADD CONSTRAINT "ThreadComment_violationSetByUserId_fkey" FOREIGN KEY ("violationSetByUserId") REFERENCES "ModeratorBias"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ThreadCommentLikes" ADD CONSTRAINT "ThreadCommentLikes_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "ThreadComment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ThreadCommentLikes" ADD CONSTRAINT "ThreadCommentLikes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Revision" ADD CONSTRAINT "Revision_violatesLawSetByUserId_fkey" FOREIGN KEY ("violatesLawSetByUserId") REFERENCES "ModeratorBias"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Blob" ADD CONSTRAINT "Blob_biasId_fkey" FOREIGN KEY ("biasId") REFERENCES "Bias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Blob" ADD CONSTRAINT "Blob_uploadedByUserId_fkey" FOREIGN KEY ("uploadedByUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Blob" ADD CONSTRAINT "Blob_violatesLawSetByUserId_fkey" FOREIGN KEY ("violatesLawSetByUserId") REFERENCES "ModeratorBias"("id") ON DELETE SET NULL ON UPDATE CASCADE;

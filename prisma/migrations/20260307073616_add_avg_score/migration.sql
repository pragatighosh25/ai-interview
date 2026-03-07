/*
  Warnings:

  - You are about to drop the column `score` on the `InterviewSession` table. All the data in the column will be lost.
  - Added the required column `avgScore` to the `InterviewSession` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "InterviewSession" DROP COLUMN "score",
ADD COLUMN     "avgScore" DOUBLE PRECISION NOT NULL;

/*
  Warnings:

  - Added the required column `accesLevelId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "accesLevelId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "AccessLevel" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "User" ADD FOREIGN KEY ("accesLevelId") REFERENCES "AccessLevel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

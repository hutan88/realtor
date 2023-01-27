/*
  Warnings:

  - You are about to drop the column `user_type` on the `User` table. All the data in the column will be lost.
  - Added the required column `usertype` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "user_type",
ADD COLUMN     "usertype" "UserType" NOT NULL;

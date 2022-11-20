/*
  Warnings:

  - You are about to drop the `categories` table. If the table is not empty, all the data it contains will be lost.
  - Changed the type of `barcode` on the `products` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropIndex
DROP INDEX "products_barcode_key";

-- AlterTable
ALTER TABLE "products" DROP COLUMN "barcode",
ADD COLUMN     "barcode" INTEGER NOT NULL;

-- DropTable
DROP TABLE "categories";

-- CreateTable
CREATE TABLE "category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "category_pkey" PRIMARY KEY ("id")
);

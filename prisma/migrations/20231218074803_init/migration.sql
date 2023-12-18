-- CreateEnum
CREATE TYPE "ActivityType" AS ENUM ('Kuliah', 'Praktikum', 'Seminar', 'Lainnya');

-- CreateEnum
CREATE TYPE "ApprovedStatus" AS ENUM ('Accepted', 'Rejected', 'Pending');

-- CreateEnum
CREATE TYPE "RoleType" AS ENUM ('Admin', 'User');

-- CreateTable
CREATE TABLE "KegiatanLab" (
    "id" SERIAL NOT NULL,
    "jenis_kegiatan" "ActivityType" NOT NULL,
    "nama_kegiatan" TEXT NOT NULL,
    "nama_pemohon" TEXT NOT NULL,
    "email_pemohon" TEXT NOT NULL,
    "tanggal" TIMESTAMP(3) NOT NULL,
    "start_time" TEXT NOT NULL,
    "end_time" TEXT NOT NULL,
    "dosen_penanggung_jawab" TEXT NOT NULL,
    "approved" "ApprovedStatus" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "KegiatanLab_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "role" "RoleType" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

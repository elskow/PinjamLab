-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "role" TEXT DEFAULT 'Mahasiswa'
);

-- CreateTable
CREATE TABLE "LabAdmins" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "role" TEXT DEFAULT 'Asisten Lab'
);

-- CreateTable
CREATE TABLE "Borrow" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "labAdminId" INTEGER NOT NULL,
    "Usage" TEXT,
    "Date" DATETIME,
    "Duration" INTEGER,
    "statusId" INTEGER NOT NULL,
    CONSTRAINT "Borrow_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Borrow_labAdminId_fkey" FOREIGN KEY ("labAdminId") REFERENCES "LabAdmins" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Borrow_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "BorrowStatus" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "BorrowStatus" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "status" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "LabAdmins_email_key" ON "LabAdmins"("email");

-- CreateIndex
CREATE UNIQUE INDEX "BorrowStatus_status_key" ON "BorrowStatus"("status");

generator client {
    provider = "prisma-client-js"
  }
  
  datasource db {
    provider = "postgresql"
    url      = env("DATABASE_URL")
  }
  
  model User {
    id       Int       @id @default(autoincrement())
    username String
    email    String     @unique
    password String
    posts    BlogPost[]
  }
  
  model BlogPost {
    id       Int    @id @default(autoincrement())
    title    String
    content  String
    poster   String
    userId   Int
    user     User   @relation(fields: [userId], references: [id])
  }
  
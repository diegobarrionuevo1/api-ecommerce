import { PrismaClient } from '@prisma/client';

interface CustomNodeJsGlobal extends Global {
  prisma: PrismaClient;
}


declare const global: CustomNodeJsGlobal;


const initPrisma = () => {
  if (process.env.NODE_ENV === 'production') {
    return new PrismaClient();
  } else {
    if (!global.prisma) {
      global.prisma = new PrismaClient();
    }
    return global.prisma;
  }
};

let prisma: PrismaClient;
prisma = initPrisma();

export default prisma;
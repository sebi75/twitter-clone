import { PrismaClient } from "@prisma/client";

import { env } from "../../env/server.mjs";
import { EnvModeEnum } from '../../types';

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

export const prisma =
  global.prisma ||
  new PrismaClient({
    log:
      env.NODE_ENV === EnvModeEnum.development ? ["query", "error", "warn"] : ["error"],
  });

if (env.NODE_ENV !== "production") {
  global.prisma = prisma;
}

import { rateLimit } from "express-rate-limit";
import { RedisStore } from "rate-limit-redis";
import redisClient from "../config/redis.js";

export const globalRateLimit = (maxreq, time, prefix = "global") => {
  return rateLimit({
    max: maxreq,
    windowMs: time,
    store: new RedisStore({
      sendCommand: (...args) => redisClient.call(...args),
      prefix: `rl:${prefix}:`,
    }),
    message: {
      error: "Too many requests, please wait a few minutes.",
    },
    standardHeaders: true,
    legacyHeaders: false,
    skip: (req) => req.path === "/",
  });
};

import Redis from "ioredis";

const redisClient = new Redis(process.env.REDIS_URL);

redisClient.on("error", (err) => console.log(err));

export default redisClient;

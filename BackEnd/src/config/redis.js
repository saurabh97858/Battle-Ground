import { createClient } from 'redis';

let lastRedisErrorLogAt = 0;

const redisOptions = process.env.REDIS_URL
    ? { url: process.env.REDIS_URL }
    : {
        username: process.env.REDIS_USERNAME || 'default',
        password: process.env.REDIS_PASSWORD,
        socket: {
            host: process.env.REDIS_HOST || '127.0.0.1',
            port: Number(process.env.REDIS_PORT) || 6379,
            reconnectStrategy: (retries) => Math.min(retries * 250, 3000),
            keepAlive: 5000
        }
    };

export const redisClient = createClient(redisOptions);

redisClient.on('error', (err) => {
    const now = Date.now();
    if (now - lastRedisErrorLogAt > 10000) {
        console.error('Redis Client Error:', err?.code || err?.message || err);
        lastRedisErrorLogAt = now;
    }
});

redisClient.on('reconnecting', () => {
    console.warn('Redis reconnecting...');
});

redisClient.on('ready', () => {
    console.log('Redis client ready.');
});

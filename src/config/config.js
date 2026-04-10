const dotenv = require('dotenv');
const { z } = require('zod');

// Load environment variables from .env file
dotenv.config();

const envSchema = z.object({
  PORT: z.string().transform((val) => parseInt(val, 10)).default('8000'),
  DATABASE_URL: z.string().url(),
  JWT_SECRET: z.string().min(1, "JWT_SECRET is required"),
  NODE_ENV: z.enum(['Development', 'Production', 'Test']).default('Development'),
  ORIGIN_URL: z.string().url().optional().default('http://localhost:3000'),
  SMTP_HOST: z.string().min(1, "SMTP_HOST is required"),
  SMTP_PORT: z.string().transform((val) => parseInt(val, 10)).default('587'),
  SMTP_USER: z.string().min(1, "SMTP_USER is required"),
  SMTP_PASS: z.string().min(1, "SMTP_PASS is required"),
  SMTP_FROM: z.string().email("SMTP_FROM must be a valid email"),
  ADMIN_EMAIL : z.string().email(),
  ADMIN_PASSWORD : z.string().min(1, "ADMIN_PASSWORD is required"),
  ADMIN_NAME : z.string().min(1, "ADMIN_NAME is required"),
  ADMIN_ROLE : z.string().min(1, "ADMIN_ROLE is required"),
});

const _env = envSchema.safeParse(process.env);

if (!_env.success) {
  console.error('❌ Invalid environment variables:', _env.error.format());
  process.exit(1);
}

const config = _env.data;

module.exports = config;

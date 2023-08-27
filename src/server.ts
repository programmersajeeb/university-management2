import { Server } from 'http';
import mongoose from 'mongoose';
import app from './app';
import config from './config';
import { errorLogger, logger } from './shared/logger';

process.on('uncaughtException', error => {
  errorLogger.error(error);
  process.exit(1);
});

let server: Server;

async function bootstrap() {
  try {
    await mongoose.connect(config.databse_url as string);
    logger.info('Database connect successfully');

    server = app.listen(config.port, () => {
      logger.info(`Database listening on port ${config.port}`);
    });
  } catch (error) {
    errorLogger.error('Failed to connect the databse', error);
  }

  process.on('unhandledRejection', error => {
    if (server) {
      server.close(() => {
        errorLogger.error(error);
        process.exit(1);
      });
    }
    process.exit(1);
  });
}

bootstrap();

process.on('SIGTERM', () => {
  logger.info('sigterm is rechive');
  if (server) {
    server.close();
  }
});

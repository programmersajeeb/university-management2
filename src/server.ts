import mongoose from 'mongoose';
import app from './app';
import config from './config';
import { errorLogger, logger } from './shared/logger';

async function bootstrap() {
  try {
    await mongoose.connect(config.databse_url as string);
    logger.info('Database connect successfully');

    app.listen(config.port, () => {
      logger.info(`Database listening on port ${config.port}`);
    });
  } catch (error) {
    errorLogger.error('Failed to connect the databse', error);
  }
}

bootstrap();

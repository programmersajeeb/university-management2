import mongoose from 'mongoose';
import app from './app';
import config from './config';

async function bootstrap() {
  try {
    await mongoose.connect(config.databse_url as string);
    console.log('Database connect successfully');

    app.listen(config.port, () => {
      console.log(`Database listening on port ${config.port}`);
    });
  } catch (error) {
    console.log('Failed to connect the databse', error);
  }
}

bootstrap();

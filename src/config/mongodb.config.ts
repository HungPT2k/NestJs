import { registerAs } from '@nestjs/config';

/**
 * Mongo database connection config
 */
export default registerAs('mongodb', () => {
  // const { MONGO_URI } = process.env;

  return {
    uri: `mongodb://mongodb:69sJyZmENXQd@103.20.144.71/?authMechanism=DEFAULT`,
  };
});

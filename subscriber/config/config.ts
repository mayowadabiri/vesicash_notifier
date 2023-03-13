interface IConfig {
  mongo_url: string;
  PORT: number;
  base_url: string;
}

const config: { [key: string]: IConfig } = {
  development: {
    mongo_url: process.env.MONGO_URL!,
    PORT: 9000,
    base_url: process.env.BASE_URL!,
  },
};

export default config[process.env.environment || 'development'];

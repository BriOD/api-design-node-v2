import mongoose from 'mongoose';
mongoose.Promise = global.Promise;

export const connect = () => {
  return mongoose.connect(
    'mongodb://brian:password@ds121665.mlab.com:21665/api-design',
    {
      useMongoClient: true
    }
  );
};

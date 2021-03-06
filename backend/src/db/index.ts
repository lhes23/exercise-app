import mongoose from "mongoose";

const dbConnect = () => {
  if (!process.env.MONGODB_URI) return console.log(`No Database Connected!`);
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() =>
      console.log(`Connected to the Database : ${process.env.DB_NAME}`)
    )
    .catch((err) => console.log(err));
};

export default dbConnect;

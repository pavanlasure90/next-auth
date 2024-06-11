// import mongoose from 'mongoose';
// import { type } from 'os';

// const userSchema = new mongoose.Schema(
//     {
//         email: {
//             type: String,
//             unique: true,
//             required: true,
//         },
//         password: {
//             type: String,
//             required: true,
//         },
//     },
//     { timestamps: true }
// );

// export default mongoose.models.User || mongoose.model('User', userSchema);




import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true
        },
        email: {
            type: String,
            unique: true,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

export default mongoose.models.User || mongoose.model('User', userSchema);

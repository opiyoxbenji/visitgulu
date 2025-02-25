import mongoose, { models, Schema } from 'mongoose';
import { type } from 'os';

const userSchema = new Schema(
	{
		firstName: {
			type: String,
			required: true,
		},
		lastName: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			// unique: true,
		},
		password: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

const User = models.User || mongoose.model('User', userSchema);
export default User;

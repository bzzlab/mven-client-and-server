import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    email: String,
    password: String
});

/**
 * set timestamp when inserting a record
 */
userSchema.set('timestamps', true);


/**
 * presave function executed before saving data into database
 */
userSchema.pre('save', function (next) {
    this.email = this.email.toLowerCase();
    //continue with saving data
    next();
});

export default mongoose.model('UserModel', userSchema);

/**
 * Define user schema here
 * Created by longNightKing on 12/10/15.
 */
var User = exports;
var Schema = require('mongoose').Schema;
var basic = require('./basic');
var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;

User.collection = 'User';
User.attribute = {
    _id: 'String',
    user_name: 'String',
    password : 'String',
    credits: 'Number',
    profile: 'Profile',
    default_card: 'CreditCardId',
    credit_cards: 'CreditCard',
    default_shipping_address: 'AddressId',
    addresses: 'Address',
    basic: 'Object'
};
User.schema = new Schema({
    basic: basic.schema,

    addresses: [{
        name: String,
        first_line: String,
        second_line: String,
        city: String,
        state: String,
        zip: Number
    }],

    default_shipping_address: Schema.ObjectId,

    credit_cards: [{
        name: String,
        card_num: Number,
        expiration_date: {type: Date, min: Date.now},
        billing_address:{
            first_line: String,
            second_line: String,
            city: String,
            state: String,
            zip: Number
        }
    }],

    default_card: Schema.ObjectId,

    profile: {
        gender: Boolean,
        DOB: Date,
        phone_num: Number
    },

    credits: {type: Number, default: 0, min: 0},

    password : {type: String, required: true },

    _id: {type: String, required: true, unique: true},

    user_name: String
}, {
    collection: User.collection
});

User.schema.pre('save', function(next) {
    var user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);

        // hash the password along with our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);

            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});

User.schema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};
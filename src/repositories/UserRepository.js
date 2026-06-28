import { SignupModel } from "../../models/Signup.js";

class UserRepository {
    async findByEmail(email) {
        return await SignupModel.findOne({ email });
    }

    async findByUsername(username) {
        return await SignupModel.findOne({ fname: username });
    }

    async create(userData) {
        const newUser = new SignupModel(userData);
        return await newUser.save();
    }

    async updateByUsername(username, updateData) {
        return await SignupModel.findOneAndUpdate(
            { fname: username },
            updateData,
            { new: true }
        );
    }

    async update(user) {
        return await user.save();
    }
}

export default new UserRepository();

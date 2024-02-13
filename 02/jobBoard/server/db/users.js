import UserModel from "./models/user.model.js";

// Function to get a user by id
export async function getUserById(id) {
  try {
    return await UserModel.findOne({ id });
  } catch (error) {
    console.error("Error fetching user by id:", error);
    throw error;
  }
}

// Function to get a user by email
export async function getUserByEmail(email) {
  try {
    return await UserModel.findOne({ email });
  } catch (error) {
    console.error("Error fetching user by email:", error);
    throw error;
  }
}

export async function createUser({ companyId, email, password }) {
  const user = await UserModel.create({
    companyId,
    email,
    password,
  });

  return user.toObject();
}

// // Export the functions
// module.exports = {
//   getUserById,
//   getUserByEmail,
// };

import User from "../Models/userSchema.js"; // Correct path to the model

// Create
export const createUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res
      .status(200)
      .json({ message: "User Created Successfully", result: newUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "User creation failed due to an internal server error",
    });
  }
};

// Get
export const fetchUser = async (req, res) => {
  try {
    const users = await User.find();
    res
      .status(200)
      .json({ message: "User data fetched successfully", result: users });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "User fetch data failed due to an internal server error",
    });
  }
};

// Edit
export const editUser = async (req, res) => {
  try {
    const id = req.params.id;
    console.log("Attempting to update user with ID:", id); // Debug log

    const modifyUser = await User.findByIdAndUpdate(
      id, // Use id directly, not as an object
      {
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
      },
      { new: true } // Return the updated document
    );

    if (!modifyUser) {
      return res.status(404).json({ message: "User not found" }); // Handle case where user does not exist
    }

    res
      .status(200)
      .json({ message: "User Updated Successfully", result: modifyUser });
  } catch (error) {
    console.error("Error updating user:", error); // More specific error logging
    res.status(500).json({
      message: "User edit data failed due to an internal server error",
    });
  }
};

// Delete
export const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;

    const removeUser = await User.findByIdAndDelete(id); // Directly pass the ID
    if (!removeUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User Deleted Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "User delete data failed due to an internal server error",
    });
  }
};

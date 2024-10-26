const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const UserSchema = require("../../models/userSchema");
const userSchema = require("../../models/userSchema");

exports.register = async (req, res) => {
  try {
    const { username, password, email, organization, packageType } = req.body;

    // Validate if all required fields are provided
    if (!username || !password || !email || !organization || !packageType) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if user or email already exists
    const userExists = await UserSchema.findOne({ username });
    const emailExists = await UserSchema.findOne({ email });

    if (userExists) {
      return res.status(400).json({ message: "Username already taken" });
    }

    if (emailExists) {
      return res.status(400).json({ message: "Email already taken" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const user = new UserSchema({
      username,
      email,
      organization,
      password: hashedPassword,
      packageType
    });

    // Save the user to the database
    await user.save();

    // Generate a JWT token (if needed)
    const token = jwt.sign({ id: user._id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        organization: user.organization,
      },
      token
    });

  } catch (error) {
    if (error.code === 11000) { // MongoDB duplicate key error
      return res.status(400).json({ message: "Username or email already exists" });
    }

    if (error.name === 'ValidationError') {
      const validationErrors = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({ message: "Validation error", errors: validationErrors });
    }

    res.status(500).json({ message: "Error in saving user", error: error.message });
  }
};


exports.login = async (req,res) => {
  try {
    const user = await userSchema.findOne({username: req.body.username});

    if(!user) {
      return res.status(401).json({message: "Authentication failed"})
    }

    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if(!isMatch) {
return res.status(401).json({message: 'Authentication failed'})
    }

const token  = jwt.sign(
  {userId:user._id, username: user.username},
  process.env.JWT_SECRET,
  { expiresIn:'1h'}
);

res.json({token});
  }catch(error) {
    res.stats(500).json({message:error.message})
  }
}

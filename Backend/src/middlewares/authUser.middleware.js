import jwt from "jsonwebtoken";

const authUser = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ message: "Access denied, no token provided" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if(!decoded) {
            return res.status(401).json({message: 'Unauthorized'})
        }

        req.userId = decoded.id;
        next();
        
    } catch (error) {
        return res.status(400).json({ message: "Invalid token" });
    }
}

export {authUser};
const { Score } = require('../Model/index');
const createUpdatedData = (Ticket, data) => {
    console.log("Ticket", Ticket[0].score);
    console.log("data", data.score);
    if (data.score) {
        Ticket[0].score = data.score;
    }
    console.log(Ticket)
    return Ticket;
}
const update = async(req, res) => {
    try {
        const UserId = req.body.userId;
        const data = req.body;
        console.log(data, UserId);
        const User = await Score.find({ user: UserId });
        console.log("User", User);
        console.log(typeof(data.score));
        data.score = parseInt(data.score);
        console.log(typeof(data.score));
        if (User.length === 0) {
            const newUser = await Score.create({
                score: data.score,
                user: UserId,
                username: req.body.username
            })
            return res.status(201).json({
                data: newUser,
                success: true,
                message: "User Score Successfully Inserted",
                err: {}
            })
        } else {
            console.log("enter");
            const updatedScore = createUpdatedData(User, data);
            // console.log(updatedScore);

            /**
             * In the update function, updatedScore is an array of Score objects returned
             *  by the createUpdatedData function, and you are trying to call the save() method
             *  on that array, which is not a valid method. Instead, you need to call the save() method 
             * on each Score object in the updatedScore array. Here's an updated version of the update 
             * function that should work:
             */
            // Save each updated Score object
            const savedScores = await Promise.all(
                updatedScore.map((score) => score.save())
            );
            /**
             * In this updated version of the update function, the createUpdatedData function is the same as before. 
             * After querying for the Score objects with the given userId, the function checks if any scores were found.
             *  If there are no scores for the user, a new Score object is created using the provided data and saved to the 
             * database.
                If there are existing scores for the user, the createUpdatedData function is called to modify the existing 
                scores based on the provided data. The map() method is used to iterate over the Score objects in the updatedScores
                 array and call the save() method on each one. The Promise.all() method is used to wait for all of the save operations
                  to complete before returning a response. Finally, the function returns a response with the saved Score objects.
             */
            return res.status(200).json({
                message: "Successfully updated Score",
                success: true,
                err: {},
                data: savedScores
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Something went wrong",
            data: {},
            success: false,
            err: error
        })
    }
}
const getData = async(req, res) => {
    try {
        const data = await Score.find();
        return res.status(201).json({
            data: data,
            success: true,
            message: "User Score Successfully Fetched",
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Something went wrong",
            data: {},
            success: false,
            err: error
        })
    }
}
module.exports = { update, getData };
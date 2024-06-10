const userModel = require('../Models/User');

exports.createuser = async (req, res) => {

    // console.log("fwm;klnfvk;jngralk;n")

    const {
        jobTitle,
        jobId,
        startDate,
        closeDate,
        location,
        department,
        qualification,
        salary,
        jobDescription,
        reviewerFName,
        reviewerLName,
        reviewDate,
        approveFName,
        approveLName,
        approvalDate
    } = req.body;

    // Check if any required field is missing
    if (!req.body) {
        return res.status(400).json({ message: "All fields are mandatory" });
    }

    try {
        // Create user data
        const createData = await userModel.create({
            jobTitle,
            jobId,
            startDate,
            closeDate,
            location,
            department,
            qualification,
            salary,
            jobDescription,
            reviewerFName,
            reviewerLName,
            reviewDate,
            approveFName,
            approveLName,
            approvalDate
        });

        // Check if user data is created successfully
        if (!createData) {
            return res.status(400).json({ message: "User data not created" });
        }
        return res.status(201).json({ data: createData, message: "User data created" });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal server error" });
    }

}


exports.updateuser = async (req, res) => {
    const _id = req.params.id


    try {
        const data = await userModel.findByIdAndUpdate(_id, {
            jobTitle: req.body.jobTitle,
            jobId: req.body.jobId,
            startDate: req.body.startDate,
            closeDate: req.body.closeDate,
            location: req.body.location,
            department: req.body.department,
            qualification: req.body.qualification,
            salary: req.body.salary,
            jobDescription: req.body.jobDescription,
            reviewerFNameName: req.body.reviewerFName,
            reviewerLNameName: req.body.reviewerLName,
            reviewDate: req.body.reviewDate,
            approveFName: req.body.approveFName,
            approveLName: req.body.approveLName,
            approvalDate: req.body.approvalDate
        })
        console.log("updated data", data)
        if (data) {
            return res.status(200).json({ message: "updated !", data })
        }
    }
    catch (err) {
        console.log(err);
    }
}

exports.deleteuser = async (req, res) => {
    const _id = req.params.id
    console.log(_id)
    try {
        const data = await userModel.findByIdAndDelete(_id)
        if (data) {
            res.status(200).json({ message: "deleted", data })
        } else {
            res.status(400).json({ message: "not deleted", data })
        }
    }
    catch (err) {
        console.log(err)
    }
}

exports.getAllData = async (req, res) => {
    try {
        const data = await userModel.find({});
        return res.status(200).json({ message: "All Data", data: data });
    } catch (error) {
        console.error("Error Fetching Data", error);
        return res.status(200).json({ message: "User Data is not found" })
    }
};


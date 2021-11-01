const Transaction = require("../models/Transaction");

// const item1 = new Transaction({
//     text: "123",
//     amount: 15,
// });

// const item2 = new Transaction({
//     text: "456",
//     amount: 789,
// });

// item1.save();
// item2.save();
exports.getTransaction = async (req, res, next) => {
    try {
        const transactions = await Transaction.find({});
        return res.status(200).json({
            success: true,
            count: transactions.length,
            data: transactions,
        });
    } catch (e) {
        return res.status(500).json({
            success: false,
            error: `Error: ${e.message}`,
        });
    }

    // Transaction.find({}, (err, data) => {
    //     if (err) {
    //         return res.send("Err");
    //     } else {
    //         return res.json({
    //             count: data.length,
    //             data,
    //         });
    //     }
    // });

    // Transaction.find({}).exec();  returns promise without exec() returns promise
};

exports.addTransaction = async (req, res, next) => {
    try {
        const { text, amount } = req.body;
        // console.log(req.body);
        const transaction = await Transaction.create(req.body);

        return res.status(201).json({
            success: true,
            data: transaction,
        });
    } catch (error) {
        if (error.name === "ValidationError") {
            const messages = Object.values(error.errors).map(
                (err) => err.message
            );
            return res.status(400).json({
                success: false,
                error: messages,
            });
        } else {
            return res.status(500).json({
                success: false,
                error: `Error: ${e.message}`,
            });
        }
    }
};

exports.deleteTransaction = async (req, res, next) => {
    try {
        // const transaction = Transaction.findByIdAndRemove(req.params.id);
        const transaction = await Transaction.findById(req.params.id);
        // console.log(transaction);
        if (!transaction) {
            return res.status(404).json({
                success: false,
                error: "Transaction not found",
            });
        }

        await transaction.remove();

        return res.status(200).json({
            success: true,
            data: {},
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: `Server error: ${error}`,
        });
    }
};

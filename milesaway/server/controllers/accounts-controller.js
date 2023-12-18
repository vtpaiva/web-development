import mongoose from 'mongoose';
import Account from '../models/accounts.js';
import Flight from '../models/flights.js';
import Stay from '../models/stays.js';


const controller = {};

controller.get = async (req, res) => {
    const accounts = await Account.find({}, 'email admin')
        .then(accounts => {
            res.status(200).send(accounts);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error getting accounts!",
                error: err.message,
                data: err
            });
        });

}

controller.getByEmailAndPassword = async (req, res) => {
    const account = await Account.findOne({email: req.params.email, password: req.params.password})
        .then(account => {
            res.status(200).send(account);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error getting account!",
                error: err.message,
                data: err
            });
        });
}

controller.post = async (req, res) => {
    const account = new Account(req.body);
    await account.save()
        .then(account => {
            res.status(201).send({
                message: "Account created!"
            });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error creating account!",
                error: err.message,
                data: err
            });
        });

    console.log(req.body);
}

controller.put = async (req, res) => {
    await Account.findOneAndUpdate({ email: req.params.email, password: req.params.password }, { $set: req.body })
        .then(account => {
            res.status(201).send({
                message: "Account updated!"
            });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating account!",
                error: err.message,
                data: err
            });
        });
}

controller.addFlightToCart = async (req, res) => {
    try {
        const { email, password } = req.params;
        const { slug, quantity } = req.body;

        const account = await Account.findOne({ email: email, password: password });

        if (!account) {
            return res.status(404).send({
                message: 'Account not found',
            });
        }

        const flight = await Flight.findOne({ slug: slug });

        if (!flight) {
            return res.status(404).send({
                message: 'Flight not found',
            });
        }

        const existingFlightIndex = account.cartFlights.findIndex(([cartSlug]) => cartSlug === slug);

        if (existingFlightIndex !== -1) {
            let newQuantity = Math.max(0, Math.min(flight.left, Number(account.cartFlights[existingFlightIndex][1]) + Number(quantity)));

            account.cartFlights[existingFlightIndex][1] = newQuantity;

            if (newQuantity === 0) {
                account.cartFlights.splice(existingFlightIndex, 1);
            }
        } else if (Number(quantity) > 0) {
            account.cartFlights.push([slug, Math.min(flight.left, Number(quantity))]);
            console.log("New: ", quantity);
        }

        await account.save();

        res.status(201).send({
            message: 'Flight added to the cart successfully!',
        });
    } catch (err) {
        console.error('Error adding flight to the cart:', err.message);
        res.status(500).send({
            message: 'Error adding flight to the cart',
            error: err.message,
            data: err,
        });
    }
};


controller.addStayToCart = async (req, res) => {
    try {
        const { email, password } = req.params;
        const { slug, quantity } = req.body;

        const account = await Account.findOne({ email: email, password: password });

        if (!account) {
            return res.status(404).send({
                message: 'Account not found',
            });
        }

        const stay = await Stay.findOne({ slug: slug });

        if (!stay) {
            return res.status(404).send({
                message: 'Stay not found',
            });
        }

        const existingStayIndex = account.cartStays.findIndex(([cartSlug]) => cartSlug === slug);

        if (existingStayIndex !== -1) {
            const newQuantity = Math.max(0, Math.min(stay.left, Number(account.cartStays[existingStayIndex][1]) + Number(quantity)));

            account.cartStays[existingStayIndex][1] = newQuantity;

            if (newQuantity === 0) {
                account.cartStays.splice(existingStayIndex, 1);
            }
        } else if (Number(quantity) > 0) {
            account.cartStays.push([slug, Math.min(stay.left, Number(quantity))]);
        }

        await account.save();

        res.status(201).send({
            message: 'Stay added to the cart successfully!',
        });
    } catch (err) {
        console.error('Error adding stay to the cart:', err.message);
        res.status(500).send({
            message: 'Error adding stay to the cart',
            error: err.message,
            data: err,
        });
    }
};


controller.delete = async (req, res) => {
    await Account.findOneAndDelete({ email: req.params.email, password: req.params.password })
        .then(account => {
            res.status(201).send({
                message: "Account deleted!"
            });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error deleting account!",
                error: err.message,
                data: err
            });
        });
}

export default controller;

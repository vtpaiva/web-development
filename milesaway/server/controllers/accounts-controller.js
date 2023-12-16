import mongoose from 'mongoose';
import Account from '../models/accounts.js';


const controller = {};

controller.get = async (req, res) => {
    const products = await Account.find({active: true}, 'title price slug')
        .then(products => {
            res.status(200).send(products);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error getting products!",
                error: err.message,
                data: err
            });
        });

}

controller.getBySlug = async (req, res) => {
    const product = await Account.findOne({slug: req.params.slug, active: true})
        .then(product => {
            res.status(200).send(product);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error getting product!",
                error: err.message,
                data: err
            });
        });
}

controller.post = async (req, res) => {
    const product = new Account(req.body);
    await product.save()
        .then(product => {
            res.status(201).send({
                message: "Account created!"
            });
        })
        .catch(err => {
        res.status(500).send({
            message: "Error creating product!",
            error: err.message,
            data: err
        });
    });

    console.log(req.body);
}

controller.put = async (req, res) => {
    await Account.findByIdAndUpdate(req.params.id, { $set: req.body })
        .then(product => {
            res.status(201).send({
                message: "Account updated!"
            });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating product!",
                error: err.message,
                data: err
            });
        });
}

controller.delete = async (req, res) => {
    await Account.findOneAndDelete({ slug: req.params.slug })
        .then(product => {
            res.status(201).send({
                message: "Account deleted!"
            });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error deleting product!",
                error: err.message,
                data: err
            });
        });
}

export default controller;

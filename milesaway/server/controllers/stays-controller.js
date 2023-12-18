import mongoose from 'mongoose';
import Stay from '../models/stays.js';


const controller = {};

controller.get = async (req, res) => {
    const products = await Stay.find({active: true}, 'slug price city checkIn checkOut establishment image left')
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
    const product = await Stay.findOne({slug: req.params.slug, active: true})
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
    const product = new Stay(req.body);
    await product.save()
        .then(product => {
            res.status(201).send({
                message: "Stay created!"
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
    await Stay.findOneAndUpdate({ slug: req.params.slug }, { $set: req.body })
        .then(product => {
            res.status(201).send({
                message: "Stay updated!"
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
    await Stay.findOneAndDelete({ slug: req.params.slug })
        .then(product => {
            res.status(201).send({
                message: "Stay deleted!"
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

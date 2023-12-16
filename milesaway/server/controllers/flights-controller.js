import mongoose from 'mongoose';
import Flight from '../models/flights.js';


const controller = {};

controller.get = async (req, res) => {
    const products = await Flight.find({active: true}, 'title price slug')
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
    const product = await Flight.findOne({slug: req.params.slug, active: true})
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
    const product = new Flight(req.body);
    await product.save()
        .then(product => {
            res.status(201).send({
                message: "Flight created!"
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
    await Flight.findByIdAndUpdate(req.params.id, { $set: req.body })
        .then(product => {
            res.status(201).send({
                message: "Flight updated!"
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
    await Flight.findOneAndDelete({ slug: req.params.slug })
        .then(product => {
            res.status(201).send({
                message: "Flight deleted!"
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

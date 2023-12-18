import mongoose from 'mongoose';
import Flight from '../models/flights.js';


const controller = {};

controller.get = async (req, res) => {
    const flights = await Flight.find({active: true}, 'slug price origin destination departure arrival airline image left')
        .then(flights => {
            res.status(200).send(flights);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error getting flights!",
                error: err.message,
                data: err
            });
        });

}

controller.getBySlug = async (req, res) => {
    const flight = await Flight.findOne({slug: req.params.slug, active: true})
        .then(flight => {
            res.status(200).send(flight);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error getting flight!",
                error: err.message,
                data: err
            });
        });
}

controller.post = async (req, res) => {
    const flight = new Flight(req.body);
    await flight.save()
        .then(flight => {
            res.status(201).send({
                message: "Flight created!"
            });
        })
        .catch(err => {
        res.status(500).send({
            message: "Error creating flight!",
            error: err.message,
            data: err
        });
    });

    console.log(req.body);
}

controller.put = async (req, res) => {
    console.log(req.body);
    await Flight.findOneAndUpdate({ slug: req.params.slug }, { $set: req.body })
        .then(flight => {
            res.status(201).send({
                message: "Flight updated!"
            });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating flight!",
                error: err.message,
                data: err
            });
        });
}

controller.delete = async (req, res) => {
    await Flight.findOneAndDelete({ slug: req.params.slug })
        .then(flight => {
            res.status(201).send({
                message: "Flight deleted!"
            });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error deleting flight!",
                error: err.message,
                data: err
            });
        });
}

export default controller;

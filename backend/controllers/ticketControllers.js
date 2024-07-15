const asyncHandler = require("express-async-handler");
const Ticket = require("../models/ticketModel");
const User = require("../models/userModel")

const getTickets = asyncHandler(async (req, res) => {
    const tickets = await Ticket.find({ user: req.user.id });

    res.status(200).json(tickets)
})


const createTicket = asyncHandler(async (req, res) => {

    const { product, description } = req.body;

    if (!product || !description) {
        res.status(400)
        throw new Error('Add all the fields');
    }

    const user = await User.findById(req.user.id);
    if (!user) {
        res.status(401)
        throw new Error('User not found!');
    }

    const ticket = await Ticket.create({
        product,
        description,
        user: req.user.id,
        status: 'new'
    })

    res.status(201).json(ticket);

})

const getTicket = asyncHandler(async (req, res) => {

    const user = await User.findById(req.user.id);
    if (!user) {
        res.status(401)
        throw new Error('User not found!');
    }

    const ticket = await Ticket.findById(req.params.id);
    if (!ticket) {
        res.status(404)
        throw new Error('Ticket not found')
    }

    if (ticket.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('Not Authorized!')
    }

    res.status(200).json(ticket)
})


module.exports = {
    getTickets,
    createTicket,
    getTicket
}
const Router = require("express")
const { bookingDao } = require("../daos/mongo_db/booking.mongo")

const router = Router()
const dao = new bookingDao()

router.get('/', async(req, res) => {
    const booking = await dao.get()

    booking
    ? res.status(200).send({status: 'success', payload: booking})
    : res.status(404).send({status: 'error', message: 'reservations are not available'})
})

router.get('/:bid', async(req, res) => {
    const { bid } = req.params
    const bookingID = await dao.getID(bid)

    bookingID 
    ? res.status(200).send({status: 'success', payload: bookingID})
    : res.status(404).send({status: 'error', message: 'the requested reservation was not found'})
})

router.post('/', (req, res) => {
    const { email, day, schedule} = req.body

    if (!email) return res.status(404).send({
        message: 'error',
        reason: 'enter the email'
    })

    if (!day) return res.status(404).send({
        message: 'error',
        reason: 'enter the day'
    })

    if(!schedule) return res.status(404).send({
        message: 'error',
        reason: 'enter the schedule'
    })

    res.send({
        message: 'HOLA , ESTO CREARIA UNA RESERVA',
        payload: email, day, schedule
    })
})

router.delete('/:bid', (req, res) => {
    res.send('HOLA , ESTO ELIMINARIA UNA RESERVA')
})

router.delete('/', (req, res) => {
    res.send('HOLA , ESTO ELIMINARIA UNA RESERVA')
})

module.exports = router
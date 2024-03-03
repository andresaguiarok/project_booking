const Router = require("express")
const { bookingDao } = require("../daos/mongo_db/booking.mongo")

const router = Router()
const dao = new bookingDao()

router.get('/', async(req, res) => {
    const booking = await dao.get();

    booking
    ? res.status(200).send({status:'success', payload:booking})
    : res.status(404).send({status:'error', message:'reservations are not available'});
})

router.get('/:_id', async(req, res) => {
    const { _id } = req.params;
    const bookingID = await dao.getID({_id});

    bookingID 
    ? res.status(200).send({status:'success', payload:bookingID})
    : res.status(404).send({status:'error', message:'the requested reservation was not found'});
})

router.post('/', async(req, res) => {
    const requestBooking = req.body;
    const {email, day, schedule} = requestBooking;

    for (const key in requestBooking) {
        if(!requestBooking[key]){
            return res.status(404).send({status:'error', message:`enter the ${key}`})
        }
    };

    if(await dao.getID({schedule})) return res.status(404).send({
        status:'error', 
        message:'this time is not available'
    });

    const postBooking = await dao.post({email, day, schedule});

    postBooking 
    ? res.send({stauts:'success', message: 'the reservation was created successfully.', payload: {email, day, schedule}})
    : res.send({status:'error',message: 'An error occurred while creating the reservation'});
})

router.put('/:bid', (req, res) => {

})

router.delete('/:_id', async(req, res) => {
    const {_id} = req.params;
    const booking = await dao.getID({_id});

    if(!booking) return res.status(404).send({status:'error', message:'the reservation was not found'});

    const bookingDelete = await dao.deleteID(booking._id);

    bookingDelete
    ? res.status(200).send({status:'success', message:'reservation was removed successfully'})
    : res.status(404).send({status:'error', message:'An error occurred while deleting the reservation'});
})

router.delete('/', (req, res) => {
    res.send('HOLA , ESTO ELIMINARIA UNA RESERVA')
})

module.exports = router
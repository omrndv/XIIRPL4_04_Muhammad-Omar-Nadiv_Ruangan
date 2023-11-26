const mongoose = require('mongoose')

const RuanganSchema = new mongoose.Schema({
    nama_ruangan: {
        type: String,
        required: [true, 'Silahkan isikan nama ruangan'],
    },
    jumlah_kursi: {
        type: Number,
        required: [true, 'Silahkan isikan jumlah kursi'],
    },
    jumlah_meja: {
        type: Number,
        required: [true, 'Silahkan isikan jumlah meja'],
    },
    letak: {
        type: String,
        required: [true, 'Silahkan isikan letak ruangan'],
    },
    status: {
        type: String,
        required: [true, 'Silahkan isikan status ruangan'],
    }
})

module.exports = mongoose.model('Ruangan', RuanganSchema)
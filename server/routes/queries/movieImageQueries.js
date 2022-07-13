const MovieImage = require('../models/movieImageModel');
const queries = {
    getAllImages: async function (filter) {
        const images = await MovieImage.find(filter);
        return images;
    },
    getOneImage: async function (filter) {
        const image = await MovieImage.findOne(filter);
        return image;
    },
}

module.exports = queries;
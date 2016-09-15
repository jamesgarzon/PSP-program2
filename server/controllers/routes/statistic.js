var Statistics = require('../../libraries/statistics');

/*
 * GET /book route to retrieve all the books.
 */
function getMean(req, res) {
    let numbers  = req.body;
    let statistics = new Statistics();
    let mean = statistics.getMean(numbers);
    res.json(mean);
}


function getRegression(req, res) {
    let data = {};
    var list  = JSON.parse(req.file.buffer.toString('utf8'));
    let statistics = new Statistics();
    data.bZero = statistics.getBZero(list, 2);
    data.bOne = statistics.getBOne(list, 2);
    res.json(data);
}

function getCorrelation(req, res) {
    let data = {};
    var list  = JSON.parse(req.file.buffer.toString('utf8'));
    let statistics = new Statistics();
    data.r = statistics.getCorrelation(list, 4);
    data.rSquare = statistics.getRSquared(list, 4);
    res.json(data);
}

function getEstimate(req, res) {
    let data = {};
    var list  = JSON.parse(req.file.buffer.toString('utf8'));
    let yEstimate = 0;
    // let list  = req.body.list;
    let xEstimate  = req.body.xEstimate;
    let statistics = new Statistics();
    yEstimate = statistics.getYEstimate(list, xEstimate, 3);
    res.json(yEstimate);
}

function getData(req, res) {
    let data = {};
    var list  = JSON.parse(req.file.buffer.toString('utf8'));
    res.json(list);
}

module.exports = { getMean, getRegression, getCorrelation, getEstimate, getData };

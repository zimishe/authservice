const { dbName } = require('./../_config/db');
const ObjectID = require('mongodb').ObjectID;

module.exports = (app, client) => {
    app.get('/recipes/history/:id', (req, res) => {
        const id = req.params.id;
        const details = { id };
        
        const db = client.db(dbName);

        db.collection('history').find(details).toArray((error, result) => {
            if (error) {
                res.send({ error });
            }   else {
                res.send(result);
            }
        });
    })
}

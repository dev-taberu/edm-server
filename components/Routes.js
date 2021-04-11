class Routes {

    constructor(app) {
        app.get("/", (req, res) => {
            res.send("Routes configured!");
        })
    }
}

module.exports = Routes;
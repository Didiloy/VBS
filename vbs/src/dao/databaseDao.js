/* eslint-disable prettier/prettier */
const PrismaClient = require("@prisma/client");
const prisma = new PrismaClient.PrismaClient();
const express = require("express");
const app = express();
const cors = require("cors");
const port = 4000;

app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log("listening on port " + port);
});

// Set up home route
app.get("/create/:name/:password", async(req, res) => {
    await addUser(req.params["name"], req.params["password"])
        .then((response) => {
            res.status(200).send(response);
        })
        .catch((err) => {
            res.status(201).send(err);
        });
});

app.get("/login/:name/:password", async(req, res) => {
    await login(req.params["name"], req.params["password"])
        .then((response) => {
            res.status(200).send(response);
        })
        .catch((err) => {
            res.status(201).send(err);
        });
});

async function addUser(u, p) {
    return new Promise((resolve, reject) => {
        try {
            resolve(
                prisma.user.create({
                    data: {
                        name: u,
                        password: p,
                    },
                })
            );
        } catch (error) {
            reject(error);
        }
    });
}

// eslint-disable-next-line no-unused-vars
async function login(u, p) {
    return new Promise((resolve, reject) => {
        try {
            resolve(
                prisma.user.findMany({
                    where: {
                        name: {
                            equals: u,
                        },

                        password: {
                            equals: p,
                        },
                    },
                })
            );
        } catch (error) {
            reject(error);
        }
    });
}
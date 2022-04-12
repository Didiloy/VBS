/* eslint-disable prettier/prettier */
const PrismaClient = require("@prisma/client");
const prisma = new PrismaClient.PrismaClient();

export async function addUser(u, p) {
    return new Promise((resolve, reject) => {
        try {
            prisma.user.create({
                data: {
                    name: u,
                    password: p,
                },
            });
            resolve(true);
        } catch (error) {
            reject(error);
        }
    });
}

export async function login(u, p) {
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
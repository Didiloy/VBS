/* eslint-disable prettier/prettier */
const BASE_URL = "https://www.googleapis.com/books/v1/volumes?q=";
const maxResults = "maxResults=";
const orderBy = "orderBy=";
const printType = "printType=";

export async function globalSearch(query) {
    return new Promise((resolve, reject) => {
        fetch(
                BASE_URL +
                query +
                "&" +
                maxResults +
                "30&" +
                orderBy +
                "relevance&" +
                printType +
                "books"
            )
            .then((response) => {
                resolve(response.json());
            })
            .catch((err) => {
                reject(err.message);
            });
    });
}
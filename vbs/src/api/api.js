/* eslint-disable prettier/prettier */
const BASE_URL = "https://www.googleapis.com/books/v1/volumes?q=";
const BASE_URL_ID = "https://www.googleapis.com/books/v1/volumes/";
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
                "40&" +
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

export async function SearchById(id) {
    return new Promise((resolve, reject) => {
        fetch(BASE_URL_ID + id)
            .then((response) => {
                resolve(response.json());
            })
            .catch((err) => {
                reject(err.message);
            });
    });
}
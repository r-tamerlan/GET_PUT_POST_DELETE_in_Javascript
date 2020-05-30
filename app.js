class Request {

    constructor() {
        this.xhr = new XMLHttpRequest();
    }

    get(url, callback) {

        this.xhr.open("GET", url);

        this.xhr.onload = function() {
            if (this.status === 200) {
                callback(null, this.responseText);
            } else {
                callback("Hata olusdu", null)
            }

        }
        this.xhr.send();
    }

    post(url, data, callback) {
        this.xhr.open("POST", url)
        this.xhr.setRequestHeader("Content-type", "application/json");
        this.xhr.onload = function() {
            if (this.status === 201) {
                callback(null, this.responseText);
            } else {
                callback("Hata olusdu", null)
            }
        }

        this.xhr.send(JSON.stringify(data));
    }

    put(url, data, callback) {
        this.xhr.open("PUT", url)
        this.xhr.setRequestHeader("Content-type", "application/json");
        this.xhr.onload = function() {
            if (this.status === 200) {
                callback(null, this.responseText);
            } else {
                callback("Hata olusdu", null)
            }
        }

        this.xhr.send(JSON.stringify(data));
    }

    delete(url, callback) {

        this.xhr.open("DELETE", url);

        this.xhr.onload = function() {
            if (this.status === 200) {
                callback(null, this.responseText);
            } else {
                callback("Hata olusdu", null)
            }

        }
        this.xhr.send();
    }
}

const request = new Request();

// request.get("https://jsonplaceholder.typicode.com/albums", function(error, response) {
//     if (error === null) { console.log(response); } else {
//         console.log(error);
//     }

// });

// request.post("https://jsonplaceholder.typicode.com/albums", { userId: 4, title: "Triller 4" }, function(error, response) {
//     if (error === null) { console.log(response) } else {
//         console.log(error);
//     }

// })

// request.put("https://jsonplaceholder.typicode.com/albums/10", { userId: 505, title: "R.Tamerlan" }, function(error, response) {
//     if (error === null) { console.log(response) } else {
//         console.log(error);
//     }

// })

request.delete("https://jsonplaceholder.typicode.com/albums/1", function(error, response) {
    if (error === null) { console.log(response); } else {
        console.log(error);
    }
});
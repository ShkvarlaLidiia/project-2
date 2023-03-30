from flask import Flask
from flask_cors import CORS

from connection import connection

app = Flask(__name__)

CORS(app)


def get_data(path):
    data = connection()

    data_collection = data[path]

    return data_collection.find()


@app.route("/users")
def users():
    data = get_data('users')

    users = []

    for doc in data:
        print(type(doc['_id']))
        doc['_id'] = str(doc["_id"])
        users.append(doc)

    return users


@app.route("/products")
def products():
    data = get_data('products')

    products = []

    for doc in data:
        print(type(doc['_id']))
        doc['_id'] = str(doc["_id"])
        products.append(doc)

    print(products)

    return products


if __name__ == "__main__":
    app.run(port=3333)

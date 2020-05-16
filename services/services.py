from flask import Flask
from flask import request

app = Flask(__name__)
URL_BASE = "/api";

@app.route(URL_BASE + "/test")
def hello():
    return "Hello World!"

if __name__ == "__main__":
    app.run()
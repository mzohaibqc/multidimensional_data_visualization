from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def charts():
    return render_template('charts.html')


if __name__ == '__main__':
    app.run(port=9000)

from flask import Flask, request, abort, jsonify, render_template


app = Flask(__name__,
            static_folder='./static',
            template_folder='./templates')


@app.route("/")
def root():
    return render_template('dashboard.html')


@app.route("/dashboard.html")
def dash():
    return render_template('dashboard.html')


if __name__ == "__main__":
    app.run(debug=True)

from flask import Flask, request, abort, jsonify, render_template

app = Flask(__name__,
            static_folder='./static',
            template_folder='./templates')


def find_closest(item_list, item_trash=None, lat=None, long=None):
    print(item_list)
    if item_trash is None:
        start_lat = lat
        start_long = long
        skip_id = -1
    else:
        skip_id = item_trash.id
        start_lat = item_trash.latitude
        start_long = item_trash.longitude

    min_i = 0
    l_min = 10e9
    for i in range(0, len(item_list)):
        if item_list[i].id != skip_id:
            l = ((item_list[i].latitude - start_lat) ** 2 + (item_list[i].longitude - start_long) ** 2) ** 0.5
            if l < l_min:
                l_min = l
                min_i = i

    cl_item = item_list.pop(min_i)

    return cl_item


@app.route("/")
def root():
    return render_template('dashboard.html')


@app.route("/dashboard.html")
def dash():
    return render_template('dashboard.html')


if __name__ == "__main__":
    app.run(debug=True)

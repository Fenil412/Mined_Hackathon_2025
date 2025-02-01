from flask import Flask, request, jsonify


app = Flask(__name__)

@app.route('/api/users', methods=['GET'])
def get_users():
    return jsonify(
        {
        "users": [
                     'Hello World',
                     'fenil',
                     'shah' 
                    ]
                }
            )


if __name__ == '__main__':
    app.run(debug=True)

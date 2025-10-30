from flask import Flask, send_file

app = Flask(__name__)

@app.route('/')
def serve_index():
    return send_file('index.html')

@app.route('/dont-open-me.js')
def serve_idkjustputanynameforthis():
    return send_file('dont-open-me.js')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)

from flask import Flask, send_file

app = Flask(__name__)

@app.route('/')
def serve_index():
    return send_file('index.html')

@app.route('/script.js')
def send_js():
    return send_file('script.js')


@app.route('/style.css')
def send_css():
    return send_file('style.css')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)

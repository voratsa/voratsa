from flask import Flask, send_file

app = Flask(__name__)

@app.route('/')
def serve_index():
    return send_file('index.html')

@app.route('/googlea00fdca30afc15b7.html')
def serveea():
    return send_file('g/googlea00fdca30afc15b7.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)

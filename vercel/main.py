from flask import Flask, send_file

app = Flask(__name__)

@app.route('/')
def serve_index():
    return send_file('index.html')

@app.route('/.well-known/discord')
def serve_discord():
    return send_file('.well-known/discord')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)

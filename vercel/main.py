from flask import Flask, send_file

app = Flask(__name__)

@app.route('/')
def serve_index():
    return send_file('index.html')

@app.route('/logo.png')
def serve_logo():
    return send_file('logo.png')

@app.route('/logo2.png')
def serve_logo2():
    return send_file('logo2.png')

@app.route('/googlea00fdca30afc15b7.html')
def serveea():
    return send_file('g/googlea00fdca30afc15b7.html')

@app.route('/sitemap.xml')
def servea():
    return send_file('g/sitemap.xml')

@app.route('/.well-known/discord')
def meow():
    return send_file('.well-known/discord')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)

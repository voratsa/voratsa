from flask import Flask, Response, send_from_directory
import base64
import os
app = Flask(__name__)
@app.route('/')
def a():
    with open('index.html','r')as b:
        c=b.read().replace(' ','').replace('\n','').replace('\t','')
    d=bytes(int(c[i:i+8],2)for i in range(0,len(c),8))
    f=d.decode('utf-8').replace(' ','').replace('\n','').replace('\t','')
    g=bytes(int(f[i:i+8],2)for i in range(0,len(f),8))
    e=base64.b64encode(g).decode('utf-8')
    html=f'''<script>
    document.addEventListener('contextmenu',e=>e.preventDefault());
    document.onkeydown=function(e){{if(e.ctrlKey&&(e.keyCode==85||e.keyCode==83||e.keyCode==73))return false;}};
    document.write(decodeURIComponent(escape(atob("{e}"))));
    </script>'''
    return Response(html,mimetype='text/html; charset=utf-8')

bd = os.path.abspath(os.path.dirname(__file__))

@app.route('/.well-known/discord')
def serve_discord():
    return send_from_directory(os.path.join(bd, '.well-known'), 'discord')

if __name__=='__main__':
    app.run(host='0.0.0.0',port=5000)

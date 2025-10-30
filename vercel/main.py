from flask import Flask as _0x0a3f, Response as _0x1b7c
import base64 as _0x8d2e
_0x2c9d = _0x0a3f(__name__)
@_0x2c9d.route('/')
def _0x4e1a():
    with open('index.html','r') as _0x5f91:
        _0x3da8 = _0x5f91.read().replace(' ','').replace('\n','').replace('\t','')
    _0x7b42 = bytes(int(_0x3da8[_0x6b1d:_0x6b1d+8], 2) for _0x6b1d in range(0, len(_0x3da8), 8))
    _0x9e6c = _0x7b42.decode('utf-8').replace(' ','').replace('\n','').replace('\t','')
    _0xc4f2 = bytes(int(_0x9e6c[_0x6b1d:_0x6b1d+8], 2) for _0x6b1d in range(0, len(_0x9e6c), 8))
    _0xa1b3 = _0x8d2e.b64encode(_0xc4f2).decode('utf-8')
    _0xd87e = f'''<script>
    document.addEventListener('contextmenu',_0x=>_0x.preventDefault());
    document.onkeydown=function(_0x){{
        if(_0x.ctrlKey&&(_0x.keyCode==85||_0x.keyCode==83||_0x.keyCode==73))return false;
    }};
    document.write(decodeURIComponent(escape(atob("{_0xa1b3}"))));
    </script>'''
    return _0x1b7c(_0xd87e, mimetype='text/html; charset=utf-8')
if __name__ == '__main__':
    _0x2c9d.run(host='0.0.0.0', port=5000)

from flask import Flask as _a, Response as _b
import base64 as _c
_=_a(__name__)
@_.route('/')
def __():
 with open('index.html','r')as _d:_e=_d.read().replace(' ','').replace('\n','').replace('\t','')
 _f=bytes(int(_e[_g:_g+8],2)for _g in range(0,len(_e),8))
 _h=_f.decode('utf-8').replace(' ','').replace('\n','').replace('\t','')
 _i=bytes(int(_h[_j:_j+8],2)for _j in range(0,len(_h),8))
 _k=_c.b64encode(_i).decode('utf-8')
 _l=f'''<script>
document.addEventListener('contextmenu',_m=>_m.preventDefault());
document.onkeydown=function(_n){{if(_n.shiftKey)return false;if(_n.ctrlKey&&(_n.keyCode==85||_n.keyCode==83||_n.keyCode==73))return false;}};
document.addEventListener('keydown',_o=>{{if(_o.shiftKey)_o.preventDefault();}});
document.write(decodeURIComponent(escape(atob("{_k}"))));
</script>'''
 return _b(_l,mimetype='text/html; charset=utf-8')
if __name__=='__main__':_.run(host='0.0.0.0',port=5000)


/*************************** [bundle] ****************************/
// Original file:./src/pages/calc.paper
/*****************************************************************/
window.__etcpack__bundleSrc__['30']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    

    // 导入js
__etcpack__scope_args__=window.__etcpack__getBundle('35');
var script =__etcpack__scope_args__.default;


    // 导入css
__etcpack__scope_args__=window.__etcpack__getBundle('36');


    script.render=function(createElement){

        return createElement('div',{"class":"page-view","quickpaper":"","data-quickpaper-d7dcedbc":""},[createElement('ul',{"data-quickpaper-d7dcedbc":""},[createElement('li',{"data-quickpaper-d7dcedbc":""},[createElement('span',{"@click":"doScroll('Camera')","data-quickpaper-d7dcedbc":""},["照相机"]),createElement('ul',{"data-quickpaper-d7dcedbc":""},[createElement('li',{"data-quickpaper-d7dcedbc":""},[createElement('span',{"@click":"doScroll('Camera-set')","data-quickpaper-d7dcedbc":""},["基本设置"])]),createElement('li',{"data-quickpaper-d7dcedbc":""},[createElement('span',{"@click":"doScroll('Camera-size')","data-quickpaper-d7dcedbc":""},["比例设置"])]),createElement('li',{"data-quickpaper-d7dcedbc":""},[createElement('span',{"@click":"doScroll('Camera-wtgb')","data-quickpaper-d7dcedbc":""},["物体的改变"])]),createElement('li',{"data-quickpaper-d7dcedbc":""},[createElement('span',{"@click":"doScroll('Camera-xjgb')","data-quickpaper-d7dcedbc":""},["相机的改变"])]),createElement('li',{"data-quickpaper-d7dcedbc":""},[createElement('span',{"@click":"doScroll('Camera-use')","data-quickpaper-d7dcedbc":""},["使用"])])])])]),createElement('div',{"class":"doc-view","id":"root-view","data-quickpaper-d7dcedbc":""},[createElement('h2',{"id":"fixed-Camera","data-quickpaper-d7dcedbc":""},["照相机"]),createElement('pre',{"q-code":"","data-quickpaper-d7dcedbc":""},["from image3d import Camera↵↵# 获取相机实例↵camera = Camera.Render(width, height, options = {})"]),createElement('h3',{"id":"fixed-Camera-set","data-quickpaper-d7dcedbc":""},["基本设置"]),createElement('p',{"data-quickpaper-d7dcedbc":""},["默认的时候，Z轴承的方向是朝里的，你可以通过下面的配置项进行校对："]),createElement('pre',{"q-code":"","data-quickpaper-d7dcedbc":""},["# 默认false↵options[\"proof\"] = boolean"]),createElement('p',{"data-quickpaper-d7dcedbc":""},["我们在传递数据的时候，不能保证坐标的值一定在\"-1 ~ 1\"之间，你可以通过设置下面配置项来控制显示范围："]),createElement('pre',{"q-code":"","data-quickpaper-d7dcedbc":""},["# 默认1↵options[\"size\"] = number"]),createElement('h3',{"id":"fixed-Camera-size","data-quickpaper-d7dcedbc":""},["比例设置"]),createElement('p',{"data-quickpaper-d7dcedbc":""},["在有些时候，我们的画布可能不是正方形，此时，就需要设置宽和高度比例了："]),createElement('pre',{"q-code":"","data-quickpaper-d7dcedbc":""},["# 默认1↵camera.setProportion(val)"]),createElement('p',{"data-quickpaper-d7dcedbc":""},["传递的值val就是宽和高度比，也就是："]),createElement('pre',{"q-code":"","data-quickpaper-d7dcedbc":""},["val = width / height"]),createElement('p',{"data-quickpaper-d7dcedbc":""},["温馨提示：如果绘制后画布大小未改变，程序会自动计算宽高比，此处无需设置。"]),createElement('h3',{"id":"fixed-Camera-wtgb","data-quickpaper-d7dcedbc":""},["物体的改变"]),createElement('pre',{"q-code":"","data-quickpaper-d7dcedbc":""},["camera.rotateBody(deg, a1, b1, c1, a2, b2, c2)"]),createElement('p',{"data-quickpaper-d7dcedbc":""},["围绕射线(a1, b1, c1) → (a2, b2, c2)旋转物体deg度（方向由右手法则确定），a1、b1、c1、a2、b2和c2这6个值在设置的时候，不是一定需要全部设置，还有以下可选："]),createElement('ol',{"data-quickpaper-d7dcedbc":""},[createElement('li',{"data-quickpaper-d7dcedbc":""},["只设置了a1和b1，表示在xoy平面围绕（a1, b1）旋转。"]),createElement('li',{"data-quickpaper-d7dcedbc":""},["设置三个点(设置不足六个点都认为只设置了三个点)，表示围绕从原点出发的射线旋转。"])]),createElement('pre',{"q-code":"","data-quickpaper-d7dcedbc":""},["camera.moveBody(dis, a, b, c)"]),createElement('p',{"data-quickpaper-d7dcedbc":""},["沿着向量(a, b, c)方向移动物体距离dis（其中c可以不传，默认0）。"]),createElement('pre',{"q-code":"","data-quickpaper-d7dcedbc":""},["camera.scaleBody(xTimes, yTimes, zTimes, cx, cy, cz)"]),createElement('p',{"data-quickpaper-d7dcedbc":""},["以点(cx, cy, cz)为中心，分别在x、y和z方向上缩放xTimes、yTimes和zTimes倍（其中cx、cy和cz都可以不传递，默认0）物体。"]),createElement('h3',{"id":"fixed-Camera-xjgb","data-quickpaper-d7dcedbc":""},["相机的改变"]),createElement('pre',{"q-code":"","data-quickpaper-d7dcedbc":""},["camera.rotateEye(deg, a1, b1, c1, a2, b2, c2)"]),createElement('p',{"data-quickpaper-d7dcedbc":""},["和物体的改变中的旋转类似，不同的是这里旋转的是相机。"]),createElement('pre',{"q-code":"","data-quickpaper-d7dcedbc":""},["camera.moveEye(dis, a, b, c)"]),createElement('p',{"data-quickpaper-d7dcedbc":""},["沿着向量(a, b, c)方向移动相机距离dis（其中c可以不传，默认0）。"]),createElement('h3',{"id":"fixed-Camera-use","data-quickpaper-d7dcedbc":""},["使用"]),createElement('pre',{"q-code":"","data-quickpaper-d7dcedbc":""},["matrix4=camera.value()"]),createElement('p',{"data-quickpaper-d7dcedbc":""},["所有的操作最终通过这个方法获取列优先4x4矩阵，后续你需要在顶点着色器中使用即可。"])])])

    };

    __etcpack__scope_bundle__.default= script;

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/pages/calc.paper?QuickPaper&type=script&lang=js&hash=d7dcedbc
/*****************************************************************/
window.__etcpack__bundleSrc__['35']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('21');
var fixedScroll =__etcpack__scope_args__.default;

    __etcpack__scope_bundle__.default= {
        methods: {
            doScroll(fixedName) {
                window.location.href = (window.location.href + "").replace(/\?fixed=.*$/, '') + "?fixed=" + fixedName;
                fixedScroll(fixedName);
            }
        },
        mounted() {
            fixedScroll(this.$urlFormat().params.fixed);
        }
    };
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/pages/calc.paper?QuickPaper&type=style&lang=css&hash=d7dcedbc
/*****************************************************************/
window.__etcpack__bundleSrc__['36']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var styleElement = document.createElement('style');
var head = document.head || document.getElementsByTagName('head')[0];
styleElement.innerHTML = "";
styleElement.setAttribute('type', 'text/css');head.appendChild(styleElement);
  
    return __etcpack__scope_bundle__;
}

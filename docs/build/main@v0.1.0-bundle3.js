
/*************************** [bundle] ****************************/
// Original file:./src/pages/how-to-use.paper
/*****************************************************************/
window.__etcpack__bundleSrc__['31']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    

    // 导入js
__etcpack__scope_args__=window.__etcpack__getBundle('37');
var script =__etcpack__scope_args__.default;


    // 导入css
__etcpack__scope_args__=window.__etcpack__getBundle('38');


    script.render=function(createElement){

        return createElement('div',{"class":"page-view","quickpaper":"","data-quickpaper-d42f85c2":""},[createElement('ul',{"data-quickpaper-d42f85c2":""},[createElement('li',{"data-quickpaper-d42f85c2":""},[createElement('span',{"@click":"doScroll('help')","data-quickpaper-d42f85c2":""},["获取帮助"])])]),createElement('div',{"class":"doc-view","id":"root-view","data-quickpaper-d42f85c2":""},[createElement('h2',{"id":"fixed-help","data-quickpaper-d42f85c2":""},["获取帮助"]),createElement('p',{"data-quickpaper-d42f85c2":""},["在使用image3D的时候，如果遇到任何疑惑或问题，包括建议或对未来版本的想法，请先在",createElement('a',{"target":"_blank","href":"https://github.com/hai2007/image3D.py/issues","data-quickpaper-d42f85c2":""},["Github issue"]),"上查找是否存在相似内容，然后进行补充或追问，当然也可以增加新的话题进行交流，除非特殊情况，你会在48小时内获得",createElement('a',{"href":"mailto:2501482523@qq.com","data-quickpaper-d42f85c2":""},["作者"]),"回复。"])])])

    };

    __etcpack__scope_bundle__.default= script;

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/pages/how-to-use.paper?QuickPaper&type=script&lang=js&hash=d42f85c2
/*****************************************************************/
window.__etcpack__bundleSrc__['37']=function(){
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
// Original file:./src/pages/how-to-use.paper?QuickPaper&type=style&lang=css&hash=d42f85c2
/*****************************************************************/
window.__etcpack__bundleSrc__['38']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var styleElement = document.createElement('style');
var head = document.head || document.getElementsByTagName('head')[0];
styleElement.innerHTML = "";
styleElement.setAttribute('type', 'text/css');head.appendChild(styleElement);
  
    return __etcpack__scope_bundle__;
}

webpackJsonp([2],{"0jH9":function(t,r,e){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a=e("Gu7T"),s=e.n(a),i=(e("ssT3"),{name:"Register",data:function(){return{captchaTpl:"",username:"",password:"",cpassword:"",captcha:"",msg:"",msgType:"",msgShow:!1}},created:function(){this.getCaptcha()},methods:{getCaptcha:function(){var t=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:6,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"QWERTYUIOPLKJHGFDSAZXCVBNM1234567890",e="",a=[];try{a=a=[].concat(s()(Array(t))).map(function(){return r[Math.floor(Math.random()*r.length)]})}catch(t){}return a.forEach(function(t){e+='<span class="flex1 hcenter">'+t+"</span>"}),a=a.join(""),{tpl:e,captcha:a}}(),r=t.tpl,e=t.captcha;this.captchaTpl=r,this.localCaptcha=e},register:function(t){var r=this;this.$nextTick(function(){("submit"===t.target.type?t.target:t.target.parentElement).canSubmit&&r.submit()})},submit:function(){if(this.captcha.toUpperCase()!==this.localCaptcha)return this.showMsg("验证码不正确"),void this.getCaptcha();var t={name:this.username,password:this.password,avatar:"https://api.adorable.io/avatars/200/"+this.username+".png"};this.login(t)},login:function(t){var r=this.$store.state.user;r&&r.name===t.name?this.showMsg("用户已存在"):(this.$store.dispatch("login",t),this.showMsg("注册成功","success"))},showMsg:function(t){var r=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warning";this.msg=t,this.msgType=e,this.msgShow=!1,this.$nextTick(function(){r.msgShow=!0})}}}),o={render:function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-4 col-md-offset-4 floating-box"},[e("Message",{attrs:{show:t.msgShow,type:t.msgType,msg:t.msg},on:{"update:show":function(r){t.msgShow=r}}}),t._v(" "),e("div",{staticClass:"panel panel-default"},[t._m(0),t._v(" "),e("div",{staticClass:"panel-body",attrs:{"data-validator-form":""}},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"control-label"},[t._v("用户名")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.username,expression:"username",modifiers:{trim:!0}},{name:"validator",rawName:"v-validator:input.required",value:{regex:/^[a-zA-Z]+\w*\s?\w*$/,error:"用户名要求以字母开头的单词字符"},expression:"{ regex: /^[a-zA-Z]+\\w*\\s?\\w*$/, error: '用户名要求以字母开头的单词字符' }",arg:"input",modifiers:{required:!0}}],staticClass:"form-control",attrs:{type:"text",placeholder:"请填写用户名"},domProps:{value:t.username},on:{input:function(r){r.target.composing||(t.username=r.target.value.trim())},blur:function(r){return t.$forceUpdate()}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{staticClass:"control-label"},[t._v("密码")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.password,expression:"password",modifiers:{trim:!0}},{name:"validator",rawName:"v-validator.required",value:{regex:/^\w{6,16}$/,error:"密码要求 6 ~ 16 个单词字符"},expression:"{ regex: /^\\w{6,16}$/, error: '密码要求 6 ~ 16 个单词字符' }",modifiers:{required:!0}}],staticClass:"form-control",attrs:{id:"password",type:"password",placeholder:"请填写密码"},domProps:{value:t.password},on:{input:function(r){r.target.composing||(t.password=r.target.value.trim())},blur:function(r){return t.$forceUpdate()}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{staticClass:"control-label"},[t._v("确认密码")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.cpassword,expression:"cpassword",modifiers:{trim:!0}},{name:"validator",rawName:"v-validator.required",value:{target:"#password"},expression:"{ target: '#password' }",modifiers:{required:!0}}],staticClass:"form-control",attrs:{type:"password",placeholder:"请填写确认密码"},domProps:{value:t.cpassword},on:{input:function(r){r.target.composing||(t.cpassword=r.target.value.trim())},blur:function(r){return t.$forceUpdate()}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{staticClass:"control-label"},[t._v("图片验证码")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.captcha,expression:"captcha",modifiers:{trim:!0}},{name:"validator",rawName:"v-validator.required",value:{title:"图片验证码"},expression:"{ title: '图片验证码' }",modifiers:{required:!0}}],staticClass:"form-control",attrs:{type:"text",placeholder:"请填写验证码"},domProps:{value:t.captcha},on:{input:function(r){r.target.composing||(t.captcha=r.target.value.trim())},blur:function(r){return t.$forceUpdate()}}})]),t._v(" "),e("div",{staticClass:"thumbnail",attrs:{title:"点击图片重新获取验证码"},on:{click:t.getCaptcha}},[e("div",{staticClass:"captcha vcenter",domProps:{innerHTML:t._s(t.captchaTpl)}})]),t._v(" "),e("button",{staticClass:"btn btn-lg btn-success btn-block",attrs:{type:"submit"},on:{click:t.register}},[e("i",{staticClass:"fa fa-btn fa-sign-in"}),t._v(" 注册\n        ")])])])],1)])},staticRenderFns:[function(){var t=this.$createElement,r=this._self._c||t;return r("div",{staticClass:"panel-heading"},[r("h3",{staticClass:"panel-title"},[this._v("请注册")])])}]};var n=e("VU/8")(i,o,!1,function(t){e("SOpZ")},"data-v-58ef0e82",null);r.default=n.exports},"5zde":function(t,r,e){e("zQR9"),e("qyJz"),t.exports=e("FeBl").Array.from},Gu7T:function(t,r,e){"use strict";r.__esModule=!0;var a,s=e("c/Tr"),i=(a=s)&&a.__esModule?a:{default:a};r.default=function(t){if(Array.isArray(t)){for(var r=0,e=Array(t.length);r<t.length;r++)e[r]=t[r];return e}return(0,i.default)(t)}},Mhyx:function(t,r,e){var a=e("/bQp"),s=e("dSzd")("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(a.Array===t||i[s]===t)}},SOpZ:function(t,r){},"c/Tr":function(t,r,e){t.exports={default:e("5zde"),__esModule:!0}},dY0y:function(t,r,e){var a=e("dSzd")("iterator"),s=!1;try{var i=[7][a]();i.return=function(){s=!0},Array.from(i,function(){throw 2})}catch(t){}t.exports=function(t,r){if(!r&&!s)return!1;var e=!1;try{var i=[7],o=i[a]();o.next=function(){return{done:e=!0}},i[a]=function(){return o},t(i)}catch(t){}return e}},fBQ2:function(t,r,e){"use strict";var a=e("evD5"),s=e("X8DO");t.exports=function(t,r,e){r in t?a.f(t,r,s(0,e)):t[r]=e}},msXi:function(t,r,e){var a=e("77Pl");t.exports=function(t,r,e,s){try{return s?r(a(e)[0],e[1]):r(e)}catch(r){var i=t.return;throw void 0!==i&&a(i.call(t)),r}}},qyJz:function(t,r,e){"use strict";var a=e("+ZMJ"),s=e("kM2E"),i=e("sB3e"),o=e("msXi"),n=e("Mhyx"),c=e("QRG4"),l=e("fBQ2"),u=e("3fs2");s(s.S+s.F*!e("dY0y")(function(t){Array.from(t)}),"Array",{from:function(t){var r,e,s,d,p=i(t),m="function"==typeof this?this:Array,v=arguments.length,f=v>1?arguments[1]:void 0,h=void 0!==f,g=0,w=u(p);if(h&&(f=a(f,v>2?arguments[2]:void 0,2)),void 0==w||m==Array&&n(w))for(e=new m(r=c(p.length));r>g;g++)l(e,g,h?f(p[g],g):p[g]);else for(d=w.call(p),e=new m;!(s=d.next()).done;g++)l(e,g,h?o(d,f,[s.value,g],!0):s.value);return e.length=g,e}})}});
//# sourceMappingURL=2.f1eacbb3603ae7034c65.js.map
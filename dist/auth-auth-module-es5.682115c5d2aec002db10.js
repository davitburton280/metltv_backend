function _classCallCheck(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _createClass(t,n,e){return n&&_defineProperties(t.prototype,n),e&&_defineProperties(t,e),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{Yj9t:function(t,n,e){"use strict";e.r(n),e.d(n,"AuthModule",(function(){return Ot}));var o=e("ofXK"),i=e("tyNb"),r=e("mrSG"),s=e("3Pt+"),a=e("Esjb"),c=e("cLpZ"),g=e("fXoL"),l=e("7dP1"),u=e("NUQi"),f=e("0IaG"),d=e("wDcp"),p=e("PPbg"),b=e("WHgu");function m(t,n){1&t&&(g.Xb(0,"span",15),g.Qc(1," E-mail is "),g.Xb(2,"strong"),g.Qc(3,"required"),g.Wb(),g.Wb())}function h(t,n){1&t&&(g.Xb(0,"span",15),g.Qc(1," E-mail is "),g.Xb(2,"strong"),g.Qc(3,"invalid"),g.Wb(),g.Wb())}function x(t,n){1&t&&(g.Xb(0,"span",15),g.Qc(1," Password is "),g.Xb(2,"strong"),g.Qc(3,"required"),g.Wb(),g.Wb())}var C,P=((C=function(){function t(n,e,o,i,r,g,l,u){_classCallCheck(this,t),this.router=n,this.fb=e,this.auth=o,this.authGuard=i,this.dialog=r,this.subject=g,this.userStore=l,this.socketService=u,this.subscriptions=[],this.isSubmitted=!1,this.loginForm=this.fb.group({email:["",[s.F.required,Object(a.a)(c.a)]],password:["",s.F.required]})}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"login",value:function(){var t=this;this.isSubmitted=!0,this.loginForm.valid&&this.subscriptions.push(this.auth.login(this.loginForm.value).subscribe((function(n){return Object(r.a)(t,void 0,void 0,regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(e=null==n?void 0:n.token)&&(localStorage.setItem("token",e),this.userStore.setAuthUser(e)),t.next=4,this.router.navigateByUrl(this.authGuard.redirectUrl||"/");case 4:case"end":return t.stop()}}),t,this)})))})))}},{key:"ngOnDestroy",value:function(){this.subscriptions.forEach((function(t){return t.unsubscribe()}))}},{key:"email",get:function(){return this.loginForm.get("email")}},{key:"pass",get:function(){return this.loginForm.get("password")}}]),t}()).\u0275fac=function(t){return new(t||C)(g.Rb(i.d),g.Rb(s.f),g.Rb(l.a),g.Rb(u.a),g.Rb(f.b),g.Rb(d.a),g.Rb(p.a),g.Rb(b.a))},C.\u0275cmp=g.Lb({type:C,selectors:[["app-login"]],decls:22,vars:4,consts:[[1,"login-content"],[1,"login-content-left"],["src","assets/img/metltvlogo.svg",1,"login-logo",3,"click"],[1,"login-abs"],[1,"login-btn","bg-white"],[1,"register-btn",3,"click"],[1,"login-content-right"],[1,"login-block"],[1,"login-title"],[3,"formGroup"],["placeholder","Email","formControlName","email",1,"login-input"],["class","error",4,"ngIf"],["placeholder","Password","type","password","formControlName","password",1,"login-input"],[1,"forgot-password",3,"click"],[1,"login-submit",3,"click"],[1,"error"]],template:function(t,n){1&t&&(g.Xb(0,"section",0),g.Xb(1,"div",1),g.Xb(2,"img",2),g.jc("click",(function(){return n.router.navigate(["/"])})),g.Wb(),g.Xb(3,"div",3),g.Xb(4,"a",4),g.Qc(5,"Login"),g.Wb(),g.Xb(6,"a",5),g.jc("click",(function(){return n.router.navigate(["auth/register"])})),g.Qc(7,"Sign Up"),g.Wb(),g.Wb(),g.Wb(),g.Xb(8,"div",6),g.Xb(9,"div",7),g.Xb(10,"p",8),g.Qc(11,"Login"),g.Wb(),g.Xb(12,"form",9),g.Sb(13,"input",10),g.Oc(14,m,4,0,"span",11),g.Oc(15,h,4,0,"span",11),g.Sb(16,"input",12),g.Oc(17,x,4,0,"span",11),g.Xb(18,"p",13),g.jc("click",(function(){return n.router.navigate(["auth/forgot-password"])})),g.Qc(19,"Forgot password?"),g.Wb(),g.Xb(20,"a",14),g.jc("click",(function(){return n.login()})),g.Qc(21,"Login"),g.Wb(),g.Wb(),g.Wb(),g.Wb(),g.Wb()),2&t&&(g.Cb(12),g.uc("formGroup",n.loginForm),g.Cb(2),g.uc("ngIf",n.email.hasError("required")&&n.isSubmitted),g.Cb(1),g.uc("ngIf",n.email.hasError("patternInvalid")),g.Cb(2),g.uc("ngIf",n.pass.hasError("required")&&n.isSubmitted))},directives:[s.H,s.s,s.j,s.c,s.r,s.i,o.u],styles:[".login-content[_ngcontent-%COMP%]{display:flex;justify-content:space-between;width:100%;height:100vh}.login-logo[_ngcontent-%COMP%]{cursor:pointer}.login-content-right[_ngcontent-%COMP%]{background:#fff;width:57%}.login-content-left[_ngcontent-%COMP%]{width:43%;display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative;background:url(back-login.53f102952f1c83155d3a.png)}.login-abs[_ngcontent-%COMP%]{position:absolute;right:0}.login-btn[_ngcontent-%COMP%]{background:#fff;color:#18b587!important}.login-btn[_ngcontent-%COMP%], .register-btn[_ngcontent-%COMP%]{border-radius:28px 0 0 28px;width:128px;height:57px;display:flex;justify-content:center;align-items:center;font-size:20px;font-family:Muli-Bold;transition:.3s ease-in-out}.register-btn[_ngcontent-%COMP%]{color:#fff!important;cursor:pointer}.register-btn[_ngcontent-%COMP%]:hover{background:#fff;color:#18b587!important}.login-content-right[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;padding-left:150px}.login-title[_ngcontent-%COMP%]{color:#545454;font-size:32px;font-family:Muli-Bold;margin-bottom:32px}.login-input[_ngcontent-%COMP%]{width:100%;height:51px;box-shadow:0 0 6px rgba(0,109,204,.18);padding:15px 32px;margin-bottom:8px;margin-top:20px;color:#8c8888;font-size:16px;font-family:Muli-Regular}.login-input[_ngcontent-%COMP%]:focus{box-shadow:0 0 6px #18b587}.forgot-password[_ngcontent-%COMP%]{text-align:right;color:#545454;font-size:16px;font-family:Muli-Regular;cursor:pointer;transition:.3s ease-in-out}.forgot-password[_ngcontent-%COMP%]:hover{color:#f53c6f}.login-block[_ngcontent-%COMP%]{width:430px}.login-submit[_ngcontent-%COMP%]{width:100%;height:51px;background:#f53c6f;padding:15px 32px;margin-bottom:32px;color:#fff!important;font-size:16px;font-family:Muli-Regular;display:flex;justify-content:center;align-items:center;margin-top:47px;transition:.3s ease-in-out;cursor:pointer}.login-submit[_ngcontent-%COMP%]:hover{background:#c52551}.register-block[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.register-select[_ngcontent-%COMP%]{width:200px;height:51px;box-shadow:0 0 6px rgba(0,109,204,.18);padding:15px 32px;margin-bottom:8px;margin-top:20px;color:#cecece;font-size:16px;font-family:Muli-Regular;outline:none;border:0}.register-select[_ngcontent-%COMP%]:focus{box-shadow:0 0 6px rgba(245,60,111,.14);border:.5px solid #f53c6f}.register-day[_ngcontent-%COMP%]{width:100px;height:51px;box-shadow:0 0 6px rgba(0,109,204,.18);padding:15px 32px;margin-bottom:8px;margin-top:20px;color:#cecece;font-size:16px;font-family:Muli-Regular;outline:none;border:0}.register-day[_ngcontent-%COMP%]:focus{box-shadow:0 0 6px rgba(245,60,111,.14);border:.5px solid #f53c6f}@media (max-width:1400px){.login-logo[_ngcontent-%COMP%]{width:250px;margin-left:100px}.login-content-left[_ngcontent-%COMP%]{align-items:start}}@media (max-width:1200px){.login-logo[_ngcontent-%COMP%]{margin-left:40px}.login-content-right[_ngcontent-%COMP%]{padding-left:80px}}@media (max-width:991px){.login-content-left[_ngcontent-%COMP%]{align-items:start;height:400px;width:100%}.login-content-right[_ngcontent-%COMP%]{padding-left:0;width:100%;align-items:center;margin-top:60px}.login-content[_ngcontent-%COMP%]{height:auto;flex-direction:column}}@media (max-width:480px){.register-block[_ngcontent-%COMP%]{flex-direction:column}.register-day[_ngcontent-%COMP%], .register-select[_ngcontent-%COMP%]{width:100%}.login-block[_ngcontent-%COMP%]{width:90%}.login-title[_ngcontent-%COMP%]{font-size:27px}.forgot-password[_ngcontent-%COMP%], .login-title[_ngcontent-%COMP%]{text-align:center}.login-btn[_ngcontent-%COMP%]{width:128px;margin-right:0}.login-btn[_ngcontent-%COMP%], .register-btn[_ngcontent-%COMP%]{height:45px;font-size:16px}.login-logo[_ngcontent-%COMP%]{width:150px}}"]}),C);function O(t,n){return function(e){var o=e.controls[t],i=e.controls[n];if(o.value&&i.value)return i.setErrors(o.value!==i.value?{notMatch:!0}:null)}}var v=e("lwos"),M=e("Xa2L");function _(t,n){1&t&&(g.Xb(0,"p",14),g.Qc(1," Please provide the code that was sent to your email "),g.Wb())}function w(t,n){1&t&&(g.Xb(0,"p",14),g.Qc(1," Please write exactly 4 digits only "),g.Wb())}function y(t,n){1&t&&(g.Xb(0,"div",5),g.Sb(1,"mat-spinner",6),g.Wb()),2&t&&(g.Cb(1),g.uc("diameter",25))}function k(t,n){1&t&&(g.Xb(0,"p"),g.Qc(1,"Code is resent"),g.Wb())}function W(t,n){1&t&&(g.Xb(0,"p",15),g.Qc(1," The code is wrong "),g.Wb())}function X(t,n){if(1&t){var e=g.Yb();g.Xb(0,"button",16),g.jc("click",(function(){return g.Gc(e),g.nc(2).verifyCode()})),g.Qc(1,"Submit"),g.Wb()}}function R(t,n){if(1&t){var e=g.Yb();g.Vb(0),g.Xb(1,"h1"),g.Qc(2,"Sign up"),g.Wb(),g.Xb(3,"h3"),g.Qc(4,"Enter verification code"),g.Wb(),g.Xb(5,"p"),g.Qc(6),g.Wb(),g.Xb(7,"form",7),g.Sb(8,"input",8),g.Oc(9,_,2,0,"p",9),g.Oc(10,w,2,0,"p",9),g.Xb(11,"p",10),g.jc("click",(function(){return g.Gc(e),g.nc().resendCode()})),g.Qc(12,"Resend code"),g.Wb(),g.Oc(13,y,2,1,"div",11),g.Oc(14,k,2,0,"p",1),g.Oc(15,W,2,0,"p",12),g.Oc(16,X,2,0,"button",13),g.Wb(),g.Ub()}if(2&t){var o=g.nc();g.Cb(6),g.Sc("We've sent a 4 digit code to ",o.email,". Confirm it belongs to you to keep your account secure"),g.Cb(1),g.uc("formGroup",o.verifyCodeForm),g.Cb(2),g.uc("ngIf",o.verifyCodeForm.get("code").hasError("required")&&o.isSubmitted),g.Cb(1),g.uc("ngIf",o.verifyCodeForm.get("code").hasError("patternInvalid")&&o.isSubmitted),g.Cb(3),g.uc("ngIf",o.loader.formProcessing),g.Cb(1),g.uc("ngIf",o.codeResent),g.Cb(1),g.uc("ngIf",!o.emailCtrl.hasError("required")&&o.codeWrong),g.Cb(1),g.uc("ngIf",!o.verifyingCode)}}var I,S=((I=function(){function t(n,e,o,i,r,g){_classCallCheck(this,t),this.data=n,this.matDialogRef=e,this.fb=o,this.auth=i,this.loader=r,this.router=g,this.email="",this.codeChecked=!1,this.verifyingCode=!1,this.codeWrong=!1,this.codeResent=!1,this.codeResending=!1,this.isSubmitted=!1,this.sentCode=n.code,this.email=n.email,this.verifyCodeForm=this.fb.group({email:[this.email,s.F.required],code:[null,[s.F.required,Object(a.a)(c.e),Object(a.a)(c.b)]]})}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"verifyCode",value:function(){var t=this;this.isSubmitted=!0,this.verifyCodeForm.valid&&(this.loader.formProcessing=!0,this.auth.checkVerificationCode(this.verifyCodeForm.value).subscribe((function(n){return Object(r.a)(t,void 0,void 0,regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.codeChecked=!0,this.verifyingCode=!1,this.loader.formProcessing=!1,setTimeout((function(){e.matDialogRef.close(n)}),4e3);case 1:case"end":return t.stop()}}),t,this)})))})))}},{key:"resendCode",value:function(){var t=this;this.codeResending=!0,this.codeWrong=!1,this.auth.resendEmailVerificationCode({email:this.email,resend:1}).subscribe((function(n){t.sentCode=n,t.codeResending=!1,t.codeResent=!0}))}},{key:"emailCtrl",get:function(){return this.verifyCodeForm.get("email")}},{key:"codeCtrl",get:function(){return this.verifyCodeForm.get("code")}}]),t}()).\u0275fac=function(t){return new(t||I)(g.Rb(f.a),g.Rb(f.h),g.Rb(s.f),g.Rb(l.a),g.Rb(v.a),g.Rb(i.d))},I.\u0275cmp=g.Lb({type:I,selectors:[["app-verify-email"]],decls:8,vars:3,consts:[["id","verify-email"],[4,"ngIf"],["id","thanks",3,"hidden"],["src","assets/img/checked.svg"],[1,"thanks-for-verification"],[1,"loader-holder"],[3,"diameter"],[3,"formGroup"],["placeholder","Enter code","formControlName","code"],["class","error",4,"ngIf"],["id","resend-code",3,"click"],["class","loader-holder",4,"ngIf"],["class","error wrong-code",4,"ngIf"],[3,"click",4,"ngIf"],[1,"error"],[1,"error","wrong-code"],[3,"click"]],template:function(t,n){1&t&&(g.Xb(0,"div",0),g.Oc(1,R,17,8,"ng-container",1),g.Xb(2,"div",2),g.Sb(3,"img",3),g.Xb(4,"p",4),g.Qc(5," Thanks for verifying your e-mail address. "),g.Wb(),g.Xb(6,"div",5),g.Sb(7,"mat-spinner",6),g.Wb(),g.Wb(),g.Wb()),2&t&&(g.Cb(1),g.uc("ngIf",!n.codeChecked),g.Cb(1),g.uc("hidden",!n.codeChecked),g.Cb(5),g.uc("diameter",25))},directives:[o.u,M.c,s.H,s.s,s.j,s.c,s.r,s.i],styles:["#verify-email[_ngcontent-%COMP%]{color:#545454;font-family:Muli-Regular}#verify-email[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:32px;margin-top:40px;font-weight:700}#verify-email[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:24px;margin-top:16px;font-weight:700}#verify-email[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:16px}#verify-email[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;height:51px;box-shadow:0 0 6px rgba(245,60,111,.14);border:.5px solid #f53c6f;padding-left:32px}#verify-email[_ngcontent-%COMP%]   #resend-code[_ngcontent-%COMP%]{font:normal normal normal 16px/20px Muli;color:#18b587;margin-top:16px;margin-bottom:0;font-family:Muli-Regular;cursor:pointer}#verify-email[_ngcontent-%COMP%]   .thanks-for-verification[_ngcontent-%COMP%]{margin-bottom:100px}#verify-email[_ngcontent-%COMP%]   .wrong-code[_ngcontent-%COMP%]{text-align:center}#verify-email[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;height:51px;background:#f53c6f 0 0 no-repeat padding-box;box-shadow:0 0 6px rgba(0,109,204,.18);color:#fff;margin-top:21px}#verify-email[_ngcontent-%COMP%]   #thanks[_ngcontent-%COMP%]{text-align:center;padding-top:116px}"]}),I),F=e("9xOu"),j=e("wd/R"),E=e.n(j);function Q(t,n){1&t&&(g.Xb(0,"span",20),g.Qc(1,"First name is required"),g.Wb())}function q(t,n){1&t&&(g.Xb(0,"span",20),g.Qc(1," First name should contain only alphabetical characters "),g.Wb())}function z(t,n){1&t&&(g.Xb(0,"span",20),g.Qc(1,"Last name is required"),g.Wb())}function N(t,n){1&t&&(g.Xb(0,"span",20),g.Qc(1," Last name should contain only alphabetical characters "),g.Wb())}function L(t,n){1&t&&(g.Xb(0,"span",20),g.Qc(1,"User name is required"),g.Wb())}function G(t,n){1&t&&(g.Xb(0,"span",20),g.Qc(1," Please write alphabetical characters before numbers for username "),g.Wb())}function D(t,n){1&t&&(g.Xb(0,"span",20),g.Qc(1,"E-mail is required"),g.Wb())}function U(t,n){1&t&&(g.Xb(0,"span",20),g.Qc(1," E-mail is "),g.Xb(2,"strong"),g.Qc(3,"invalid"),g.Wb(),g.Wb())}function B(t,n){1&t&&(g.Xb(0,"span",20),g.Qc(1,"Password is required"),g.Wb())}function Y(t,n){1&t&&(g.Xb(0,"span",20),g.Qc(1," Password should not contain spaces "),g.Wb())}function H(t,n){1&t&&(g.Xb(0,"span",20),g.Qc(1," Password should be between 6-15 characters "),g.Wb())}function T(t,n){1&t&&(g.Xb(0,"span",20),g.Qc(1,"Passwords don't match"),g.Wb())}function A(t,n){1&t&&(g.Xb(0,"span",20),g.Qc(1,"Please confirm the password"),g.Wb())}function V(t,n){1&t&&(g.Xb(0,"span",20),g.Qc(1,"Birth day is required"),g.Wb())}function J(t,n){1&t&&g.Sb(0,"mat-spinner",21),2&t&&g.uc("diameter",15)}var K,Z=((K=function(){function t(n,e,o,i,r,s,a,c){_classCallCheck(this,t),this.router=n,this.fb=e,this.auth=o,this.datePipe=i,this.dialog=r,this.loader=s,this.subject=a,this.userStore=c,this.subscriptions=[],this.isSubmitted=!1,this.currentDate=new Date,this.maxDate=new Date(this.currentDate.setFullYear(this.currentDate.getFullYear()-18))}return _createClass(t,[{key:"ngOnInit",value:function(){this.initForm()}},{key:"initForm",value:function(){this.registerForm=this.fb.group({first_name:["",[s.F.required,Object(a.a)(c.g)]],last_name:["",[s.F.required,Object(a.a)(c.g)]],username:["",[s.F.required,Object(a.a)(c.f)]],email:["",[s.F.required,Object(a.a)(c.a)]],password:["",[s.F.required,Object(a.a)(c.d),s.F.minLength(F.n),s.F.maxLength(F.m)]],confirm_password:["",s.F.required],birthday:[E()().format("YYYY-MM-DD")]},{validator:O("password","confirm_password")})}},{key:"register",value:function(){var t=this;this.registerForm.valid&&(this.loader.formProcessing=!0,this.subscriptions.push(this.auth.register(this.registerForm.value).subscribe((function(n){return Object(r.a)(t,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.loader.formProcessing=!1,localStorage.setItem("token",n.hasOwnProperty("token")?n.token:""),this.userStore.setAuthUser(n.hasOwnProperty("token")?n.token:""),t.next=5,this.router.navigate(["/"]);case 5:case"end":return t.stop()}}),t,this)})))}))))}},{key:"dateChanged",value:function(t){}},{key:"openModal",value:function(){var t=this;this.isSubmitted=!0,this.registerForm.valid&&(this.loader.formProcessing=!0,this.subscriptions.push(this.auth.sendEmailVerificationCode(this.registerForm.value).subscribe((function(n){t.loader.formProcessing=!1,t.dialog.open(S,{height:"548px",width:"548px",data:t.registerForm.value}).afterClosed().subscribe((function(n){return Object(r.a)(t,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return localStorage.setItem("token",(null==n?void 0:n.hasOwnProperty("token"))?n.token:""),t.next=3,this.router.navigate(["/"]);case 3:case"end":return t.stop()}}),t,this)})))}))}))))}},{key:"ngOnDestroy",value:function(){this.subscriptions.forEach((function(t){return t.unsubscribe()}))}},{key:"firstName",get:function(){return this.registerForm.get("first_name")}},{key:"lastName",get:function(){return this.registerForm.get("last_name")}},{key:"email",get:function(){return this.registerForm.get("email")}},{key:"pass",get:function(){return this.registerForm.get("password")}},{key:"username",get:function(){return this.registerForm.get("username")}},{key:"confirmPass",get:function(){return this.registerForm.get("confirm_password")}},{key:"birthday",get:function(){return this.registerForm.get("birthday")}}]),t}()).\u0275fac=function(t){return new(t||K)(g.Rb(i.d),g.Rb(s.f),g.Rb(l.a),g.Rb(o.f),g.Rb(f.b),g.Rb(v.a),g.Rb(d.a),g.Rb(p.a))},K.\u0275cmp=g.Lb({type:K,selectors:[["app-register"]],decls:37,vars:16,consts:[[1,"login-content"],[1,"login-content-left"],["src","assets/img/metltvlogo.svg",1,"login-logo",3,"click"],[1,"login-abs"],[1,"register-btn",3,"click"],[1,"login-btn","bg-white"],[1,"login-content-right"],[1,"login-block"],[1,"login-title"],[3,"formGroup"],["placeholder","First Name","formControlName","first_name",1,"login-input"],["class","error",4,"ngIf"],["placeholder","Last Name","formControlName","last_name",1,"login-input"],["placeholder","User name","formControlName","username",1,"login-input"],["placeholder","Email","formControlName","email",1,"login-input"],["placeholder","Password","type","password","formControlName","password",1,"login-input"],["placeholder","Reenter Password","type","password","formControlName","confirm_password",1,"login-input"],[1,"actions"],[1,"register-submit",3,"click"],[3,"diameter",4,"ngIf"],[1,"error"],[3,"diameter"]],template:function(t,n){1&t&&(g.Xb(0,"section",0),g.Xb(1,"div",1),g.Xb(2,"img",2),g.jc("click",(function(){return n.router.navigate(["/"])})),g.Wb(),g.Xb(3,"div",3),g.Xb(4,"a",4),g.jc("click",(function(){return n.router.navigate(["auth/login"])})),g.Qc(5,"Login"),g.Wb(),g.Xb(6,"a",5),g.Qc(7,"Sign Up"),g.Wb(),g.Wb(),g.Wb(),g.Xb(8,"div",6),g.Xb(9,"div",7),g.Xb(10,"p",8),g.Qc(11,"Sign Up"),g.Wb(),g.Xb(12,"form",9),g.Sb(13,"input",10),g.Oc(14,Q,2,0,"span",11),g.Oc(15,q,2,0,"span",11),g.Sb(16,"input",12),g.Oc(17,z,2,0,"span",11),g.Oc(18,N,2,0,"span",11),g.Sb(19,"input",13),g.Oc(20,L,2,0,"span",11),g.Oc(21,G,2,0,"span",11),g.Sb(22,"input",14),g.Oc(23,D,2,0,"span",11),g.Oc(24,U,4,0,"span",11),g.Sb(25,"input",15),g.Oc(26,B,2,0,"span",11),g.Oc(27,Y,2,0,"span",11),g.Oc(28,H,2,0,"span",11),g.Sb(29,"input",16),g.Oc(30,T,2,0,"span",11),g.Oc(31,A,2,0,"span",11),g.Oc(32,V,2,0,"span",11),g.Xb(33,"div",17),g.Xb(34,"a",18),g.jc("click",(function(){return n.openModal()})),g.Qc(35,"Sign Up"),g.Wb(),g.Oc(36,J,1,1,"mat-spinner",19),g.Wb(),g.Wb(),g.Wb(),g.Wb(),g.Wb()),2&t&&(g.Cb(12),g.uc("formGroup",n.registerForm),g.Cb(2),g.uc("ngIf",n.isSubmitted&&n.firstName.hasError("required")),g.Cb(1),g.uc("ngIf",n.isSubmitted&&n.firstName.hasError("patternInvalid")),g.Cb(2),g.uc("ngIf",n.isSubmitted&&n.lastName.hasError("required")),g.Cb(1),g.uc("ngIf",n.isSubmitted&&n.lastName.hasError("patternInvalid")),g.Cb(2),g.uc("ngIf",n.isSubmitted&&n.username.hasError("required")),g.Cb(1),g.uc("ngIf",n.isSubmitted&&n.username.hasError("patternInvalid")),g.Cb(2),g.uc("ngIf",n.isSubmitted&&n.email.hasError("required")),g.Cb(1),g.uc("ngIf",n.isSubmitted&&n.email.hasError("patternInvalid")),g.Cb(2),g.uc("ngIf",n.isSubmitted&&n.pass.hasError("required")),g.Cb(1),g.uc("ngIf",n.pass.hasError("patternInvalid")),g.Cb(1),g.uc("ngIf",n.pass.hasError("maxlength")||n.pass.hasError("minlength")),g.Cb(2),g.uc("ngIf",n.confirmPass.hasError("notMatch")),g.Cb(1),g.uc("ngIf",n.isSubmitted&&n.confirmPass.hasError("required")),g.Cb(1),g.uc("ngIf",n.isSubmitted&&n.birthday.hasError("required")),g.Cb(4),g.uc("ngIf",n.loader.formProcessing))},directives:[s.H,s.s,s.j,s.c,s.r,s.i,o.u,M.c],styles:[".login-content[_ngcontent-%COMP%]{display:flex;justify-content:space-between;width:100%;height:100vh}.login-logo[_ngcontent-%COMP%]{cursor:pointer}.login-content-right[_ngcontent-%COMP%]{background:#fff;width:57%}.login-content-left[_ngcontent-%COMP%]{width:43%;display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative;background:url(back-login.53f102952f1c83155d3a.png)}.login-abs[_ngcontent-%COMP%]{position:absolute;right:0}.login-btn[_ngcontent-%COMP%]{background:#fff;color:#18b587!important}.login-btn[_ngcontent-%COMP%], .register-btn[_ngcontent-%COMP%]{border-radius:28px 0 0 28px;width:128px;height:57px;display:flex;justify-content:center;align-items:center;font-size:20px;font-family:Muli-Bold;transition:.3s ease-in-out}.register-btn[_ngcontent-%COMP%]{color:#fff!important;cursor:pointer}.register-btn[_ngcontent-%COMP%]:hover{background:#fff;color:#18b587!important}.login-content-right[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;padding-left:150px}.login-title[_ngcontent-%COMP%]{color:#545454;font-size:32px;font-family:Muli-Bold;margin-bottom:32px}.login-input[_ngcontent-%COMP%]{width:100%;height:51px;box-shadow:0 0 6px rgba(0,109,204,.18);padding:15px 32px;margin-bottom:8px;margin-top:20px;color:#8c8888;font-size:16px;font-family:Muli-Regular}.login-input[_ngcontent-%COMP%]:focus{box-shadow:0 0 6px #18b587}.forgot-password[_ngcontent-%COMP%]{text-align:right;color:#545454;font-size:16px;font-family:Muli-Regular;cursor:pointer;transition:.3s ease-in-out}.forgot-password[_ngcontent-%COMP%]:hover{color:#f53c6f}.login-block[_ngcontent-%COMP%]{width:430px}.login-submit[_ngcontent-%COMP%]{width:100%;height:51px;background:#f53c6f;padding:15px 32px;margin-bottom:32px;color:#fff!important;font-size:16px;font-family:Muli-Regular;display:flex;justify-content:center;align-items:center;margin-top:47px;transition:.3s ease-in-out;cursor:pointer}.login-submit[_ngcontent-%COMP%]:hover{background:#c52551}.register-block[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.register-select[_ngcontent-%COMP%]{width:200px;height:51px;box-shadow:0 0 6px rgba(0,109,204,.18);padding:15px 32px;margin-bottom:8px;margin-top:20px;color:#cecece;font-size:16px;font-family:Muli-Regular;outline:none;border:0}.register-select[_ngcontent-%COMP%]:focus{box-shadow:0 0 6px rgba(245,60,111,.14);border:.5px solid #f53c6f}.register-day[_ngcontent-%COMP%]{width:100px;height:51px;box-shadow:0 0 6px rgba(0,109,204,.18);padding:15px 32px;margin-bottom:8px;margin-top:20px;color:#cecece;font-size:16px;font-family:Muli-Regular;outline:none;border:0}.register-day[_ngcontent-%COMP%]:focus{box-shadow:0 0 6px rgba(245,60,111,.14);border:.5px solid #f53c6f}@media (max-width:1400px){.login-logo[_ngcontent-%COMP%]{width:250px;margin-left:100px}.login-content-left[_ngcontent-%COMP%]{align-items:start}}@media (max-width:1200px){.login-logo[_ngcontent-%COMP%]{margin-left:40px}.login-content-right[_ngcontent-%COMP%]{padding-left:80px}}@media (max-width:991px){.login-content-left[_ngcontent-%COMP%]{align-items:start;height:400px;width:100%}.login-content-right[_ngcontent-%COMP%]{padding-left:0;width:100%;align-items:center;margin-top:60px}.login-content[_ngcontent-%COMP%]{height:auto;flex-direction:column}}@media (max-width:480px){.register-block[_ngcontent-%COMP%]{flex-direction:column}.register-day[_ngcontent-%COMP%], .register-select[_ngcontent-%COMP%]{width:100%}.login-block[_ngcontent-%COMP%]{width:90%}.login-title[_ngcontent-%COMP%]{font-size:27px}.forgot-password[_ngcontent-%COMP%], .login-title[_ngcontent-%COMP%]{text-align:center}.login-btn[_ngcontent-%COMP%]{width:128px;margin-right:0}.login-btn[_ngcontent-%COMP%], .register-btn[_ngcontent-%COMP%]{height:45px;font-size:16px}.login-logo[_ngcontent-%COMP%]{width:150px}}.birthday-block[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{cursor:pointer}.actions[_ngcontent-%COMP%]{display:flex;align-items:center;margin-bottom:32px;margin-top:47px}.actions[_ngcontent-%COMP%]   .register-submit[_ngcontent-%COMP%]{width:100%;height:51px;background:#f53c6f;padding:15px 32px;color:#fff!important;font-size:16px;font-family:Muli-Regular;display:flex;justify-content:center;align-items:center;transition:.3s ease-in-out;cursor:pointer}.actions[_ngcontent-%COMP%]   .register-submit[_ngcontent-%COMP%]:hover{background:#c52551}.actions[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%]{margin-left:20px}"]}),K),$=e("5eHb");function tt(t,n){1&t&&(g.Xb(0,"span",10),g.Qc(1," Please write your email"),g.Wb())}function nt(t,n){1&t&&(g.Xb(0,"span",10),g.Qc(1," E-mail is invalid "),g.Wb())}function et(t,n){1&t&&g.Sb(0,"mat-spinner",11),2&t&&g.uc("diameter",15)}var ot,it=((ot=function(){function t(n,e,o,i,r){_classCallCheck(this,t),this.fb=n,this.router=e,this.auth=o,this.toastr=i,this.loader=r,this.isSubmitted=!1,this.forgotPassForm=this.fb.group({email:["",[s.F.required,Object(a.a)(c.a)]]})}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"sendEmail",value:function(){var t=this;this.isSubmitted=!0,this.forgotPassForm.valid&&(this.loader.formProcessing=!0,this.auth.sendForgotPassEmail(this.forgotPassForm.value).subscribe((function(n){t.loader.formProcessing=!1,t.toastr.success("Reset password request has been sent to your e-mail")})))}}]),t}()).\u0275fac=function(t){return new(t||ot)(g.Rb(s.f),g.Rb(i.d),g.Rb(l.a),g.Rb($.c),g.Rb(v.a))},ot.\u0275cmp=g.Lb({type:ot,selectors:[["app-forgot-password"]],decls:16,vars:4,consts:[[1,"page-container"],[1,"metltv-background"],["src","assets/img/metltvlogo.svg",1,"login-logo",3,"click"],["id","forgot-pass-form-container"],[3,"formGroup"],["placeholder","Enter email","formControlName","email"],["class","error",4,"ngIf"],[1,"actions"],[3,"click"],[3,"diameter",4,"ngIf"],[1,"error"],[3,"diameter"]],template:function(t,n){1&t&&(g.Xb(0,"div",0),g.Xb(1,"div",1),g.Xb(2,"img",2),g.jc("click",(function(){return n.router.navigate(["/"])})),g.Wb(),g.Wb(),g.Xb(3,"div",3),g.Xb(4,"form",4),g.Xb(5,"h3"),g.Qc(6,"Forgot Password"),g.Wb(),g.Xb(7,"h4"),g.Qc(8,"Enter your email"),g.Wb(),g.Sb(9,"input",5),g.Oc(10,tt,2,0,"span",6),g.Oc(11,nt,2,0,"span",6),g.Xb(12,"div",7),g.Xb(13,"button",8),g.jc("click",(function(){return n.sendEmail()})),g.Qc(14,"Submit"),g.Wb(),g.Oc(15,et,1,1,"mat-spinner",9),g.Wb(),g.Wb(),g.Wb(),g.Wb()),2&t&&(g.Cb(4),g.uc("formGroup",n.forgotPassForm),g.Cb(6),g.uc("ngIf",n.forgotPassForm.get("email").hasError("required")&&n.isSubmitted),g.Cb(1),g.uc("ngIf",n.forgotPassForm.get("email").hasError("patternInvalid")&&n.isSubmitted),g.Cb(4),g.uc("ngIf",n.loader.formProcessing))},directives:[s.H,s.s,s.j,s.c,s.r,s.i,o.u,M.c],styles:[".page-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;width:100%;height:100vh}.metltv-background[_ngcontent-%COMP%]{width:43%;align-items:center;position:relative;background:url(back-login.53f102952f1c83155d3a.png)}#forgot-pass-form-container[_ngcontent-%COMP%], .metltv-background[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center}#forgot-pass-form-container[_ngcontent-%COMP%]{width:57%;padding-left:150px;background:#fff}#forgot-pass-form-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{width:430px}#forgot-pass-form-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#545454;font-size:32px;font-family:Muli-Bold;margin-bottom:16px}#forgot-pass-form-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#545454;font-size:24px;font-family:Muli-Bold;margin-bottom:20px}#forgot-pass-form-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;height:51px;box-shadow:0 0 6px rgba(0,109,204,.18);padding:15px 32px;margin-bottom:8px;margin-top:20px;color:#cecece;font-size:16px;font-family:Muli-Regular}#forgot-pass-form-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]{display:flex;align-items:center;margin-bottom:32px;margin-top:47px}#forgot-pass-form-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;height:51px;background:#f53c6f;padding:15px 32px;color:#fff!important;font-size:16px;font-family:Muli-Regular;display:flex;justify-content:center;align-items:center;transition:.3s ease-in-out}#forgot-pass-form-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%]{margin-left:20px}"]}),ot),rt=e("Nm8O");function st(t,n){1&t&&(g.Xb(0,"span",13),g.Qc(1," Please write the new password"),g.Wb())}function at(t,n){1&t&&(g.Xb(0,"span",13),g.Qc(1," Password should not contain spaces "),g.Wb())}function ct(t,n){1&t&&(g.Xb(0,"span",13),g.Qc(1," Password should be between 6-15 characters "),g.Wb())}function gt(t,n){1&t&&(g.Xb(0,"span",13),g.Qc(1,"Passwords don't match"),g.Wb())}function lt(t,n){1&t&&(g.Xb(0,"span",13),g.Qc(1," Please re-type the new password"),g.Wb())}function ut(t,n){1&t&&g.Sb(0,"mat-spinner",14),2&t&&g.uc("diameter",15)}function ft(t,n){if(1&t){var e=g.Yb();g.Xb(0,"form",6),g.Xb(1,"h3"),g.Qc(2,"Reset Password"),g.Wb(),g.Sb(3,"input",7),g.Oc(4,st,2,0,"span",8),g.Oc(5,at,2,0,"span",8),g.Oc(6,ct,2,0,"span",8),g.Sb(7,"input",9),g.Oc(8,gt,2,0,"span",8),g.Oc(9,lt,2,0,"span",8),g.Xb(10,"div",10),g.Xb(11,"button",11),g.jc("click",(function(){return g.Gc(e),g.nc().changePassword()})),g.Qc(12,"Submit"),g.Wb(),g.Oc(13,ut,1,1,"mat-spinner",12),g.Wb(),g.Wb()}if(2&t){var o=g.nc();g.uc("formGroup",o.resetPassForm),g.Cb(4),g.uc("ngIf",o.pass.hasError("required")&&o.isSubmitted),g.Cb(1),g.uc("ngIf",o.pass.hasError("patternInvalid")),g.Cb(1),g.uc("ngIf",o.pass.hasError("maxlength")||o.pass.hasError("minlength")),g.Cb(2),g.uc("ngIf",o.confirmPass.hasError("notMatch")),g.Cb(1),g.uc("ngIf",o.confirmPass.hasError("required")&&o.isSubmitted),g.Cb(4),g.uc("ngIf",o.loader.formProcessing)}}function dt(t,n){1&t&&g.Sb(0,"mat-spinner",14),2&t&&g.uc("diameter",15)}function pt(t,n){if(1&t){var e=g.Yb();g.Xb(0,"div",15),g.Sb(1,"img",16),g.Xb(2,"h3"),g.Qc(3,"Session expired."),g.Wb(),g.Xb(4,"p"),g.Qc(5,"The link is not valid anymore."),g.Wb(),g.Xb(6,"button",11),g.jc("click",(function(){return g.Gc(e),g.nc().resendEmail()})),g.Qc(7,"Resend email"),g.Wb(),g.Oc(8,dt,1,1,"mat-spinner",12),g.Wb()}if(2&t){var o=g.nc();g.Cb(8),g.uc("ngIf",o.loader.formProcessing)}}var bt,mt,ht,xt=[{path:"login",component:P,data:{title:"Login"}},{path:"register",component:Z,data:{title:"Register"}},{path:"forgot-password",component:it,data:{title:"Forgot Password"}},{path:"reset-password",component:(bt=function(){function t(n,e,o,i,r,g,l,u){var f,d,p,b;_classCallCheck(this,t),this.fb=n,this.router=e,this.auth=o,this.route=i,this.jwtHelper=r,this.toastr=g,this.loader=l,this.userStore=u,this.isSubmitted=!1,this.emailPassed=!1,this.tokenExpired=!1,this.email=null===(d=null===(f=this.route.snapshot)||void 0===f?void 0:f.queryParams)||void 0===d?void 0:d.email;var m=null===(b=null===(p=this.route.snapshot)||void 0===p?void 0:p.queryParams)||void 0===b?void 0:b.token;this.tokenExpired=this.jwtHelper.isTokenExpired(m),this.emailPassed=!!this.email,this.resetPassForm=this.fb.group({email:[this.email,[s.F.required,Object(a.a)(c.a)]],password:["",[s.F.required,Object(a.a)(c.d),s.F.minLength(F.n),s.F.maxLength(F.m)]],confirm_password:["",[s.F.required]]},{validator:O("password","confirm_password")})}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"changePassword",value:function(){var t=this;this.isSubmitted=!0,this.resetPassForm.valid&&this.auth.resetPass(this.resetPassForm.value).subscribe((function(n){return Object(r.a)(t,void 0,void 0,regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=n.hasOwnProperty("token")?null==n?void 0:n.token:"",t.t0=e,!t.t0){t.next=7;break}return localStorage.setItem("token",e),this.userStore.setAuthUser(e),t.next=7,this.router.navigate(["/"]);case 7:case"end":return t.stop()}}),t,this)})))}))}},{key:"resendEmail",value:function(){var t=this;this.auth.sendForgotPassEmail({email:this.email}).subscribe((function(n){t.toastr.success("Reset password request has been resent to your e-mail")}))}},{key:"pass",get:function(){return this.resetPassForm.get("password")}},{key:"confirmPass",get:function(){return this.resetPassForm.get("confirm_password")}}]),t}(),bt.\u0275fac=function(t){return new(t||bt)(g.Rb(s.f),g.Rb(i.d),g.Rb(l.a),g.Rb(i.a),g.Rb(rt.a),g.Rb($.c),g.Rb(v.a),g.Rb(p.a))},bt.\u0275cmp=g.Lb({type:bt,selectors:[["app-reset-password"]],decls:6,vars:2,consts:[[1,"page-container"],[1,"metltv-background"],["src","assets/img/metltvlogo.svg",1,"login-logo",3,"click"],["id","forgot-pass-form-container"],[3,"formGroup",4,"ngIf"],["id","token-expired-container",4,"ngIf"],[3,"formGroup"],["type","password","placeholder","Password","formControlName","password"],["class","error",4,"ngIf"],["type","password","placeholder","Reenter Password","formControlName","confirm_password"],[1,"actions"],[3,"click"],[3,"diameter",4,"ngIf"],[1,"error"],[3,"diameter"],["id","token-expired-container"],["src","assets/img/undraw_calendar_dutt.svg"]],template:function(t,n){1&t&&(g.Xb(0,"div",0),g.Xb(1,"div",1),g.Xb(2,"img",2),g.jc("click",(function(){return n.router.navigate(["/"])})),g.Wb(),g.Wb(),g.Xb(3,"div",3),g.Oc(4,ft,14,7,"form",4),g.Oc(5,pt,9,1,"div",5),g.Wb(),g.Wb()),2&t&&(g.Cb(4),g.uc("ngIf",n.emailPassed&&!n.tokenExpired),g.Cb(1),g.uc("ngIf",n.tokenExpired))},directives:[o.u,s.H,s.s,s.j,s.c,s.r,s.i,M.c],styles:[".page-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;width:100%;height:100vh}.metltv-background[_ngcontent-%COMP%]{width:43%;align-items:center;position:relative;background:url(back-login.53f102952f1c83155d3a.png)}#forgot-pass-form-container[_ngcontent-%COMP%], .metltv-background[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center}#forgot-pass-form-container[_ngcontent-%COMP%]{width:57%;padding-left:150px;background:#fff}#forgot-pass-form-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{width:430px}#forgot-pass-form-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#545454;font-size:32px;font-family:Muli-Bold;margin-bottom:16px}#forgot-pass-form-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#545454;font-size:24px;font-family:Muli-Bold;margin-bottom:20px}#forgot-pass-form-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;height:51px;box-shadow:0 0 6px rgba(0,109,204,.18);padding:15px 32px;margin-bottom:8px;margin-top:20px;color:#cecece;font-size:16px;font-family:Muli-Regular}#forgot-pass-form-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]{display:flex;align-items:center;margin-bottom:32px;margin-top:47px}#forgot-pass-form-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;height:51px;background:#f53c6f;padding:15px 32px;color:#fff!important;font-size:16px;font-family:Muli-Regular;display:flex;justify-content:center;align-items:center;transition:.3s ease-in-out}#forgot-pass-form-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%]{margin-left:20px}#token-expired-container[_ngcontent-%COMP%]{text-align:center;width:100%;max-width:500px}#token-expired-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:150px}#token-expired-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:48px;font-size:32px;color:#545454;font-weight:700}#token-expired-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:24px 0 0;color:#545454;font-size:16px}#token-expired-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;height:51px;background:#f53c6f;padding:15px 32px;color:#fff!important;font-size:16px;font-family:Muli-Regular;display:flex;justify-content:center;align-items:center;transition:.3s ease-in-out;margin:40px auto 0;max-width:430px}"]}),bt),data:{title:"Reset Password"}}],Ct=((mt=function t(){_classCallCheck(this,t)}).\u0275mod=g.Pb({type:mt}),mt.\u0275inj=g.Ob({factory:function(t){return new(t||mt)},imports:[[i.f.forChild(xt)],i.f]}),mt),Pt=e("gNIp"),Ot=((ht=function t(){_classCallCheck(this,t)}).\u0275mod=g.Pb({type:ht}),ht.\u0275inj=g.Ob({factory:function(t){return new(t||ht)},providers:[],imports:[[o.c,Ct,s.B,Pt.a]]}),ht)}}]);
//# sourceMappingURL=auth-auth-module-es5.682115c5d2aec002db10.js.map
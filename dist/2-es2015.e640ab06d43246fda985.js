(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{qAFH:function(t,e,n){"use strict";n.r(e),n.d(e,"CardsModule",(function(){return X}));var r=n("ofXK"),s=n("tyNb"),i=n("mrSG"),c=n("wd/R"),a=n("9xOu"),o=n("fXoL"),d=n("tVj7"),u=n("+Mrf"),l=n("Rnal"),g=n("lwos"),b=n("Xa2L"),p=n("NFeN");function h(t,e){1&t&&o.Sb(0,"mat-spinner",6),2&t&&o.uc("diameter",15)}function f(t,e){1&t&&(o.Xb(0,"div",18),o.Xb(1,"small",19),o.Rc(2,"Primary"),o.Wb(),o.Wb())}function m(t,e){if(1&t){const t=o.Yb();o.Xb(0,"mat-icon",4),o.jc("click",(function(){o.Ic(t);const e=o.nc(2).$implicit;return o.nc().makePrimary(e)})),o.Rc(1,"check"),o.Wb()}}function C(t,e){if(1&t){const t=o.Yb();o.Xb(0,"div",20),o.Pc(1,m,2,0,"mat-icon",21),o.Xb(2,"mat-icon",4),o.jc("click",(function(){o.Ic(t);const e=o.nc().$implicit;return o.nc().editCard(e)})),o.Rc(3,"settings"),o.Wb(),o.Xb(4,"mat-icon",4),o.jc("click",(function(){o.Ic(t);const e=o.nc().$implicit;return o.nc().removeCard(e)})),o.Rc(5,"delete"),o.Wb(),o.Wb()}if(2&t){const t=o.nc().$implicit;o.Cb(1),o.uc("ngIf",!t.is_primary)}}function O(t,e){if(1&t){const t=o.Yb();o.Xb(0,"div",7),o.jc("mouseover",(function(){o.Ic(t);const n=e.$implicit;return o.nc().toggleActions(n,!0)}))("mouseleave",(function(){o.Ic(t);const n=e.$implicit;return o.nc().toggleActions(n,!1)})),o.Pc(1,f,3,0,"div",8),o.Xb(2,"div",9),o.Xb(3,"div",10),o.Xb(4,"div",11),o.Rc(5),o.Wb(),o.Xb(6,"div",12),o.Sb(7,"img",13),o.Wb(),o.Wb(),o.Xb(8,"div",14),o.Rc(9),o.Wb(),o.Xb(10,"div",15),o.Xb(11,"p"),o.Rc(12,"exp. date"),o.Wb(),o.Xb(13,"p",16),o.Rc(14),o.Wb(),o.Wb(),o.Wb(),o.Pc(15,C,6,1,"div",17),o.Wb()}if(2&t){const t=e.$implicit,n=e.index,r=o.nc();o.Hb("darken",r.showActions&&r.selectedCard===t),o.uc("ngClass",r.getBgClass(n,t)),o.Cb(1),o.uc("ngIf",t.is_primary),o.Cb(4),o.Sc(t.name),o.Cb(2),o.wc("src","assets/img/cards/",t.brand.toLowerCase(),".svg",o.Kc),o.Cb(2),o.Tc("**** **** **** ",t.last4," "),o.Cb(5),o.Sc(r.formatExpiryDate(t.exp_month+"/"+t.exp_year)),o.Cb(1),o.uc("ngIf",r.showActions&&r.selectedCard===t)}}let _=(()=>{class t{constructor(t,e,n,r,s){this.usersService=t,this.cardsService=e,this.getAuthUser=n,this.router=r,this.loader=s,this.userCards=[],this.subscriptions=[],this.showActions=!1,this.maxCardsPerUser=a.f,this.authUser=this.getAuthUser.transform()}ngOnInit(){this.getUserCards(),console.log(this.authUser.users_cards)}getUserCards(){this.loader.dataLoading=!0,this.subscriptions.push(this.cardsService.getUserCards({user_id:this.authUser.id}).subscribe(t=>{this.userCards=t,this.loader.dataLoading=!1}))}formatExpiryDate(t){return c(t,"MM/YYYY").format("MM/YY")}toggleActions(t,e){this.showActions=e,e&&(this.selectedCard=t)}editCard(t){return Object(i.a)(this,void 0,void 0,(function*(){yield this.router.navigate(["/user/cards/edit/"+t.id])}))}removeCard(t){this.subscriptions.push(this.cardsService.removeStripeCard({card_id:t.id,stripe_customer_id:t.customer,user_id:this.authUser.id}).subscribe(t=>{localStorage.setItem("token",t.hasOwnProperty("token")?t.token:""),this.userCards=t.cards}))}makePrimary(t){this.subscriptions.push(this.cardsService.makePrimary({card_id:t.id,stripe_customer_id:t.customer,user_id:this.authUser.id}).subscribe(t=>{this.userCards=t}))}getBgClass(t,e){return this.showActions&&this.selectedCard===e?"":0===t?"bg-green":1===t?"bg-gold":"bg-gray"}ngOnDestroy(){this.subscriptions.forEach(t=>t.unsubscribe())}}return t.\u0275fac=function(e){return new(e||t)(o.Rb(d.a),o.Rb(u.a),o.Rb(l.a),o.Rb(s.d),o.Rb(g.a))},t.\u0275cmp=o.Lb({type:t,selectors:[["app-show-cards"]],decls:7,vars:3,consts:[["id","user-cards-list"],[3,"diameter",4,"ngIf"],["class","card p-4 ",3,"ngClass","darken","mouseover","mouseleave",4,"ngFor","ngForOf"],["id","add-new-card",1,"card","add-card-bg",3,"hidden"],[3,"click"],["src","assets/img/cards/add%20(7).svg","alt","","width","18","height","18"],[3,"diameter"],[1,"card","p-4",3,"ngClass","mouseover","mouseleave"],["class","card-tile text-center",4,"ngIf"],[1,"details","w-100"],[1,"d-flex","justify-content-between","align-items-center"],[1,"bank-name"],[1,"brand"],[1,"brand-img",3,"src"],[1,"card-number","my-4"],[1,"expiration-date","ml-auto"],[1,"numbers"],["class","actions",4,"ngIf"],[1,"card-tile","text-center"],[1,"text-white"],[1,"actions"],[3,"click",4,"ngIf"]],template:function(t,e){1&t&&(o.Xb(0,"div",0),o.Pc(1,h,1,1,"mat-spinner",1),o.Pc(2,O,16,9,"div",2),o.Xb(3,"div",3),o.Xb(4,"div",4),o.jc("click",(function(){return e.router.navigate(["/user/cards/add"])})),o.Sb(5,"img",5),o.Rc(6," ADD CARD "),o.Wb(),o.Wb(),o.Wb()),2&t&&(o.Cb(1),o.uc("ngIf",e.loader.dataLoading),o.Cb(1),o.uc("ngForOf",e.userCards),o.Cb(1),o.uc("hidden",e.loader.dataLoading||e.userCards.length===e.maxCardsPerUser))},directives:[r.m,r.l,b.b,r.k,p.a],styles:['#user-cards-list[_ngcontent-%COMP%]{display:flex}#user-cards-list[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{width:320px;height:203px;display:flex;justify-content:space-between;flex-direction:unset;box-shadow:2px 2px 1px #000;margin:25px;position:relative}#user-cards-list[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-evenly}#user-cards-list[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%]{display:flex;align-items:flex-end}#user-cards-list[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%]   .brand-img[_ngcontent-%COMP%]{width:43px}#user-cards-list[_ngcontent-%COMP%]   .card#add-new-card[_ngcontent-%COMP%]{align-items:center;justify-content:center;cursor:pointer}#user-cards-list[_ngcontent-%COMP%]   .card#add-new-card[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:40px;cursor:pointer}#user-cards-list[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]{position:absolute;background-color:rgba(0,0,0,.26);width:100%;height:100%;top:0;left:0;display:flex;justify-content:center;align-items:center}#user-cards-list[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{cursor:pointer}#user-cards-list[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .expiration-date[_ngcontent-%COMP%]{font-size:12px;line-height:18px;font-family:Muli-Regular,sans-serif;color:#fff}#user-cards-list[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .expiration-date[_ngcontent-%COMP%]   .numbers[_ngcontent-%COMP%]{font-size:17px;line-height:25px;font-family:Muli-Regular,sans-serif;color:#fff}#user-cards-list[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .bank-name[_ngcontent-%COMP%]{font-family:Muli-Regular,sans-serif;font-size:22px;line-height:33px;color:#fff;text-shadow:-1px 1px #000;text-transform:capitalize}#user-cards-list[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-number[_ngcontent-%COMP%]{font-family:Muli-Regular,sans-serif;font-size:26px;line-height:33px;color:#fff}.card-tile[_ngcontent-%COMP%]{position:absolute;top:55px;left:-14px;width:100px;height:25px;background-color:#f53c6f;z-index:1}.card-tile[_ngcontent-%COMP%]:after{top:0;right:-20px;height:25px;border-left:11px solid #f53c6f;border-bottom:12px solid transparent;border-top:12px solid transparent}.card-tile[_ngcontent-%COMP%]:after, .card-tile[_ngcontent-%COMP%]:before{content:"";position:absolute;width:20px}.card-tile[_ngcontent-%COMP%]:before{bottom:-8px;left:4px;height:18px;border-right:9px solid #f53c6f;border-bottom:9px solid transparent;border-top:9px solid transparent;transform:rotate(135deg);z-index:1}.bg-green[_ngcontent-%COMP%]{background-image:url(Group\\ 1572.9a8f53a4dffda1778a72.svg);border-radius:7px;background-size:cover}.bg-gold[_ngcontent-%COMP%], .bg-gray[_ngcontent-%COMP%]{background-image:url(Group\\ 1573.3564143eac10a54a0fc9.svg)}.add-card-bg[_ngcontent-%COMP%], .bg-gold[_ngcontent-%COMP%], .bg-gray[_ngcontent-%COMP%]{border-radius:7px;background-size:cover}.add-card-bg[_ngcontent-%COMP%]{background-image:url(Group\\ 1574.4eb319cc943a5ba723fb.svg);box-shadow:none!important;font-size:20px!important;color:#0e9d6a}#user-cards-list[_ngcontent-bgb-c555][_ngcontent-%COMP%]   .card#add-new-card[_ngcontent-bgb-c555][_ngcontent-%COMP%]   mat-icon[_ngcontent-bgb-c555][_ngcontent-%COMP%]{font-size:19px!important;cursor:pointer}']}),t})();var v=n("TTN2"),P=n("VFot"),x=n("3Pt+"),M=n("5eHb");function y(t,e){1&t&&o.Sb(0,"mat-spinner",8),2&t&&o.uc("diameter",15)}let w=(()=>{class t{constructor(t,e,n,r,s,i,c,o,d){this.stripeService=t,this.usersService=e,this.cardsService=n,this.getAuthUser=r,this.router=s,this.toastr=i,this.fb=c,this.route=o,this.loader=d,this.cardOptions=a.m,this.elementsOptions={locale:"en"},this.editCase=!1,this.subscriptions=[],this.saveCardForm=this.fb.group({name:["",x.w.required],primary:[0]})}ngOnInit(){var t;this.authUser=this.getAuthUser.transform(),this.cardId=null===(t=this.route.snapshot.params)||void 0===t?void 0:t.id,this.editCase=!!this.cardId,this.editCase&&this.getCardDetails()}getCardDetails(){this.cardsService.getCardDetails({card_id:this.cardId}).subscribe(t=>{this.cardDetails=t,this.saveCardForm.patchValue({name:t.name})})}saveCard(){this.loader.dataLoading=!0,this.subscriptions.push(this.editCase?this.cardsService.updateStripeCard(Object.assign({card_id:this.cardId},this.saveCardForm.value)).subscribe(t=>Object(i.a)(this,void 0,void 0,(function*(){this.loader.dataLoading=!1,this.toastr.success("The card info has been updated successfully"),yield this.router.navigate(["/user/cards"])}))):this.stripeService.createToken(this.card.element,{name:this.authUser.full_name}).subscribe(t=>{if(t.token){const e=Object(v.a)(t,this.authUser,this.saveCardForm.value.name);this.cardsService.createStripeCard(e).subscribe(t=>Object(i.a)(this,void 0,void 0,(function*(){this.loader.dataLoading=!1,this.toastr.success("The card has been added successfully"),localStorage.setItem("token",t.hasOwnProperty("token")?t.token:""),yield this.router.navigate(["/user/cards"])})))}else t.error&&(this.loader.dataLoading=!1,this.toastr.error(t.error.message))}))}goToCardsList(){return Object(i.a)(this,void 0,void 0,(function*(){yield this.router.navigate(["/user/cards"])}))}ngOnDestroy(){this.subscriptions.forEach(t=>t.unsubscribe())}}return t.\u0275fac=function(e){return new(e||t)(o.Rb(P.c),o.Rb(d.a),o.Rb(u.a),o.Rb(l.a),o.Rb(s.d),o.Rb(M.b),o.Rb(x.e),o.Rb(s.a),o.Rb(g.a))},t.\u0275cmp=o.Lb({type:t,selectors:[["app-save-card"]],viewQuery:function(t,e){var n;1&t&&o.Wc(P.b,!0),2&t&&o.Dc(n=o.kc())&&(e.card=n.first)},decls:11,vars:6,consts:[[1,"stripe-card-container"],[3,"formGroup"],[1,"field-row"],["formControlName","name",1,"form-control"],[3,"hidden","options","elementsOptions"],[3,"diameter",4,"ngIf"],["type","button",1,"back",3,"click"],["type","button",1,"save-card",3,"click"],[3,"diameter"]],template:function(t,e){1&t&&(o.Xb(0,"div",0),o.Xb(1,"form",1),o.Xb(2,"div",2),o.Sb(3,"input",3),o.Wb(),o.Sb(4,"ngx-stripe-card",4),o.Xb(5,"div",2),o.Pc(6,y,1,1,"mat-spinner",5),o.Xb(7,"button",6),o.jc("click",(function(){return e.goToCardsList()})),o.Rc(8,"Back"),o.Wb(),o.Xb(9,"button",7),o.jc("click",(function(){return e.saveCard()})),o.Rc(10),o.Wb(),o.Wb(),o.Wb(),o.Wb()),2&t&&(o.Cb(1),o.uc("formGroup",e.saveCardForm),o.Cb(3),o.uc("hidden",e.editCase)("options",e.cardOptions)("elementsOptions",e.elementsOptions),o.Cb(2),o.uc("ngIf",e.loader.dataLoading),o.Cb(4),o.Tc("",e.editCase?"Update":"Add card"," "))},directives:[x.y,x.p,x.i,x.c,x.o,x.h,P.b,r.m,b.b],styles:[".stripe-card-container[_ngcontent-%COMP%]{width:100%;max-width:360px}.stripe-card-container[_ngcontent-%COMP%]   .StripeElement[_ngcontent-%COMP%]{box-shadow:unset!important}.stripe-card-container[_ngcontent-%COMP%]   .field-row[_ngcontent-%COMP%]{margin:20px 0;display:flex}.stripe-card-container[_ngcontent-%COMP%]   .field-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:88px;height:36px;font-family:Muli-Light,sans-serif;font-size:16px;color:#fff!important;display:flex;justify-content:center;align-items:center;margin-left:16px;margin-right:16px;cursor:pointer}.stripe-card-container[_ngcontent-%COMP%]   .field-row[_ngcontent-%COMP%]   .save-card[_ngcontent-%COMP%]{background-color:#18b587}.stripe-card-container[_ngcontent-%COMP%]   .field-row[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]{background-color:#c9c9c9}"]}),t})();const k=[{path:"",component:_},{path:"add",component:w},{path:"edit/:id",component:w}];let R=(()=>{class t{}return t.\u0275mod=o.Pb({type:t}),t.\u0275inj=o.Ob({factory:function(e){return new(e||t)},imports:[[s.f.forChild(k)],s.f]}),t})();var S=n("PCNd");let X=(()=>{class t{}return t.\u0275mod=o.Pb({type:t}),t.\u0275inj=o.Ob({factory:function(e){return new(e||t)},imports:[[r.c,R,S.a]]}),t})()}}]);
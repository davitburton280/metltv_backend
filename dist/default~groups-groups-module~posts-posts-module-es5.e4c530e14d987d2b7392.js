function _classCallCheck(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _createClass(t,n,e){return n&&_defineProperties(t.prototype,n),e&&_defineProperties(t,e),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"A7+4":function(t,n,e){"use strict";e.d(n,"a",(function(){return a}));var o=e("0IaG"),i=e("fXoL"),c=e("5eHb"),a=function(){var t=function(){function t(n,e,o){_classCallCheck(this,t),this.data=n,this.dialog=e,this.toastr=o,this.shareUrl=n.shareUrl}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"getTweeterLink",value:function(){return"https://twitter.com/intent/tweet?text="+this.shareUrl}},{key:"getFacebookLink",value:function(){return"https://www.facebook.com/sharer/sharer.php?href="+encodeURIComponent(this.shareUrl)}},{key:"copyInputMessage",value:function(t){this.dialog.closeAll(),t.select(),document.execCommand("copy"),t.setSelectionRange(0,0),this.toastr.success("Captioned")}}]),t}();return t.\u0275fac=function(n){return new(n||t)(i.Qb(o.a),i.Qb(o.b),i.Qb(c.b))},t.\u0275cmp=i.Kb({type:t,selectors:[["app-social-share-dialog"]],decls:15,vars:3,consts:[[1,"modalDiv"],[1,"shareLink"],[1,"linkImages"],["target","_blank",3,"href"],["src","assets/img/twitter.svg","alt","",1,"twitterImg"],["onclick","javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false;","target","_blank","title","Share on Facebook",3,"href"],["src","assets/img/facebook.svg","alt","",1,"facebookImg"],[1,"copyingDiv"],["id","link-address-holder",3,"value"],["urlHolder",""],[1,"copyLink",3,"click"],[1,"copy-url",3,"click"]],template:function(t,n){if(1&t){var e=i.Xb();i.Wb(0,"div",0),i.Wb(1,"p",1),i.Lc(2,"Share this link via"),i.Vb(),i.Wb(3,"div",2),i.Wb(4,"a",3),i.Rb(5,"img",4),i.Vb(),i.Wb(6,"a",5),i.Rb(7,"img",6),i.Vb(),i.Vb(),i.Wb(8,"div",7),i.Rb(9,"input",8,9),i.Wb(11,"p",10),i.ec("click",(function(){i.Bc(e);var t=i.xc(10);return n.copyInputMessage(t)})),i.Lc(12,"Or copy link"),i.Vb(),i.Vb(),i.Wb(13,"button",11),i.ec("click",(function(){i.Bc(e);var t=i.xc(10);return n.copyInputMessage(t)})),i.Lc(14,"Copy"),i.Vb(),i.Vb()}2&t&&(i.Cb(4),i.pc("href",n.getTweeterLink(),i.Ec),i.Cb(2),i.pc("href",n.getFacebookLink(),i.Ec),i.Cb(3),i.pc("value",n.shareUrl))},styles:['#link-address-holder[_ngcontent-%COMP%]{border:1px solid silver;padding:5px}.copy-url[_ngcontent-%COMP%]{width:119px;height:36px;padding:15px 32px;color:#fff!important;font-size:16px;font-family:Muli-Light;display:flex;justify-content:center;align-items:center;transition:.3s ease-in-out;background:#18b587}.shareLink[_ngcontent-%COMP%]{display:flex;margin-bottom:46px;font-size:36px;font-family:Muli-Bold;color:#5b5b5b}@media (max-width:1023px) and (min-width:650px){.shareLink[_ngcontent-%COMP%]{font-size:28px}}@media (max-width:649px){.shareLink[_ngcontent-%COMP%]{font-size:20px}}.linkImages[_ngcontent-%COMP%]{display:flex!important;justify-content:center!important}.twitterImg[_ngcontent-%COMP%]{width:64px;height:85px;opacity:1;margin-right:30px}@media (max-width:1023px) and (min-width:650px){.twitterImg[_ngcontent-%COMP%]{width:54px;height:75px}}@media (max-width:649px){.twitterImg[_ngcontent-%COMP%]{width:44px;height:65px}}.facebookImg[_ngcontent-%COMP%]{width:64px;height:85px;opacity:1}@media (max-width:1023px) and (min-width:650px){.facebookImg[_ngcontent-%COMP%]{width:54px;height:75px}}@media (max-width:649px){.facebookImg[_ngcontent-%COMP%]{width:44px;height:65px}}.copyingDiv[_ngcontent-%COMP%]{margin:36px auto;background-color:#f1f1f1;display:flex;justify-self:center;justify-content:center;align-items:center;padding:17px 16px;max-width:440px;width:100%;position:relative}@media (max-width:1023px) and (min-width:650px){.copyingDiv[_ngcontent-%COMP%]{padding:13px 11px}}@media (max-width:649px){.copyingDiv[_ngcontent-%COMP%]{flex-direction:column}}#link-address-holder[_ngcontent-%COMP%]{background-color:#f1f1f1;border:none;font-size:20px;color:#707070;margin-right:20px}@media (max-width:1023px) and (min-width:650px){#link-address-holder[_ngcontent-%COMP%]{font-size:16px}}@media (max-width:649px){#link-address-holder[_ngcontent-%COMP%]{font-size:12px}}.copyLink[_ngcontent-%COMP%]{font-size:20px;color:#18b587;display:flex;margin-left:10px;cursor:pointer}@media (max-width:1023px) and (min-width:650px){.copyLink[_ngcontent-%COMP%]{font-size:16px}}@media (max-width:649px){.copyLink[_ngcontent-%COMP%]{font-size:12px}}.copyLink[_ngcontent-%COMP%]:before{content:"";width:1px;background-color:#000;display:block;top:10px;position:absolute;bottom:10px;right:140px}@media (max-width:1023px) and (min-width:650px){.copyLink[_ngcontent-%COMP%]:before{right:140px}}@media (max-width:649px){.copyLink[_ngcontent-%COMP%]:before{display:none}}.copy-url[_ngcontent-%COMP%]{width:170px!important;background-color:#f53c6f;color:#fff;font-size:13px;margin:0 auto}.modalDiv[_ngcontent-%COMP%]{padding:20px 40px 0}']}),t}()},WuvU:function(t,n,e){"use strict";e.d(n,"a",(function(){return x}));var o=e("fXoL"),i=e("A7+4"),c=e("9xOu"),a=e("fFb+"),s=e("PWx8"),r=e("PPbg"),l=e("0IaG"),p=e("jN7V"),d=e("tyNb"),g=e("ofXK"),u=e("bTqV"),f=e("STbY"),b=e("NFeN"),m=e("yEwS"),h=e("fZdh");function C(t,n){if(1&t&&(o.Ub(0),o.Rb(1,"i",20),o.Wb(2,"span",21),o.Lc(3),o.Vb(),o.Tb()),2&t){var e=n.ngIf;o.Cb(2),o.pc("routerLink","/groups/"+e.custom_name+"/about"),o.Cb(1),o.Mc(e.name)}}function M(t,n){if(1&t&&(o.Rb(0,"img",22),o.jc(1,"getImgPath")),2&t){var e=o.ic(2);o.pc("routerLink","/posts/"+e.post.id)("src",o.lc(1,2,e.post.cover_img,"images"),o.Ec)}}function P(t,n){if(1&t&&(o.Rb(0,"video",23),o.jc(1,"getImgPath")),2&t){var e=o.ic(2);o.pc("routerLink","/posts/"+e.post.id)("src",o.lc(1,2,e.post.cover_img,"videos"),o.Ec)}}function _(t,n){1&t&&(o.Wb(0,"a"),o.Wb(1,"span",9),o.Lc(2,"chat_bubble"),o.Vb(),o.Lc(3,"Comments"),o.Vb())}function v(t,n){if(1&t){var e=o.Xb();o.Wb(0,"div",24),o.Wb(1,"button",25),o.Wb(2,"i",9),o.Lc(3,"more_vert"),o.Vb(),o.Vb(),o.Wb(4,"mat-menu",null,26),o.Wb(6,"button",27),o.ec("click",(function(){o.Bc(e);var t=o.ic(2);return t.editPost(t.post)})),o.Wb(7,"mat-icon"),o.Lc(8,"edit"),o.Vb(),o.Wb(9,"span"),o.Lc(10,"Edit"),o.Vb(),o.Vb(),o.Wb(11,"button",27),o.ec("click",(function(){o.Bc(e);var t=o.ic(2);return t.deletePost(t.post)})),o.Wb(12,"mat-icon"),o.Lc(13,"delete"),o.Vb(),o.Wb(14,"span"),o.Lc(15,"Delete"),o.Vb(),o.Vb(),o.Vb(),o.Vb()}if(2&t){var i=o.xc(5);o.Cb(1),o.pc("matMenuTriggerFor",i)}}function O(t,n){if(1&t){var e=o.Xb();o.Wb(0,"div",1),o.Wb(1,"div",2),o.Wb(2,"p"),o.Lc(3," Posted by "),o.Wb(4,"span",3),o.Lc(5),o.Vb(),o.Jc(6,C,4,2,"ng-container",4),o.Vb(),o.Wb(7,"p"),o.Lc(8),o.jc(9,"dateFromNow"),o.Vb(),o.Vb(),o.Wb(10,"div",5),o.Wb(11,"div",6),o.Wb(12,"div",7),o.Wb(13,"button",8),o.ec("click",(function(){o.Bc(e);var t=o.ic();return t.voteForPost(1,t.post)})),o.Wb(14,"span",9),o.Lc(15,"forward"),o.Vb(),o.Vb(),o.Wb(16,"div",10),o.Lc(17),o.Vb(),o.Wb(18,"button",11),o.ec("click",(function(){o.Bc(e);var t=o.ic();return t.voteForPost(-1,t.post)})),o.Wb(19,"span",9),o.Lc(20,"forward"),o.Vb(),o.Vb(),o.Vb(),o.Vb(),o.Wb(21,"div",12),o.Rb(22,"div",13),o.Jc(23,M,2,5,"img",14),o.Jc(24,P,2,5,"video",15),o.Wb(25,"div",16),o.Wb(26,"div",17),o.Jc(27,_,4,0,"a",4),o.Wb(28,"a",18),o.ec("click",(function(){return o.Bc(e),o.ic().openSocialShareModal()})),o.Wb(29,"span",9),o.Lc(30,"share"),o.Vb(),o.Lc(31,"Share"),o.Vb(),o.Vb(),o.Jc(32,v,16,1,"div",19),o.Vb(),o.Vb(),o.Vb(),o.Vb()}if(2&t){var i=o.ic();o.Cb(4),o.pc("routerLink","/users/"+i.post.post_author.username),o.Cb(1),o.Mc(i.post.post_author.username),o.Cb(1),o.pc("ngIf",!i.accessedFromGroup&&i.post.post_group),o.Cb(2),o.Oc("",i.post.views+" views ","",o.kc(9,16,i.post.created_at),""),o.Cb(5),o.Gb("active",i.isPostVotedByAuthUser(1)),o.Cb(4),o.Mc(i.post.votes),o.Cb(1),o.Gb("active",i.isPostVotedByAuthUser(-1)),o.Cb(4),o.pc("innerHTML",i.post.description,o.Cc)("routerLink","/posts/"+i.post.id),o.Cb(1),o.pc("ngIf",null==i.post||null==i.post.cover_img?null:i.post.cover_img.includes("image")),o.Cb(1),o.pc("ngIf",null==i.post||null==i.post.cover_img?null:i.post.cover_img.includes("video")),o.Cb(3),o.pc("ngIf",i.commentsField),o.Cb(5),o.pc("ngIf",i.authUser.id===i.post.author_id)}}var x=function(){var t=function(){function t(n,e,i,a,s,r){_classCallCheck(this,t),this.postsService=n,this.userStore=e,this.dialog=i,this.postsStore=a,this.router=s,this.route=r,this.accessedFromGroup=!1,this.vote=new o.o,this.deletePosts=new o.o,this.API_URL=c.c}return _createClass(t,[{key:"ngOnInit",value:function(){var t,n,e,o,i=this;this.commentsField=!!(null===(n=null===(t=this.route.snapshot)||void 0===t?void 0:t.params)||void 0===n?void 0:n.id),console.log(null===(o=null===(e=this.route.snapshot)||void 0===e?void 0:e.params)||void 0===o?void 0:o.id),this.authUser=this.userStore.authUser,this.postsStore.allPosts$.subscribe((function(t){i.allPosts=t.posts}))}},{key:"openSocialShareModal",value:function(){this.dialog.open(i.a,{width:"500px",height:"400px",data:{shareUrl:window.location.href}}).afterClosed().subscribe((function(t){}))}},{key:"voteForPost",value:function(t,n){this.isPostVotedByAuthUser(t)||(this.selectedPost=n,this.vote.emit({post_id:this.post.id,user_id:this.authUser.id,post:n,vote:t}))}},{key:"isPostVotedByAuthUser",value:function(t){var n,e,o=this;return!!(null===(e=null===(n=this.post)||void 0===n?void 0:n.user_posts)||void 0===e?void 0:e.find((function(n){var e=n.users_posts;return e.voted===t&&e.user_id===o.authUser.id})))}},{key:"deletePost",value:function(t){var n=this,e=[];e.push(t.id),this.postsService.delete(e).subscribe((function(t){n.deletePosts.emit()}))}},{key:"editPost",value:function(t){console.log(t),this.postsStore.setEditePost(t),t.cover_img?this.dialog.open(a.a,{maxWidth:"591px",maxHeight:"479px",height:"100%",width:"100%",data:{countUploadFile:"oneFile",post:t}}).afterClosed().subscribe((function(t){console.log(t)})):this.router.navigate(["/posts/create"])}},{key:"ngOnDestroy",value:function(){}}]),t}();return t.\u0275fac=function(n){return new(n||t)(o.Qb(s.a),o.Qb(r.a),o.Qb(l.b),o.Qb(p.a),o.Qb(d.e),o.Qb(d.a))},t.\u0275cmp=o.Kb({type:t,selectors:[["app-post-item"]],inputs:{post:"post",group:"group",accessedFromGroup:"accessedFromGroup"},outputs:{vote:"vote",deletePosts:"deletePosts"},decls:1,vars:1,consts:[["class","post-item",4,"ngIf"],[1,"post-item"],[1,"posted"],[1,"author-username",3,"routerLink"],[4,"ngIf"],[1,"info"],[1,"left-wrap"],[1,"voting-container"],[1,"vote-up-btn",3,"disabled","click"],[1,"material-icons"],[1,"vote-count"],[1,"vote-down-btn",3,"click"],[1,"right-wrap"],[3,"innerHTML","routerLink"],["class","post-cover",3,"routerLink","src",4,"ngIf"],["controls","",3,"routerLink","src",4,"ngIf"],[1,"post-menu"],[1,"menu"],[3,"click"],["class","dotes",4,"ngIf"],[1,"fas","fa-arrow-right","group-pointer"],[1,"post-group-name",3,"routerLink"],[1,"post-cover",3,"routerLink","src"],["controls","",3,"routerLink","src"],[1,"dotes"],["mat-icon-button","",3,"matMenuTriggerFor"],["menu","matMenu"],["mat-menu-item","",3,"click"]],template:function(t,n){1&t&&o.Jc(0,O,33,18,"div",0),2&t&&o.pc("ngIf",n.post)},directives:[g.m,d.f,u.a,f.c,f.d,f.a,b.a],pipes:[m.a,h.a],styles:[".post-item[_ngcontent-%COMP%]{margin-bottom:32px;padding:12px;background:#f5f5f5}.post-item[_ngcontent-%COMP%]   .posted[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.post-item[_ngcontent-%COMP%]   .posted[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;font-size:12px;color:#545454}.post-item[_ngcontent-%COMP%]   .posted[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:5px;color:#18b587}.post-item[_ngcontent-%COMP%]   .posted[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   .group-pointer[_ngcontent-%COMP%]{margin-left:8px}.post-item[_ngcontent-%COMP%]   .posted[_ngcontent-%COMP%]   .author-username[_ngcontent-%COMP%], .post-item[_ngcontent-%COMP%]   .posted[_ngcontent-%COMP%]   .post-group-name[_ngcontent-%COMP%]{cursor:pointer}.post-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{display:flex;margin-top:16px}.post-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .left-wrap[_ngcontent-%COMP%]   .voting-container[_ngcontent-%COMP%]{display:flex;flex-direction:column}.post-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .left-wrap[_ngcontent-%COMP%]   .voting-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;background:transparent;color:#c9c9c9}.post-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .left-wrap[_ngcontent-%COMP%]   .voting-container[_ngcontent-%COMP%]   button.vote-up-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{transform:rotate(-90deg)}.post-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .left-wrap[_ngcontent-%COMP%]   .voting-container[_ngcontent-%COMP%]   button.vote-down-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{transform:rotate(90deg)}.post-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .left-wrap[_ngcontent-%COMP%]   .voting-container[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]{color:#18b587}.post-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .left-wrap[_ngcontent-%COMP%]   .voting-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:24px}.post-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .left-wrap[_ngcontent-%COMP%]   .voting-container[_ngcontent-%COMP%]   .vote-count[_ngcontent-%COMP%]{margin:8px 0;text-align:center;font-size:12px;color:#545454}.post-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .right-wrap[_ngcontent-%COMP%]{flex:1;padding:0 30px 4px}.post-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .right-wrap[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-left:10px;font-size:12px;color:#545454}.post-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .right-wrap[_ngcontent-%COMP%]     img{max-width:1280px;width:100%;margin-top:16px;max-height:720px;height:100%;-o-object-fit:contain;object-fit:contain}.post-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .right-wrap[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]{width:100%;margin-top:16px;max-height:433px}.post-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .right-wrap[_ngcontent-%COMP%]   .post-menu[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-top:16px;color:#545454}.post-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .right-wrap[_ngcontent-%COMP%]   .post-menu[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]{display:flex}.post-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .right-wrap[_ngcontent-%COMP%]   .post-menu[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin-right:10px;display:flex;align-items:center;text-decoration:none;color:#545454;transition:all .1s ease}.post-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .right-wrap[_ngcontent-%COMP%]   .post-menu[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#18b587}.post-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .right-wrap[_ngcontent-%COMP%]   .post-menu[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-right:12px}.post-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .right-wrap[_ngcontent-%COMP%]   .post-menu[_ngcontent-%COMP%]   .dotes[_ngcontent-%COMP%]{display:flex;cursor:pointer}@media only screen and (max-width:450px){.right-wrap[_ngcontent-%COMP%]{padding:0 24px 4px 0!important}.menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:12px;margin-right:6px!important}.menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-right:6px}}"]}),t}()},"fFb+":function(t,n,e){"use strict";e.d(n,"a",(function(){return O}));var o=e("0IaG"),i=e("9xOu"),c=e("fXoL"),a=e("PWx8"),s=e("FFj9"),r=e("NFeN"),l=e("ofXK"),p=e("bv9b");function d(t,n){if(1&t){var e=c.Xb();c.Wb(0,"div",10),c.Wb(1,"button",11),c.ec("click",(function(){return c.Bc(e),c.xc(7).click()})),c.Wb(2,"mat-icon"),c.Lc(3,"save_alt"),c.Vb(),c.Wb(4,"span"),c.Lc(5,"Upload"),c.Vb(),c.Vb(),c.Wb(6,"input",12,13),c.ec("change",(function(t){return c.Bc(e),c.ic().videoUpload(t)})),c.Vb(),c.Vb()}}function g(t,n){if(1&t){var e=c.Xb();c.Wb(0,"div",10),c.Wb(1,"button",11),c.ec("click",(function(){return c.Bc(e),c.xc(7).click()})),c.Wb(2,"mat-icon"),c.Lc(3,"save_alt"),c.Vb(),c.Wb(4,"span"),c.Lc(5,"Upload"),c.Vb(),c.Vb(),c.Wb(6,"input",14,13),c.ec("change",(function(t){return c.Bc(e),c.ic().videoUpload(t)})),c.Vb(),c.Vb()}}function u(t,n){1&t&&(c.Wb(0,"mat-icon"),c.Lc(1,"movie"),c.Vb())}function f(t,n){if(1&t&&c.Rb(0,"img",24),2&t){var e=c.ic(2).$implicit;c.pc("src",e.src,c.Ec)}}function b(t,n){if(1&t&&(c.Wb(0,"div",25),c.Lc(1),c.Rb(2,"mat-progress-bar",26),c.Vb()),2&t){var e=c.ic(3);c.Cb(1),c.Nc(" ",e.percentProgressBar,"%"),c.Cb(1),c.pc("value",e.percentProgressBar)}}function m(t,n){1&t&&(c.Wb(0,"div",27),c.Wb(1,"a"),c.Lc(2,"Cancel"),c.Vb(),c.Vb())}function h(t,n){if(1&t&&(c.Wb(0,"div",16),c.Wb(1,"div",17),c.Wb(2,"div",18),c.Jc(3,u,2,0,"mat-icon",19),c.Jc(4,f,1,1,"img",20),c.Vb(),c.Wb(5,"div",21),c.Lc(6),c.Vb(),c.Vb(),c.Jc(7,b,3,2,"div",22),c.Jc(8,m,3,0,"div",23),c.Vb()),2&t){var e=c.ic().$implicit,o=c.ic();c.Cb(3),c.pc("ngIf",e.type.includes("video")),c.Cb(1),c.pc("ngIf",e.type.includes("image")),c.Cb(2),c.Mc(e.name),c.Cb(1),c.pc("ngIf",o.showProgressBar),c.Cb(1),c.pc("ngIf",o.showProgressBar)}}function C(t,n){if(1&t&&(c.Wb(0,"div"),c.Jc(1,h,9,5,"div",15),c.Vb()),2&t){var e=c.ic();c.Cb(1),c.pc("ngIf",e.showUploadImg)}}function M(t,n){1&t&&(c.Wb(0,"mat-icon"),c.Lc(1,"movie"),c.Vb())}function P(t,n){if(1&t&&c.Rb(0,"img",24),2&t){var e=c.ic(2).$implicit;c.pc("src",e.src,c.Ec)}}function _(t,n){if(1&t){var e=c.Xb();c.Wb(0,"div",29),c.Wb(1,"div",30),c.Wb(2,"div",31),c.Jc(3,M,2,0,"mat-icon",19),c.Jc(4,P,1,1,"img",20),c.Vb(),c.Wb(5,"div",32),c.Lc(6),c.Vb(),c.Vb(),c.Wb(7,"div",33),c.ec("click",(function(){c.Bc(e);var t=c.ic(),n=t.$implicit,o=t.index;return c.ic().canselFile(n,o)})),c.Wb(8,"mat-icon"),c.Lc(9,"close"),c.Vb(),c.Vb(),c.Vb()}if(2&t){var o=c.ic().$implicit;c.Cb(3),c.pc("ngIf",o.type.includes("video")),c.Cb(1),c.pc("ngIf",o.type.includes("image")),c.Cb(2),c.Mc(o.name)}}function v(t,n){if(1&t&&(c.Wb(0,"div"),c.Jc(1,_,10,3,"div",28),c.Vb()),2&t){var e=c.ic();c.Cb(1),c.pc("ngIf",100===e.percentProgressBar||e.showUploadImg)}}var O=function(){var t=function(){function t(n,e,o,c){_classCallCheck(this,t),this.dialogRef=n,this.data=e,this.postsServices=o,this.uploadFile=c,this.title="Upload File",this.showUploadImg=!1,this.percentProgressBar=0,this.fileName=[],this.typeFile=[],this.files=[],this.showProgressBar=!0,this.apiURL=i.c}return _createClass(t,[{key:"ngOnInit",value:function(){if(console.log(this.data),this.type=this.data.type,this.countUploadFile=this.data.countUploadFile,console.log(this.type),console.log(this.countUploadFile),this.data.post){this.title="Edit Post",this.showProgressBar=!1;var t=this.data.post,n={name:t.cover_img,type:"",src:""};t.cover_img.includes("image")&&(n.type="image",n.src=this.apiURL+"uploads/"+n.type+"s/"+t.cover_img),t.cover_img.includes("video")&&(n.type="video",n.src=this.apiURL+"uploads/"+n.type+"s/"+t.cover_img),this.files.push(n),this.showUploadImg=!0,console.log(this.files)}}},{key:"videoUpload",value:function(t){var n=this;this.showProgressBar=!0,this.files=[],this.percentProgressBar=0,this.showUploadImg=!0;for(var e=function(e){var o=t.target.files[e],i={index:e,file:o,name:o.name,type:o.type,src:"",duration:null};if(n.fileName.push(o.name),n.typeFile.push(o.type),n.files.push(i),o.type.includes("video")){"image"===n.type&&n.dialogRef.close("Upload images");var c=new Audio,a=new FileReader;a.onload=function(t){var o=t.target.result.toString().length;new ArrayBuffer(o),c.src=t.target.result.toString(),c.addEventListener("loadedmetadata",(function(){console.log(c.duration),n.files[e].duration=c.duration}),!1),n.progressPercent(t)},a.readAsDataURL(o)}if(console.log(o.type.includes("image")),o.type.includes("image")){var s=new FileReader;s.onload=function(t){n.srcImg=t.target.result.toString(),n.files[e].src=t.target.result.toString(),n.progressPercent(t)},s.readAsDataURL(o)}},o=0;o<t.target.files.length;o++)e(o);console.log(this.files)}},{key:"progressPercent",value:function(t){this.percentProgressBar=Number((t.loaded/t.total*100).toFixed())}},{key:"saveFile",value:function(){var t,n=this;if(this.data.post){if(void 0===(null===(t=this.files[0])||void 0===t?void 0:t.file))return this.dialogRef.close("not edit");console.log(this.files),console.log(this.data.post);var e={id:this.data.post.id,group_id:this.data.post.group_id,description:this.data.post.description,cover_img:this.data.post.cover_img},o=new FormData,i="";return this.files.forEach((function(t){t.type.includes("image")&&(o.append("image",t.file),i="image"),t.type.includes("video")&&(o.append("video",t.file),i="video"),o.append("belonging","post_img"),o.append("duration",t.duration)})),this.uploadFile.uploadFile(o,i).subscribe((function(t){console.log(t),e.cover_img=t.path,n.postsServices.editPosts(e).subscribe((function(t){console.log(t)}))})),this.dialogRef.close()}this.dialogRef.close(this.files)}},{key:"canselFile",value:function(t,n){var e=this;this.files=this.files.filter((function(t){return t.index!==e.files[n].index})),console.log(this.files)}},{key:"closedModal",value:function(){this.dialogRef.close()}}]),t}();return t.\u0275fac=function(n){return new(n||t)(c.Qb(o.d),c.Qb(o.a),c.Qb(a.a),c.Qb(s.a))},t.\u0275cmp=c.Kb({type:t,selectors:[["app-upload-file"]],decls:18,vars:5,consts:[[1,"uploadModal"],[1,"header"],[1,"iconClosedModal",3,"click"],["class","inputFile",4,"ngIf"],[4,"ngFor","ngForOf"],[1,"uploadedFile"],[1,"headUploaded"],[1,"button"],[1,"canselButton",3,"click"],[1,"saveButton",3,"click"],[1,"inputFile"],[1,"buttonUpload",3,"click"],["type","file","hidden","",3,"change"],["uploadFile",""],["type","file","hidden","","multiple","",3,"change"],["class","progressFile",4,"ngIf"],[1,"progressFile"],[1,"imgAndName"],[1,"img"],[4,"ngIf"],["alt","",3,"src",4,"ngIf"],[1,"name"],["class","progressBar",4,"ngIf"],["class","cancel",4,"ngIf"],["alt","",3,"src"],[1,"progressBar"],["mode","determinate",1,"matProgressBar",3,"value"],[1,"cancel"],["class","listUploaded",4,"ngIf"],[1,"listUploaded"],[1,"uploadedFileIconName"],[1,"icon"],[1,"uploadedFileName"],[1,"closedUploadedFile",3,"click"]],template:function(t,n){1&t&&(c.Wb(0,"div",0),c.Wb(1,"div",1),c.Wb(2,"h1"),c.Lc(3),c.Vb(),c.Wb(4,"mat-icon",2),c.ec("click",(function(){return n.closedModal()})),c.Lc(5,"close"),c.Vb(),c.Vb(),c.Jc(6,d,8,0,"div",3),c.Jc(7,g,8,0,"div",3),c.Jc(8,C,2,1,"div",4),c.Wb(9,"div",5),c.Wb(10,"div",6),c.Lc(11,"Uploaded Files"),c.Vb(),c.Jc(12,v,2,1,"div",4),c.Vb(),c.Wb(13,"div",7),c.Wb(14,"button",8),c.ec("click",(function(){return n.closedModal()})),c.Lc(15,"Cancel"),c.Vb(),c.Wb(16,"button",9),c.ec("click",(function(){return n.saveFile()})),c.Lc(17,"Save"),c.Vb(),c.Vb(),c.Vb()),2&t&&(c.Cb(3),c.Mc(n.title),c.Cb(3),c.pc("ngIf","oneFile"===n.countUploadFile),c.Cb(1),c.pc("ngIf",!("oneFile"===n.countUploadFile)),c.Cb(1),c.pc("ngForOf",n.files),c.Cb(4),c.pc("ngForOf",n.files))},directives:[r.a,l.m,l.l,p.a],styles:[".uploadModal[_ngcontent-%COMP%]{position:relative;width:100%;height:100%;padding:20px 16px}.uploadModal[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:20px}.uploadModal[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-family:Muli-Bold;font-size:24px;letter-spacing:0;color:#5b5b5b;opacity:1}.uploadModal[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .iconClosedModal[_ngcontent-%COMP%]{font-weight:700;cursor:pointer}.uploadModal[_ngcontent-%COMP%]   .inputFile[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-bottom:60px}.uploadModal[_ngcontent-%COMP%]   .inputFile[_ngcontent-%COMP%]   .buttonUpload[_ngcontent-%COMP%]{background-color:#f53c6f;width:170px;height:40px;display:flex;align-items:center;justify-content:center;color:#fff}.uploadModal[_ngcontent-%COMP%]   .inputFile[_ngcontent-%COMP%]   .buttonUpload[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:10px;font-size:15px}.uploadModal[_ngcontent-%COMP%]   .progressFile[_ngcontent-%COMP%]{display:flex;align-items:center;margin-bottom:40px}@media (max-width:600px){.uploadModal[_ngcontent-%COMP%]   .progressFile[_ngcontent-%COMP%]{flex-direction:column}}.uploadModal[_ngcontent-%COMP%]   .progressFile[_ngcontent-%COMP%]   .imgAndName[_ngcontent-%COMP%]{display:flex;align-items:center}.uploadModal[_ngcontent-%COMP%]   .progressFile[_ngcontent-%COMP%]   .imgAndName[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{margin-right:16px;margin-left:35px;color:#9d9d9d}.uploadModal[_ngcontent-%COMP%]   .progressFile[_ngcontent-%COMP%]   .imgAndName[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:25px;height:25px}.uploadModal[_ngcontent-%COMP%]   .progressFile[_ngcontent-%COMP%]   .imgAndName[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{max-width:150px;font-size:14px;font-family:Muli-Regular;color:#545454;margin-right:50px;width:100%;height:18px;overflow-x:scroll;overflow-y:hidden;white-space:nowrap}.uploadModal[_ngcontent-%COMP%]   .progressFile[_ngcontent-%COMP%]   .mat-progress-bar[_ngcontent-%COMP%]{width:190px;height:10px;border-radius:5px;margin-left:5px;border:1px solid #707070}.uploadModal[_ngcontent-%COMP%]   .progressFile[_ngcontent-%COMP%]   .progressBar[_ngcontent-%COMP%]{display:flex;align-items:center;font-size:12px;font-family:Muli-Bold;margin-right:25px}@media (max-width:600px){.uploadModal[_ngcontent-%COMP%]   .progressFile[_ngcontent-%COMP%]   .progressBar[_ngcontent-%COMP%]{margin-top:8px;margin-bottom:8px}}.uploadModal[_ngcontent-%COMP%]   .progressFile[_ngcontent-%COMP%]   .cancel[_ngcontent-%COMP%]{font-size:10px;text-decoration:underline;color:#9d9d9d;font-family:Muli-Bold}.uploadModal[_ngcontent-%COMP%]   .uploadedFile[_ngcontent-%COMP%]   .headUploaded[_ngcontent-%COMP%]{background-color:#ededed;margin-bottom:15px;color:#f53c6f;font-size:14px;font-family:Muli-Bold;padding:18px 13px}.uploadModal[_ngcontent-%COMP%]   .uploadedFile[_ngcontent-%COMP%]   .listUploaded[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;margin-bottom:15px}.uploadModal[_ngcontent-%COMP%]   .uploadedFile[_ngcontent-%COMP%]   .listUploaded[_ngcontent-%COMP%]   .uploadedFileIconName[_ngcontent-%COMP%]{display:flex;align-items:center}.uploadModal[_ngcontent-%COMP%]   .uploadedFile[_ngcontent-%COMP%]   .listUploaded[_ngcontent-%COMP%]   .uploadedFileIconName[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{margin-left:35px;margin-right:15px;color:#9d9d9d}.uploadModal[_ngcontent-%COMP%]   .uploadedFile[_ngcontent-%COMP%]   .listUploaded[_ngcontent-%COMP%]   .uploadedFileIconName[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:25px;height:25px}.uploadModal[_ngcontent-%COMP%]   .uploadedFile[_ngcontent-%COMP%]   .listUploaded[_ngcontent-%COMP%]   .uploadedFileIconName[_ngcontent-%COMP%]   .uploadedFileName[_ngcontent-%COMP%]{max-width:150px;width:100%;font-size:14px;color:#545454;height:18px;overflow:hidden;white-space:nowrap}.uploadModal[_ngcontent-%COMP%]   .uploadedFile[_ngcontent-%COMP%]   .listUploaded[_ngcontent-%COMP%]   .closedUploadedFile[_ngcontent-%COMP%]{margin-right:35px;width:15px;height:15px;cursor:pointer}.uploadModal[_ngcontent-%COMP%]   .uploadedFile[_ngcontent-%COMP%]   .listUploaded[_ngcontent-%COMP%]   .closedUploadedFile[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:15px;color:#9d9d9d;width:15px;height:15px}.uploadModal[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]{position:absolute;bottom:0;right:0;margin-bottom:30px;margin-right:40px}.uploadModal[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100px;height:30px;box-shadow:0 0 6px rgba(0,0,0,.06);font-size:12px}.uploadModal[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   .canselButton[_ngcontent-%COMP%]{color:#9d9d9d;font-size:12px;font-family:Muli-Bold}.uploadModal[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   .saveButton[_ngcontent-%COMP%]{background-color:#18b587;color:#fff;font-size:12px;font-family:Muli-Bold}  .mat-progress-bar-fill:after{background-color:#18b587;border-radius:5px}  .mat-progress-bar-buffer{background:#fff}"]}),t}()},mgkJ:function(t,n,e){"use strict";e.d(n,"a",(function(){return P}));var o=e("fFb+"),i=e("fXoL"),c=e("PPbg"),a=e("PWx8"),s=e("FFj9"),r=e("3Pt+"),l=e("jN7V"),p=e("0IaG"),d=e("ofXK"),g=e("tyNb"),u=e("Xa2L"),f=e("NFeN"),b=e("fZdh");function m(t,n){if(1&t&&(i.Wb(0,"div",9),i.Rb(1,"img",10),i.jc(2,"getImgPath"),i.Vb()),2&t){var e=n.ngIf;i.Cb(1),i.pc("src",i.lc(2,1,e.avatar,"images"),i.Ec)}}function h(t,n){1&t&&i.Rb(0,"mat-spinner",11),2&t&&i.pc("diameter",24)}function C(t,n){1&t&&(i.Wb(0,"mat-icon",12),i.Lc(1,"done"),i.Vb())}var M=function(t){return{group_id:t}},P=function(){var t=function(){function t(n,e,o,i,c,a){_classCallCheck(this,t),this.userStore=n,this.postsServices=e,this.uploadFile=o,this.fb=i,this.postsStore=c,this.dialog=a,this.fd=new FormData,this.videoUploadSpinner=!1,this.finishVideoUpload=!1,this.videoName=""}return _createClass(t,[{key:"ngOnInit",value:function(){this.authUser=this.userStore.authUser}},{key:"addPhotoVideoPosts",value:function(t,n){var e=this;this.uploadFile.uploadFile(t,n).subscribe((function(t){var n;t&&(e.postForm=e.fb.group({description:[""],username:[e.userStore.authUser.username],author_id:[null===(n=e.userStore.authUser)||void 0===n?void 0:n.id],group_id:[""],cover_img:[t.path],votes:1}),e.postsServices.add(e.postForm.value).subscribe((function(t){console.log(t),e.postsStore.setAllPosts(t),e.postForm.reset()}))),e.finishVideoUpload=!1,e.fd=new FormData}))}},{key:"uploadDialog",value:function(){var t=this;this.dialog.open(o.a,{maxWidth:"591px",maxHeight:"479px",height:"100%",width:"100%",data:{countUploadFile:"oneFile"}}).afterClosed().subscribe((function(n){if(console.log(n),n){var e=new FormData,o="";n.forEach((function(t){t.type.includes("image")&&(console.log(t),o="image",console.log(o),e.append("image",t.file),e.append("belonging","post_image"),e.append("duration","")),t.type.includes("video")&&(o="video",console.log(o),e.append("video",t.file),e.append("belonging","post_video"),e.append("duration",t.duration))})),"image"!==o&&"video"!==o||t.addPhotoVideoPosts(e,o)}}))}}]),t}();return t.\u0275fac=function(n){return new(n||t)(i.Qb(c.a),i.Qb(a.a),i.Qb(s.a),i.Qb(r.e),i.Qb(l.a),i.Qb(p.b))},t.\u0275cmp=i.Kb({type:t,selectors:[["app-post-form-placeholder"]],inputs:{selectedGroup:"selectedGroup"},decls:15,vars:9,consts:[["id","post-form-container"],["class","user-avatar",4,"ngIf"],[1,"form-controls"],["placeholder","Create a public post...","routerLink","/posts/create",3,"queryParams"],[1,"action-btn-wrap"],[3,"click"],["src","assets/img/photo-green-small.svg","alt",""],[3,"diameter",4,"ngIf"],["style","background-color: #0aa06e; color: #ffffff",4,"ngIf"],[1,"user-avatar"],[1,"avatar",3,"src"],[3,"diameter"],[2,"background-color","#0aa06e","color","#ffffff"]],template:function(t,n){1&t&&(i.Wb(0,"div",0),i.Wb(1,"form"),i.Jc(2,m,3,4,"div",1),i.jc(3,"async"),i.Wb(4,"div",2),i.Rb(5,"textarea",3),i.Wb(6,"div",4),i.Wb(7,"button",5),i.ec("click",(function(){return n.uploadDialog()})),i.Rb(8,"img",6),i.Wb(9,"span"),i.Lc(10,"Add photo/video"),i.Vb(),i.Vb(),i.Wb(11,"p"),i.Lc(12),i.Vb(),i.Jc(13,h,1,1,"mat-spinner",7),i.Jc(14,C,2,0,"mat-icon",8),i.Vb(),i.Vb(),i.Vb(),i.Vb()),2&t&&(i.Cb(2),i.pc("ngIf",i.kc(3,5,n.userStore.authUser$)),i.Cb(3),i.pc("queryParams",i.tc(7,M,null==n.selectedGroup?null:n.selectedGroup.id)),i.Cb(7),i.Mc(n.videoName),i.Cb(1),i.pc("ngIf",n.videoUploadSpinner),i.Cb(1),i.pc("ngIf",n.finishVideoUpload))},directives:[r.B,r.r,r.s,d.m,g.f,u.c,f.a],pipes:[d.b,b.a],styles:["#post-form-container[_ngcontent-%COMP%]{background:#f4f4f4;margin-bottom:20px;padding:20px}#post-form-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex}#post-form-container[_ngcontent-%COMP%]   .form-controls[_ngcontent-%COMP%]{width:100%}#post-form-container[_ngcontent-%COMP%]   .form-controls[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{width:100%;height:48px;resize:none;outline:none;padding-left:20px}#post-form-container[_ngcontent-%COMP%]   .form-controls[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-moz-placeholder{font-family:Muli-Regular,sans-serif;color:#9d9d9d;transform:translateY(12px)}#post-form-container[_ngcontent-%COMP%]   .form-controls[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder{font-family:Muli-Regular,sans-serif;color:#9d9d9d;transform:translateY(12px)}#post-form-container[_ngcontent-%COMP%]   .action-btn-wrap[_ngcontent-%COMP%]{display:flex;justify-content:space-between}#post-form-container[_ngcontent-%COMP%]   .action-btn-wrap[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;align-items:center}#post-form-container[_ngcontent-%COMP%]   .action-btn-wrap[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:10px}"]}),t}()}}]);
//# sourceMappingURL=default~groups-groups-module~posts-posts-module-es5.e4c530e14d987d2b7392.js.map
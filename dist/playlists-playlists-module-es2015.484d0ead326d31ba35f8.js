(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{kez3:function(t,n,i){"use strict";i.r(n),i.d(n,"PlaylistsModule",(function(){return T}));var e=i("ofXK"),c=i("tyNb"),a=i("9xOu"),l=i("fXoL"),s=i("CPAS"),o=i("0IaG"),r=i("Rnal"),p=i("3Pt+"),b=i("WP6n"),d=i("5eHb"),g=i("NFeN"),u=i("fZdh");function y(t,n){if(1&t){const t=l.Yb();l.Xb(0,"button",8),l.jc("click",(function(){l.Gc(t);const n=l.nc();return n.openPlaylistPage(n.playlist)})),l.Xb(1,"span",9),l.Qc(2,"play_arrow"),l.Wb(),l.Qc(3," Play All "),l.Wb()}}function P(t,n){if(1&t&&(l.Xb(0,"h3"),l.Qc(1),l.oc(2,"date"),l.Wb()),2&t){const t=l.nc(2);l.Cb(1),l.Sc("Last updated on ",l.qc(2,1,t.playlist.updated_at,"d MMM, yyyy"),"")}}function f(t,n){if(1&t){const t=l.Yb();l.Vb(0),l.Xb(1,"h3"),l.Xb(2,"span"),l.Qc(3),l.Wb(),l.Xb(4,"span",10),l.jc("click",(function(){l.Gc(t);const n=l.nc();return n.editPlaylistInfo(n.playlist)})),l.Qc(5,"create"),l.Wb(),l.Wb(),l.Xb(6,"p"),l.Qc(7),l.Wb(),l.Xb(8,"h3"),l.Qc(9),l.Wb(),l.Oc(10,P,3,4,"h3",4),l.Xb(11,"div",11),l.Xb(12,"mat-icon"),l.Qc(13),l.Wb(),l.Xb(14,"select",12),l.jc("change",(function(n){l.Gc(t);const i=l.nc();return i.updatePrivacy(n.target.value,i.playlist)})),l.Xb(15,"option",13),l.Qc(16,"Private"),l.Wb(),l.Xb(17,"option",13),l.Qc(18,"Public"),l.Wb(),l.Wb(),l.Wb(),l.Ub()}if(2&t){const t=l.nc();l.Cb(3),l.Rc(t.playlist.name),l.Cb(4),l.Rc(t.playlist.description),l.Cb(2),l.Sc("",null==t.playlist.videos?null:t.playlist.videos.length," videos"),l.Cb(1),l.uc("ngIf",!t.editMode),l.Cb(3),l.Sc("visibility_",t.playlist.privacy-0?"off":"on",""),l.Cb(2),l.uc("value",1)("selected",t.playlist.privacy),l.Cb(2),l.uc("value",0)("selected",!t.playlist.privacy)}}function h(t,n){1&t&&(l.Xb(0,"span",20),l.Qc(1," Playlist name is required "),l.Wb())}function C(t,n){if(1&t){const t=l.Yb();l.Xb(0,"form",14),l.Sb(1,"input",15),l.Oc(2,h,2,0,"span",16),l.Sb(3,"textarea",17),l.Xb(4,"button",18),l.jc("click",(function(){l.Gc(t);const n=l.nc();return n.editMode=!n.editMode})),l.Qc(5,"Cancel"),l.Wb(),l.Xb(6,"button",19),l.jc("click",(function(){return l.Gc(t),l.nc().savePlaylistInfoChanges()})),l.Qc(7,"Save "),l.Wb(),l.Wb()}if(2&t){const t=l.nc();l.uc("formGroup",t.playlistInfoForm),l.Cb(2),l.uc("ngIf",t.playlistInfoForm.get("name").hasError("required"))}}function m(t,n){if(1&t){const t=l.Yb();l.Xb(0,"button",21),l.jc("click",(function(){return l.Gc(t),l.nc().openVideosModal()})),l.Qc(1,"Add Video"),l.Wb()}}let v=(()=>{class t{constructor(t,n,i,e,c,s){this.fb=t,this.playlistsService=n,this.dialog=i,this.toastr=e,this.router=c,this.getAuthUser=s,this.apiUrl=a.c,this.editMode=!1,this.refreshPlaylist=new l.o,this.playlistInfoForm=this.fb.group({id:[""],name:["",p.F.required],description:[""],privacy:[""]}),this.authUser=this.getAuthUser.transform()}ngOnInit(){}openVideosModal(){this.dialog.open(b.a,{data:{playlist:this.playlist}}).afterClosed().subscribe(t=>{this.refreshPlaylist.emit()})}updatePrivacy(t,n){console.log(+t),n.privacy=+t,this.playlistInfoForm.patchValue({privacy:+t}),this.playlistsService.updatePrivacy({privacy:t,id:n.id}).subscribe(t=>{this.toastr.success("Playlist privacy is updated successfully")})}editPlaylistInfo(t){this.editMode=!0,this.playlistInfoForm.patchValue(t)}savePlaylistInfoChanges(){this.playlistInfoForm.valid&&this.playlistsService.updatePlaylistInfo(this.playlistInfoForm.value).subscribe(t=>{this.editMode=!1,this.playlist=t})}openPlaylistPage(t){var n,i;const e={id:null===(i=null===(n=t.videos)||void 0===n?void 0:n[0])||void 0===i?void 0:i.id,playlist_id:t.id};this.router.navigate(["videos/play"],{queryParams:e})}backToPlaylists(){this.router.navigate(["channels/show"],{queryParams:{tab:"playlists",username:this.authUser.username}})}}return t.\u0275fac=function(n){return new(n||t)(l.Rb(p.f),l.Rb(s.a),l.Rb(o.b),l.Rb(d.c),l.Rb(c.d),l.Rb(r.a))},t.\u0275cmp=l.Lb({type:t,selectors:[["app-playlist-info-form"]],inputs:{playlist:"playlist"},outputs:{refreshPlaylist:"refreshPlaylist"},decls:10,vars:7,consts:[[1,"playlist"],[3,"src"],["class","btn play-all",3,"click",4,"ngIf"],[1,"info"],[4,"ngIf"],["id","playlist-info-form",3,"formGroup",4,"ngIf"],[1,"btn","back",3,"click"],["class","btn add-video",3,"click",4,"ngIf"],[1,"btn","play-all",3,"click"],[1,"material-icons"],[1,"material-icons",3,"click"],["id","privacy-select",1,"select"],[3,"change"],[3,"value","selected"],["id","playlist-info-form",3,"formGroup"],["formControlName","name"],["class","error",4,"ngIf"],["formControlName","description"],[1,"btn","cancel",3,"click"],[1,"btn","save-playlist-changes",3,"click"],[1,"error"],[1,"btn","add-video",3,"click"]],template:function(t,n){1&t&&(l.Xb(0,"div",0),l.Sb(1,"img",1),l.oc(2,"getImgPath"),l.Oc(3,y,4,0,"button",2),l.Xb(4,"div",3),l.Oc(5,f,19,9,"ng-container",4),l.Oc(6,C,8,2,"form",5),l.Wb(),l.Xb(7,"button",6),l.jc("click",(function(){return n.backToPlaylists()})),l.Qc(8,"Back"),l.Wb(),l.Oc(9,m,2,0,"button",7),l.Wb()),2&t&&(l.Cb(1),l.uc("src",l.pc(2,5,n.playlist.thumbnail),l.Ic),l.Cb(2),l.uc("ngIf",0!==(null==n.playlist.videos?null:n.playlist.videos.length)),l.Cb(2),l.uc("ngIf",!n.editMode),l.Cb(1),l.uc("ngIf",n.editMode),l.Cb(3),l.uc("ngIf",!n.editMode))},directives:[e.u,g.a,p.w,p.G,p.H,p.s,p.j,p.c,p.r,p.i],pipes:[u.a,e.f],styles:[".playlist[_ngcontent-%COMP%]{width:100%;margin-bottom:20px}.playlist[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;max-height:190px;-o-object-fit:cover;object-fit:cover}.playlist[_ngcontent-%COMP%]   .play-all[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center;align-items:center;background:#18b587;border-radius:0;font-size:16px;color:#fff}.playlist[_ngcontent-%COMP%]   .play-all[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-right:12px}.playlist[_ngcontent-%COMP%]   .add-video[_ngcontent-%COMP%], .playlist[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%], .playlist[_ngcontent-%COMP%]   .cancel[_ngcontent-%COMP%], .playlist[_ngcontent-%COMP%]   .save-playlist-changes[_ngcontent-%COMP%]{margin-top:22px;padding:6px 24px;background:#18b587;border-radius:0;font-size:16px;color:#fff}.playlist[_ngcontent-%COMP%]   .add-video.back[_ngcontent-%COMP%], .playlist[_ngcontent-%COMP%]   .add-video.cancel[_ngcontent-%COMP%], .playlist[_ngcontent-%COMP%]   .back.back[_ngcontent-%COMP%], .playlist[_ngcontent-%COMP%]   .back.cancel[_ngcontent-%COMP%], .playlist[_ngcontent-%COMP%]   .cancel.back[_ngcontent-%COMP%], .playlist[_ngcontent-%COMP%]   .cancel.cancel[_ngcontent-%COMP%], .playlist[_ngcontent-%COMP%]   .save-playlist-changes.back[_ngcontent-%COMP%], .playlist[_ngcontent-%COMP%]   .save-playlist-changes.cancel[_ngcontent-%COMP%]{background:#c9c9c9;margin-right:24px}.playlist[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;margin-top:16px;margin-bottom:0;font-size:16px;font-family:Muli-Bold;color:#545454}.playlist[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:22px;cursor:pointer}.playlist[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:12px;color:#545454;font-size:12px}.playlist[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .select[_ngcontent-%COMP%]{margin-top:16px}.playlist[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .select[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{vertical-align:sub;font-size:22px;color:#545454}.playlist[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .select[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{color:#545454;font-size:16px;font-weight:600;border:0;padding:0;outline:none;margin-left:6px}.playlist[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   #playlist-info-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .playlist[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   #playlist-info-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{margin-top:24px;width:100%;padding:14px 24px;background:#f4f4f4;color:#545454;border:0;outline:none;resize:none}.playlist[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   #privacy-select[_ngcontent-%COMP%]{display:flex}"]}),t})();var O=i("mrSG"),M=i("S0M2"),_=i("wgiU"),W=i("dJ++"),X=i("SoC+"),k=i("FFj9"),x=i("5+WD"),w=i("bTqV"),I=i("STbY"),Q=i("yEwS");function S(t,n){if(1&t){const t=l.Yb();l.Xb(0,"li",24),l.jc("click",(function(){l.Gc(t);const i=n.$implicit;return l.nc(2).getVideosByTag(i.name)})),l.Xb(1,"span"),l.Qc(2),l.Wb(),l.Wb()}if(2&t){const t=n.$implicit;l.Cb(2),l.Rc(t.name)}}function j(t,n){if(1&t){const t=l.Yb();l.Xb(0,"div",2),l.jc("cdkDragDropped",(function(i){l.Gc(t);const e=n.$implicit;return l.nc().dragDropped(i,e)})),l.Xb(1,"div",3),l.Xb(2,"div",4),l.Xb(3,"img",5),l.jc("click",(function(){l.Gc(t);const i=n.$implicit,e=l.nc();return e.openPlaylistPage(i,e.playlist)})),l.oc(4,"getImgPath"),l.Wb(),l.Xb(5,"div",6),l.jc("click",(function(){l.Gc(t);const i=n.$implicit;return l.nc().updatePrivacy(i,i.privacy.name)})),l.Xb(6,"mat-icon"),l.Qc(7),l.Wb(),l.Wb(),l.Xb(8,"span",7),l.Qc(9),l.Wb(),l.Wb(),l.Xb(10,"div",8),l.Xb(11,"div",9),l.Xb(12,"h4",10),l.Qc(13),l.Wb(),l.Xb(14,"div",11),l.Xb(15,"button",12),l.Xb(16,"mat-icon"),l.Qc(17,"more_vert"),l.Wb(),l.Wb(),l.Xb(18,"mat-menu",null,13),l.Xb(20,"button",14),l.jc("click",(function(){l.Gc(t);const i=n.$implicit;return l.nc().addToAnotherPlaylist(i)})),l.Xb(21,"mat-icon"),l.Qc(22,"playlist_add"),l.Wb(),l.Xb(23,"span"),l.Qc(24,"Add to another playlist"),l.Wb(),l.Wb(),l.Xb(25,"button",14),l.jc("click",(function(){l.Gc(t);const i=n.$implicit,e=l.nc();return e.changePlaylistThumbnail(e.playlist.id,i.thumbnail)})),l.Xb(26,"mat-icon"),l.Qc(27,"insert_photo"),l.Wb(),l.Xb(28,"span"),l.Qc(29,"Set as playlist thumbnail"),l.Wb(),l.Wb(),l.Xb(30,"button",14),l.jc("click",(function(){l.Gc(t);const i=n.$implicit;return l.nc().updatePrivacy(i,i.privacy.name)})),l.Xb(31,"mat-icon"),l.Qc(32),l.Wb(),l.Xb(33,"span"),l.Qc(34),l.Wb(),l.Wb(),l.Xb(35,"button",14),l.jc("click",(function(){l.Gc(t);const i=n.$implicit,e=l.nc();return e.removeVideoFromPlaylist(e.playlist.id,i.id)})),l.Xb(36,"mat-icon"),l.Qc(37,"delete"),l.Wb(),l.Xb(38,"span"),l.Qc(39,"Remove from playlist"),l.Wb(),l.Wb(),l.Wb(),l.Wb(),l.Wb(),l.Xb(40,"div",15),l.Xb(41,"span",16),l.Qc(42),l.Wb(),l.Xb(43,"span",17),l.Qc(44,"\xb7"),l.Wb(),l.Xb(45,"span",18),l.Qc(46),l.Wb(),l.Xb(47,"span",17),l.Qc(48,"\xb7"),l.Wb(),l.Xb(49,"span",19),l.Qc(50),l.oc(51,"dateFromNow"),l.Wb(),l.Wb(),l.Xb(52,"div",20),l.Xb(53,"p",21),l.Qc(54),l.Wb(),l.Xb(55,"div",22),l.Xb(56,"ul"),l.Oc(57,S,3,1,"li",23),l.Wb(),l.Wb(),l.Wb(),l.Wb(),l.Wb(),l.Wb()}if(2&t){const t=n.$implicit,i=l.Cc(19);l.uc("cdkDragPreviewClass","video-container"),l.Cb(3),l.uc("src",l.pc(4,14,t.thumbnail),l.Ic),l.Cb(2),l.uc("ngClass","Public"!==t.privacy.name?"red":"green"),l.Cb(2),l.Sc("visibility_","Public"!==t.privacy.name?"off":"on",""),l.Cb(2),l.Rc(t.duration),l.Cb(4),l.Rc(t.name),l.Cb(2),l.uc("matMenuTriggerFor",i),l.Cb(17),l.Sc("visibility_","Public"!==t.privacy.name?"on":"off",""),l.Cb(2),l.Sc("Make ","Private"!==t.privacy.name?"private":"public",""),l.Cb(8),l.Rc(t.channel.name),l.Cb(4),l.Sc(" ","live"===t.status?"17k watching":t.views+" view"+(1===t.views?"":"s")," "),l.Cb(4),l.Rc(l.pc(51,16,t.created_at)),l.Cb(4),l.Rc(t.description),l.Cb(3),l.uc("ngForOf",null==t?null:t.tags)}}let R=(()=>{class t{constructor(t,n,i,e,c,s){this.router=t,this.route=n,this.playlistsService=i,this.videoService=e,this.dialog=c,this.getAuthUser=s,this.apiUrl=a.c,this.trackByElement=_.a,this.refreshPlaylist=new l.o}ngOnInit(){this.authUser=this.getAuthUser.transform()}openPlaylistPage(t,n){this.router.navigate(["videos/play"],{queryParams:{id:t.id,playlist_id:n.id}})}dragDropped(t,n){this.playlist.videos=Object(M.a)(this.playlist.videos,t.previousIndex,t.currentIndex);const i={rows:JSON.stringify(this.playlist),playlist_id:this.playlist.id};this.playlistsService.updateVideoPosition(i).subscribe(t=>{})}changePlaylistThumbnail(t,n){const i=Object.assign({playlist_id:t},{thumbnail:n});this.playlistsService.changePlaylistThumbnail(i).subscribe(t=>{this.playlist=t,this.refreshPlaylist.emit()})}removeVideoFromPlaylist(t,n){this.dialog.open(W.a).afterClosed().subscribe(i=>{i&&this.playlistsService.removeVideoFromPlaylist({playlist_id:t,video_id:n}).subscribe(t=>{this.playlist=t,this.refreshPlaylist.emit()})})}addToAnotherPlaylist(t){var n,i;this.playlistsService.get({channel_id:null===(i=null===(n=this.authUser)||void 0===n?void 0:n.channel)||void 0===i?void 0:i.id}).subscribe(n=>{this.dialog.open(X.a,{width:"500px",data:{video_id:t.id,playlists:n}}).afterClosed().subscribe(t=>{this.refreshPlaylist.emit()})})}updatePrivacy(t,n){this.videoService.updatePrivacy({video_id:t.id,privacy:"Public"===n?"Private":"Public"}).subscribe(n=>{t.privacy=n})}getVideosByTag(t){return Object(O.a)(this,void 0,void 0,(function*(){yield this.router.navigate(["videos"],{queryParams:{tag:t}})}))}}return t.\u0275fac=function(n){return new(n||t)(l.Rb(c.d),l.Rb(c.a),l.Rb(s.a),l.Rb(k.a),l.Rb(o.b),l.Rb(r.a))},t.\u0275cmp=l.Lb({type:t,selectors:[["app-playlist-videos"]],inputs:{playlist:"playlist"},outputs:{refreshPlaylist:"refreshPlaylist"},decls:2,vars:2,consts:[["cdkDropList","",1,"playlist"],["class","playlist-item","cdkDrag","",3,"cdkDragPreviewClass","cdkDragDropped",4,"ngFor","ngForOf","ngForTrackBy"],["cdkDrag","",1,"playlist-item",3,"cdkDragPreviewClass","cdkDragDropped"],[1,"video-container"],[1,"img"],[3,"src","click"],[1,"update-privacy",3,"ngClass","click"],[1,"duration"],[1,"details"],[1,"title"],[1,""],[1,"dotes"],["mat-icon-button","","aria-label","Example icon-button with a menu",3,"matMenuTriggerFor"],["menu","matMenu"],["mat-menu-item","",3,"click"],[1,"shortened-details"],[1,"channel-name"],[1,"dot"],[1,"watchers-count"],[1,"upload-time"],[1,"video-details-2nd-row"],[1,"shortened-description"],[1,"tags"],[3,"click",4,"ngFor","ngForOf"],[3,"click"]],template:function(t,n){1&t&&(l.Xb(0,"div",0),l.Oc(1,j,58,18,"div",1),l.Wb()),2&t&&(l.Cb(1),l.uc("ngForOf",n.playlist.videos)("ngForTrackBy",n.trackByElement))},directives:[x.e,e.t,x.a,e.r,g.a,w.b,I.d,I.e,I.b],pipes:[u.a,Q.a],styles:[".playlist-item[_ngcontent-%COMP%]{margin-bottom:30px;background:#fff}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.cdk-drag-preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:200px!important}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%]{transition:transform .25s cubic-bezier(0,0,.2,1)}.update-privacy[_ngcontent-%COMP%]{position:absolute;top:10px;right:10px;transition:.3s;cursor:pointer}"]}),t})();function F(t,n){if(1&t){const t=l.Yb();l.Xb(0,"div",1),l.Xb(1,"h2"),l.Qc(2,"Edit Playlist"),l.Wb(),l.Xb(3,"div",2),l.Xb(4,"div",3),l.Xb(5,"app-playlist-info-form",4),l.jc("refreshPlaylist",(function(){return l.Gc(t),l.nc().getPlaylistDetails()})),l.Wb(),l.Wb(),l.Xb(6,"div",5),l.Xb(7,"app-playlist-videos",4),l.jc("refreshPlaylist",(function(){return l.Gc(t),l.nc().getPlaylistDetails()})),l.Wb(),l.Wb(),l.Wb(),l.Wb()}if(2&t){const t=l.nc();l.Cb(5),l.uc("playlist",t.playlist),l.Cb(2),l.uc("playlist",t.playlist)}}const G=[{path:"single/:id",component:(()=>{class t{constructor(t,n,i,e,c){this.router=t,this.route=n,this.playlistsService=i,this.dialog=e,this.getAuthUser=c,this.apiUrl=a.c,this.authUser=this.getAuthUser.transform()}ngOnInit(){this.getPlaylistDetails()}getPlaylistDetails(){var t,n;const i=null===(n=null===(t=this.route.snapshot)||void 0===t?void 0:t.params)||void 0===n?void 0:n.id;i&&this.playlistsService.getById({playlist_id:i,user_id:this.authUser}).subscribe(t=>{this.playlist=t})}}return t.\u0275fac=function(n){return new(n||t)(l.Rb(c.d),l.Rb(c.a),l.Rb(s.a),l.Rb(o.b),l.Rb(r.a))},t.\u0275cmp=l.Lb({type:t,selectors:[["app-single-playlist"]],decls:1,vars:1,consts:[["class","single-playlist",4,"ngIf"],[1,"single-playlist"],[1,"inner-wrap"],[1,"left"],[3,"playlist","refreshPlaylist"],[1,"right"]],template:function(t,n){1&t&&l.Oc(0,F,8,2,"div",0),2&t&&l.uc("ngIf",n.playlist)},directives:[e.u,v,R],styles:[".single-playlist[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:32px;font-weight:700;color:#18b587}.single-playlist[_ngcontent-%COMP%]   .inner-wrap[_ngcontent-%COMP%]{margin-top:40px;display:flex;flex-wrap:wrap;align-items:flex-start}.single-playlist[_ngcontent-%COMP%]   .inner-wrap[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{flex:0 0 316px;margin-right:32px}.single-playlist[_ngcontent-%COMP%]   .inner-wrap[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{flex:0 0 500px}.single-playlist[_ngcontent-%COMP%]   .inner-wrap[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .playlist-item[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .shortened-description[_ngcontent-%COMP%], .single-playlist[_ngcontent-%COMP%]   .inner-wrap[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .playlist-item[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .shortened-details[_ngcontent-%COMP%]   .channel-name[_ngcontent-%COMP%], .single-playlist[_ngcontent-%COMP%]   .inner-wrap[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .playlist-item[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .shortened-details[_ngcontent-%COMP%]   .upload-time[_ngcontent-%COMP%], .single-playlist[_ngcontent-%COMP%]   .inner-wrap[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .playlist-item[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .shortened-details[_ngcontent-%COMP%]   .watchers-count[_ngcontent-%COMP%], .single-playlist[_ngcontent-%COMP%]   .inner-wrap[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .playlist-item[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{white-space:nowrap}@media screen and (max-width:560px){.single-playlist[_ngcontent-%COMP%]   .inner-wrap[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{flex:1}}"]}),t})(),data:{title:"Edit Playlist"}}];let D=(()=>{class t{}return t.\u0275mod=l.Pb({type:t}),t.\u0275inj=l.Ob({factory:function(n){return new(n||t)},imports:[[c.f.forChild(G)],c.f]}),t})();var U=i("PCNd");let T=(()=>{class t{}return t.\u0275mod=l.Pb({type:t}),t.\u0275inj=l.Ob({factory:function(n){return new(n||t)},imports:[[e.c,D,x.g,U.a]]}),t})()}}]);
//# sourceMappingURL=playlists-playlists-module-es2015.484d0ead326d31ba35f8.js.map
"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[451],{451:(f,d,o)=>{o.r(d),o.d(d,{SettingsPageModule:()=>u});var p=o(6895),c=o(4719),t=o(2206),h=o(9855),T=o(5861),e=o(6353),m=o(5808);class r{constructor(i){this.settingsService=i,this.darkModeToggled=!1}ngOnInit(){var i=this;return(0,T.Z)(function*(){i.darkModeToggled=yield i.settingsService.checkDarkModeEnabled(),yield i.settingsService.loadDurationSettings()})()}toggleDarkMode(i){this.settingsService.toggleDarkMode(i)}updateDuration(i){this.settingsService.saveDuration(i)}static#e=this.\u0275fac=function(a){return new(a||r)(e.Y36(m.g))};static#n=this.\u0275cmp=e.Xpm({type:r,selectors:[["app-settings"]],decls:36,vars:7,consts:[[1,"content"],["lines","full"],["slot","start","name","moon"],["id","themeToggle","slot","end",3,"checked","ionChange"],["slot","start","name","hourglass"],[1,"ion-text-wrap"],["min","1","max","60","color","primary",3,"ngModel","ngModelChange","ionChange"],["slot","end"]],template:function(a,n){1&a&&(e.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),e._uU(3,"Settings"),e.qZA()()(),e.TgZ(4,"ion-content")(5,"div",0)(6,"ion-list")(7,"ion-item",1),e._UZ(8,"ion-icon",2),e.TgZ(9,"ion-label"),e._uU(10," Toggle Dark Theme "),e.qZA(),e.TgZ(11,"ion-toggle",3),e.NdJ("ionChange",function(s){return n.toggleDarkMode(s)}),e.qZA()(),e.TgZ(12,"ion-item"),e._UZ(13,"ion-icon",4),e.TgZ(14,"ion-label",5),e._uU(15," Focus Duration "),e.qZA(),e.TgZ(16,"ion-range",6),e.NdJ("ngModelChange",function(s){return n.settingsService.focusDuration=s})("ionChange",function(){return n.updateDuration(n.settingsService.durationType.focus)}),e.TgZ(17,"ion-label",7),e._uU(18),e.qZA()()(),e.TgZ(19,"ion-item"),e._UZ(20,"ion-icon",4),e.TgZ(21,"ion-label",5),e._uU(22," Short Break Duration "),e.qZA(),e.TgZ(23,"ion-range",6),e.NdJ("ngModelChange",function(s){return n.settingsService.shortDuration=s})("ionChange",function(){return n.updateDuration(n.settingsService.durationType.short)}),e.TgZ(24,"ion-label",7),e._uU(25),e.qZA()()(),e.TgZ(26,"ion-item"),e._UZ(27,"ion-icon",4),e.TgZ(28,"ion-label",5),e._uU(29," Long Break Duration "),e.qZA(),e.TgZ(30,"ion-range",6),e.NdJ("ngModelChange",function(s){return n.settingsService.longDuration=s})("ionChange",function(){return n.updateDuration(n.settingsService.durationType.long)}),e.TgZ(31,"ion-label",7),e._uU(32),e.qZA()()()(),e.TgZ(33,"ion-card")(34,"ion-card-content"),e._uU(35," If you have a running timer, you will need to reset in order for these settings to take effect. "),e.qZA()()()()),2&a&&(e.xp6(11),e.s9C("checked",n.darkModeToggled),e.xp6(5),e.Q6J("ngModel",n.settingsService.focusDuration),e.xp6(2),e.Oqu(n.settingsService.focusDuration),e.xp6(5),e.Q6J("ngModel",n.settingsService.shortDuration),e.xp6(2),e.Oqu(n.settingsService.shortDuration),e.xp6(5),e.Q6J("ngModel",n.settingsService.longDuration),e.xp6(2),e.Oqu(n.settingsService.longDuration))},dependencies:[c.JJ,c.On,t.PM,t.FN,t.W2,t.Gu,t.gu,t.Ie,t.Q$,t.q_,t.I_,t.wd,t.ho,t.sr,t.w,t.QI]})}const Z=[{path:"",component:r}];class l{static#e=this.\u0275fac=function(a){return new(a||l)};static#n=this.\u0275mod=e.oAB({type:l});static#t=this.\u0275inj=e.cJS({imports:[h.Bz.forChild(Z),h.Bz]})}class u{static#e=this.\u0275fac=function(a){return new(a||u)};static#n=this.\u0275mod=e.oAB({type:u});static#t=this.\u0275inj=e.cJS({imports:[p.ez,c.u5,t.Pc,l]})}}}]);
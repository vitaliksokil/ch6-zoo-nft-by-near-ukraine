"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[982],{6982:function(n,c,t){t.r(c),t.d(c,{default:function(){return y}});var o=t(3396),s=t(7139);const l={class:"bg-warning text-white text-center p-5 section-text-black",id:"services"},e={class:"container px-4 px-lg-5"},a=(0,o._)("div",{class:"content-section-heading"},[(0,o._)("h2",{class:"mb-5"},"Your Zoo Statistics")],-1),i={class:"row gx-4 gx-lg-5 justify-content-center"},r={class:"col-lg-3 col-md-6 mb-5 mb-lg-0"},d={class:"service-icon rounded-circle mx-auto mb-3"},u=["src"],m=(0,o._)("p",{class:"mb-0"},"Collected money in NEAR",-1),g={class:"col-lg-3 col-md-6 mb-5 mb-lg-0"},_={class:"service-icon rounded-circle mx-auto mb-3"},f=["src"],b=(0,o._)("p",{class:"mb-0"},"NFTs sold",-1);function h(n,c,h,p,w,v){return(0,o.wg)(),(0,o.iD)("section",l,[(0,o._)("div",e,[a,(0,o._)("div",i,[(0,o._)("div",r,[(0,o._)("span",d,[(0,o._)("img",{src:t(964),alt:"",class:"icon-image"},null,8,u)]),(0,o._)("h4",null,[(0,o._)("strong",null,(0,s.zw)(n.$filters.transformYoctoNear(w.myZoo.total_collected))+" Ⓝ",1)]),m]),(0,o._)("div",g,[(0,o._)("span",_,[(0,o._)("img",{src:t(9409),alt:"",class:"icon-image"},null,8,f)]),(0,o._)("h4",null,[(0,o._)("strong",null,(0,s.zw)(w.myZoo.nft_sold),1)]),b])])])])}var p=t(4938),w={name:"ProfileDashboard",data(){return{myZoo:{total_collected:0,nft_sold:0}}},async mounted(){let n=this.$loading.show();try{this.myZoo=await(0,p.Ke)(window.nearAccount.accountId)}catch(c){console.log(c)}n.hide()}},v=t(89);const x=(0,v.Z)(w,[["render",h]]);var y=x},9409:function(n,c,t){n.exports=t.p+"img/nft.4b7f9751.png"}}]);
//# sourceMappingURL=982.2af6aed6.js.map
"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[199],{3199:function(t,s,e){e.r(s),e.d(s,{default:function(){return M}});var o=e(3396),a=e(7139),i=e(9242);const n=t=>((0,o.dD)("data-v-c9ef5440"),t=t(),(0,o.Cn)(),t),c={class:"container"},l={class:"row"},r={class:"col-lg-8 col-md-10 mx-auto"},d={class:"post-heading"},u={class:"subheading"},m={class:"meta"},h={class:"container"},f={class:"row"},g={class:"page-section clearfix"},p={class:"container"},v={class:"intro"},_=["src"],b={class:"intro-text left-0 text-center bg-warning p-5 rounded"},w=n((()=>(0,o._)("h2",{class:"section-heading mb-4"},[(0,o._)("span",{class:"section-heading-upper"},"Buy NFT"),(0,o._)("span",{class:"section-heading-lower"},"Help Zoo")],-1))),y=n((()=>(0,o._)("p",{class:"mb-3"},"Buy our Zoo NFT to help us! Every cent is important for us. Help us to feed our animals in this hard time. ",-1))),x=n((()=>(0,o._)("hr",null,null,-1))),z={class:"intro-button mx-auto"},N={class:"bg-primary text-white text-center p-5",id:"services"},k={class:"container px-4 px-lg-5"},$=n((()=>(0,o._)("div",{class:"content-section-heading"},[(0,o._)("h2",{class:"mb-5"},"Statistics")],-1))),F={class:"row gx-4 gx-lg-5 justify-content-center"},T={class:"col-lg-3 col-md-6 mb-5 mb-lg-0"},S={class:"service-icon rounded-circle mx-auto mb-3"},A=["src"],C=n((()=>(0,o._)("p",{class:"text-faded mb-0"},"Collected money in NEAR",-1))),E={class:"col-lg-3 col-md-6 mb-5 mb-lg-0"},I={class:"service-icon rounded-circle mx-auto mb-3"},Z=["src"],B=n((()=>(0,o._)("p",{class:"text-faded mb-0"},"NFTs sold",-1))),H=(0,o.uE)('<div class="bg-warning" data-v-c9ef5440><section class="p-5 cta" data-v-c9ef5440><div class="container" data-v-c9ef5440><div class="row" data-v-c9ef5440><div class="col-xl-9 mx-auto" data-v-c9ef5440><div class="cta-inner text-center rounded p-4" data-v-c9ef5440><h2 class="section-heading mb-4" data-v-c9ef5440><span class="section-heading-upper" data-v-c9ef5440>Our Promise</span><span class="section-heading-lower" data-v-c9ef5440>To You</span></h2><p class="mb-0 section-text-black" data-v-c9ef5440> We promise to you that all money donated to our zoo will be used to help animals and zoo. We will spend this money for feeding animals, zoo restore after the war is over, veterinary for animals. </p></div></div></div></div></section></div>',1);function Y(t,s,n,Y,j,D){return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("div",{class:"zoo",style:(0,a.j5)({backgroundImage:"linear-gradient(125deg, rgba(25, 25, 25, 0.5) 0%, rgba(25, 25, 25, 0.5) 100%), url("+j.zoo.banner_image+")"})},[(0,o._)("div",c,[(0,o._)("div",l,[(0,o._)("div",r,[(0,o._)("div",d,[(0,o._)("h1",null,(0,a.zw)(j.zoo.title),1),(0,o._)("h2",u,(0,a.zw)(j.zoo.description),1),(0,o._)("span",m,"Address: "+(0,a.zw)(j.zoo.address),1)])])])])],4),(0,o._)("div",h,[(0,o._)("div",f,[(0,o._)("section",g,[(0,o._)("div",p,[(0,o._)("div",v,[(0,o._)("img",{class:"intro-img img-fluid mb-3 mb-lg-0 rounded",src:j.zoo.nft_media,alt:"..."},null,8,_),(0,o._)("div",b,[w,y,x,(0,o._)("div",z,[(0,o._)("a",{class:"btn btn-primary btn-xl fw-bold",href:"#",onClick:s[0]||(s[0]=(0,i.iM)(((...t)=>D.buyNftAction&&D.buyNftAction(...t)),["prevent"]))},"Buy NFT for "+(0,a.zw)(t.$filters.transformYoctoNear(j.zoo.nft_price))+" Ⓝ",1)])])])])])])]),(0,o._)("section",N,[(0,o._)("div",k,[$,(0,o._)("div",F,[(0,o._)("div",T,[(0,o._)("span",S,[(0,o._)("img",{src:e(964),alt:"",class:"icon-image"},null,8,A)]),(0,o._)("h4",null,[(0,o._)("strong",null,(0,a.zw)(t.$filters.transformYoctoNear(j.zoo.total_collected))+" Ⓝ",1)]),C]),(0,o._)("div",E,[(0,o._)("span",I,[(0,o._)("img",{src:e(9409),alt:"",class:"icon-image"},null,8,Z)]),(0,o._)("h4",null,[(0,o._)("strong",null,(0,a.zw)(j.zoo.nft_sold),1)]),B])])])]),H])}var j=e(5648),D=e.n(j),K=e(4938);const P=D()(3).times(10**13).toFixed();var R={name:"SingleZooComp",data(){return{zoo:{}}},methods:{async buyNft(){await window.walletSelector.signAndSendTransaction({signerId:window.nearAccount.accountId,actions:[{type:"FunctionCall",params:{methodName:"buy_nft",args:{zoo_id:this.zoo.owner_id},gas:P,deposit:D()((this.zoo.nft_price/10**24).toFixed(5)).times(10**24).toFixed()}}]})},async buyNftAction(){let t=this.$loading.show();try{await this.buyNft(),this.$swal.fire({icon:"success",title:"Success",text:"Nft successfully bought!",footer:"To look at your NFTs go to your wallet collectibles!"}),this.zoo=await(0,K.Ke)(this.$route.params.id)}catch(s){this.$swal.fire({icon:"error",title:"Error",text:s.message,footer:""}),console.log(s)}t.hide()}},async mounted(){let t=this.$loading.show();try{this.zoo=await(0,K.Ke)(this.$route.params.id)}catch(a){this.$router.push({name:"home"})}t.hide();let s=window.location.search.substring(1),e=new URLSearchParams(s);const o=e.get("transactionHashes");o&&(this.$swal.fire({icon:"success",title:"Success",text:"NFT was successfully bought!",footer:"To look at your ticket go to your wallet collectibles!"}),window.history.pushState({},document.title,"https://vitaliksokil.github.io/ch6-zoo-nft-by-near-ukraine/#/zoos/"+this.$route.params.id))}},W=e(89);const L=(0,W.Z)(R,[["render",Y],["__scopeId","data-v-c9ef5440"]]);var M=L},9409:function(t,s,e){t.exports=e.p+"img/nft.4b7f9751.png"}}]);
//# sourceMappingURL=199.b1bc116f.js.map
(this.webpackJsonprtl=this.webpackJsonprtl||[]).push([[0],{270:function(e,t){},280:function(e,t){},298:function(e,t){},341:function(e,t,n){},456:function(e,t,n){},457:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(71),s=n.n(a),i=n(8),o=n(14),l=n.n(o),j=n(18),d=n(6),u=n(91),b=n(24),m=Object({NODE_ENV:"production",PUBLIC_URL:"/NEAR-tour-ui",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).CONTRACT_NAME||"tourcontract.giftea.testnet";var x=function(e){switch(e){case"mainnet":return{networkId:"mainnet",nodeUrl:"https://rpc.mainnet.near.org",contractName:m,walletUrl:"https://wallet.near.org",helperUrl:"https://helper.mainnet.near.org",explorerUrl:"https://explorer.mainnet.near.org"};case"testnet":return{networkId:"testnet",nodeUrl:"https://rpc.testnet.near.org",contractName:m,walletUrl:"https://wallet.testnet.near.org",helperUrl:"https://helper.testnet.near.org",explorerUrl:"https://explorer.testnet.near.org"};default:throw Error("Unknown environment '".concat(e,"'."))}},O=n(81),p=n(52),h=x("testnet");function f(){return(f=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.connect)(Object.assign({deps:{keyStore:new O.keyStores.BrowserLocalStorageKeyStore}},h));case 2:t=e.sent,window.walletConnection=new O.WalletConnection(t),window.accountId=window.walletConnection.getAccountId(),window.contract=new O.Contract(window.walletConnection.account(),h.contractName,{viewMethods:["getTour","getTours"],changeMethods:["setTour","buyTour","updateTour","deleteTour","likeTour","unLikeTour","dislikeTour","unDislikeTour","commentOnTour","rateTour"]});case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(){return g.apply(this,arguments)}function g(){return(g=Object(j.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=p.formatNearAmount,e.next=3,window.walletConnection.account().getAccountBalance();case 3:return e.t1=e.sent.total,e.abrupt("return",(0,e.t0)(e.t1,2));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(){window.walletConnection.requestSignIn(h.contractName)}function y(){window.walletConnection.signOut(),window.location.reload()}var N=n(508),k=n(526),C=n(507),S=n(131),T=n.p+"static/media/navv.21952eba.jpeg",I=n(1);function _(e){var t=e.address,n=e.amount,r=e.symbol,c=e.destroy;return Object(I.jsx)(S.Parallax,{bgImage:T,bgImageAlt:"the cat",strength:-100,children:Object(I.jsx)("div",{style:{height:200},children:Object(I.jsx)("div",{className:"w-100 h-100 d-flex flex-row-reverse pt-4 px-4",children:Object(I.jsxs)(k.a,{children:[Object(I.jsx)(k.a.Toggle,{variant:"light",align:"end",id:"dropdown-basic",className:"d-flex align-items-center border rounded-pill py-1",children:n?Object(I.jsxs)(I.Fragment,{children:[n," ",Object(I.jsxs)("span",{className:"ms-1",children:[" ",r]})]}):Object(I.jsx)(C.a,{animation:"border",size:"sm",className:"opacity-25"})}),Object(I.jsxs)(k.a.Menu,{className:"shadow-lg border-0",children:[Object(I.jsx)(k.a.Item,{href:"https://explorer.testnet.near.org/accounts/".concat(t),target:"_blank",children:Object(I.jsxs)("div",{direction:"horizontal",gap:2,children:[Object(I.jsx)("i",{className:"bi bi-person-circle fs-4"}),Object(I.jsx)("span",{className:"font-monospace",children:t})]})}),Object(I.jsx)(k.a.Divider,{}),Object(I.jsxs)(k.a.Item,{as:"button",className:"d-flex align-items-center",onClick:function(){c()},children:[Object(I.jsx)(N.a,{}),"Disconnect"]})]})]})})})})}var A=n(543),D=n(545),E=n(546),F=n(547),R=n(540),U=n(541),P=n(548),q=n(549),B=n(534),z=n(533),M=1e14;function V(e){return window.contract.getTour(e)}function G(e){return H.apply(this,arguments)}function H(){return(H=Object(j.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,r=t.price,e.next=3,window.contract.buyTour({tourId:n},M,r);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function W(e){return L.apply(this,arguments)}function L(){return(L=Object(j.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",window.contract.deleteTour(t));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function K(e){return J.apply(this,arguments)}function J(){return(J=Object(j.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",window.contract.likeTour(t,M,Object(p.parseNearAmount)("0.0001")));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Q(e){return X.apply(this,arguments)}function X(){return(X=Object(j.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",window.contract.dislikeTour(t,M,Object(p.parseNearAmount)("0.0001")));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Y(){return(Y=Object(j.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.id=Object(z.a)(),e.abrupt("return",window.contract.commentOnTour({comment:t},M,Object(p.parseNearAmount)("0.0001")));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Z(e){return $.apply(this,arguments)}function $(){return($=Object(j.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.id=Object(z.a)(),e.next=3,window.contract.rateTour({rate:t},M,Object(p.parseNearAmount)("0.0001"));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ee=n(72),te=(n(328),function(e){var t=e.text;return Object(I.jsxs)("div",{children:[Object(I.jsx)("i",{className:"bi bi-check-circle-fill text-success mx-2"}),Object(I.jsx)("span",{className:"text-secondary mx-1",children:t})]})}),ne=function(e){var t=e.text;return Object(I.jsxs)("div",{children:[Object(I.jsx)("i",{className:"bi bi-x-circle-fill text-danger mx-2"}),Object(I.jsx)("span",{className:"text-secondary mx-1",children:t})]})},re={text:""};function ce(e){var t=e.rate,n=e.tourId,c=Object(r.useState)(!1),a=Object(d.a)(c,2),s=a[0],i=a[1],o=function(){var e=Object(j.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{i(!0),Z(t),Object(ee.b)(Object(I.jsx)(te,{text:"Tour added successfully."}))}catch(n){console.log(n),Object(ee.b)(Object(I.jsx)(ne,{text:"Failed to create a tour."}))}finally{i(!1)}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(I.jsx)(I.Fragment,{children:s?Object(I.jsx)("p",{children:"..."}):Object(I.jsx)(I.Fragment,{children:Object(I.jsxs)(R.a,{children:[Object(I.jsx)(B.a,{name:"half-rating-read",value:t,onChange:function(e,t){o({tourId:n,rate:t})}})," "]})})})}te.defaultProps=re,ne.defaultProps=re;var ae=function(e){var t=e.rate,n=e.rateNumber,r=e.tourId;return Object(I.jsxs)("div",{className:"flex-column",children:[Object(I.jsxs)("div",{className:"d-flex",children:[Object(I.jsx)(ce,{tourId:r,rate:t,rateNumber:n}),Object(I.jsx)(U.a,{component:"legend",children:"(".concat(t,"/5)")})]}),Object(I.jsxs)(U.a,{color:"text.secondary",component:"legend",children:[n," Ratings"]})]})},se=n(542),ie=n(515),oe=n(516),le=function(e){var t=e.id,n=e.address,c=e.likes,a=e.dislikes,s=Object(r.useState)(!1),i=Object(d.a)(s,2),o=i[0],u=i[1],b=Object(r.useState)(!1),m=Object(d.a)(b,2),x=m[0],O=m[1],p=Object(r.useState)(!0),h=Object(d.a)(p,2),f=h[0],v=h[1],g=function(){var e=Object(j.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K({id:t});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(j.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q({id:t});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(r.useEffect)(Object(j.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u(c.includes(n)),O(a.includes(n)),v(!1);case 3:case"end":return e.stop()}}),e)}))),[]);var y=o?"primary":"default",N=x?"primary":"default";return Object(I.jsx)(I.Fragment,{children:f?Object(I.jsx)("p",{children:"..."}):Object(I.jsxs)("div",{className:"d-flex",children:[Object(I.jsxs)("div",{children:[Object(I.jsx)(se.a,{color:y,onClick:function(){return g(t)},children:Object(I.jsx)(ie.a,{})}),Object(I.jsx)(U.a,{className:"text-center",children:c.length})]}),Object(I.jsxs)("div",{children:[Object(I.jsx)(se.a,{color:N,onClick:function(){return w(t)},children:Object(I.jsx)(oe.a,{})}),Object(I.jsx)(U.a,{className:"text-center",children:a.length})]})]})})},je=n(532),de=n(529);function ue(e){var t=e.date;return Object(I.jsx)(je.a,{date:t,locale:"en-US"})}function be(e){var t=e/1e6,n=new Date-864e5,r=new Date(n);return new Date(t).toISOString()<r.toISOString()?Object(de.a)(new Date(t),"dd MMM yyyy"):Object(I.jsx)(ue,{date:t})}var me=n(231),xe=function(e){var t=e.tour,n=e.address;return Object(I.jsx)(me.motion.div,{whileHover:{scale:1.1},whileTap:{scale:.9},children:Object(I.jsxs)(A.a,{className:"p-0 m-3",sx:{maxWidth:345},children:[Object(I.jsx)(u.b,{to:"/tour/".concat(t.id),children:Object(I.jsxs)(D.a,{children:[Object(I.jsx)(E.a,{component:"img",height:"140",image:t.imageCover,alt:"green iguana"}),Object(I.jsxs)(F.a,{children:[Object(I.jsxs)(R.a,{className:"d-flex align-items-center justify-content-between",children:[Object(I.jsx)(U.a,{gutterBottom:!0,color:"text.primary",variant:"h5",component:"div",children:t.name}),Object(I.jsxs)(U.a,{gutterBottom:!0,color:"primary",component:"div",children:["\u2022 ",be(t.createdAt)]})]}),Object(I.jsx)(U.a,{variant:"body2",color:"text.secondary",children:t.summary})]})]})}),Object(I.jsx)(P.a,{}),Object(I.jsxs)(q.a,{className:"justify-content-between px-3",children:[Object(I.jsx)(ae,{tourId:t.id,rate:t.ratingsAverage,rateNumber:t.ratingsQuantity}),Object(I.jsx)(le,{id:t.id,address:n,likes:t.like,dislikes:t.dislike})]})]})})},Oe=n(520),pe=n(521),he=n(522),fe=n(530),ve=n(550),ge={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,color:"#fff",p:4,display:"flex",alignItems:"center",justifyContent:"center",border:0,outline:"none"};function we(){return Object(I.jsx)("div",{children:Object(I.jsx)(fe.a,{open:!0,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(I.jsx)(R.a,{sx:ge,children:Object(I.jsx)(ve.a,{color:"inherit"})})})})}var ye=n(82),Ne=n(551),ke=n(537),Ce=n(233),Se=n.n(Ce),Te=n(234),Ie=n.n(Te),_e=n(230),Ae=n(519),De=n(235),Ee=n.n(De),Fe={position:"fixed",bottom:20,right:20,zIndex:1e4,background:_e.a[600],"&:hover":{background:_e.a[500]}},Re={background:Ae.a[400],"&:hover":{background:Ae.a[300]}},Ue=function(e){var t=e.tour,n=e.address,r=Object(b.f)(),c=function(){var e=Object(j.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,W({id:t.id});case 3:setTimeout((function(){r.push("/"),window.location.reload()}),500),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();return Object(I.jsx)(I.Fragment,{children:t.owner===n?Object(I.jsx)(R.a,{sx:{color:"white"},children:Object(I.jsx)(Ne.a,{size:"large",sx:Fe,color:"inherit","aria-label":"add",onClick:c,children:Object(I.jsx)(Se.a,{})})}):Object(I.jsx)("span",{})})},Pe=function(){var e=Object(b.f)();return Object(I.jsxs)(Ne.a,{onClick:function(){return e.push("/addtour")},variant:"extended",sx:Fe,color:"primary","aria-label":"add",children:["Add Tour",Object(I.jsx)(Ie.a,{})]})},qe=function(){var e=Object(b.f)();return Object(I.jsx)(ke.a,{variant:"contained",onClick:function(){return e.push("/")},sx:Re,startIcon:Object(I.jsx)(Ee.a,{}),className:" my-4 mx-1",children:"Go Back"})},Be=function(e){var t=e.address,n=Object(r.useState)([]),c=Object(d.a)(n,2),a=c[0],s=c[1],i=Object(r.useState)(!1),o=Object(d.a)(i,2),u=o[0],b=o[1],m=function(){var e=Object(j.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,b(!0),e.t0=s,e.next=5,window.contract.getTours();case 5:e.t1=e.sent,(0,e.t0)(e.t1),e.next=12;break;case 9:e.prev=9,e.t2=e.catch(0),console.log({error:e.t2});case 12:return e.prev=12,b(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){m()}),[]),Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(Pe,{}),u?Object(I.jsx)(we,{}):Object(I.jsxs)(Oe.a,{className:" my-5",children:[Object(I.jsx)(P.a,{className:"my-3",children:Object(I.jsx)(U.a,{variant:"h4",sx:{color:ye.a[700]},component:"div",children:"~ Explore Tours ~"})}),Object(I.jsx)(pe.a,{xs:1,sm:2,lg:3,className:"mt-5 mx-3",children:a.map((function(e){return Object(I.jsx)(he.a,{children:Object(I.jsx)(xe,{tour:e,address:t})},e.id)}))})]})]})},ze=function(e){var t=e.address,n=e.amount,r=e.symbol,c=e.destroy;return Object(I.jsxs)("div",{children:[Object(I.jsx)(_,{address:t,amount:n,symbol:r,destroy:c}),Object(I.jsx)(Be,{address:t})]})},Me=(n(341),{background:"floralwhite","&:hover":{background:"#c9c9c9"}}),Ve=function(e){var t=e.login;return Object(I.jsx)("div",{className:"d-flex justify-content-center flex-column text-center home-container",style:{minHeight:"100vh"},children:Object(I.jsxs)("div",{className:" text-light mb-5",children:[Object(I.jsx)(U.a,{className:"mb-3 animate__animated animate__slideInDown animate__delay-1s",variant:"h3",component:"div",sx:{flexGrow:1},children:"Welcome to NEAR-Tours"}),Object(I.jsx)(U.a,{variant:"p",component:"div",sx:{flexGrow:1},className:"animate__animated animate__animated animate__fadeIn animate__delay-1s",children:"To Explore Tours, Connect wallet"}),Object(I.jsx)(ke.a,{onClick:t,variant:"outlined",sx:Me,className:"rounded-pill px-3 mt-3 animate__animated animate__slideInUp animate__delay-1s",children:"Connect Wallet"})]})})},Ge=n(236),He=n.n(Ge),We=(n(354),function(e){var t=e.images;return Object(I.jsxs)("div",{className:"mt-5",children:[Object(I.jsx)(P.a,{}),Object(I.jsx)(U.a,{className:"mt-5",variant:"h4",component:"div",children:"Gallery"}),Object(I.jsx)(He.a,{partialVisbile:!0,itemClass:"image-item",responsive:{desktop:{breakpoint:{max:3e3,min:1024},items:3,paritialVisibilityGutter:60},tablet:{breakpoint:{max:1024,min:464},items:2,paritialVisibilityGutter:50},mobile:{breakpoint:{max:464,min:0},items:1,paritialVisibilityGutter:30}},children:t.map((function(e,t){return Object(I.jsx)("img",{className:"slide-image",src:e,alt:t},t)}))})]})}),Le=function(e){var t=e.desc,n=e.images;return Object(I.jsx)(he.a,{className:" p-3 ",md:8,children:Object(I.jsxs)("div",{className:"custom-card  py-4 px-4",children:[Object(I.jsx)(U.a,{variant:"h4",component:"div",children:"Description"}),Object(I.jsx)("p",{className:"mt-3",children:t}),Object(I.jsx)(We,{images:n})]})})},Ke=n(552),Je=n(535),Qe=n(538),Xe=n(83),Ye=function(e){var t=e.tour,n=e.address,r=e.buy,c=t.id,a=t.price;return Object(I.jsx)(he.a,{className:" p-3",children:Object(I.jsxs)(Ke.a,{className:"custom-card py-2 w-100 ",children:[Object(I.jsxs)(Je.a,{className:"p-3 justify-content-between",children:[Object(I.jsx)(Qe.a,{label:"".concat(t.sold," sold"),sx:{bgcolor:Xe.a[200]},className:"px-2 font-bold"}),Object(I.jsxs)(U.a,{children:[O.utils.format.formatNearAmount(a)," NEAR"]})]}),Object(I.jsx)(P.a,{})," ",Object(I.jsx)(Je.a,{children:Object(I.jsx)(U.a,{variant:"h5",component:"div",children:"Rating"})}),Object(I.jsx)(Je.a,{className:"p-3 pt-0",divider:!0,children:Object(I.jsx)(ae,{tourId:t.id,rate:t.ratingsAverage,rateNumber:t.ratingsQuantity})}),Object(I.jsx)(Je.a,{children:Object(I.jsx)(U.a,{variant:"h5",component:"div",children:"Impressions"})}),Object(I.jsx)(Je.a,{divider:!0,children:Object(I.jsx)(le,{id:t.id,address:n,likes:t.like,dislikes:t.dislike})}),Object(I.jsx)(Je.a,{className:"p-3",children:Object(I.jsx)(ke.a,{className:"w-100",size:"large",onClick:function(){r(c,a)},variant:"contained",children:"PURCHASE"})})]})})},Ze=n(553),$e=n(523),et=n(539),tt=n(242),nt=n.n(tt),rt=n(84),ct=n(30),at=n(49),st=n(524),it=function(e){var t=e.id,n=c.a.useState(!1),r=Object(d.a)(n,2),a=r[0],s=r[1];return Object(I.jsxs)("div",{children:[Object(I.jsx)(ke.a,{variant:"outlined",onClick:function(){return s(!0)},children:"Comment"}),Object(I.jsx)(fe.a,{open:a,onClose:function(){return s(!1)},children:Object(I.jsxs)(R.a,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4},children:[Object(I.jsx)(U.a,{className:"",variant:"h5",component:"div",children:"Add Comment"}),Object(I.jsx)(ct.d,{validationSchema:Object(at.b)({comment:Object(at.c)().required().min(2)}),initialValues:{comment:""},onSubmit:function(e){var n=e.comment;return new Promise((function(e){!function(e){Y.apply(this,arguments)}({tourId:t,comment:n}),e()}))},children:function(){return Object(I.jsxs)(ct.c,{children:[Object(I.jsxs)(Ze.a,{children:[Object(I.jsx)(ct.b,{name:"comment",as:$e.a,minRows:3,label:"Comment"}),Object(I.jsx)(ct.a,{name:"comment"})]}),Object(I.jsx)("div",{className:"d-flex flex-row-reverse",children:Object(I.jsx)(ke.a,{className:"mt-2",variant:"contained",endIcon:Object(I.jsx)(st.a,{}),sx:{bgcolor:rt.a[400]},type:"submit",children:"Add"})})]})}})]})})]})},ot=function(e){var t=e.comment;return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(P.a,{}),Object(I.jsxs)("div",{className:"px-4 py-4",children:[Object(I.jsxs)("div",{className:" d-flex  align-items-center",children:[Object(I.jsx)(et.a,{sx:{bgcolor:ye.a[300],width:56,height:56},children:Object(I.jsx)(nt.a,{})}),Object(I.jsxs)(R.a,{className:"mx-3",children:[Object(I.jsx)(U.a,{className:"font-bold",component:"div",children:t.commenter}),Object(I.jsx)(U.a,{gutterBottom:!0,color:"text.secondary",variant:"small",component:"small",children:be(t.createdAt)})]})]}),Object(I.jsx)("div",{children:Object(I.jsx)(U.a,{className:"pt-2 mx-4 px-5 pr-0",component:"div",children:t.comment})})]})]})},lt=function(e){var t=e.tour;return Object(I.jsx)("div",{className:"px-4",children:Object(I.jsxs)(he.a,{md:8,className:"custom-card my-4",children:[Object(I.jsxs)("div",{className:"py-4 px-4 d-flex justify-content-between align-content-center",children:[Object(I.jsxs)(U.a,{className:"",variant:"h5",component:"div",children:[t.comments.length," Comments"]}),Object(I.jsx)("div",{children:Object(I.jsx)(it,{id:t.id})})]}),t.comments.map((function(e,t){return Object(I.jsx)(ot,{comment:e},t)}))]})})},jt=function(e){var t=e.tour,n=e.address,r=function(){var e=Object(j.a)(l.a.mark((function e(t,n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,G({id:t,price:n});case 3:Object(ee.b)(Object(I.jsx)(te,{text:"Product bought successfully"})),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),Object(ee.b)(Object(I.jsx)(ne,{text:"Failed to purchase product."}));case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(Ue,{tour:t,address:n}),Object(I.jsx)(S.Parallax,{blur:4,bgImage:t.imageCover,bgImageAlt:"the cat",strength:500,children:Object(I.jsx)("div",{style:{height:400},children:Object(I.jsx)("div",{className:"w-100 h-100 d-flex align-items-center justify-content-center",children:Object(I.jsx)(U.a,{variant:"h2",className:"font-bold text-shad ",component:"div",children:t.name})})})}),Object(I.jsxs)(Oe.a,{className:" my-5",children:[Object(I.jsx)(qe,{}),Object(I.jsxs)(pe.a,{children:[Object(I.jsx)(Le,{desc:t.description,images:t.images}),Object(I.jsx)(Ye,{tour:t,address:n,buy:r})]}),Object(I.jsx)(pe.a,{children:Object(I.jsx)(lt,{tour:t})})]})]})},dt=function(e){var t=e.address,n=Object(b.g)(),c=Object(r.useState)({}),a=Object(d.a)(c,2),s=a[0],i=a[1],o=Object(r.useState)(!0),u=Object(d.a)(o,2),m=u[0],x=u[1],O=Object(r.useCallback)(function(){var e=Object(j.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,x(!0),e.t0=i,e.next=5,V({id:t});case 5:e.t1=e.sent,(0,e.t0)(e.t1),e.next=12;break;case 9:e.prev=9,e.t2=e.catch(0),console.log({error:e.t2});case 12:return e.prev=12,x(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(t){return e.apply(this,arguments)}}());return Object(r.useEffect)((function(){O(n.id)}),[]),Object(I.jsx)(I.Fragment,{children:m?Object(I.jsx)(we,{}):Object(I.jsx)(jt,{tour:s,address:t})})},ut=n(528),bt=n(17),mt=n(247),xt=n(554);function Ot(e){var t=e.file,n=e.onDelete;return Object(I.jsxs)("div",{className:"d-flex justify-content-between my-3 align-items-center",children:[Object(I.jsx)("div",{children:t.name}),Object(I.jsx)("div",{children:Object(I.jsx)(ke.a,{variant:"outlined",size:"small",onClick:function(){return n(t)},children:"Delete"})})]})}function pt(e){var t=e.file,n=e.onDelete,c=e.onUpload,a=Object(r.useState)(0),s=Object(d.a)(a,2),i=s[0],o=s[1];return Object(r.useEffect)((function(){function e(){return(e=Object(j.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ht(t,o);case 2:n=e.sent,c(t,n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(I.jsxs)("div",{children:[Object(I.jsx)(Ot,{file:t,onDelete:n}),Object(I.jsx)(xt.a,{variant:"determinate",value:i})]})}function ht(e,t){return new Promise((function(n,r){var c=new XMLHttpRequest;c.open("POST","https://api.cloudinary.com/v1_1/dvxrsopw3/image/upload"),c.onload=function(){var e=JSON.parse(c.responseText);n(e.secure_url)},c.onerror=function(e){return r(e)},c.upload.onprogress=function(e){if(e.lengthComputable){var n=e.loaded/e.total*100;t(Math.round(n))}};var a=new FormData;a.append("file",e),a.append("upload_preset","igtpzjq7"),c.send(a)}))}function ft(e){var t=e.file,n=e.onDelete,r=e.errors;return Object(I.jsxs)("div",{style:{color:"red"},children:[Object(I.jsx)(Ot,{file:t,onDelete:n}),Object(I.jsx)(xt.a,{color:"inherit",variant:"determinate",value:100}),r.map((function(e){return Object(I.jsx)("div",{children:Object(I.jsx)(U.a,{color:"error",children:e.message})},e.code)}))]})}var vt=0;function gt(){return++vt}function wt(e){var t=e.name,n=Object(ct.e)(t),a=Object(d.a)(n,3),s=(a[0],a[1],a[2]),o=Object(r.useState)([]),l=Object(d.a)(o,2),j=l[0],u=l[1],b=Object(r.useState)({id:"",errors:[],file:{}}),m=Object(d.a)(b,2),x=m[0],O=m[1],p=Object(r.useCallback)((function(e,t){var n=e.map((function(e){return{file:e,errors:[],id:gt()}})),r=t.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{id:gt()})}));u((function(e){return[].concat(Object(bt.a)(e),Object(bt.a)(n),Object(bt.a)(r))}))}),[]);function h(e,t){u((function(n){return n.map((function(n){return n.file===e?Object(i.a)(Object(i.a)({},n),{},{url:t}):n}))}))}function f(e){u((function(t){return t.filter((function(t){return t.file!==e}))}))}Object(r.useEffect)((function(){var e,n=[];"images"===t?(j.forEach((function(e){n.push(e.url)})),s.setValue(n)):"imageCover"===t&&(j.forEach((function(t){O(t),e=t.url})),s.setValue(e))}),[j]);var v=Object(mt.a)({onDrop:p,accept:["image/*"],maxSize:3072e3}),g=v.getRootProps,w=v.getInputProps;return Object(I.jsx)(c.a.Fragment,{children:"images"==t?Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)("div",{children:Object(I.jsxs)("div",Object(i.a)(Object(i.a)({},g({className:"dropzone"})),{},{children:[Object(I.jsx)("input",Object(i.a)({},w())),Object(I.jsx)("p",{children:"Drag & drop some images here, or click to select images"})]}))}),j.map((function(e){return Object(I.jsx)("div",{children:e.errors.length?Object(I.jsx)(ft,{file:e.file,errors:e.errors,onDelete:f}):Object(I.jsx)(pt,{onDelete:f,onUpload:h,file:e.file})},e.id)}))]}):Object(I.jsx)(I.Fragment,{children:Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)("div",{children:Object(I.jsxs)("div",Object(i.a)(Object(i.a)({},g({className:"dropzone"})),{},{children:[Object(I.jsx)("input",Object(i.a)({},w())),Object(I.jsx)("p",{children:"Drag & drop an image file here, or click an image"})]}))})," ",Object(I.jsx)("div",{children:(null===x||void 0===x?void 0:x.errors.length)?Object(I.jsx)(ft,{file:null===x||void 0===x?void 0:x.file,errors:x.errors,onDelete:f}):Object(I.jsx)(pt,{onDelete:f,onUpload:h,file:null===x||void 0===x?void 0:x.file})},null===x||void 0===x?void 0:x.id)]})})})}var yt=function(){return Object(I.jsx)(I.Fragment,{children:Object(I.jsxs)(Oe.a,{className:"my-5",children:[Object(I.jsx)("div",{className:"mx-md-5 mx-2",children:Object(I.jsx)(qe,{})}),Object(I.jsxs)(pe.a,{className:"p-md-5 py-3 card mx-md-5 mx-2",children:[Object(I.jsx)(U.a,{className:"mb-4",color:"primary",variant:"h4",component:"div",children:"Add Tour"}),Object(I.jsx)(ct.d,{initialValues:{name:"",description:"",summary:"",price:"",imageCover:"",images:[]},validationSchema:Object(at.b)({name:Object(at.c)().required().min(2).max(20),description:Object(at.c)().required().min(2),summary:Object(at.c)().required().min(2).max(60),price:Object(at.c)().required().min(1),imageCover:Object(at.c)().required().min(1).typeError("Cover Image is required"),images:Object(at.a)(Object(at.c)().required()).min(1)}),onSubmit:function(e,t){return new Promise((function(n){var r;(r=Object(i.a)({},e)).id=Object(z.a)(),r.price=Object(p.parseNearAmount)(r.price+""),window.contract.setTour({tour:r},M,Object(p.parseNearAmount)("0.52")),n(),t.resetForm()}))},children:function(e){var t=e.isSubmitting,n=e.isValidating;return Object(I.jsxs)(ct.c,{children:[Object(I.jsxs)(pe.a,{children:[Object(I.jsx)(he.a,{md:6,className:"my-2",children:Object(I.jsxs)(Ze.a,{children:[Object(I.jsx)(ct.b,{name:"name",as:ut.a,label:"Name"}),Object(I.jsx)(ct.a,{component:"div",className:"text-red",name:"name"})]})}),Object(I.jsx)(he.a,{md:6,className:"my-2",children:Object(I.jsxs)(Ze.a,{children:[Object(I.jsx)(ct.b,{name:"price",as:ut.a,label:"Price"}),Object(I.jsx)(ct.a,{component:"div",className:"text-red",name:"price"})]})})]}),Object(I.jsx)(U.a,{variant:"h6",className:"mt-2",component:"div",children:"Summary"}),Object(I.jsx)(R.a,{marginBottom:2,children:Object(I.jsxs)(Ze.a,{children:[Object(I.jsx)(ct.b,{name:"summary",as:$e.a,minRows:3}),Object(I.jsx)(ct.a,{component:"div",className:"text-red",name:"summary"})]})}),Object(I.jsx)(U.a,{variant:"h6",component:"div",children:"Description"}),Object(I.jsxs)(Ze.a,{children:[Object(I.jsx)(ct.b,{name:"description",as:$e.a,minRows:5}),Object(I.jsx)(ct.a,{component:"div",className:"text-red",name:"description"})]}),Object(I.jsx)(U.a,{variant:"h6",className:"my-2",component:"div",children:"Cover Image"}),Object(I.jsxs)(R.a,{marginBottom:2,children:[Object(I.jsx)(wt,{name:"imageCover"}),Object(I.jsx)(ct.a,{component:"div",className:"text-red mt-2",name:"imageCover"})]}),Object(I.jsx)(U.a,{variant:"h6",className:"my-2",component:"div",children:"Tour Image Gallery"}),Object(I.jsxs)(R.a,{marginBottom:2,children:[Object(I.jsx)(wt,{name:"images"}),Object(I.jsx)(ct.a,{component:"div",className:"text-red mt-2",name:"images"})]}),Object(I.jsx)(ke.a,{variant:"contained",disabled:t||n,color:"primary",className:"w-100 mt-3",type:"submit",children:"ADD TOUR"})]})}})]})]})})},Nt=function(e){var t=e.address,n=e.amount,r=e.symbol,c=e.destroy;return Object(I.jsxs)("div",{children:[Object(I.jsx)(_,{address:t,amount:n,symbol:r,destroy:c}),Object(I.jsx)(yt,{})]})},kt=function(){var e=window.walletConnection.account(),t=Object(r.useState)("0"),n=Object(d.a)(t,2),c=n[0],a=n[1],s=Object(r.useCallback)(Object(j.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.accountId){t.next=6;break}return t.t0=a,t.next=4,v();case 4:t.t1=t.sent,(0,t.t0)(t.t1);case 6:case"end":return t.stop()}}),t)}))));return Object(r.useEffect)((function(){s()}),[s]),Object(I.jsx)("div",{children:Object(I.jsx)(u.a,{children:Object(I.jsxs)(b.c,{children:[Object(I.jsx)(b.a,{exact:!0,path:"/",children:e.accountId?Object(I.jsx)(ze,{address:e.accountId,amount:c,symbol:"NEAR",destroy:y}):Object(I.jsx)(Ve,{login:w})}),Object(I.jsx)(b.a,{path:"/tour/:id",render:function(t){return Object(I.jsx)(dt,Object(i.a)(Object(i.a)({},t),{},{address:e.accountId}))}}),Object(I.jsx)(b.a,{path:"/addtour",render:function(t){return Object(I.jsx)(Nt,Object(i.a)({address:e.accountId,amount:c,symbol:"NEAR",destroy:y},t))}})]})})})},Ct=function(){return Object(I.jsx)("div",{children:Object(I.jsx)(kt,{})})},St=(n(456),n(527)),Tt=n(244),It=n(245);St.a.locale(Tt),St.a.locale(It),window.nearInitPromise=function(){return f.apply(this,arguments)}().then((function(){s.a.render(Object(I.jsx)(c.a.StrictMode,{children:Object(I.jsx)(Ct,{})}),document.getElementById("root"))})).catch(console.error)}},[[457,1,2]]]);
//# sourceMappingURL=main.a4c2d205.chunk.js.map
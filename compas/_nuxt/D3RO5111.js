import{_ as c}from"./BwWGs5fo.js";import{o as n,k as l,F as e,I as h,J as f,Q as V,R as L,U as b,H as w,x as H,V as M,P as x,l as p,q as g,W as k,X as $,G as Z,u as _,Y as S,Z as A,_ as I,$ as y,a0 as B,a1 as N}from"./uAlNcoh6.js";import{_ as P}from"./CdqONCi0.js";const F={methods:{closeNotification(){this.$emit("close")}}},U=t=>(h("data-v-c9e847de"),t=t(),f(),t),q={class:"container"},D=U(()=>e("div",{class:"notification"},[e("h3",null,"Уведомление"),e("p",null,"Форма отправлена")],-1));function R(t,a,r,v,i,d){return n(),l("div",q,[D,e("button",{class:"button",onClick:a[0]||(a[0]=(...s)=>d.closeNotification&&d.closeNotification(...s))},"OK")])}const T=c(F,[["render",R],["__scopeId","data-v-c9e847de"]]),E={methods:{closeVideo(t){t.target.classList.contains("video-overlay")&&this.$emit("close")}}},K=t=>(h("data-v-49b1bd02"),t=t(),f(),t),X=K(()=>e("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/3uI2KWRZBXM?si=KA4vUgaPrXkrnARk",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:""},null,-1)),W=[X];function Y(t,a,r,v,i,d){return n(),l("div",{class:"video-overlay",onClick:a[1]||(a[1]=(...s)=>d.closeVideo&&d.closeVideo(...s))},[e("div",{class:"video-container",onClick:a[0]||(a[0]=V(()=>{},["stop"]))},W)])}const z=c(E,[["render",Y],["__scopeId","data-v-49b1bd02"]]),G=""+new URL("comp.D9ly7ATH.png",import.meta.url).href,J={data(){return{licensePlate:"",region:"",sertificate:"",notification:!1,showVideo:!1}},methods:{sendForm(){this.licensePlate&&this.region&&this.sertificate?this.notification=!0:document.querySelectorAll(".form-field__input").forEach(a=>{a.value||a.classList.add("incorrect")})},deleteIncorrect(t){const a=this.$refs[t];if(a)a.classList.remove("incorrect");else return},openVideo(){this.showVideo=!0},closeVideo(){this.showVideo=!1}}},C=t=>(h("data-v-b33847db"),t=t(),f(),t),O={class:"main"},Q={class:"main-content"},j=C(()=>e("h1",{class:"main-content__heading"}," Проверьте штрафы и зарегестрируйтесь в 1 клик ",-1)),e2={class:"main-content__form"},t2={class:"horizontal-field"},a2={class:"form-field"},i2=C(()=>e("label",{for:"license-plate",class:"label"},"Номер автомобиля",-1)),d2=["on-focus"],o2={class:"form-field"},n2=C(()=>e("label",{for:"region",class:"label"},"Регион",-1)),C2=["on-focus"],s2={class:"form-field"},l2=C(()=>e("label",{for:"sertificate",class:"label"},"Свидетельство о регистрации",-1)),c2=["on-focus"],r2={class:"form-buttons"},v2=C(()=>e("svg",{class:"arrow",width:"15",height:"13",viewBox:"0 0 15 13",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M11.9226 6.67278L0.570412 6.66773C0.257929 6.66759 0.00472069 6.41416 0.00485992 6.10168L0.00487518 6.09709C0.00757599 5.781 0.26404 5.52588 0.580147 5.52485L11.9083 5.48784L7.46464 1.01635C7.23486 0.785138 7.23115 0.412947 7.45628 0.177198C7.67473 -0.051569 8.03728 -0.0599298 8.26604 0.158525C8.26915 0.161493 8.27222 0.164496 8.27526 0.167534L13.8712 5.75744C14.0666 5.9526 14.0668 6.26918 13.8716 6.46455L13.87 6.4662L8.18914 12.1003C7.95859 12.329 7.58633 12.3275 7.35767 12.0969C7.35452 12.0937 7.3514 12.0905 7.34832 12.0873C7.11811 11.8443 7.12347 11.4621 7.36039 11.2257L11.9226 6.67278Z",fill:"white"})],-1)),p2=C(()=>e("svg",{class:"youtube-icon",width:"32",height:"23",viewBox:"0 0 32 23",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M2.5258 20.2492C1.61798 19.0743 1.16406 16.1905 1.16406 11.5976C1.16406 7.00468 1.52855 4.25596 2.25754 3.35141C2.75216 2.6247 3.22423 2.1221 3.67376 1.8436C4.12329 1.5651 4.71528 1.40847 5.44973 1.37371C10.5243 1.12406 14.3824 0.999492 17.0239 1C19.6655 1.00051 23.1675 1.12651 27.5299 1.37798C28.2271 1.51283 28.8478 1.77363 29.392 2.16038C29.9363 2.54714 30.3022 3.04098 30.4897 3.64191C31.0955 5.04118 31.3984 7.52884 31.3984 11.1049C31.3984 14.6809 31.1736 17.2829 30.7239 18.9108C30.4927 19.803 30.0488 20.5145 29.392 21.045C28.7353 21.5756 27.852 21.8344 26.7423 21.8215C21.892 22.0624 18.2543 22.1787 15.8292 22.1702C13.4042 22.1618 9.93055 22.0209 5.40843 21.7474C4.7907 21.7474 4.26489 21.6434 3.83098 21.4353C3.39708 21.2272 2.96202 20.8318 2.5258 20.2492Z",stroke:"#1253A2"}),e("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M13.2152 7.03704L13.219 7.04004L21.3701 11.3065L20.3739 11.7778L13.2089 15.4787L13.2149 7.03804L13.2152 7.03704Z",fill:"#1253A2"})],-1)),u2=C(()=>e("span",{class:"video-time"},"(1 мин. 20 сек)",-1)),_2=C(()=>e("p",{class:"main-content__text"}," Нажимая «Проверить штрафы» вы соглашаетесь с политикой обработки персональных данных и принимаете оферту ",-1)),h2=C(()=>e("div",{class:"main-image"},[e("img",{src:G,alt:"computer"})],-1));function f2(t,a,r,v,i,d){const s=T,m=z;return n(),l("div",null,[e("section",O,[e("div",Q,[j,e("form",e2,[e("div",t2,[e("div",a2,[i2,L(e("input",{type:"text",ref:"license-plate",class:"form-field__input","onUpdate:modelValue":a[0]||(a[0]=o=>i.licensePlate=o),"on-focus":d.deleteIncorrect("license-plate")},null,40,d2),[[b,i.licensePlate]])]),e("div",o2,[n2,L(e("input",{type:"number",ref:"region",class:"form-field__input","onUpdate:modelValue":a[1]||(a[1]=o=>i.region=o),"on-focus":d.deleteIncorrect("region")},null,40,C2),[[b,i.region]])])]),e("div",s2,[l2,L(e("input",{type:"text",ref:"sertificate",class:"form-field__input","onUpdate:modelValue":a[2]||(a[2]=o=>i.sertificate=o),"on-focus":d.deleteIncorrect("sertificate")},null,40,c2),[[b,i.sertificate]])]),e("div",r2,[e("button",{class:"form-buttons__button submit-button",onClick:a[3]||(a[3]=V((...o)=>d.sendForm&&d.sendForm(...o),["prevent"]))},[w(" Проверить штрафы"),v2]),e("button",{class:"form-buttons__button about-button",onClick:a[4]||(a[4]=V((...o)=>d.openVideo&&d.openVideo(...o),["prevent"]))},[p2,w(" О сервисе"),u2])]),_2])]),h2]),i.notification?(n(),H(s,{key:0,onClose:a[5]||(a[5]=o=>i.notification=!1)})):M("",!0),i.showVideo?(n(),H(m,{key:1,onClose:d.closeVideo},null,8,["onClose"])):M("",!0)])}const m2=c(J,[["render",f2],["__scopeId","data-v-b33847db"]]),L2={},b2={class:"container"},g2=x('<h2 class="title" data-v-0db52a40> Плюсы использования сервиса «Компас» для анализа штрафов </h2><section class="advantages" data-v-0db52a40><div class="advantages__item" data-v-0db52a40><div class="item-logo" data-v-0db52a40><svg width="59" height="28" viewBox="0 0 59 28" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-0db52a40><path fill-rule="evenodd" clip-rule="evenodd" d="M44.2651 0.00799973C48.2471 -0.11 51.1652 1.094 53.5242 2.85C55.6489 4.432 57.5987 6.903 58.4213 9.943C59.5344 14.063 58.9612 16.535 57.5313 19.913C57.0336 21.09 55.7314 22.648 54.9652 23.417C50.3386 28.057 42.9106 28.923 37.2563 25.269C36.4187 24.728 34.4478 23.109 34.0436 22.463C34.2517 22.041 38.1342 18.284 38.3524 18.203C38.7828 18.463 39.3217 19.122 39.7762 19.509C40.3112 19.964 40.7476 20.266 41.4203 20.597C45.6557 22.675 50.7981 20.535 52.2311 16.714C55.3362 8.437 45.2706 2.552 39.1568 8.601L25.6422 22.04C23.8955 23.771 22.4073 25.47 19.46 26.674C10.4834 30.34 1.00002 24.136 0.181498 15.505C-0.394685 9.448 2.62198 4.19 7.7835 1.654C13.1753 -0.997 19.6571 0.00999928 23.9569 4.2L24.7352 4.977L25.067 5.309C26.5934 6.829 29.1686 9.361 29.5256 9.464C29.8373 9.279 35.0109 4.061 35.6474 3.487C37.558 1.763 40.8431 0.109 44.2651 0.00799973ZM8.94994 8.155C5.36313 11.091 5.29173 16.738 8.98514 19.813C10.4663 21.046 12.9571 22.003 15.6007 21.471C18.2654 20.936 19.3665 19.626 20.7924 18.211C21.3726 17.638 24.897 14.259 25.0358 13.866C24.7774 13.386 21.2308 10.112 20.7572 9.644C19.2559 8.165 18.2051 6.975 15.4991 6.439C12.8626 5.916 10.4804 6.902 8.94994 8.155Z" fill="#1253A2" data-v-0db52a40></path></svg></div><div class="item-content" data-v-0db52a40><h3 class="content-heading" data-v-0db52a40>Неограниченый автопарк</h3><p class="content-text" data-v-0db52a40> Можно добавить неограниченное кол-во машин и водителей </p></div></div><div class="advantages__item" data-v-0db52a40><div class="item-logo" data-v-0db52a40><svg width="59" height="55" viewBox="0 0 59 55" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-0db52a40><path d="M33.19 44.904H25.38C25.1211 44.904 24.8729 45.0068 24.6899 45.1899C24.5068 45.3729 24.404 45.6211 24.404 45.88V49.785C24.404 50.0438 24.5068 50.2921 24.6899 50.4751C24.8729 50.6582 25.1211 50.761 25.38 50.761H33.19C33.4486 50.7605 33.6964 50.6574 33.8792 50.4745C34.062 50.2915 34.1647 50.0436 34.165 49.785V45.88C34.165 45.6211 34.0622 45.3729 33.8791 45.1899C33.6961 45.0068 33.4488 44.904 33.19 44.904ZM32.213 48.809H26.356V46.856H32.213V48.809ZM40.999 44.904H37.094C36.8351 44.904 36.5869 45.0068 36.4039 45.1899C36.2208 45.3729 36.118 45.6211 36.118 45.88V49.785C36.118 50.0438 36.2208 50.2921 36.4039 50.4751C36.5869 50.6582 36.8351 50.761 37.094 50.761H41C41.2588 50.7607 41.5069 50.6578 41.6898 50.4748C41.8728 50.2919 41.9757 50.0438 41.976 49.785V45.88C41.976 45.6211 41.8732 45.3729 41.6901 45.1899C41.5071 45.0068 41.2578 44.904 40.999 44.904ZM40.023 48.809H38.07V46.856H40.023V48.809ZM48.808 44.904H44.903C44.6441 44.904 44.3959 45.0068 44.2129 45.1899C44.0298 45.3729 43.927 45.6211 43.927 45.88V49.785C43.927 50.0438 44.0298 50.2921 44.2129 50.4751C44.3959 50.6582 44.6441 50.761 44.903 50.761H48.808C49.0668 50.7607 49.3149 50.6578 49.4978 50.4748C49.6808 50.2919 49.7837 50.0438 49.784 49.785V45.88C49.7837 45.6212 49.6808 45.3731 49.4978 45.1901C49.3149 45.0072 49.0668 44.9043 48.808 44.904ZM47.832 48.809H45.879V46.856H47.832V48.809ZM21.475 44.904H17.57C17.3111 44.904 17.0629 45.0068 16.8799 45.1899C16.6968 45.3729 16.594 45.6211 16.594 45.88V49.785C16.594 50.0438 16.6968 50.2921 16.8799 50.4751C17.0629 50.6582 17.3111 50.761 17.57 50.761H21.475C21.7338 50.7607 21.9819 50.6578 22.1648 50.4748C22.3478 50.2919 22.4507 50.0438 22.451 49.785V45.88C22.4507 45.6212 22.3478 45.3731 22.1648 45.1901C21.9819 45.0072 21.7338 44.9043 21.475 44.904ZM20.5 48.81H18.548V46.857H20.5V48.81ZM13.666 44.904H9.76C9.50115 44.904 9.25289 45.0068 9.06986 45.1899C8.88682 45.3729 8.784 45.6211 8.784 45.88V49.785C8.784 50.0438 8.88682 50.2921 9.06986 50.4751C9.25289 50.6582 9.50115 50.761 9.76 50.761H13.665C13.9238 50.7607 14.1719 50.6578 14.3548 50.4748C14.5378 50.2919 14.6407 50.0438 14.641 49.785V45.88C14.641 45.6211 14.5382 45.3729 14.3551 45.1899C14.1721 45.0068 13.9238 44.904 13.665 44.904H13.666ZM12.689 48.809H10.737V46.856H12.689V48.809Z" fill="#1253A2" data-v-0db52a40></path><path d="M55.641 1.952H42.843C41.5696 0.700675 39.8558 -0.000488281 38.0705 -0.000488281C36.2852 -0.000488281 34.5714 0.700675 33.298 1.952H2.928C2.15135 1.95226 1.40661 2.26097 0.857531 2.81024C0.308453 3.3595 -4.52641e-08 4.10435 0 4.881L0 51.737C-4.52641e-08 52.5136 0.308453 53.2585 0.857531 53.8078C1.40661 54.357 2.15135 54.6657 2.928 54.666H55.642C56.4186 54.6657 57.1634 54.357 57.7125 53.8078C58.2615 53.2585 58.57 52.5136 58.57 51.737V4.881C58.57 4.10435 58.2615 3.3595 57.7125 2.81024C57.1634 2.26097 56.4176 1.95226 55.641 1.952ZM52.713 7.81V17.572H25.38V7.81H31.375C32.203 11.203 36.888 14.96 37.47 15.413C37.6415 15.5466 37.8526 15.6192 38.07 15.6192C38.2874 15.6192 38.4985 15.5466 38.67 15.413C39.256 14.959 43.942 11.203 44.766 7.81H52.713ZM52.713 25.382H41.975C41.7161 25.382 41.4679 25.4848 41.2849 25.6679C41.1018 25.8509 40.999 26.0991 40.999 26.358V41H35.142V26.357C35.142 26.2287 35.1167 26.1017 35.0676 25.9833C35.0185 25.8648 34.9465 25.7572 34.8558 25.6665C34.765 25.5759 34.6573 25.504 34.5388 25.455C34.4203 25.406 34.2933 25.3809 34.165 25.381H24.404C24.1451 25.381 23.8969 25.4838 23.7139 25.6669C23.5308 25.8499 23.428 26.0981 23.428 26.357V40.999H17.57V26.357C17.57 26.0981 17.4672 25.8499 17.2841 25.6669C17.1011 25.4838 16.8529 25.381 16.594 25.381H5.856V19.523H16.594C16.8528 19.5227 17.1009 19.4198 17.2838 19.2368C17.4668 19.0539 17.5697 18.8058 17.57 18.547V7.81H23.428V18.548C23.4283 18.8068 23.5312 19.0549 23.7142 19.2378C23.8971 19.4208 24.1452 19.5237 24.404 19.524H52.713V25.382ZM52.713 27.334V41H42.95V27.333H52.712L52.713 27.334ZM33.189 40.999H25.379V27.333H33.189V40.999ZM5.856 27.333H15.618V40.999H5.856V27.333ZM5.856 17.571V7.81H15.618V17.572H5.856V17.571ZM38.07 1.952C39.3638 1.95438 40.6039 2.46939 41.5188 3.38424C42.4336 4.29909 42.9486 5.53921 42.951 6.833C42.951 8.658 40.168 11.616 38.071 13.385C35.972 11.616 33.189 8.658 33.189 6.833C33.1916 5.53938 33.7068 4.29952 34.6216 3.38488C35.5364 2.47025 36.7764 1.95438 38.07 1.952ZM56.617 51.737C56.617 51.9958 56.5142 52.2441 56.3311 52.4271C56.1481 52.6102 55.8998 52.713 55.641 52.713H2.928C2.66915 52.713 2.4209 52.6102 2.23786 52.4271C2.05483 52.2441 1.952 51.9958 1.952 51.737V4.881C1.952 4.341 2.389 3.905 2.928 3.905H31.905C31.611 4.52218 31.4121 5.1803 31.315 5.857H5.856C5.33838 5.85726 4.84203 6.063 4.47602 6.42902C4.11001 6.79503 3.90426 7.29138 3.904 7.809V41C3.904 41.5178 4.10962 42.0144 4.47567 42.3806C4.84171 42.7469 5.33821 42.9527 5.856 42.953H52.712C53.23 42.953 53.7267 42.7472 54.093 42.381C54.4592 42.0147 54.665 41.518 54.665 41V7.81C54.6647 7.2922 54.4589 6.79571 54.0926 6.42967C53.7264 6.06362 53.2298 5.858 52.712 5.858H44.825C44.7279 5.18129 44.529 4.52318 44.235 3.906H55.64C55.8988 3.906 56.1471 4.00883 56.3301 4.19186C56.5132 4.3749 56.616 4.62315 56.616 4.882V51.738L56.617 51.737Z" fill="black" data-v-0db52a40></path><path d="M12.69 21.476H16.594V23.428H12.69V21.476ZM8.785 21.476H10.737V23.428H8.785V21.476ZM19.523 14.643H21.475V18.547H19.523V14.643ZM19.523 10.738H21.475V12.69H19.523V10.738ZM19.523 26.357H21.475V30.262H19.523V26.357ZM19.523 32.214H21.475V36.119H19.523V32.214ZM24.404 21.476H28.308V23.428H24.404V21.476ZM30.26 21.476H34.165V23.428H30.261L30.26 21.476ZM36.118 21.476H40.023V23.428H36.118V21.476ZM41.975 21.476H45.879V23.428H41.975V21.476ZM37.094 26.357H39.046V30.262H37.094V26.357ZM37.094 32.214H39.046V36.119H37.094V32.214Z" fill="black" data-v-0db52a40></path><path d="M38.07 9.76199C38.8468 9.76199 39.5918 9.4534 40.1411 8.90411C40.6904 8.35481 40.999 7.60981 40.999 6.83299C40.999 6.05617 40.6904 5.31117 40.1411 4.76188C39.5918 4.21258 38.8468 3.90399 38.07 3.90399C37.2932 3.90399 36.5482 4.21258 35.9989 4.76188C35.4496 5.31117 35.141 6.05617 35.141 6.83299C35.141 7.60981 35.4496 8.35481 35.9989 8.90411C36.5482 9.4534 37.2932 9.76199 38.07 9.76199ZM38.07 5.85699C38.2007 5.85281 38.331 5.87494 38.453 5.92208C38.575 5.96922 38.6863 6.0404 38.7802 6.1314C38.8742 6.2224 38.9489 6.33135 38.9999 6.45179C39.0509 6.57223 39.0772 6.70169 39.0772 6.83249C39.0772 6.96329 39.0509 7.09276 38.9999 7.21319C38.9489 7.33363 38.8742 7.44259 38.7802 7.53358C38.6863 7.62458 38.575 7.69577 38.453 7.7429C38.331 7.79004 38.2007 7.81218 38.07 7.80799C37.8167 7.79988 37.5765 7.69355 37.4001 7.51149C37.2238 7.32944 37.1252 7.08593 37.1252 6.83249C37.1252 6.57905 37.2238 6.33555 37.4001 6.15349C37.5765 5.97143 37.8167 5.8651 38.07 5.85699Z" fill="#1253A2" data-v-0db52a40></path></svg></div><div class="item-content" data-v-0db52a40><h3 class="content-heading" data-v-0db52a40>Сокращение затрат до 50%</h3><p class="content-text" data-v-0db52a40> Максимально быстро узнаете о штрафах в автоматическом режиме, тем самым у вас есть время оплатить по скидке </p></div></div><div class="advantages__item" data-v-0db52a40><div class="item-logo" data-v-0db52a40><svg width="53" height="66" viewBox="0 0 53 66" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-0db52a40><path fill-rule="evenodd" clip-rule="evenodd" d="M26.56 0C26.7077 0.0874807 33.2061 2.04537 39.5672 3.95524L40.3612 4.19359C45.5111 5.7394 50.3919 7.20074 51.5236 7.54861C51.8368 7.6449 52.0639 7.75722 52.2215 7.9355C52.4606 8.20576 52.4184 8.34665 52.57 8.66349V35.0065C52.2937 35.7745 52.8968 43.7289 47.8248 51.2917C47.1587 52.2849 46.6896 52.9332 45.9344 53.7916L44.6876 55.1474C43.5809 56.2817 42.346 57.3491 40.9248 58.375C38.1657 60.3665 35.0302 61.9374 31.7714 63.2053C30.9004 63.5442 30.0824 63.8389 29.1892 64.1457C28.5598 64.362 27.0363 64.7656 26.5842 65.0351H26.0136C25.6393 64.8122 23.9383 64.3385 23.379 64.1474C22.487 63.8425 21.6662 63.5427 20.7948 63.2089C16.1159 61.4168 11.319 58.7158 7.85778 55.1177L6.18985 53.2632C3.34942 49.8029 1.61039 45.7457 0.693753 41.2532C0.49447 40.2765 0.336105 39.2129 0.232478 38.1949C0.18115 37.6911 0.0654642 35.1469 0 34.9589V8.66202C0.153103 8.34376 0.107669 8.2089 0.349948 7.93711C0.511881 7.75544 0.748672 7.64616 1.04946 7.55405C1.60935 7.38257 2.16445 7.21883 2.71463 7.04843C8.21579 5.34523 13.8509 3.69458 19.3691 2.02774C19.5627 1.96921 20.9975 1.54464 22.4846 1.09836L23.0424 0.930662C24.5241 0.484335 25.9095 0.0593392 26.0098 0H26.56ZM26.284 2.64288C26.0298 2.64097 23.723 3.38932 23.2997 3.52023C17.436 5.33396 11.4197 7.04127 5.55851 8.8641C5.03561 9.02676 2.86769 9.64215 2.57489 9.78255C2.51474 12.9304 2.57259 16.1391 2.57259 19.2937V28.8323C2.57259 35.1708 2.40257 40.25 4.73135 45.7254C5.7291 48.0711 6.94518 50.0589 8.30132 51.6941C8.97694 52.5088 9.84891 53.4781 10.6186 54.1464L11.2469 54.711C14.353 57.5125 18.6343 59.6669 22.6656 61.1756C23.1502 61.3569 25.956 62.3853 26.2842 62.3823C26.6461 62.379 29.3555 61.3698 29.8592 61.1851C37.3464 58.4396 44.6435 53.5613 47.8686 45.809C50.2104 40.1799 49.9938 35.3641 49.9984 28.8864C50.0007 25.7069 49.9996 22.5274 50.0018 19.3479C50.004 16.1687 50.053 12.9495 50.0027 9.77518L47.0541 8.87551C46.0731 8.58247 45.0871 8.29006 44.0979 7.98306C42.1227 7.37008 40.1618 6.8148 38.1841 6.20272C37.6514 6.03783 26.5444 2.64487 26.284 2.64288Z" fill="#1253A2" data-v-0db52a40></path><path fill-rule="evenodd" clip-rule="evenodd" d="M45.2715 13.8742L45.272 32.084C45.272 34.1038 45.2809 35.9989 45.0312 37.9826C43.69 48.6352 35.7054 53.5898 27.1746 56.6571C26.6647 56.8404 26.5274 56.9272 25.9587 56.9489C24.5302 57.0032 24.2982 58.9355 25.56 59.4184C26.4782 59.7698 27.1535 59.3787 27.9801 59.0884C35.1308 56.5777 40.5465 53.4644 44.1951 47.8267C45.7492 45.4254 46.924 42.3279 47.4587 38.9543C48.0466 35.2449 47.8391 30.9808 47.8391 27.1522C47.8391 23.0875 47.8391 19.0228 47.8391 14.9581C47.8391 12.9836 48.1721 12.0086 46.7023 11.5585L31.5074 6.97073C29.9666 6.51081 28.3897 6.05487 26.8448 5.56609C25.8601 5.25453 25.0884 5.7674 25.0129 6.60972C24.9117 7.73758 25.9166 7.96112 26.5806 8.15807C29.7139 9.08758 32.846 10.0367 35.9531 10.9792L44.993 13.6985C45.2007 13.7615 45.1861 13.7207 45.2715 13.8742Z" fill="black" data-v-0db52a40></path><path fill-rule="evenodd" clip-rule="evenodd" d="M6.25385 12.1314C5.21936 12.4441 5.3262 13.3342 5.3262 14.4703V30.7291C5.3262 32.8393 5.27421 34.9848 5.46304 37.0708C5.977 42.7476 7.83721 46.9032 11.378 50.6769C12.0319 51.3738 13.2125 52.3608 13.9825 52.9504C14.3278 53.2149 14.6708 53.4233 15.2236 53.2718C16.0679 53.0407 16.4668 52.0118 15.8758 51.2184L14.5489 50.1081C13.4401 49.2172 11.9677 47.5977 11.0992 46.24C7.63481 40.8239 7.88591 36.1219 7.88591 29.9161L7.88643 13.6562C7.88765 13.1007 7.82851 12.7476 7.51 12.4341C7.22411 12.1526 6.76587 11.9767 6.25385 12.1314Z" fill="black" data-v-0db52a40></path><path fill-rule="evenodd" clip-rule="evenodd" d="M22.3829 39.3209C20.5475 37.5772 18.1483 35.0973 16.2982 33.2368C15.7615 32.6971 14.7901 32.4587 14.235 33.2039C13.5373 34.1405 14.2304 34.8279 14.6867 35.2819L20.7838 41.3788C21.1553 41.7484 21.7754 42.6404 22.7176 42.3877C23.2619 42.2418 24.0397 41.3224 24.3895 40.9735L36.6168 28.7583C37.1357 28.2394 37.6138 27.7589 38.135 27.2418C39.3718 26.0145 38.1752 24.6043 37.0224 24.9346C36.4251 25.1058 35.0564 26.6489 34.5925 27.1136C32.5482 29.1608 30.5398 31.164 28.4955 33.2106C26.4554 35.253 24.4443 37.3241 22.3829 39.3209Z" fill="#1253A2" data-v-0db52a40></path></svg></div><div class="item-content" data-v-0db52a40><h3 class="content-heading" data-v-0db52a40>Безопасность</h3><p class="content-text" data-v-0db52a40> Данные передаются в зашифрованном виде, они доступны только получателю </p></div></div><div class="advantages__item" data-v-0db52a40><div class="item-logo" data-v-0db52a40><svg width="59" height="59" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-0db52a40><path fill-rule="evenodd" clip-rule="evenodd" d="M8.81947 8.18431C12.3404 6.87009 15.5974 9.41993 15.6971 12.7027C17.5453 12.5614 18.7277 12.3819 20.5928 12.721C22.7517 13.1134 25.1622 14.2357 26.7587 15.6366C26.9215 15.7794 26.9669 15.8074 27.1101 15.9261C29.972 18.3005 32.0456 22.1245 33.8733 25.2802C35.4818 28.0572 37.5556 32.6959 40.1598 34.4754C41.8882 35.6563 42.6055 35.4907 43.7459 36.0695C48.0249 38.241 47.9478 43.5595 43.7142 45.1253C42.4587 45.5897 41.2125 46.0414 39.9628 46.492C37.7183 47.3014 34.5614 48.5399 32.4237 49.226C32.7041 51.7391 32.5114 53.1044 31.357 54.9642C28.9065 58.9124 23.2817 59.867 19.4728 56.44C19.204 56.1983 18.9015 55.845 18.6614 55.5243L17.965 54.5111C17.4304 54.6465 16.7354 54.9474 16.188 55.1477L7.32212 58.3714C5.96197 58.8777 4.92057 59.2189 3.37577 58.7212C0.621468 57.8338 -0.238831 55.0365 0.493482 52.4406C0.669261 51.8174 0.955572 51.297 1.2662 50.773L1.45481 50.4574C2.18371 49.2391 2.95006 47.8894 2.70495 45.1138C2.47194 42.4751 1.74454 39.5461 1.1027 36.5371L0.956361 35.8414C-0.342232 29.569 -1.07934 23.0212 3.94081 18.0816C5.25208 16.7913 5.9294 16.587 6.63965 15.9861C6.51824 15.7048 6.25337 15.3711 6.07679 15.0151C5.90584 14.6703 5.78894 14.3191 5.70675 13.9177C5.20637 11.4743 6.58866 9.01694 8.81947 8.18431ZM10.3036 10.5946C8.45273 10.9056 7.92237 12.937 8.61721 14.0132C9.01702 14.6325 9.6173 14.7907 9.82596 15.6841C10.0463 16.6278 9.54166 17.3618 9.02649 17.7295C7.84206 18.5746 6.96159 18.8517 5.74899 20.1465C4.74295 21.2208 4.05627 22.0889 3.48108 23.635C1.29744 29.5043 4.38543 37.2645 5.21545 43.1953C5.78375 47.2563 5.37924 49.4623 3.48395 52.3588C2.81593 53.3796 2.48101 55.7462 4.38506 56.1758C5.20682 56.3613 6.00798 55.958 6.69692 55.6993C12.9348 53.3574 19.313 51.1618 25.5993 48.823C31.1912 46.7426 36.7853 44.757 42.3869 42.711C43.2207 42.4066 43.6529 42.2013 44.0116 41.5189C44.4848 40.6189 44.0916 39.9543 43.6277 39.3868C42.6594 38.2024 41.3205 38.2564 39.8115 37.4439C37.0329 35.9477 35.9245 34.2193 34.2667 31.5399C32.001 27.878 29.1564 21.4872 25.865 18.5119C25.7149 18.3762 25.6818 18.3262 25.5144 18.1612C25.3744 18.0231 25.2387 17.9396 25.0926 17.8135C20.1622 13.5567 15.5778 16.1522 13.9439 15.3387C12.0475 14.3945 13.6655 12.7051 12.3768 11.2752C11.9905 10.8465 11.1588 10.4509 10.3036 10.5946ZM29.8214 50.2028L20.6029 53.5385C21.5468 55.3097 24.3203 56.3894 26.5872 55.507C28.5359 54.7485 30.0145 52.967 29.8214 50.2028Z" fill="black" data-v-0db52a40></path><path fill-rule="evenodd" clip-rule="evenodd" d="M34.9807 0.029123C34.3665 0.0611597 33.8408 0.102125 33.4859 0.418521C33.1888 0.683476 32.9272 1.28194 33.1197 1.85348C33.5268 3.06205 34.7727 2.72095 36.0676 2.73425C42.4792 2.7999 47.8492 5.74815 51.4859 10.2268C56.0143 15.8036 57.2342 23.9574 54.1134 30.8351C53.9027 31.2992 53.5861 31.7156 53.7343 32.3479C53.8436 32.8145 54.1993 33.2046 54.665 33.3352C55.9366 33.6917 56.3386 32.5578 56.7038 31.6962C59.6971 24.6346 59.0661 16.7257 54.9803 10.444C54.4397 9.61281 53.9549 8.95907 53.3969 8.25069L51.5549 6.2569C47.273 2.28827 41.4067 -0.306463 34.9807 0.029123Z" fill="#1253A2" data-v-0db52a40></path><path fill-rule="evenodd" clip-rule="evenodd" d="M35.1801 7.13293C34.7477 7.15681 34.4347 7.15809 34.1242 7.39184C33.1119 8.154 33.5557 9.62084 34.6085 9.83502C35.5941 10.0356 36.7555 9.57444 39.4199 10.3329C44.8018 11.8649 48.569 16.7077 48.7371 22.2538C48.7861 23.8678 48.5298 25.4801 48.0451 26.8761C47.8827 27.3437 47.358 28.4022 47.3237 28.7814C47.2528 29.5658 47.8273 30.21 48.5387 30.2682C49.446 30.3424 49.7724 29.7642 50.064 29.1509C52.3031 24.4432 51.7378 18.5775 49.067 14.3728C46.147 9.77572 40.9152 6.81638 35.1801 7.13293Z" fill="#1253A2" data-v-0db52a40></path><path fill-rule="evenodd" clip-rule="evenodd" d="M34.9995 14.3117C34.3121 14.5289 33.7657 15.2858 34.1585 16.1682C34.5593 17.0686 35.3253 16.8765 36.3729 16.9644C40.3603 17.2989 42.6219 21.4246 41.2323 24.7968C41.0561 25.2242 40.8539 25.4783 40.9349 26.0202C41.0438 26.7493 41.8216 27.3549 42.6926 27.0902C44.2638 26.6129 45.2786 21.6514 43.0449 18.1574C42.3298 17.0389 41.2336 15.907 39.942 15.2475C38.8871 14.7089 36.435 13.858 34.9995 14.3117Z" fill="#1253A2" data-v-0db52a40></path></svg></div><div class="item-content" data-v-0db52a40><h3 class="content-heading" data-v-0db52a40>Уведомление о погашении</h3><p class="content-text" data-v-0db52a40> Мы оповестим вас о том, что штраф был погашен и соответствующая запись создана в ГИС ГМП </p></div></div><div class="advantages__item" data-v-0db52a40><div class="item-logo" data-v-0db52a40><svg width="53" height="61" viewBox="0 0 53 61" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-0db52a40><path fill-rule="evenodd" clip-rule="evenodd" d="M52.57 0L52.5652 60.0795H48.7789L48.7154 60.0124L48.6835 59.9808C48.6741 59.9719 48.6611 59.9598 48.6512 59.951L42.2149 55.1213C41.9613 54.9319 41.5697 54.6004 41.3045 54.4652C41.0248 54.6167 40.6382 54.9423 40.3627 55.1486C39.359 55.9005 34.5371 59.4348 33.9268 59.982C33.8654 60.0371 33.8741 60.028 33.8288 60.0795H33.7593L33.6955 60.0126C33.6869 60.0041 33.6731 59.9901 33.6635 59.981L27.1957 55.1208C26.9456 54.9337 26.5453 54.5979 26.2846 54.4657C25.9644 54.6405 25.6846 54.9073 25.3454 55.1502L22.5156 57.2498C22.1717 57.5039 18.9919 59.8354 18.7622 60.0795H18.7111L11.2647 54.4657L4.22129 59.7249C4.12186 59.7993 4.08167 59.8239 3.98658 59.8991L3.78929 60.0795H0.00388698L0 0H52.57ZM3.75451 3.7469V4.04833L3.7735 56.2998L10.3233 51.3938C10.6018 51.1855 10.9825 50.8645 11.2647 50.7097L18.7746 56.2992C19.0682 56.1298 19.4228 55.8342 19.7108 55.6181L26.2846 50.7107L28.1672 52.0958C28.7939 52.5645 29.4197 53.0327 30.0444 53.5039L33.7945 56.299C34.7966 55.7094 40.5944 51.0957 41.3045 50.7113L48.7889 56.299C48.8467 55.9053 48.8147 55.3291 48.8148 54.9164L48.8144 3.74759L3.75451 3.7469Z" fill="#1253A2" data-v-0db52a40></path><path fill-rule="evenodd" clip-rule="evenodd" d="M11.2647 11.9103L11.268 15.0158L41.3003 15.016L41.3045 11.2606L11.2649 11.2611L11.2647 11.9103Z" fill="black" data-v-0db52a40></path><path fill-rule="evenodd" clip-rule="evenodd" d="M11.2644 37.7257L11.2672 41.3015L26.2804 41.3007L26.2843 37.546L11.2649 37.5459L11.2644 37.7257Z" fill="#1253A2" data-v-0db52a40></path><path fill-rule="evenodd" clip-rule="evenodd" d="M11.2643 22.7059L11.265 26.2807L26.2811 26.2809L26.2849 22.5262L11.2642 22.526L11.2643 22.7059Z" fill="#1253A2" data-v-0db52a40></path><path fill-rule="evenodd" clip-rule="evenodd" d="M11.2647 30.6851L11.268 33.7906L26.2804 33.7908L26.2844 30.0356L11.2649 30.0359L11.2647 30.6851Z" fill="#1253A2" data-v-0db52a40></path><path fill-rule="evenodd" clip-rule="evenodd" d="M33.7944 30.4505L33.797 33.7913L41.3003 33.7908L41.3045 30.0354L33.7947 30.036L33.7944 30.4505Z" fill="black" data-v-0db52a40></path><path fill-rule="evenodd" clip-rule="evenodd" d="M33.7941 37.7257L33.7948 41.3005L41.3003 41.3007L41.3044 37.5463L33.7941 37.5459L33.7941 37.7257Z" fill="black" data-v-0db52a40></path><path fill-rule="evenodd" clip-rule="evenodd" d="M33.7946 23.4099L33.7975 26.2807L41.3003 26.2808L41.3043 22.5262L33.7948 22.526L33.7946 23.4099Z" fill="black" data-v-0db52a40></path></svg></div><div class="item-content" data-v-0db52a40><h3 class="content-heading" data-v-0db52a40>Квитанция об оплате</h3><p class="content-text" data-v-0db52a40> После совершения оплаты банковской картой на Вашу электронную почту придет квитанция об успешной оплате. </p></div></div><div class="advantages__item" data-v-0db52a40><div class="item-logo" data-v-0db52a40><svg width="59" height="53" viewBox="0 0 59 53" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-0db52a40><path fill-rule="evenodd" clip-rule="evenodd" d="M15.7492 5.60156C15.6992 5.7536 15.3851 5.92839 15.2308 6.0609C14.1033 7.03007 13.0313 8.02199 12.0892 9.16655C11.9657 9.31653 11.6954 9.67185 11.5723 9.7196L9.69073 12.4223C9.38272 13.1125 8.69396 13.9815 8.45238 14.7766C8.19457 14.9963 7.26105 17.5726 7.07875 18.1514C6.67107 19.4454 6.42909 20.6166 6.16631 22.0493L0.92988 21.285L0 21.1886V21.1923L1.07454 22.6855C1.41381 23.2019 2.67001 24.83 2.87777 25.2602C3.37862 25.8911 3.80027 26.585 4.30866 27.2572C4.57215 27.6057 4.76746 27.915 5.00836 28.251C5.22271 28.5499 5.56805 28.9743 5.7205 29.3013C5.88222 29.4135 6.11004 29.7763 6.23423 29.9533C6.40197 30.1923 6.55908 30.4115 6.71649 30.6428C6.97959 31.0295 7.55754 31.7291 7.67967 32.0873C7.79697 32.1354 8.33801 32.948 8.43685 33.0856L9.24107 34.1922C9.59618 33.8408 10.7104 32.0865 10.868 32.0222C10.9919 31.7249 12.6955 29.2904 12.9206 29.1834C12.9776 28.8957 13.3726 28.4553 13.5572 28.2044L15.6708 25.2592C15.8223 24.9409 16.9239 23.4931 17.2104 23.0733C17.339 22.8849 17.5855 22.4474 17.8017 22.3504C17.8395 22.1592 17.8164 22.2392 17.9422 22.0474L18.5303 21.2196L18.3632 21.19L17.5737 21.3168C17.3267 21.3799 16.9892 21.4282 16.7275 21.3946L14.4171 21.7887C13.6174 21.9029 12.8063 22.0567 12.005 22.1507C12.1131 21.4686 12.3065 20.7842 12.4919 20.178L13.1503 18.2915C13.2613 18.1895 13.7427 17.0818 13.8529 16.8506C14.3145 15.8823 15.8044 13.6418 16.5634 12.8585C16.9713 12.4374 17.2266 12.1079 17.6268 11.7088C18.2414 11.0961 20.8628 8.92799 21.487 8.82229C21.6287 8.57448 22.0721 8.41067 22.3312 8.27387C22.6378 8.11191 23.0006 7.89094 23.303 7.79932C24.3798 7.34904 25.2544 6.95336 26.5099 6.59969C27.2492 6.39147 29.5675 5.84522 30.3505 5.95252C30.4872 5.85482 30.566 5.8808 30.7818 5.8612C31.2393 5.85973 34.6149 5.7658 35.0734 6.07696C35.6298 5.9788 38.6028 6.73354 38.9819 6.98257C39.557 7.11793 39.9992 7.34782 40.5266 7.56672C40.7147 7.64473 40.8626 7.69132 41.0018 7.83975C41.2808 7.85903 42.9087 8.75995 43.0167 8.92606C43.4203 9.07316 43.7329 9.34042 44.0544 9.57255C44.82 10.1254 45.3053 10.584 45.8745 11.0077C46.0912 11.1689 46.0802 11.208 46.2653 11.3959C46.4184 11.5514 46.5426 11.6546 46.6986 11.8107L48.2495 13.5133C48.5609 13.8958 49.4108 14.9971 49.596 15.4925C49.8721 15.6772 50.4857 17.0275 50.7248 17.4729C51.0564 18.2636 51.3829 18.9062 51.6533 19.7473C51.9319 20.6138 52.1678 21.4485 52.3424 22.3646C52.7651 24.5829 52.7347 26.1888 52.6338 28.4639C52.511 29.0448 52.4596 29.7066 52.3526 30.3056C52.2476 30.8935 52.0965 31.4759 51.9384 32.0285C51.7911 32.5431 51.0024 34.9117 50.7674 35.0815C50.6597 35.4561 49.9577 36.8296 49.7322 37.0364C48.8023 38.8163 46.6777 41.0973 45.0155 42.4163C44.6957 42.6702 43.3832 43.7067 43.0198 43.7756C42.9054 43.946 42.7994 43.9809 42.5934 44.097C42.4482 44.1787 42.289 44.2812 42.1012 44.3828C41.7577 44.5688 41.3689 44.7919 40.9993 44.9088C40.8329 45.082 39.4788 45.5712 39.1373 45.7188C38.8085 45.7738 38.3021 45.9797 37.9461 46.0851C37.5191 46.2116 37.1221 46.3142 36.6567 46.4215C35.8028 46.6185 34.7286 46.7702 33.79 46.8324L33.5855 46.8607C32.982 46.8617 32.4127 46.9105 31.8223 46.8956C31.2562 46.8813 30.6869 46.815 30.131 46.7952C29.8774 46.7703 29.4703 46.7659 29.3095 46.6386C28.5892 46.7356 25.991 45.9718 25.3191 45.7029C25.1208 45.649 25.0171 45.6053 24.8219 45.5339C24.6104 45.4565 24.5035 45.4351 24.3368 45.2725C23.9248 45.2748 21.8033 44.1483 21.491 43.867C21.088 43.7412 19.8582 42.796 19.4595 42.4983C19.0588 42.1989 17.7256 41.0018 17.5063 40.9384C17.4841 41.1262 17.2408 41.2867 17.0916 41.4349C16.9122 41.6132 16.7821 41.7441 16.6032 41.9227L14.1306 44.3959C13.9758 44.5509 13.7969 44.8198 13.6015 44.8431C13.6583 45.1015 13.5853 44.9643 13.7906 45.1783L15.6142 46.8669L17.8878 48.4972C18.1702 48.6845 18.4277 48.8075 18.6635 49.0081C18.8928 49.08 19.3591 49.3835 19.6026 49.5132C19.936 49.6909 20.3356 49.8473 20.5547 50.0753L23.3701 51.2152C29.8009 53.5836 37.0824 53.1492 43.2682 50.3033C43.7406 50.0859 44.1277 49.8727 44.5743 49.6565C44.8728 49.5119 45.6549 48.9905 45.8635 48.9626L46.0152 48.8194C46.2496 48.6284 47.7497 47.6777 48.4262 47.1287C48.5595 47.0206 48.6568 46.9074 48.805 46.8461C50.4219 45.4355 51.2467 44.6694 52.55 43.1155L52.7774 42.8902L54.8016 39.9753C54.9987 39.3947 56.4982 37.2114 57.3604 34.2629C57.9062 32.3963 58.2186 31.0741 58.4179 29.1446C58.4568 28.7688 58.5031 27.4422 58.57 27.2348V25.1861C58.496 24.9951 58.3173 22.6583 58.2353 22.1522C58.0699 21.1328 57.8816 20.2841 57.6276 19.3647C56.6903 15.9725 54.6519 11.8158 52.3567 9.34058L51.5677 8.43844C51.2056 7.99493 49.9212 6.82999 49.8415 6.73405L49.7434 6.66211L48.9074 5.95781C47.2319 4.56281 44.6492 2.91464 42.6489 2.13216C39.7229 0.987602 36.8255 0.0860577 33.2552 0.00913032C29.5267 -0.0712136 26.4707 0.374379 23.2452 1.51709C20.5887 2.45831 18.8319 3.46959 16.637 4.99119C16.3606 5.18281 16.0651 5.44014 15.7492 5.60156Z" fill="#1253A2" data-v-0db52a40></path><path fill-rule="evenodd" clip-rule="evenodd" d="M40.9606 18.1082L40.0256 18.5137C39.4381 18.772 38.7178 19.0125 38.1438 19.3118L33.2544 21.3589C32.7681 21.4913 31.5513 22.1034 31.2531 22.1108C31.2053 22.1537 31.2064 22.1579 31.1248 22.2069C30.6447 22.4948 29.6077 22.6921 29.139 23.2871C28.6514 23.9061 28.4091 24.7036 28.0997 25.5625C27.8058 26.3782 27.5045 27.1784 27.2321 27.9524C26.9599 28.7262 26.5427 29.6787 26.3541 30.4604C26.1966 30.6262 25.9404 31.5761 25.8931 31.892C25.7925 32.7294 26.1249 33.5547 26.553 33.975C27.1545 34.5659 27.3308 34.7237 28.3117 35.0544L28.6994 35.1215C29.5233 35.1888 30.1088 34.9808 30.6124 34.587C30.8313 34.4158 31.0056 34.1857 31.1729 33.909C31.3183 33.6683 31.4684 33.2101 31.575 33.0634C31.6472 32.7319 31.8053 32.3982 31.9039 32.1016C31.955 31.948 32.0181 31.7769 32.0742 31.6273C32.0976 31.565 32.1442 31.4269 32.1614 31.3894L32.3005 31.1737C32.2988 30.8291 33.2878 28.3914 33.4786 27.8243C33.6964 27.1769 33.6284 27.3523 34.8088 26.8698L39.6907 24.9202C40.7536 24.4901 41.9042 23.9843 42.9513 23.621C43.3015 23.5066 43.6382 23.3471 44.0134 23.1957C44.221 23.1119 44.3675 23.05 44.5443 22.9425C44.7397 22.8237 44.7997 22.7352 44.9675 22.6455C45.0947 22.4595 44.9878 22.5585 45.1928 22.4536C45.2235 22.323 45.1698 22.4626 45.2444 22.3343C45.2608 22.3061 45.3016 22.2543 45.3221 22.2267C46.1644 21.0924 45.9173 19.4594 45.0084 18.4481C44.866 18.2898 44.7326 18.1852 44.6181 18.0469C44.3414 17.9139 44.2377 17.7904 43.9048 17.6674C43.5677 17.5429 43.3889 17.5252 43.0165 17.5102C42.1146 17.5139 41.7032 17.898 40.9606 18.1082Z" fill="black" data-v-0db52a40></path></svg></div><div class="item-content" data-v-0db52a40><h3 class="content-heading" data-v-0db52a40> Все история сохраняется по каждой машине </h3><p class="content-text" data-v-0db52a40> Вся история штрафов сохраняется по машине и водителю, позволяет анализировать статистику по штрафам </p></div></div></section>',2),V2=[g2];function w2(t,a){return n(),l("div",b2,V2)}const H2=c(L2,[["render",w2],["__scopeId","data-v-0db52a40"]]),M2={data(){return{documents:[{heading:"Лицензионный договор",text:"Механизм разбрасывания веерного типа приводится в действие от колес тележки, отличается простой и надежной конструкцией, не нуждается в смазке. ",link:"document"},{heading:"Политика обработки персональных данных",text:"Радиус разброса ПГМ составляет до 3 метров и может регулироваться.",link:"document"},{heading:"Информация об оплате",text:"Десятипозиционный переключатель дозировки расположен на ручке тележки и позволяет очень точно регулировать объем рассыпаемого реагента с учетом его массы и фракции.",link:"document"},{heading:"Блок 4",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a bibendum lectus, quis tincidunt tortor. Integer elementum nibh tellus, ut",link:"document"},{heading:"Блок 5",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a bibendum lectus, quis tincidunt tortor. Integer elementum nibh tellus, ut",link:"document"},{heading:"Блок 6",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a bibendum lectus, quis tincidunt tortor. Integer elementum nibh tellus, ut",link:"document"}]}}},Z2=t=>(h("data-v-2a871ef2"),t=t(),f(),t),x2={class:"container"},k2=Z2(()=>e("h2",{class:"container__heading"},"Документы",-1)),$2={class:"container__documents documents"},S2={class:"item-content"},A2={class:"item-content__heading"},I2={class:"item-content__text"};function y2(t,a,r,v,i,d){const s=P,m=B,o=N;return n(),l("div",x2,[k2,e("div",$2,[p(o,{modules:["SwiperController"in t?t.SwiperController:_(S),"SwiperNavigation"in t?t.SwiperNavigation:_(A),"SwiperPagination"in t?t.SwiperPagination:_(I),"SwiperMousewheel"in t?t.SwiperMousewheel:_(y)],"slides-per-view":3,loop:!0,freeMode:"true",navigation:"",pagination:""},{default:g(()=>[(n(!0),l(k,null,$(i.documents,u=>(n(),H(m,{key:u,class:"documents__item"},{default:g(()=>[e("div",S2,[e("h3",A2,Z(u.heading),1),e("p",I2,Z(u.text),1)]),p(s,{to:{name:u.link},class:"button"},{default:g(()=>[w("Перейти")]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1},8,["modules"])])])}const B2=c(M2,[["render",y2],["__scopeId","data-v-2a871ef2"]]),N2={};function P2(t,a){const r=m2,v=H2,i=B2;return n(),l("div",null,[p(r),p(v),p(i)])}const D2=c(N2,[["render",P2]]);export{D2 as default};

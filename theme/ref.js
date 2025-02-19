gebi=function(id) { return document.getElementById(id);};
log=console.log.bind(window.console);
close=function(id){var z=gebi(id); z.className=z.className.replace('show', 'hide');},
open=function(id) {var z=gebi(id); z.className=z.className.replace('hide', 'show');},

ref={
  setls:function(nama,arr) {return window.localStorage.setItem(nama, JSON.stringify(arr));},
  getls:function(nama) {return window.localStorage.getItem(nama);},
  remls:function(nama) {return window.localStorage.removeItem(nama);},
  getURL:function(arr){var url=new URL(window.location.href); return url.searchParams.get(arr);},
  setURL:function(arr){ window.open('?m='+arr,'_self');},

  getRef:function(id) {
res=ref.getls('ref');
if(res){ afi=JSON.parse(res);
res=`https://sismadi.co.id/pid=${id}&ref=${afi.kode}`;
}
else { res=`anda belum punya kode ref`;}

ref.modal(res)
  },
  getAfi:function() {
res=ref.getls('ref');

if(res){ afi=JSON.parse(res);
  res=`https://afiliasi.piawai.id/web/?ref=${afi.kode}`;
}
else { res=`anda belum punya kode ref`;}

ref.modal(res)
  },

  modal:function(id) {

    log(id)
  gebi('modal').innerHTML=ref.modalview(id);

  log(ref.modalview(id))

  open('modal')
  tutup=function(){ref.modal(''); close('modal');}
  },

  modalview:function(arr){
  out=`<div class="modal">
  <button class="right" onclick="tutup()">X</button>
  <div class="row">${arr}</div></div>`;
  return out;
  },





model:{
  header:{ id:'header',css:'col-1-3',data:[
    {id:1,nama:'CLIENTS',isi:10,icon:'eye'},
],
  },

hero:{ id:'hero',css:'col-1-1',data:[
  {id:1,nama:'Web Design',gambar:'img/design.svg',isi:'1'},
  {id:1,nama:'Web Design',gambar:'img/program.svg',isi:'1'},
  {id:1,nama:'Web Design',gambar:'img/mobile.svg',isi:'1'},
  ],
},

about:{ id:'about', css:'col-1-2', isi:`
I’m a Full-Stack Developer and Lecturer based in Jakarta.
My passion for technology started in my early academic years,
and I’ve since built a career combining innovation, mentorship,
and practical solutions for real-world challenges
  `,
  data:[
{id:1,nama:'Academic Excellence',icon:'facebook',isi:'Graduated with honors in Informatics (S.Kom, M.Kom), laying a strong foundation for technical and academic pursuits'},
{id:1,nama:'Published Author',icon:'twitter',isi:'Wrote an in-depth guide on DonatJS Framework, equipping developers with tools to streamline web development.'},
{id:1,nama:'Template Developer',icon:'whatsapp',isi:'Designed and launched 4 premium web templates, catering to e-commerce, portfolios, and business websites.'},
{id:1,nama:'Teaching Impact',icon:'whatsapp',isi:'Guided over 500 Informatics students with a hands-on approach, bridging theory and practical application'},
],
},

stats:{ id:'stats', css:'col-1-3',data:[
{id:1,nama:'CLIENTS',isi:10,icon:'eye'},
{id:1,nama:'PROJECTS',isi:10,icon:'camera'},
{id:1,nama:'POSITIVE FEEDBACKS',isi:10,icon:'geo'},
{id:1,nama:'WEBSITE LAUNCH',isi:10,icon:'pen'},
],
},

services:{ id:'services', css:'col-1-3', data:[
{id:1,nama:'BASIC',icon:'facebook'},
{id:1,nama:'PRO',icon:'twitter'},
{id:1,nama:'PERFORMANCE',icon:'whatsapp'},
{id:1,nama:'BASIC',icon:'facebook'},
{id:1,nama:'PRO',icon:'twitter'},
{id:1,nama:'PERFORMANCE',icon:'whatsapp'},],
},

features:{ id:'features', css:'col-1-3',data:[
{id:1,img:1,nama:'BASIC',gambar:'manandroid',icon:'camera'},
{id:1,img:0,nama:'PRO',gambar:'womandesign',icon:'whatsapp'},
{id:1,img:1,nama:'PERFORMANCE',gambar:'mansamping',icon:'facebook'},],
},


posts:{ id:'post',
  css:'col-1-2 center',
  isi:`From tutorials to industry trends, my blog is where I share lessons learned, best practices, and fresh ideas in web development and education`,
data:[
  {id:1,nama:'Web Development',gambar:'womankode',isi:'<div class="col-1-2"><a href="bear/" class="button">Detail</a></div><div class="col-1-2"><a href="#" class="button">Ambil</a></div>'},
  {id:2,nama:'DonatJS Framework',gambar:'womandesign',isi:'<div class="col-1-2"><a href="giraffe/" class="button">Detail</a></div><div class="col-1-2"><a href="#" class="button">Ambil</a></div>'},
  {id:3,nama:'Education & Mentorship',gambar:'manandroid',isi:'<div class="col-1-2"><a href="kera/" class="button">Detail</a></div><div class="col-1-2"><a href="#" class="button">Ambil</a></div>'},
  {id:4,nama:'Career in Tech',gambar:'mansamping',isi:'<div class="col-1-2"><a href="kera/" class="button">Detail</a></div><div class="col-1-2"><a href="#" class="button">Ambil</a></div>'},

]
},

portofolio:{ id:'portofolio', css:'col-1-3', data:[
  {id:1,nama:'1',gambar:'manandroid'},
  {id:2,nama:'2',gambar:'mansamping'},
  {id:4,nama:'4',gambar:'womankode'},
  {id:3,nama:'3',gambar:'iwomandesign'},
],
},

pricing:{ id:'pricing', css:'col-1-3', data:[
  {id:1,nama:'BASIC',harga:'1000'},
{id:1,nama:'PRO',harga:'2000'},
{id:1,nama:'PERFORMANCE',harga:'3000'},],
},

clients:{ id:'clients', css:'col-1-3', data:[
{id:1,nama:'BASIC',icon:'facebook',isi:'facebook'},
{id:1,nama:'PRO',icon:'twitter',isi:'twitter'},
{id:1,nama:'PERFORMANCE',icon:'whatsapp',isi:'whatsapp'},
],
},


contact:{ id:'contact', css:'col-1-3', data:[
{id:1,nama:'facebook',icon:'facebook'},
{id:1,nama:'twitter',icon:'twitter'},
{id:1,nama:'instagram',icon:'instagram'},],
},


footer:{ id:'post', css:'col-1-3', data:[
{id:1,nama:'facebook',icon:'facebook'},
{id:1,nama:'twitter',icon:'twitter'},
{id:1,nama:'instagram',icon:'instagram'},],
},


},

view:{

dashboard:function(arr){
  // <section id="hero2"></section>
out=`



<header class="header sticky">
<div class="container">
<input class="menu-btn" type="checkbox" id="menu-btn">
<label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
<ul class="menu-item">
  <li><a href="index.html" class="active">Home</a></li>
  <li><a href="#about">About</a></li>
  <li><a href="#portofolio">Portofolio</a></li>
  <li><a href="#posts">Blog</a></li>
<li><a href="#contact">Contact</a></li>

</ul>
</div>
</header>


<section id="about"></section>
<section id="stats"></section>
<section id="features"></section>
<section id="posts"></section>
<section id="contact"></section>

<section id="portofolio"></section>
<section id="services"></section>

<section id="clients"></section>

<footer id="footer" class="footer"></footer>

`;

// <section id="pricing"></section>

// <section id="faq"></section>
// <section id="team"></section>
// <section id="call"></section>
// <section id="testimonial"></section>
// <section id="contact"></section>


return out;

},

header:function(arr){},

pricing:function(arr){
var {css,data}=web.model.pricing;
out=`<div class="row center">
<b>Pricing</b>
<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. <br> pharetra augue. Donec id elit non mi.</p>
`;
for(i in data){ val=data[i]
out+=`
<div class="col-1-3">
<div class="card">
<div class="row">
<p><b>${val.nama}</b></p>
<span class="">500<small class="align-top">GB</small></span>
<p class="">For Business</p>
</div>

<div class="title">
<ul class="">
<li>1 Domain Free</li>
<li>Unlimited Traffic</li>
<li>Full Platform Applications</li>
<li>SSL Certificate</li>
<li>Premium support</li>
</ul>
<span>Rp.${val.harga}</span>
<p>/month</p>
<a href="#" class="button">Buy Now</a>
</div>
</div>
</div>
`;
}

out+=`</div>`
return out;
},

posts:function(arr){
var {isi,css,data}=web.model.posts;

// <a href="#"><img src="${val.gambar}" alt="${val.nama}"></a>

out=`<div class="row"><div class="center"><b>Blog</b><p>${isi}</p></div>`;
for(i in data){ val=data[i]
out+=`
<div class="${css}">
<div class="card">
<div class="blog-img">${img.controller.simg(val.gambar)}
</div>

<div class="blog-text">
<div class="blog-tag">
<a href="#" aria-label="Read more about Seminole's new baby mayor"><span><small></small></span></a>
</div>
<div class="blog-title">
<a href="#" ><span>${val.nama}</span></a>
</div>

<div class="blog-meta">
<p class="col-1-2">30 May 2016 /</p>
<p class="col-1-2"><a href="">23 Comments</a></p>
</div>
<div class="blog-desc">
<p>${val.isi}</p>
</div>
<div class="col-1-2"><p>by W Sismadi</p></div>
<div class="col-1-2"><p>
<a href="#" aria-label="facebook"><span> ${svg.icon('facebook')}</span></a>
<a href="#" aria-label="twitter"><span> ${svg.icon('twitter')}</span></a>
</p>
</div>

</div>
</div>
</div>
`;
}
out+=`</div>`;
return out;
},

stats:function(arr){
var {css,data}=web.model.stats;

out=`<div class="bg"> </div><div class="row">`;
for(i in data){ val=data[i]
out+=`
<div class="col-1-4 center">
${svg.icon(val.icon)}
<span class="number">${val.isi}</span>
<b>${val.nama}</b>
</div>
`;
}
out+=`</div>`;
return out;
},

footer:function(arr){
var {css,data}=web.model.footer;

out=`<div class="row">
<div class="col-1-2">
<p class="made">wawan@sismadi.com</a></p>
</div>
<div class="col-1-2"><p class="sosmed">`;
for(i in data){ val=data[i]
out+=`
<a href="#" aria-label="${val.icon}">${svg.icon(val.icon)}</a>
`;
}
out+=`</p></div></div>
`;
return out;
},

about:function(arr){
var {css,data,isi}=web.model.about;
out=`<div class="row center artikel">
<div class="center"><b>About <br></b><p>${isi}</p></div>
`;

for(i in data){ val=data[i]
out+=`

<div class="${css} center">
<div class="artikel">
<p>${svg.icon(val.icon)}</p>
<b>${val.nama}</b>
<p>${val.isi}</p>
<p><a class="" href="#" >View details</a></p>
</div>
</div>
`;
}
out+=`</div>`;
return out;

},

services:function(arr){
var {css,data}=web.model.services;


out=`<div class="row center">
<div class="center">
<b>Services The easiest way <br>to build<b> websites online</b></b>
<p class="section-sub-title">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nulla vitae elit libero, a <br> pharetra augue. Donec id elit non mi porta gravida at eget metus.</p>
</div>

`;
for(i in data){ val=data[i]
out+=`

<div class="col-1-3 center">
<div class="my-4">
${svg.icon(val.icon)}</div>
<b>Full Support</b>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
</div>
`;
}
out+=`</div>`;
return out;},

clients:function(arr){
var {css,data}=web.model.clients;



// <svg class="clouds cloud1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0" y="0" width="512" height="512" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
//  <path id="cloud-icon" d="M406.1 227.63c-8.23-103.65-144.71-137.8-200.49-49.05 -36.18-20.46-82.33 3.61-85.22 45.9C80.73 229.34 50 263.12 50 304.1c0 44.32 35.93 80.25 80.25 80.25h251.51c44.32 0 80.25-35.93 80.25-80.25C462 268.28 438.52 237.94 406.1 227.63z"/>
// </svg>
// <svg class="clouds cloud2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0" y="0" width="512" height="512" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
//  <path id="cloud-icon" d="M406.1 227.63c-8.23-103.65-144.71-137.8-200.49-49.05 -36.18-20.46-82.33 3.61-85.22 45.9C80.73 229.34 50 263.12 50 304.1c0 44.32 35.93 80.25 80.25 80.25h251.51c44.32 0 80.25-35.93 80.25-80.25C462 268.28 438.52 237.94 406.1 227.63z"/>
// </svg>

out=`<div class="row center">
<div class="center background">
<b">clients Who love to work with us</b>
</div>
`;
for(i in data){ val=data[i]
out+=`<div class="${css}">${svg.icon(val.icon)} </div>`;
}
out+=`</div>`;
return out;
},

portofolio:function(arr){
var {css,data}=web.model.portofolio;

out=`<div class="row center">
<div class="center">
<b>Portofolio Our Awesome Works</b>
<p class="section-sub-title">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nulla vitae elit libero, a <br> pharetra augue. Donec id elit non mi porta gravida at eget metus.</p>
</div>
<figure>`;
for(i in data){ val=data[i]
  // out+=`<img src="${val.gambar}" alt="${val.nama}" />`;
  out+=`${img.controller.simg(val.gambar)}`;


}
out+=`</figure></div>
`;
return out;
},

features:function(arr){
var {css,data}=web.model.features;
out=`<div class="row center">
<div class="center">
<b> features Our Awesome Works</b>
<p class="section-sub-title">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nulla vitae elit libero, a <br> pharetra augue. Donec id elit non mi porta gravida at eget metus.</p>
</div>`;

for(i in data){ val=data[i]
out+=`

<div class="row">
<div class="col-1-2 center">
<div class="center float-right artikel" >`;
if(val.img){ out+=this.img(); } else {out+=this.des();}

out+=`
</div>
</div>
<div class="col-1-2 center">
<div class="center float-left artikel"   >`;
if(val.img){ out+=this.des(); } else {out+=this.img();}
out+=`</div></div></div>`;
}
out+=`</div>`;
return out;
},

img:function(){
  // <img class="figure" src="${val.gambar}" alt="${val.nama}"  >
return `
<div class="figure">
${img.controller.simg(val.gambar)}
</div>
`;
},

des:function() {
return `<p> ${svg.icon(val.icon)} </p>
<b>Capture every moments and share it to all your friends</b>
<p>Nulla vitae elit libero, a pharetra augue. Maecenas sed diam eget risus varius blandit sit amet non magna. Cras mattis consectetur purus sit amet.</p>
`
},

hero:function(arr){
var {css,data}=web.model.hero;
out=`
<button onclick="prev()"> &laquo; </button> <div id="img_slider">
`;
for(i in data){ val=data[i]
out+=`<div><img src="${val.gambar}" alt="${val.nama}"> satu </div>`;
}
out+=`</div><button onclick="next()"> &raquo; </button>`;
return out;},

single:function(arr){
var {css,data}=web.model.single;

data=[
{id:1,nama:'CLIENTS',isi:10,icon:'eye'},
{id:1,nama:'PROJECTS',isi:10,icon:'camera'},
{id:1,nama:'POSITIVE FEEDBACKS',isi:10,icon:'geo'},
{id:1,nama:'WEBSITE LAUNCH',isi:10,icon:'pen'},
]

out=`<div class="row col-single">
<b>Lorem ipsum dolor sit amet</b>
<img class="float-left" width="320px" src="img/photo-4.jpg" alt="">
<p>Consectetur adipisicing elit. Sint, corrupti deleniti, rem mollitia quam cum quo, animi ipsa praesentium officiis ducimus! Modi aperiam, nulla ipsum, totam natus consequuntur fugiat blanditiis.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste harum, ut magni cupiditate. Nihil ipsum debitis voluptates voluptate illum consectetur sapiente dolorem facilis, eum nobis sequi eveniet assumenda vel voluptatem!</p>
<p>Consectetur adipisicing elit. Sint, corrupti deleniti, rem mollitia quam cum quo, animi ipsa praesentium officiis ducimus! Modi aperiam, nulla ipsum, totam natus consequuntur fugiat blanditiis.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste harum, ut magni cupiditate. Nihil ipsum debitis voluptates voluptate illum consectetur sapiente dolorem facilis, eum nobis sequi eveniet assumenda vel voluptatem!</p>

`;
out+=`</div>`;
return out;},
},

controller:{
  dashboard:function(){ arr=web.model.header;
    gebi('content').innerHTML=web.view.dashboard(arr)
    // d.open('parallax');
    this.stats();
    // this.hero();
    this.about();
    this.posts();
    this.clients();
    this.services();

    this.features();
    // this.portofolio();
    // this.pricing();

    this.footer();

    // this.faq();
    // this.team();
    // this.call();
    // this.testimonial();
    // this.contact();




  },
header:function(){ arr=web.model.header; gebi('header').innerHTML=web.view.header(arr)},
footer:function(){ arr=web.model.footer; gebi('footer').innerHTML=web.view.footer(arr)},
hero:function(){ arr=web.model.hero; gebi('hero').innerHTML=web.view.hero(arr)},
clients:function(){ arr=web.model.clients; gebi('clients').innerHTML=web.view.clients(arr)},
about:function(){ arr=web.model.about; gebi('about').innerHTML=web.view.about(arr)},
stats:function(){ arr=web.model.stats; gebi('stats').innerHTML=web.view.stats(arr)},
services:function(){ arr=web.model.services; gebi('services').innerHTML=web.view.services(arr)},
features:function(){ arr=web.model.features; gebi('features').innerHTML=web.view.features(arr)},
portofolio:function(){ arr=web.model.portofolio; gebi('portofolio').innerHTML=web.view.portofolio(arr)},
pricing:function(){ arr=web.model.pricing; gebi('pricing').innerHTML=web.view.pricing(arr)},
faq:function(){ arr=web.model.faq; gebi('faq').innerHTML=web.view.faq(arr)},
team:function(){ arr=web.model.team; gebi('team').innerHTML=web.view.team(arr)},
call:function(){ arr=web.model.call; gebi('call').innerHTML=web.view.call(arr)},
testimonial:function(){ arr=web.model.testimonial; gebi('testimonial').innerHTML=web.view.testimonial(arr)},
posts:function(){ arr=web.model.posts; gebi('posts').innerHTML=web.view.posts(arr)},
contact:function(){ arr=web.model.contact; gebi('contact').innerHTML=web.view.contact(arr)},
single:function(){ arr=web.model.single; gebi('single').innerHTML=web.view.single(arr)},

},

service:{},

};
afi={};
afi.kode= ref.getURL('ref');
// afi= ref.getURL('ref');

if(afi.kode){
ref.setls('ref',afi);
}

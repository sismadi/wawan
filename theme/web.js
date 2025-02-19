gebi=function(id) { return document.getElementById(id);};
log=console.log.bind(window.console);
function cont(node) { return function(){ arr=web.model[node]; gebi(node).innerHTML=web.view[node](arr)};}

web={
model:{

  signup:{ id:'signup',css:'col-1-3',data:[
    {id:1,nama:'CLIENTS',isi:10,icon:'eye'},
],
  },

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

  Saya adalah seorang dosen dan web developer yang berkomitmen untuk mendidik, meneliti, dan menciptakan solusi digital.
  Ilmu yang bermanfaat bukan hanya yang dipelajari, tetapi juga yang diterapkan. Sebagai akademisi dan praktisi, saya selalu mencari cara untuk mengintegrasikan teknologi terbaru ke dalam pendidikan dan industri.
  <br><br>
  Wawan Sismadi`,
  data:[
{id:1,nama:'Keahlian Teknologi',icon:'setting',isi:'Menguasai framework MVC, IoT, Cloud Computing, dan pengembangan aplikasi berbasis web'},
{id:2,nama:'Pengalaman Akademik',icon:'edu',isi:'Mengajar mahasiswa dengan pendekatan berbasis proyek dan studi kasus nyata.'},
{id:3,nama:'Penelitian & Riset',icon:'search',isi:'Fokus pada pengembangan teknologi untuk IoT, web semantik, dan sistem berbasis cloud.'},
{id:4,nama:'Kontribusi Open Source',icon:'github',isi:'Berpartisipasi dalam komunitas teknologi untuk mengembangkan solusi digital inovatif'},
],
},

stats:{ id:'stats', css:'col-1-4',data:[
{id:1,nama:'Publikasi',isi:10,icon:'buku'},
{id:1,nama:'Abdimas',isi:10,icon:'jabat'},
{id:1,nama:'Project',isi:10,icon:'setting'},
{id:1,nama:'WEBSITE LAUNCH',isi:10,icon:'pen'},
],
},

services:{ id:'services', css:'col-1-3', isi:`
Membuat Teknologi yang Bekerja untuk Anda
Solusi berbasis teknologi untuk pendidikan, bisnis, dan industri.
Setiap kode yang saya tulis memiliki tujuan: menciptakan solusi yang nyata dan efektif.
`,
data:[
{id:1,nama:'Template DonatJS',icon:'donat',isi:'Komponen UI berbasis DonatJS untuk pengembangan aplikasi web yang lebih cepat.'},
{id:2,nama:'Aplikasi IoT',icon:'arduino',isi:'Sistem pemantauan berbasis cloud untuk perangkat IoT.'},
{id:3,nama:'Platform E-Learning',icon:'whatsapp',isi:'Membangun sistem pembelajaran online yang interaktif dan skalabel.'},
{id:4,nama:'Kontribusi Open Source',icon:'github',isi:'Mendukung komunitas teknologi melalui pengembangan proyek open-source.'},
{id:5,nama:'PRO',icon:'twitter',isi:'facebook'},
{id:6,nama:'PERFORMANCE',icon:'whatsapp',isi:'facebook'}
],
},

features:{ id:'features', css:'col-1-3',isi:`
  Mengajarkan Ilmu yang Bisa Langsung Dipraktikkan
  Metode pengajaran yang mengutamakan proyek nyata, bukan sekadar teori.
  Belajar teknologi harus lebih dari sekadar membaca buku. Saya mengajarkan mahasiswa untuk memahami, menerapkan, dan menciptakan teknologi yang siap digunakan di dunia kerja.
  `,
data:[
{id:1,img:1,nama:'Pemrograman Berorientasi Objek',gambar:'manandroid',icon:'code',isi:'Mengajarkan dasar-dasar OOP dengan penerapan dalam framework modern.'},
{id:2,img:0,nama:'Ubiquitous Computing',gambar:'womandesign',icon:'arduino',isi:'Memahami konsep IoT dan bagaimana perangkat pintar berinteraksi di dunia nyata.'},
{id:3,img:1,nama:'Arsitektur Komputer',gambar:'mansamping',icon:'setting',isi:'Mempelajari cara kerja sistem komputer dari prosesor hingga penyimpanan data.'},
{id:4,img:1,nama:'Framework Web Development',gambar:'mansamping',icon:'donat',isi:'Mengembangkan aplikasi dengan pendekatan MVC untuk efisiensi dan skalabilitas tinggi.'},
],
},


posts:{ id:'post',
  css:'col-1-2 center',
  isi:`Membagikan Wawasan, Menginspirasi Perubahan
Menulis tentang tren teknologi, framework web, dan inovasi digital.
Dunia teknologi terus berkembang, dan saya ingin memastikan Anda tetap up-to-date. Blog ini adalah tempat untuk berbagi wawasan, dari teori hingga implementasi.
`,
data:[
  // {id:1,nama:'Panduan DonatJS',gambar:'womankode',isi:'<div class="col-1-2"><a href="#" onclick="ref.getRef(1)" class="button">Detail</a></div><div class="col-1-2"><a href="#" class="button">Ambil</a></div>'},
  // {id:2,nama:'Tren Web Development',gambar:'womandesign',isi:'<div class="col-1-2"><a href="#" onclick="ref.getRef(2)" class="button">Detail</a></div><div class="col-1-2"><a href="#" class="button">Ambil</a></div>'},
  // {id:3,nama:'Metode Mengajar IT',gambar:'manandroid',isi:'<div class="col-1-2"><a href="#" onclick="ref.getRef(3)" class="button">Detail</a></div><div class="col-1-2"><a href="#" class="button">Ambil</a></div>'},
  // {id:4,nama:'Keamanan IoT',gambar:'mansamping',isi:'<div class="col-1-2"><a href="#" onclick="ref.getRef(4)" class="button">Detail</a></div><div class="col-1-2"><a href="#" class="button">Ambil</a></div>'},

  {id:1,nama:'Panduan DonatJS',gambar:'womankode',isi:'Framework MVC yang membantu membangun aplikasi web lebih cepat dan terstruktur.'},
  {id:2,nama:'Tren Web Development',gambar:'womandesign',isi:'Teknologi terbaru dalam pengembangan web, dari SPA hingga JAMstack.'},
  {id:3,nama:'Metode Mengajar IT',gambar:'manandroid',isi:'Strategi efektif dalam mengajarkan pemrograman dan teknologi kepada mahasiswa.'},
  {id:4,nama:'Keamanan IoT',gambar:'mansamping',isi:'Bagaimana melindungi data dan perangkat dalam ekosistem Internet of Things.'},

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

clients:{ id:'Contact', css:'col-1-4', isi:`
Mari Berkoneksi dan Berkolaborasi!
Terbuka untuk diskusi, proyek penelitian, dan pengembangan teknologi.
Saya percaya bahwa kolaborasi adalah kunci inovasi. Jika Anda ingin berdiskusi atau bekerja sama, jangan ragu untuk menghubungi saya.
`, data:[
{id:1,nama:'Email',icon:'envelope',isi:'Kirim pesan langsung untuk diskusi lebih lanjut.'},
{id:2,nama:'LinkedIn & ResearchGate',icon:'linkedin',isi:'Terhubung di jaringan profesional dan akademik.'},
{id:3,nama:'GitHub & Open Source',icon:'github',isi:'Lihat kontribusi saya di proyek pengembangan teknologi.'},
{id:4,nama:'Konsultasi & Kolaborasi',icon:'whatsapp',isi:'Terbuka untuk kerja sama dalam penelitian dan pengembangan teknologi.'},
],
},


contact:{ id:'contact', css:'col-1-3', data:[
{id:1,nama:'facebook',icon:'facebook'},
{id:1,nama:'twitter',icon:'twitter'},
{id:1,nama:'instagram',icon:'instagram'},],
},


footer:{ id:'post', css:'col-1-3', isi:`
©2025 Wawan Sismadi
`,

  data:[
{id:1,nama:'facebook',icon:'facebook',isi:'facebook'},
{id:2,nama:'twitter',icon:'twitter'},
{id:3,nama:'instagram',icon:'whatsapp'},
{id:4,nama:'instagram',icon:'instagram'},
],
},


},

view:{
   signup:function(arr){
   var {css,data,isi}=web.model.signup;
   res=ref.getls('ref');
   if(res){
          afi=JSON.parse(res);
          log(afi.kode)
   }


   out=`<div class="row center artikel">
   <div class="center"><b>signup</b><br></div>
   <div class="row">
   <p>
   ref <input type="text" value="${afi.kode}"> </input>
   email <input tyoe="email" value=""> </input>
   ref <input tyoe="password" value=""> </input>
   <button>Register</button>
   <button onclick=ref.getAfi()>getAfi</button>
   </p>
   </div>


   <div class="${css} center">
   <div class="artikel">
   <p>${svg.icon(val.icon)}</p>
   <b>${val.nama}</b>
   <p>${val.isi}</p>
   <p><a class="" href="#" >View details</a></p>
   </div>
   </div>
   `;

   out+=`</div>`;
   return out;

   },




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
  <li><a href="#posts">Event</a></li>
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
// <section id="signup"></section>

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
var {css,data,isi}=web.model.stats;

out=`<div class="bg"> </div><div class="row">`;
for(i in data){ val=data[i]
out+=`
<div class="${css} center">
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
var {css,data,isi}=web.model.footer;

out=`<div class="row">
<div class="col-1-2">
<p class="made">${isi}</p>
</div>
<div class="col-1-2"><p class="sosmed">`;
for(i in data){ val=data[i]
out+=`
<a href="${val.isi}" aria-label="${val.icon}">${svg.icon(val.icon)}</a>
`;
}
out+=`</p></div></div>
`;
return out;
},

about:function(arr){
var {css,data,isi}=web.model.about;
out=`<div class="row  artikel">

<div class="center">
<b>About <br></b>
</div>
<div class="col-1-4">
<svg class="svgAvatar" xmlns="http://www.w3.org/2000/svg" viewBox="1 2.85 46.35 43.15" height="500px" width="500px">
<path id="baju"  fill="orange" d="M1 46C2 42 4 34 10 31 15 29 32 23 42 31 47 36 48 39 47 46Z"/>
<path id="rambut" fill="black" d="M18 17C12 9 21 3 25 3 29 3 37 6 34 15 34 16 32 17 32 17 32 17 32 12 32 12 32 12 32 10 31 8 29 7 27 7 25 7 23 7 22 7 20 8 19 9 18 12 18 12 18 12 18 14 18 17"/>
<path id="kuping kiri" fill="#ffdbac" d="M16 16C16 18 17 20 18 21 18 18 18 17 18 15 17 15 16 15 16 16Z"/>
<path id="kuping kanan" fill="#ffdbac" d="M32 16C32 16 33 15 34 15 36 15 34 21 33 21 33 21 32 21 32 21 32 21 32 18 32 16"/>
<path id="leher" fill="#ffdbac" d="M21 26C21 28 20 29 20 30 22 40 29 33 35 28 33 27 31 26 31 23 30 25 30 25 29 26 27 28 23 28 21 26"/>
<path id="wajah" fill="#ffdbac" d="M20 8C22 7 23 7 25 7 27 7 29 7 31 8 32 10 32 12 32 12 33 14 34 21 29 26 27 28 23 28 21 26 19 24 18 22 18 21 17 16 18 12 18 12 18 12 19 9 20 8"/>
<path id="kacamata" fill="black" d="M17 14C20 14 22 14 25 14 26 14 29 14 33 14L33 15 31 16C30 18 25 18 25 15L24 15C24 18 21 18 19 17 18 16 17 15 17 15ZM19 15 19 16C20 17 22 17 23 16 23 15 23 15 23 15 22 15 21 15 19 15M26 15C26 16 26 16 26 16 27 17 29 17 30 16 30 14 30 14 30 15 28 15 27 15 26 15"/>
<path id="kumis" fill="black" d="M25 20C26 20 27 21 29 22L29 23C27 22 22 22 21 23L21 22C22 21 24 20 24 20L25 20"/>
<path id="jenggot" fill="black" d="M25 25C26 27 27 27 29 26 27 31 22 31 21 26 23 27 24 26 24 25 24.6667 25 25 25 24 25"/>
</svg>
</div>
<div class="col-3-4">

<p>${isi}</p></div>
<div class="center">
</div>

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
var {id,css,data,isi}=web.model.services;


out=`<div class="row center">
<div class="center">
<b>${id}</b>
<p>${isi}</p>
</div>

`;
for(i in data){ val=data[i]
out+=`

<div class="col-1-3 center">
<div class="my-4">
${svg.icon(val.icon)}</div>
<b>${val.nama}</b>
<p>${val.isi}</p>
</div>
`;
}
out+=`</div>`;
return out;},

clients:function(arr){
var {id,css,data,isi}=web.model.clients;

out=`<div class="row center">
<div class="center background">
<b>${id}</b>
<p>${isi}</p>
</div>
`;
for(i in data){ val=data[i]
  out+=`


  <div class="${css} center">
  ${svg.icon(val.icon)}
    <p>${val.nama}</p>
  </div>
  `;
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
var {isi,css,data}=web.model.features;

out=`<div class="row center">
<div class="center">
<b> features Our Awesome Works</b>
<p class="section-sub-title">
${isi}
</p>
</div>`;

for(i in data){ val=data[i]
out+=`

<div class="row">
<div class="col-1-2 center">
<div class="center artikel" >`;
if(val.img){ out+=this.img(); } else {out+=this.des();}

out+=`
</div>
</div>
<div class="col-1-2 center">
<div class="center artikel"   >`;
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
<b>${val.nama}</b>
<p>${val.isi}</p>
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
    // this.signup();

    // this.faq();
    // this.team();
    // this.call();
    // this.testimonial();
    // this.contact();




  },
  signup:function(){ arr=web.model.signup; gebi('signup').innerHTML=web.view.signup(arr)},
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

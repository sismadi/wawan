// rule:
// url:app/modul/method/param
// data:app/modul/method/param
// api:db/table/row/id

config={

  api:0,
  db:'web',
  getdata:function(id){ return config.api ? `http://localhost/api/?${id}` : `data/${id}.json`; },
  lms: {
  cert:'data/lms/cert.png',
  },
apps: [
  {icon:"setting",name:"gen JSON",modal:"web/layout/1"},

  {icon:"piawai",name:"SVG",url:"web/svg/loadicons/1"},
  {icon:"edu",name:"LMS",url:"lms/web/page/home"},
  {icon:"qrcode",name:"Presensi",url:"/donat/presensi"},
  {icon:"chart",name:"Inventory",url:"/donat/inventory"},
  {icon:"cart",name:"POS",url:"/donat/pos"},
  {icon:"envelope",name:"Finance",url:"/donat/finance"},
],

}

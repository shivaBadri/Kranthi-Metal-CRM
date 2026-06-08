export const users=[
 {email:'admin@kranthimetal.com',password:'123456',name:'Admin User',role:'Admin'},
 {email:'manager@kranthimetal.com',password:'123456',name:'Sales Manager',role:'Manager'},
 {email:'employee@kranthimetal.com',password:'123456',name:'Store Employee',role:'Employee'}
];
export const materials=[
 {id:1,code:'MS-RB-12',name:'MS Round Bar',size:'12mm',hsn:'7214',unit:'KG',stock:4200,rate:58,gst:18,godown:'Main Godown'},
 {id:2,code:'MS-ANG-50',name:'MS Angle',size:'50x50x6mm',hsn:'7216',unit:'KG',stock:2600,rate:65,gst:18,godown:'Main Godown'},
 {id:3,code:'MS-CH-75',name:'MS Channel',size:'75mm',hsn:'7216',unit:'KG',stock:1800,rate:72,gst:18,godown:'Yard A'},
 {id:4,code:'GI-SH-18',name:'GI Sheet',size:'18 Gauge',hsn:'7210',unit:'NOS',stock:250,rate:850,gst:18,godown:'Sheet Rack'},
 {id:5,code:'TMT-16',name:'TMT Bar',size:'16mm',hsn:'7214',unit:'KG',stock:5200,rate:61,gst:18,godown:'Yard B'}
];
export const customers=[
 {id:1,name:'Sri Lakshmi Steels',phone:'9876543210',email:'srilakshmi@steels.com',city:'Hyderabad',gstin:'36ABCDE1234F1Z5',status:'Active'},
 {id:2,name:'Venkateshwara Traders',phone:'9848012345',email:'sales@venkateshwara.in',city:'Vijayawada',gstin:'37ABCDE2222F1Z5',status:'Active'},
 {id:3,name:'Sai Balaji Fabricators',phone:'9700011122',email:'info@saibalaji.in',city:'Warangal',gstin:'36ABCDE3333F1Z5',status:'Follow-up'}
];
export const suppliers=[
 {id:1,name:'Hyderabad Steel Yard',phone:'9000011111',city:'Hyderabad',material:'Round Bars & Channels'},
 {id:2,name:'Metro Metal Suppliers',phone:'9000022222',city:'Secunderabad',material:'Angles & Sheets'}
];
export const followups=[
 {id:1,customer:'Sai Balaji Fabricators',purpose:'Quotation approval',date:'2026-06-09',status:'Pending'},
 {id:2,customer:'Sri Lakshmi Steels',purpose:'Payment reminder',date:'2026-06-10',status:'Open'}
];

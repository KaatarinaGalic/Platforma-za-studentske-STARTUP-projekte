import{a as c}from"./axios-DsPaXkF5.js";import{p as F,m as G,ad as S,d as N,e as R,g as K,f as M,ae as B,v as L,a as e,E as J,a7 as q,o as k,c as H,w as l,U as I,af as E,_ as s,ag as U,t as n,a5 as C,a8 as W,R as X,ah as Y,ai as Z,a9 as V,aj as Q,W as $,X as z,Y as m,Z as j,$ as u,a0 as T,a3 as r,S as g,T as D,F as y,ac as P,a4 as _,a1 as v,b as ee}from"./index-N8nsg5h5.js";import{V as h}from"./VTextField-DvOc41fn.js";import{V as b}from"./VForm-CM4sDXU0.js";import{V as A}from"./VSelect-DEQiJXOM.js";import"./VCheckboxBtn-CFQTUp3O.js";const le=F({fixedHeader:Boolean,fixedFooter:Boolean,height:[Number,String],hover:Boolean,...G(),...S(),...N(),...R()},"VTable"),w=K()({name:"VTable",props:le(),setup(i,o){let{slots:p,emit:O}=o;const{themeClasses:a}=M(i),{densityClasses:d}=B(i);return L(()=>e(i.tag,{class:["v-table",{"v-table--fixed-height":!!i.height,"v-table--fixed-header":i.fixedHeader,"v-table--fixed-footer":i.fixedFooter,"v-table--has-top":!!p.top,"v-table--has-bottom":!!p.bottom,"v-table--hover":i.hover},a.value,d.value,i.class],style:i.style},{default:()=>{var t,f,x;return[(t=p.top)==null?void 0:t.call(p),p.default?e("div",{class:"v-table__wrapper",style:{height:J(i.height)}},[e("table",null,[p.default()])]):(f=p.wrapper)==null?void 0:f.call(p),(x=p.bottom)==null?void 0:x.call(p)]}})),{}}}),te={data(){return{totalUsers:7,registeredProjects:5,totalProjects:28,someOtherNumber:100,users:[],editDialog:!1,selectedUser:{id:null,ime:"",prezime:"",email:""},addDialog:!1,newUser:{ime:"",prezime:"",email:"",lozinka:""},showPassword:!1,projects:[],editProjectDialog:!1,selectedProject:{ID_projekta:null,naziv:"",tehnologije:""},addProjectDialog:!1,newProject:{naziv:"",tehnologije:"",slika_url:""},registriraniKorisnici:[],addUserToProjectDialog:!1,userEmail:"",selectedProjectId:null,editUserDialog:!1,technologies:[],addTechnologyDialog:!1,newTechnology:{naziv:""},pendingProjects:[],lastSubmitterEmail:""}},methods:{async fetchUsers(){try{const i=await c.get("http://localhost:6969/users");this.users=i.data}catch(i){console.error("Greška kod dohvaćanja korisnika:",i)}},async deleteUser(i){if(confirm("Jeste li sigurni da želite obrisati korisnika?"))try{await c.delete(`http://localhost:6969/users/${i}`),this.fetchUsers()}catch(o){console.error("Greška kod brisanja korisnika:",o)}},openEditUserModal(i){this.selectedUser={...i},this.editDialog=!0},async updateUser(){try{await c.put(`http://localhost:6969/users/${this.selectedUser.ID_korisnika}`,{ime:this.selectedUser.ime,prezime:this.selectedUser.prezime,email:this.selectedUser.email}),this.editDialog=!1,this.fetchUsers()}catch(i){console.error("Greška kod ažuriranja korisnika:",i)}},openAddUserModal(){this.addDialog=!0},async addUser(){try{(await c.post("http://localhost:6969/register",{ime:this.newUser.ime,prezime:this.newUser.prezime,email:this.newUser.email,lozinka:this.newUser.lozinka})).status===201&&(alert("Korisnik uspješno dodan!"),this.addDialog=!1,this.fetchUsers(),this.newUser={ime:"",prezime:"",email:"",lozinka:""})}catch(i){console.error("Greška kod dodavanja korisnika:",i),alert("Dogodila se greška pri dodavanju korisnika.")}},async fetchProjects(){try{const i=await c.get("http://localhost:6969/projekti");this.projects=i.data,console.log("Fetched projects:",this.projects)}catch(i){console.error("Greška kod dohvaćanja projekata:",i)}},async deleteProject(i){if(confirm("Jeste li sigurni da želite obrisati projekt?"))try{await c.delete(`http://localhost:6969/projekti/${i}`),this.fetchProjects()}catch(o){console.error("Greška kod brisanja projekta:",o)}},editProject(i){console.log("Otvaranje modala za projekt:",i),this.selectedProject={...i},this.editProjectDialog=!0},async updateProject(){console.log("Podaci prije slanja:",this.selectedProject);try{await c.put("http://localhost:6969/projekti",{id:this.selectedProject.ID_projekta,naziv:this.selectedProject.naziv,tehnologije:Array.isArray(this.selectedProject.tehnologije)?this.selectedProject.tehnologije.join(", "):this.selectedProject.tehnologije}),alert("Projekt uspješno ažuriran!"),this.editProjectDialog=!1,this.fetchProjects()}catch(i){console.error("Greška kod ažuriranja projekta:",i),alert("Dogodila se greška!")}},openAddProjectModal(){this.addProjectDialog=!0},async addProject(){try{(await c.post("http://localhost:6969/projects",{naziv:this.newProject.naziv,tehnologije:this.newProject.tehnologije,slika_url:this.newProject.slika_url})).status===201&&(alert("Projekt uspješno dodan!"),this.addProjectDialog=!1,this.fetchProjects())}catch(i){console.error("Greška kod dodavanja projekta:",i)}},async fetchRegistriraniKorisnici(){try{const i=await c.get("http://localhost:6969/registrirani_korisnici");this.registriraniKorisnici=i.data}catch(i){console.error("Greška kod dohvaćanja registriranih korisnika:",i)}},openAddUserToProjectModal(){this.addUserToProjectDialog=!0},async adminAddToProject(){try{const i=await c.post("http://localhost:6969/admin-add-to-project",{email:this.userEmail,projectId:this.selectedProjectId});alert(i.data),this.addUserToProjectDialog=!1,this.userEmail="",this.selectedProjectId=null,this.fetchRegistriraniKorisnici()}catch(i){console.error("Greška kod dodavanja korisnika na projekt:",i),alert("Failed to add user to project.")}},openEditUserProject(i){this.selectedUser={...i},this.editUserDialog=!0},async updateUserProject(){try{await c.put(`http://localhost:6969/registrirani_korisnici/${this.selectedUser.ID_korisnika}`,{projectId:this.selectedProjectId}),this.editUserDialog=!1,this.fetchRegistriraniKorisnici()}catch(i){console.error("Greška kod ažuriranja registracije korisnika:",i)}},async removeUserFromProject(i){if(confirm("Jeste li sigurni da želite ukloniti ovog korisnika s projekta?"))try{c.delete("http://localhost:6969/registrirani_korisnici/"+i.ID_korisnika),this.fetchRegistriraniKorisnici()}catch(o){console.error("Greška kod uklanjanja korisnika s projekta:",o)}},logoutAndRedirect(){this.$router.push(" ")},async fetchTechnologies(){try{const i=await c.get("http://localhost:6969/technologies");this.technologies=i.data}catch(i){console.error("Greška kod dohvaćanja tehnologija:",i)}},async deleteTechnology(i){if(confirm("Jeste li sigurni da želite obrisati ovu tehnologiju?"))try{await c.delete(`http://localhost:6969/technologies/${i}`),this.fetchTechnologies()}catch(o){console.error("Greška kod brisanja tehnologije:",o)}},openAddTechnologyModal(){this.addTechnologyDialog=!0},async addTechnology(){try{(await c.post("http://localhost:6969/technologies",{naziv:this.newTechnology.naziv})).status===201&&(alert("Tehnologija uspješno dodana!"),this.addTechnologyDialog=!1,this.newTechnology.naziv="",this.fetchTechnologies())}catch(i){console.error("Greška kod dodavanja tehnologije:",i),alert("Greška kod dodavanja tehnologije!")}},async fetchPendingProjects(){try{const i=await fetch("http://localhost:6969/api/projects/pending");this.pendingProjects=await i.json()}catch(i){console.error("Error fetching pending projects:",i)}},async approveProject(i){try{await c.post(`http://localhost:6969/api/projects/approve/${i}`),alert("Projekt odobren!"),this.fetchPendingProjects()}catch(o){console.error("Error approving project:",o),alert("Došlo je do greške prilikom odobravanja projekta.")}},async rejectProject(i){console.log("Rejecting project with ID:",i);try{await c.post(`http://localhost:6969/api/projects/reject/${i}`),this.fetchPendingProjects()}catch(o){console.error("Error rejecting project:",o)}},async getLastSubmitterEmail(){try{const i=await c.get("http://localhost:6969/api/projects/last-submitter");this.lastSubmitterEmail=i.data.lastSubmitterEmail}catch(i){console.error("Greška pri dohvaćanju emaila podnositelja:",i)}}},mounted(){this.fetchUsers(),this.fetchProjects(),this.fetchRegistriraniKorisnici(),this.fetchTechnologies(),this.fetchPendingProjects(),this.getLastSubmitterEmail()},computed:{projectOptions(){return this.projects.map(i=>({title:i.naziv,value:i.ID_projekta}))}}},oe=r("br",null,null,-1),ie=r("br",null,null,-1),ae=r("br",null,null,-1),re=r("br",null,null,-1),se=r("thead",null,[r("tr",null,[r("th",null,"ID"),r("th",null,"Ime"),r("th",null,"Prezime"),r("th",null,"Email"),r("th",null,"Akcije")])],-1),ne={class:"action-buttons"},de=r("span",{class:"text-h5"},"Dodaj novog korisnika",-1),ue=r("span",{class:"text-h5"},"Uredi korisnika",-1),ce=r("thead",null,[r("tr",null,[r("th",null,"ID Projekta"),r("th",null,"Naziv"),r("th",null,"Tehnologije"),r("th",null,"Status"),r("th",null,"Akcije")])],-1),me=r("td",null,"Objavljen",-1),je={class:"action-buttons"},he=r("span",{class:"text-h5"},"Uredi projekt",-1),pe=r("span",{class:"text-h5"},"Dodaj novi projekt",-1),fe=r("thead",null,[r("tr",null,[r("th",null,"ID Projekta"),r("th",null,"Naziv Projekta"),r("th",null,"Ime i Prezime"),r("th",null,"Email"),r("th",null,"Akcije")])],-1),ke=r("span",{class:"text-h5"},"Dodaj korisnika na projekt",-1),ge=r("span",{class:"text-h5"},"Uredi korisnika na projektu",-1),_e=r("thead",null,[r("tr",null,[r("th",null,"ID"),r("th",null,"Naziv"),r("th",null,"Akcije")])],-1),Pe=r("span",{class:"text-h5"},"Dodaj novu tehnologiju",-1),ve=r("thead",null,[r("tr",null,[r("th",null,"Naziv"),r("th",null,"Opis"),r("th",null,"Podnositelj"),r("th",null,"Akcije")])],-1),be={class:"action-buttons"};function Ve(i,o,p,O,a,d){return k(),H(I,null,{default:l(()=>[oe,ie,e(Y,{app:""},{default:l(()=>[e(E,{class:"d-none d-sm-flex",style:{"white-space":"nowrap"}},{default:l(()=>[s(" Admin Panel ")]),_:1}),e(E,{class:"d-flex d-sm-none",style:{"white-space":"nowrap"}},{default:l(()=>[s(" Admin ")]),_:1}),e(U),e(h,{dense:"","hide-details":"","solo-inverted":"",label:"Search","prepend-inner-icon":"mdi-magnify",class:"search-field"}),e(n,{icon:""},{default:l(()=>[e(C,null,{default:l(()=>[s("mdi-bell")]),_:1})]),_:1}),e(n,{icon:""},{default:l(()=>[e(W,{size:"40"},{default:l(()=>[e(X,{src:"https://media.geeksforgeeks.org/wp-content/uploads/20221210180014/profile-removebg-preview.png"})]),_:1})]),_:1})]),_:1}),e(Q,{app:"",class:"drawer"},{default:l(()=>[ae,re,e(Z,null,{default:l(()=>[e(V,{title:"Dobro došli!","prepend-icon":"mdi-view-dashboard"}),e(V,{title:"Korisnici","prepend-icon":"mdi-account"}),e(V,{title:"Projekti","prepend-icon":"mdi-file-document"}),e(V,{title:"Prijave","prepend-icon":"mdi-chart-bar"}),e(V,{title:"Tehnologije","prepend-icon":"mdi-office-building"}),e(V,{title:"Odjava","prepend-icon":"mdi-logout",onClick:d.logoutAndRedirect},null,8,["onClick"])]),_:1})]),_:1}),e(ee,null,{default:l(()=>[e(I,null,{default:l(()=>[e($,null,{default:l(()=>[e(z,{cols:"12",md:"3"},{default:l(()=>[e(m,{class:"stat-card"},{default:l(()=>[e(j,null,{default:l(()=>[s(u(a.totalUsers),1)]),_:1}),e(T,null,{default:l(()=>[s("Korisnici")]),_:1})]),_:1})]),_:1}),e(z,{cols:"12",md:"3"},{default:l(()=>[e(m,{class:"stat-card"},{default:l(()=>[e(j,null,{default:l(()=>[s(u(a.registeredProjects),1)]),_:1}),e(T,null,{default:l(()=>[s("Prijavljeni")]),_:1})]),_:1})]),_:1}),e(z,{cols:"12",md:"3"},{default:l(()=>[e(m,{class:"stat-card"},{default:l(()=>[e(j,null,{default:l(()=>[s(u(a.totalProjects),1)]),_:1}),e(T,null,{default:l(()=>[s("Projekata")]),_:1})]),_:1})]),_:1}),e(z,{cols:"12",md:"3"},{default:l(()=>[e(m,{class:"stat-card"},{default:l(()=>[e(j,null,{default:l(()=>[s(u(a.someOtherNumber),1)]),_:1}),e(T,null,{default:l(()=>[s("Pregled")]),_:1})]),_:1})]),_:1})]),_:1}),e(m,{class:"users-card"},{default:l(()=>[e(j,null,{default:l(()=>[s("Korisnici "),e(U),e(n,{color:"green",onClick:d.openAddUserModal},{default:l(()=>[s(" Dodaj novog korisnika ")]),_:1},8,["onClick"])]),_:1}),e(w,{class:"custom-table"},{default:l(()=>[se,r("tbody",null,[(k(!0),g(y,null,D(a.users,t=>(k(),g("tr",{key:t.ID_korisnika},[r("td",null,u(t.ID_korisnika),1),r("td",null,u(t.ime),1),r("td",null,u(t.prezime),1),r("td",null,u(t.email),1),r("td",ne,[e(n,{class:"btn-edit",color:"blue",onClick:f=>d.openEditUserModal(t)},{default:l(()=>[s("Uredi")]),_:2},1032,["onClick"]),e(n,{class:"btn-delete",color:"red",onClick:f=>d.deleteUser(t.ID_korisnika)},{default:l(()=>[s("Obriši")]),_:2},1032,["onClick"])])]))),128))])]),_:1})]),_:1}),e(P,{modelValue:a.addDialog,"onUpdate:modelValue":o[6]||(o[6]=t=>a.addDialog=t),"max-width":"500px"},{default:l(()=>[e(m,null,{default:l(()=>[e(j,null,{default:l(()=>[de]),_:1}),e(_,null,{default:l(()=>[e(b,{ref:"addForm"},{default:l(()=>[e(h,{modelValue:a.newUser.ime,"onUpdate:modelValue":o[0]||(o[0]=t=>a.newUser.ime=t),label:"Ime"},null,8,["modelValue"]),e(h,{modelValue:a.newUser.prezime,"onUpdate:modelValue":o[1]||(o[1]=t=>a.newUser.prezime=t),label:"Prezime"},null,8,["modelValue"]),e(h,{modelValue:a.newUser.email,"onUpdate:modelValue":o[2]||(o[2]=t=>a.newUser.email=t),label:"Email"},null,8,["modelValue"]),e(h,{modelValue:a.newUser.lozinka,"onUpdate:modelValue":o[4]||(o[4]=t=>a.newUser.lozinka=t),type:a.showPassword?"text":"password",label:"Lozinka"},{append:l(()=>[e(C,{onClick:o[3]||(o[3]=t=>a.showPassword=!a.showPassword),class:"cursor-pointer",size:"24"},{default:l(()=>[s(u(a.showPassword?"mdi-eye-off":"mdi-eye"),1)]),_:1})]),_:1},8,["modelValue","type"])]),_:1},512)]),_:1}),e(v,null,{default:l(()=>[e(n,{color:"red",text:"",onClick:o[5]||(o[5]=t=>a.addDialog=!1)},{default:l(()=>[s("Odustani")]),_:1}),e(n,{color:"green",text:"",onClick:d.addUser},{default:l(()=>[s("Dodaj")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(P,{modelValue:a.editDialog,"onUpdate:modelValue":o[11]||(o[11]=t=>a.editDialog=t),"max-width":"500px"},{default:l(()=>[e(m,null,{default:l(()=>[e(j,null,{default:l(()=>[ue]),_:1}),e(_,null,{default:l(()=>[e(b,{ref:"editForm"},{default:l(()=>[e(h,{modelValue:a.selectedUser.ime,"onUpdate:modelValue":o[7]||(o[7]=t=>a.selectedUser.ime=t),label:"Ime"},null,8,["modelValue"]),e(h,{modelValue:a.selectedUser.prezime,"onUpdate:modelValue":o[8]||(o[8]=t=>a.selectedUser.prezime=t),label:"Prezime"},null,8,["modelValue"]),e(h,{modelValue:a.selectedUser.email,"onUpdate:modelValue":o[9]||(o[9]=t=>a.selectedUser.email=t),label:"Email"},null,8,["modelValue"])]),_:1},512)]),_:1}),e(v,null,{default:l(()=>[e(n,{color:"red",text:"",onClick:o[10]||(o[10]=t=>a.editDialog=!1)},{default:l(()=>[s("Odustani")]),_:1}),e(n,{color:"green",text:"",onClick:d.updateUser},{default:l(()=>[s("Spremi")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(m,{class:"projects-card"},{default:l(()=>[e(j,null,{default:l(()=>[s("Projekti "),e(U),e(n,{color:"green",onClick:d.openAddProjectModal},{default:l(()=>[s("Dodaj novi projekt")]),_:1},8,["onClick"])]),_:1}),e(w,{class:"custom-table"},{default:l(()=>[ce,r("tbody",null,[(k(!0),g(y,null,D(a.projects,t=>(k(),g("tr",{key:t.ID_projekta},[r("td",null,u(t.ID_projekta),1),r("td",null,u(t.naziv),1),r("td",null,u(t.tehnologije),1),me,r("td",je,[e(n,{class:"btn-edit",color:"blue",small:"",onClick:f=>d.editProject(t)},{default:l(()=>[s("Uredi")]),_:2},1032,["onClick"]),e(n,{class:"btn-delete",color:"red",small:"",onClick:f=>d.deleteProject(t.ID_projekta)},{default:l(()=>[s("Obriši")]),_:2},1032,["onClick"])])]))),128))])]),_:1})]),_:1}),e(P,{modelValue:a.editProjectDialog,"onUpdate:modelValue":o[15]||(o[15]=t=>a.editProjectDialog=t),"max-width":"500px"},{default:l(()=>[e(m,null,{default:l(()=>[e(j,null,{default:l(()=>[he]),_:1}),e(_,null,{default:l(()=>[e(b,{ref:"editProjectForm"},{default:l(()=>[e(h,{modelValue:a.selectedProject.naziv,"onUpdate:modelValue":o[12]||(o[12]=t=>a.selectedProject.naziv=t),label:"Naziv projekta"},null,8,["modelValue"]),e(h,{modelValue:a.selectedProject.tehnologije,"onUpdate:modelValue":o[13]||(o[13]=t=>a.selectedProject.tehnologije=t),label:"Tehnologije"},null,8,["modelValue"])]),_:1},512)]),_:1}),e(v,null,{default:l(()=>[e(n,{color:"red",text:"",onClick:o[14]||(o[14]=t=>a.editProjectDialog=!1)},{default:l(()=>[s("Odustani")]),_:1}),e(n,{color:"green",text:"",onClick:d.updateProject},{default:l(()=>[s("Spremi")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(P,{modelValue:a.addProjectDialog,"onUpdate:modelValue":o[20]||(o[20]=t=>a.addProjectDialog=t),"max-width":"500px"},{default:l(()=>[e(m,null,{default:l(()=>[e(j,null,{default:l(()=>[pe]),_:1}),e(_,null,{default:l(()=>[e(b,{ref:"addProjectForm"},{default:l(()=>[e(h,{modelValue:a.newProject.naziv,"onUpdate:modelValue":o[16]||(o[16]=t=>a.newProject.naziv=t),label:"Naziv projekta"},null,8,["modelValue"]),e(h,{modelValue:a.newProject.tehnologije,"onUpdate:modelValue":o[17]||(o[17]=t=>a.newProject.tehnologije=t),label:"Tehnologije"},null,8,["modelValue"]),e(h,{modelValue:a.newProject.slika_url,"onUpdate:modelValue":o[18]||(o[18]=t=>a.newProject.slika_url=t),label:"URL slike"},null,8,["modelValue"])]),_:1},512)]),_:1}),e(v,null,{default:l(()=>[e(n,{color:"red",text:"",onClick:o[19]||(o[19]=t=>a.addProjectDialog=!1)},{default:l(()=>[s("Odustani")]),_:1}),e(n,{color:"green",text:"",onClick:d.addProject},{default:l(()=>[s("Dodaj")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(m,{class:"registrirani-card"},{default:l(()=>[e(j,null,{default:l(()=>[s("Registrirani korisnici na projektima "),e(U),e(n,{color:"green",onClick:d.openAddUserToProjectModal},{default:l(()=>[s("Dodaj korisnika na projekt")]),_:1},8,["onClick"])]),_:1}),e(w,{class:"custom-table"},{default:l(()=>[fe,r("tbody",null,[(k(!0),g(y,null,D(a.registriraniKorisnici,t=>(k(),g("tr",{key:t.email},[r("td",null,u(t.ID_projekta),1),r("td",null,u(t.naziv_projekta),1),r("td",null,u(t.ime)+" "+u(t.prezime),1),r("td",null,u(t.email),1),r("td",null,[e(C,{small:"",color:"blue",onClick:f=>d.openEditUserProject(t)},{default:l(()=>[s("mdi-pencil")]),_:2},1032,["onClick"]),e(C,{small:"",color:"red",class:"ml-2",onClick:f=>d.removeUserFromProject(t)},{default:l(()=>[s("mdi-delete")]),_:2},1032,["onClick"])])]))),128))])]),_:1})]),_:1}),e(P,{modelValue:a.addUserToProjectDialog,"onUpdate:modelValue":o[24]||(o[24]=t=>a.addUserToProjectDialog=t),"max-width":"500px"},{default:l(()=>[e(m,null,{default:l(()=>[e(j,null,{default:l(()=>[ke]),_:1}),e(_,null,{default:l(()=>[e(b,{ref:"addUserToProjectForm"},{default:l(()=>[e(h,{modelValue:a.userEmail,"onUpdate:modelValue":o[21]||(o[21]=t=>a.userEmail=t),label:"Email korisnika",required:""},null,8,["modelValue"]),e(A,{modelValue:a.selectedProjectId,"onUpdate:modelValue":o[22]||(o[22]=t=>a.selectedProjectId=t),items:d.projectOptions,"item-title":"title","item-value":"value",label:"Odaberi projekt",required:""},null,8,["modelValue","items"])]),_:1},512)]),_:1}),e(v,null,{default:l(()=>[e(n,{color:"red",text:"",onClick:o[23]||(o[23]=t=>a.addUserToProjectDialog=!1)},{default:l(()=>[s("Odustani")]),_:1}),e(n,{color:"green",text:"",onClick:d.adminAddToProject},{default:l(()=>[s("Dodaj")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(P,{modelValue:a.editUserDialog,"onUpdate:modelValue":o[28]||(o[28]=t=>a.editUserDialog=t),"max-width":"500px"},{default:l(()=>[e(m,null,{default:l(()=>[e(j,null,{default:l(()=>[ge]),_:1}),e(_,null,{default:l(()=>[e(b,{ref:"editUserForm"},{default:l(()=>[e(h,{modelValue:a.selectedUser.email,"onUpdate:modelValue":o[25]||(o[25]=t=>a.selectedUser.email=t),label:"Email"},null,8,["modelValue"]),e(A,{modelValue:a.selectedProjectId,"onUpdate:modelValue":o[26]||(o[26]=t=>a.selectedProjectId=t),items:d.projectOptions,"item-title":"title","item-value":"value",label:"Odaberi projekt",required:""},null,8,["modelValue","items"])]),_:1},512)]),_:1}),e(v,null,{default:l(()=>[e(n,{color:"red",text:"",onClick:o[27]||(o[27]=t=>a.editUserDialog=!1)},{default:l(()=>[s("Odustani")]),_:1}),e(n,{color:"green",text:"",onClick:d.updateUserProject},{default:l(()=>[s("Spremi")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(m,{class:"technologies-card"},{default:l(()=>[e(j,null,{default:l(()=>[s(" Tehnologije "),e(U),e(n,{color:"green",onClick:d.openAddTechnologyModal},{default:l(()=>[s(" Dodaj novu tehnologiju ")]),_:1},8,["onClick"])]),_:1}),e(w,{class:"custom-table"},{default:l(()=>[_e,r("tbody",null,[(k(!0),g(y,null,D(a.technologies,t=>(k(),g("tr",{key:t.ID_tehnologije},[r("td",null,u(t.ID_tehnologije),1),r("td",null,u(t.naziv),1),r("td",null,[e(n,{class:"btn-delete",color:"red",onClick:f=>d.deleteTechnology(t.ID_tehnologije)},{default:l(()=>[s(" Obriši ")]),_:2},1032,["onClick"])])]))),128))])]),_:1})]),_:1}),e(P,{modelValue:a.addTechnologyDialog,"onUpdate:modelValue":o[31]||(o[31]=t=>a.addTechnologyDialog=t),"max-width":"500px"},{default:l(()=>[e(m,null,{default:l(()=>[e(j,null,{default:l(()=>[Pe]),_:1}),e(_,null,{default:l(()=>[e(b,{ref:"addTechForm"},{default:l(()=>[e(h,{modelValue:a.newTechnology.naziv,"onUpdate:modelValue":o[29]||(o[29]=t=>a.newTechnology.naziv=t),label:"Naziv tehnologije"},null,8,["modelValue"])]),_:1},512)]),_:1}),e(v,null,{default:l(()=>[e(n,{color:"red",text:"",onClick:o[30]||(o[30]=t=>a.addTechnologyDialog=!1)},{default:l(()=>[s(" Odustani ")]),_:1}),e(n,{color:"green",text:"",onClick:d.addTechnology},{default:l(()=>[s(" Dodaj ")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(m,null,{default:l(()=>[e(j,null,{default:l(()=>[s("Projekti na čekanju")]),_:1}),e(_,null,{default:l(()=>[e(w,{class:"custom-table"},{default:l(()=>[ve,r("tbody",null,[(k(!0),g(y,null,D(a.pendingProjects,t=>(k(),g("tr",{key:t.id},[r("td",null,u(t.naziv),1),r("td",null,u(t.slika_url),1),r("td",null,u(a.lastSubmitterEmail),1),r("td",be,[e(n,{color:"green",onClick:f=>d.approveProject(t.ID_projekta)},{default:l(()=>[s("Odobri")]),_:2},1032,["onClick"]),e(n,{color:"red",onClick:f=>d.rejectProject(t.ID_projekta)},{default:l(()=>[s("Odbij")]),_:2},1032,["onClick"])])]))),128))])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}const Te=q(te,[["render",Ve]]);export{Te as default};

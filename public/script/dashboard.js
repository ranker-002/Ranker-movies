const changeBg = document.getElementById('themeToggle')
const body = document.querySelector('body')
const sidebar = document.querySelector('.sidebar')
const header = document.querySelector('.sidebar-header')
const nav = document.querySelector('.nav')
const text = document.getElementById('text')
const stat = document.getElementById('stat')
const add = document.getElementById('add')
const admin= document.getElementById('admin')
const setting = document.getElementById('setting')
const statContain = document.getElementById('statContent')
const addContain = document.getElementById('Add')
const adminContain = document.getElementById('Admin')
const settingContain = document.getElementById('Setting')
dark = false
changeBg.addEventListener("click", ()=>{
    dark = !dark
    body.classList.toggle("dark-theme")
    changeBg.classList.toggle("btn-theme") 
    sidebar.classList.toggle('nav-change')
    nav.classList.toggle('dark-theme')
    header.classList.toggle('dark-theme')
    statContain.classList.toggle('white')
    dark?text.textContent='light mode':text.textContent='dark mode';
})
console.log(text);

stat.addEventListener('click',()=>{
statContain.style.visibility ="visible"
addContain.style.visibility ="hidden"
adminContain.style.visibility ="hidden"
settingContain.style.visibility ="hidden"

})

add.addEventListener('click',()=>{
    addContain.style.visibility ="visible"
    statContain.style.visibility ="hidden"
    adminContain.style.visibility ="hidden"
    settingContain.style.visibility ="hidden"
})
   
admin.addEventListener('click',()=>{
    adminContain.style.visibility ="visible"
    addContain.style.visibility ="hidden"
    statContain.style.visibility ="hidden"
    settingContain.style.visibility ="hidden"
})
   
setting.addEventListener('click',()=>{
    settingContain.style.visibility ="visible"
    adminContain.style.visibility ="hidden"
    addContain.style.visibility ="hidden"
    statContain.style.visibility ="hidden"
})
   
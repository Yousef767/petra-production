let filters = document.querySelectorAll('.filter')

filters.forEach((e)=>{
  e.addEventListener('click',()=>{
    filters.forEach((e)=>{e.classList.remove('active')})
    e.classList.add('active')
  })
})


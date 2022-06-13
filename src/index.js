document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("form")
  form.addEventListener('Create New Task', (e) => {
    e.preventDefault()
    buildToDo(e.target.new-task-description.value)
    form.reset()
  })
});

function buildToDo(activity){
  let p = document.createElement('p')
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent= 'x'
  p.textContent = `${activity}`
  p.appendChild(btn)
  console.log(p)
  document.querySelector('#list').appendChild(p)
}

function handleDelete(e){
  e.target.parentNode.remove()
}
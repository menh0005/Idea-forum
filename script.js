const data = { currentUser: 'currentUser', ideas: [
  {
    username: 'amyrobson',
    content:
      'Non dolor veniam nostrud ad. Commodo ex officia reprehenderit eu laborum. Qui reprehenderit reprehenderit incididunt eiusmod voluptate cupidatat cupidatat dolor. Incididunt sint cupidatat dolore cupidatat ut do dolor nostrud ullamco aliqua aliqua excepteur. Fugiat nostrud esse voluptate magna nostrud nostrud sint et. Irure excepteur irure ullamco occaecat dolor deserunt. Cillum fugiat sunt ullamco ad enim ea eiusmod do et dolor adipisicing mollit aliqua mollit.\r\n',
    score: 3,
  },
  {
    username: 'maxblagun',
    content:
      'Cupidatat veniam quis aliquip ut pariatur excepteur ut. Cupidatat reprehenderit nulla laborum dolore nulla voluptate cupidatat in. Sint tempor non duis sit deserunt culpa sunt labore eu sit consectetur. Excepteur reprehenderit et officia incididunt consectetur laborum consequat laboris excepteur ea adipisicing qui.\r\n',
    score: 10,
  },
  {
    username: 'maxblagun',
    content:
      'Proident qui elit in deserunt velit eu veniam. Tempor velit cillum et dolore. Incididunt anim Lorem Lorem dolor voluptate deserunt cillum consequat ut. Ea fugiat culpa ex et pariatur dolor est officia ea dolore ullamco mollit. Cillum minim consequat ipsum deserunt velit mollit ad consectetur irure dolore proident qui.\r\n',
    score: 6,
  },
  {
    username: 'maxblagun',
    content:
      'Officia exercitation cupidatat enim sint ea quis reprehenderit ipsum. Commodo ullamco deserunt reprehenderit qui in anim aliqua officia do in reprehenderit Lorem. Ipsum non aute officia est nisi sunt non. Proident in eiusmod sint aliquip qui officia deserunt eiusmod sit. Mollit voluptate anim cillum cupidatat duis est ad excepteur consequat fugiat cillum velit esse. Quis dolore sit ullamco qui.\r\n',
    score: 8,
  },
  {
    username: 'currentUser',
    content:
      'Incididunt ut ut velit dolor irure Lorem ex nostrud et laborum commodo dolore laborum culpa. Adipisicing ullamco eu id sit velit ut laboris irure esse quis. Mollit minim laborum do exercitation sint magna ea ea eu eu laboris aliquip anim culpa. Consectetur eiusmod esse ipsum incididunt duis ea nisi qui duis pariatur.\r\n',
    score: 3,
  },
  {
    username: 'currentUser',
    content:
      'Id aute eu quis tempor laborum duis nostrud proident nostrud culpa est ad. Do dolor cillum ullamco excepteur eiusmod laboris dolore do Lorem. Exercitation eiusmod laborum enim culpa esse.\r\n',
    score: 1,
  },
  {
    username: 'amyrobson',
    content:
      'In magna cupidatat ipsum exercitation incididunt non eu amet occaecat et sint irure consequat. Sunt labore incididunt ut culpa aliquip excepteur est. Enim Lorem dolor adipisicing veniam proident quis ad laborum in commodo qui. Proident elit ullamco aliqua non excepteur in fugiat consequat adipisicing ut eu id sunt laboris.\r\n',
    score: 7,
  },],
}

const $forum = document.getElementById ('forum')
const $addForm = document.getElementById ('addform')
const $total = document.getElementById('total')
const $content = document.getElementById ('content')
const $modal = document.getElementById ('modal')
const $editContent = document.getElementById ('editContent')
const $saveBtn = document.getElementById ('saveBtn')
const $editForm = document.getElementById ('editForm')

function ideaList(){
  const html = []
    for (let i = 0; i < data.ideas.length; i++){
    if (data.ideas[i].username === 'currentUser'){
      html.push (`<div class="card border-secondary mb-3">
      <div class="card-header border-secondary">
      <div class="user" >
      <div class="name">${data.ideas[i].username}</div>
      <span class="btn-light">You</span>
      </div>
      <div class="icons">
      <i class="far fa-edit" data-index="${i}"></i>
      <i class="far fa-times-circle" data-index="${i}"></i>
      </div>
      </div>
      <div class="card-body ">
        <p class="card-text">${data.ideas[i].content}</p>
      </div>
      <div class="card-footer bg-transparent border-secondary">Score</div>
      <div class="counter">
      <i id="plus" class="fas fa-thumbs-up plus" data-index="${i}"></i>
      <div id="total" class="total">${data.ideas[i].score}</div>
      <i id="minus" class="fas fa-thumbs-down minus" data-index="${i}"></i>
      </div>
    </div>`) 
    } else {
      html.push (`<div class="card border-secondary mb-3">
      <div class="card-header border-secondary">
      <div class="user" >
      <div class="name">${data.ideas[i].username}</div>
      </div>
      </div>
      <div class="card-body ">
        <p class="card-text">${data.ideas[i].content}</p>
      </div>
      <div class="card-footer bg-transparent border-secondary">Score</div>
      <div class="counter">
      <i id="plus" class="fas fa-thumbs-up plus" data-index="${i}"></i>
      <div id="total" class="total">${data.ideas[i].score}</div>
      <i id="minus" class="fas fa-thumbs-down minus" data-index="${i}"></i>
      </div>
    </div>`)

    }
       
  }
  $forum.innerHTML = html.join ('')
  
}  
const local = localStorage.getItem ('saveIdea')

if (local) {
  
  data.ideas = JSON.parse (local)

} 
ideaList()


$forum.addEventListener ('click', function(e){
  const upDate = data.ideas[e.target.dataset.index]
  const index = e.target.dataset.index
  const idea = data.ideas[index]
  if(e.target.classList.contains('plus')){
    idea.score++
    ideaList()
  }
  if(e.target.classList.contains('minus')){
    idea.score--
    ideaList()
  }
  if (e.target.classList.contains ('fa-edit')){
    $editContent.value = upDate.content
    $saveBtn.dataset.index = e.target.dataset.index
    $modal.style.display = 'block'
  }
  if (e.target.classList.contains ('fa-times-circle')){
    const index = e.target.dataset.index
    data.ideas.splice(index, 1)
    ideaList()
  }
  localStorage.setItem ('saveIdea', JSON.stringify(data.ideas))
})


$addForm.addEventListener ('submit', function (e){
    e.preventDefault()
    
  const newIdea = $content.value
  
   data.ideas.push ({
     username: data.currentUser,
     content: newIdea,
     score:0
   })
   
  $addForm.reset()
  ideaList()
  localStorage.setItem ('saveIdea', JSON.stringify(data.ideas))
})

$saveBtn.addEventListener ('click', function(e){
  e.preventDefault()
  const editContent = $editContent.value
  const index = $saveBtn.dataset.index

  data.ideas[index].content = editContent

  $modal.style.display = 'none'
  
$editForm.reset()
ideaList()
localStorage.setItem ('saveIdea', JSON.stringify(data.ideas))
})

$modal.addEventListener ('click', function(e){
  const $selectClose= e.target.closest('[data-bs-dismiss]')
  if($selectClose){
    $modal.style.display = 'none'
    $editForm.reset()
  }
})








  
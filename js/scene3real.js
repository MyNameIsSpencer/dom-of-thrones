function scene3real() {
  console.log('Executing the real scene 3!')


stage = document.querySelector('#stage')
forest = document.querySelector('#trees')
forestImgSrc = forest.getAttribute('src')
stageImg = stage.querySelector('#stage img')
stageImg.setAttribute('src', forestImgSrc)



// Setup Cast

// Character 1
danContainer = document.createElement('div')
stage.append(danContainer)
danContainer.style.position = 'absolute'
danContainer.style.width = '10%'
danContainer.style.height = '20%'
danContainer.style.top = '55%'
danContainer.style.left = '80%'
danContainer.style.border = '2px solid red'
danContainer.style.background = 'yellow'
dan = document.querySelector('#pycelle')
danContainer.append(dan)
dress = document.querySelector('#blue-dress')
danContainer.append(dress)
dan.style.border = '2px solid blue'
dress.style.border = '2px solid green'
dan.style.border = '2px solid blue'
dress.style.border = '2px solid green'
danContainer.style.height = '37%'
dan.style.width = '70%'
dan.style.position = 'absolute'
dan.style.top = '-8px'
dress.style.position = 'absolute'
dress.style.bottom = 0
dan.style.border = 'none'
dress.style.border = 'none'
danContainer.style.border = 'none'
danContainer.style.background = 'none'



// Character 2
droContainer = document.createElement('div')
stage.append(droContainer)
droContainer.style.position = 'absolute'
droContainer.style.width = '10%'
droContainer.style.height = '20%'
droContainer.style.top = '55%'
droContainer.style.left = '60px'
droContainer.style.border = '2px solid red'
droContainer.style.background = 'yellow'
dro = document.querySelector('#hodor')
droContainer.append(dro)
shoulders = document.querySelector('#bulky-man')
droContainer.append(shoulders)
dro.style.border = '2px solid blue'
shoulders.style.border = '2px solid green'
dro.style.border = '2px solid blue'
shoulders.style.border = '2px solid green'
droContainer.style.height = '37%'
dro.style.width = '70%'
dro.style.position = 'absolute'
dro.style.top = '-8px'
dro.style.left = '10%'
shoulders.style.position = 'absolute'
shoulders.style.bottom = 0
dro.style.border = 'none'
shoulders.style.border = 'none'
droContainer.style.border = 'none'
droContainer.style.background = 'none'



// Setup Props

// Prop 1
egg = document.querySelector('#egg')
stage.append(egg)
egg.style.position = 'absolute'
egg.style.top = '52%'
egg.style.left = '16%'
egg.style.height = '15%'



// Prop 2

// Action!

// Stage direction 1

function toss() {
  frame(function() {
    egg.style.top = '36%'
    egg.style.left = '20%'
  })

  frame(function() {
    egg.style.top = '23%'
    egg.style.left = '30%'
  })

  frame(function() {
    egg.style.top = '15%'
    egg.style.left = '44%'
  })

  frame(function() {
    egg.style.top = '23%'
    egg.style.left = '58%'
  })

  frame(function() {
    egg.style.top = '36%'
    egg.style.left = '68%'
  })

  frame(function() {
    egg.style.top = '63%'
    egg.style.left = '74%'
  })

  frame(function() {
    egg.style.top = '36%'
    egg.style.left = '68%'
  })

  frame(function() {
    egg.style.top = '23%'
    egg.style.left = '58%'
  })

  frame(function() {
    egg.style.top = '15%'
    egg.style.left = '44%'
  })

  frame(function() {
    egg.style.top = '23%'
    egg.style.left = '30%'
  })

  frame(function() {
    egg.style.top = '36%'
    egg.style.left = '20%'
  })

  frame(function() {
    egg.style.top = '52%'
    egg.style.left = '16%'
  })
}

toss()
toss()
toss()

}

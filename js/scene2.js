function scene2() {
  console.log('Executing scene 2!')

  // Setup Stage
  stage = document.querySelector('#stage')
  castle = document.querySelector('#castle')
  //stageImg = stage.querySelector('#stage-img')
  castleImgSrc = castle.getAttribute('src')
  stageImg.setAttribute('src', castleImgSrc)

  // Setup Cast


  // Character 1
  nedContainer = document.createElement('div')
  stage.append(nedContainer)
  nedContainer.style.position = 'absolute'
  nedContainer.style.width = '10%'
  nedContainer.style.height = '20%'
  nedContainer.style.top = '55%'
  nedContainer.style.left = '25%'
  nedContainer.style.border = '2px solid red'
  nedContainer.style.background = 'yellow'
  ned = document.querySelector('#ned')
  nedContainer.append(ned)
  leather = document.querySelector('#leather-armour')
  nedContainer.append(leather)
  ned.style.border = '2px solid blue'
  leather.style.border = '2px solid green'
  ned.style.border = '2px solid blue'
  leather.style.border = '2px solid green'
  nedContainer.style.height = '37%'
  ned.style.width = '70%'
  ned.style.position = 'absolute'
  ned.style.top = 0
  leather.style.position = 'absolute'
  leather.style.bottom = 0
  ned.style.border = 'none'
  leather.style.border = 'none'
  nedContainer.style.border = 'none'
  nedContainer.style.background = 'none'


  // Character 2
  joffContainer = document.createElement('div')
  stage.append(joffContainer)
  joffContainer.style.position = 'absolute'
  joffContainer.style.width = '7%'
  joffContainer.style.height = '26%'
  joffContainer.style.top = '60%'
  joffContainer.style.left = '63%'
  joffContainer.style.border = '2px solid red'
  joffContainer.style.background = 'yellow'
  joff = document.querySelector('#joffrey')
  joffContainer.append(joff)
  joffRobes = document.getElementById('brown-robes')
  joffContainer.append(joffRobes)
  joff.style.border = '2px solid blue'
  joffRobes.style.border = '2px solid honeydew'
  joff.style.width = '70%'
  joff.style.left = '10%'

  joff.style.position = 'absolute'
  joff.style.top = 0
  joffRobes.style.position = 'absolute'
  joffRobes.style.bottom = 0
  joff.style.border = 'none'
  joffRobes.style.border = 'none'
  joffContainer.style.border = 'none'
  joff.style.background = 'none'
  joffContainer.style.background = 'none'



  // Setup Props

  // Prop 1
  sword = document.querySelector('#sword')
  stage.append(sword)
  sword.style.position = 'absolute'
  sword.style.top = '77%'
  sword.style.left = '31%'
  sword.style.height = '5%'
  sword.style.transform = 'rotateY(150deg)'


  // Prop 2

  // Action!

  // Stage direction 1


  frame(function() {
  sword.style.top = '77%'
  sword.style.left = '31%'
})

  for (var i = 31; i < 60; i++) {
      moveSword(i);
  }

  function moveSword(leftPosition) {
    frame(function() {
      sword.style.top = `${77 - (leftPosition / 6)}%`
      sword.style.left = `${leftPosition}%`
    })
  }


// frame(function() {
//     sword.style.top = '74%'
//     sword.style.left = '36%'
//   })
//
//   frame(function() {
//     sword.style.top = '71%'
//     sword.style.left = '41%'
//   })
//
//   frame(function() {
//     sword.style.top = '68%'
//     sword.style.left = '47%'
//   })
//
//   frame(function() {
//   sword.style.top = '66%'
//   sword.style.left = '60%'
// })

  frame(function() {

  })

  // Stage direction 2

  frame(function() {
    ned.style.top = '5%'
    ned.style.left = '-32%'
  })

  frame(function() {
    ned.style.top = '30%'
    ned.style.left = '-77%'
  })

  frame(function() {
    ned.style.top = '50%'
    ned.style.left = '-80%'
  })

  frame(function() {
    ned.style.top = '70%'
    ned.style.left = '-80%'
  })

  frame(function() {
    ned.style.top = '100%'
    ned.style.left = '-80%'
  })
}

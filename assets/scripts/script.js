const input = document.querySelector('.input')
const btn = document.querySelector('.btn')
const div1 = document.querySelector('.rec1')
const div2 = document.querySelector('.encoded')
const div3 = document.querySelector('.rec2')

btn.addEventListener('click', function () {
  secretMessage()
})

function secretMessage () {
  const str = input.value
  const normalized = str.replace(/[^\w]/g, '').toLowerCase()
  const strLength = normalized.length
  const cols = Math.ceil(Math.sqrt(strLength))

  let encodeMessage = ''
  let encode = ''

  if (strLength < 50) {
    alert('Input Should not be less than 50 characters')
  } else {
    for (let i = 0; i < cols; i++) {
      for (let j = i; j < strLength; j += cols) {
        encodeMessage += normalized[j]
        encode += normalized[j]
      }
      encodeMessage += '\n'
    }

    div1.innerHTML = `${normalized}`
    div2.innerHTML = `${encodeMessage} `
    div3.innerHTML = `${encode}`
  }
}

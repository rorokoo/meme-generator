'use strict'

var text1 = {
  text: '',
  textColor: 'white',
  fontSize: 80,
  position: { x: 20, y: 100 },
}
var text2 = {
  text: '',
  textColor: 'white',
  fontSize: 80,
  position: { x: 20, y: 450 },
}

var gMeme = {
  imgUrl: 'img/1.jpg',
  lines: [text1, text2],
  lineEditedIdx: '0',
}

var gImages = [
  { id: 1, url: 'img/1.jpg', keywords: ['funny'] },
  { id: 2, url: 'img/2.jpg', keywords: ['funny'] },
]

function getMeme() {
  return gMeme
}

function getImages() {
  return gImages
}
function getEditedTextIdx() {
  return gMeme.lineEditedIdx
}

function changeEditedLine() {
  gMeme.lineEditedIdx = gMeme.lineEditedIdx === '0' ? '1' : '0'
}

function setLineText(line, txt) {
  gMeme.lines[line].text = txt
}

function setImg(imgID) {
  gMeme.imgUrl = `img/${imgID}.jpg`
}

function setTextColor(line, color) {
  gMeme.lines[line].textColor = color
}

function increaseFont(line) {
  gMeme.lines[line].fontSize += 5
}

function decreaseFont(line) {
  gMeme.lines[line].fontSize -= 5
}

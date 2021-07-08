$(function() {
  setInterval(() => {
    if ($('#minaidom-btn').length === 0) {
      const topBar = $('.container').prev()
      const imageUrl = browser.extension.getURL('icons/off_gray.png')
      topBar.append(`<div id="minaidom-btn" style="width: 36px; height: 36px; margin-right: 30px; display: flex; justify-content: center; align-items: center;"><img src="${imageUrl}" style="width: 90%;"/></div>`)
    }
  }, 1000)

  $(document).on('click', '#minaidom-btn', () => {
    const $contents = $('.content>div')
    if ($contents.length >= 2) {
      const $chatSide = $($contents[1])
      if ($chatSide.css('display') === 'none') {
        $chatSide.css('display', 'block')
      } else {
        $chatSide.css('display', 'none')
      }
    }

    if ($('#chat-side-wrapper').length === 0) {
      $('.chat-side').parent('div').append('<div id="chat-side-wrapper"></div>')
      $('.chat-side').appendTo('#chat-side-wrapper')
    }

    if ($('#chat-side-wrapper').css('display') === 'none') {
      $('#chat-side-wrapper').css('display', 'block')
    } else {
      $('#chat-side-wrapper').css('display', 'none')
    }
  })
})

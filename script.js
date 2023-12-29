document.getElementById("search-form")?.addEventListener("submit", function (event) {
  event.preventDefault()
  // @ts-ignore
  var query = document.getElementById("search-input")?.value
  var url = "https://www.google.com/search?q=" + encodeURIComponent(query)
  window.location.href = url
})

let random = Math.floor(Math.random() * 15) + 1
document.body.style.backgroundImage = "url(bg" + random + ".jpg)"

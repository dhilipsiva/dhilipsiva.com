# Menu javascript
document.getElementById("menu-toggle").addEventListener "click", ((event) ->
  event.preventDefault()
  document.getElementById("wrapper").classList.toggle "active"
), false

document.getElementById("show-disqus-comments").addEventListener "click", ((event) ->
  script = document.createElement("script")
  script.type = "text/javascript"
  script.src = "//dhilipsiva.disqus.com/embed.js"
  document.body.appendChild script
  @innerText = "Loading..."
), false

# GoSquared tracker
goSquared = (g, s, q, r, d) ->
  r = g[r] = g[r] or ->
    (r.q = r.q or []).push arguments
    return

  d = s.createElement(q)
  q = s.getElementsByTagName(q)[0]
  d.src = "//d1l6p2sc9645hc.cloudfront.net/tracker.js"
  q.parentNode.insertBefore d, q

goSquared window, document, "script", "_gs"
_gs "GSN-764389-Z"

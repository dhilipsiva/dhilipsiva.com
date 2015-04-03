# Menu javascript
document.getElementById("menu-toggle").addEventListener "click", ((event) ->
  event.preventDefault()
  document.getElementById("wrapper").classList.toggle "active"
), false

try document.getElementById("show-disqus-comments").addEventListener "click", ((event) ->
  @innerText = "Loading..."
  script = document.createElement("script")
  script.type = "text/javascript"
  script.src = "//dhilipsiva.disqus.com/embed.js"
  document.body.appendChild script
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

window._weq = window._weq or {}
window._weq['webengage.licenseCode'] = 'd3a49a6b'
window._weq['webengage.widgetVersion'] = "4.0"

webengage = (d) ->
  _we = d.createElement 'script'
  _we.type = 'text/javascript'
  _we.async = true
  _we.src = "//cdn.widgets.webengage.com/js/widget/webengage-min-v-4.0.js"
  d.body.appendChild _we

webengage document

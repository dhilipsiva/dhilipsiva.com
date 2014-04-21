#= require vendor/jquery

$("#menu-toggle").click (e)->
  e.preventDefault()
  $("#wrapper").toggleClass "active"

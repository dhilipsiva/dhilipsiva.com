---
    layout:    post
    title:     My Dream Gaming Machine
---

I love playing games. Not very much in to statergic or RPG games. But I love games like Assassin's Creed, Prince Of Persia, Crysis, FarCry or any FPS / TPS shooters. You know, like, Action / Adventure / Shooting games.

Games are getting more realistic. I bought a decent machine 6 years ago. Now, it cannot play AC4 even in low graphics mode. I really want to play Next-Gen games in full settings. So I am putting up plans for my new Gaming Machine here. When I have enough money, I ll buy one.

<table class="table">
<thead>
<tr>
<th>Type</th>
<th>Device</th>
<th>Price</th>
</tr>
</thead>
<tbody>
{% for device in site.data.dream_computer %}
<tr>
<td>{{ device.type }}</td>
<td><a href="{{ device.link }}" target="_blank">{{ device.name }}</a></td>
<td>₹ {{ device.price }}</td>
</tr>
{% endfor %}
</tbody>
<tfoot>
<th>Price</th>
<th>Total</th>
<th>₹ {{site.data.dream_computer | total_price }}</th>
</tfoot>
</table>

That is approximately ₹ {{site.data.dream_computer | total_price }} ($ {{site.data.dream_computer | total_price | divided_by: 60}}). Do you think that I can improve any spec? What are your thoughts?

Anyone care to donate a poor gamer some money to buy his machine? :P

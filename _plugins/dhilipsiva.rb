module TotalPriceFilter
  def total_price(devices)
    sum = 0
    devices.each do |device|
      sum += device["price"].to_i
    end
    sum
  end
end

Liquid::Template.register_filter(TotalPriceFilter)

json.locations do
  json.array!(@locations) do |location|
    json.address location.address
    json.url location_path(location)
  end
end
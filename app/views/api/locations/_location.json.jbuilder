json.extract! location, :address, :types, :longitude, :latitude, :price, :capacity
json.photoUrls location.photos.map { |file| url_for(file) }
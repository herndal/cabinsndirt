json.extract! location, :id, :title, :description, :address, :types, :longitude, :latitude, :price, :capacity
json.photoUrls location.photos.map { |file| url_for(file) }
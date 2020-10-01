class Api::LocationsController < ApplicationController
  def index
    @locations = Location.with_attached_photos.in_bounds(params[:bounds])
  end

  def show
    @location = Location.with_attached_photos.find(params[:id])
  end
end



#  SELECT  
#  "locations"."id", "locations"."description", "locations"."address", "locations"."types", "locations"."longitude", "locations"."latitude", "locations"."price", "locations"."capacity" 
#  FROM 
#   "locations" 
#  WHERE 
#   "locations"."longitude" BETWEEN $1 AND $2 
#   AND "locations"."latitude" BETWEEN $3 AND $4 
#   LIMIT $5  

#   [["longitude", -77.52248684381489], 
#   ["longitude", -77.36455837701801], 
#   ["latitude", 37.606867442236464], 
#   ["latitude", 37.47483733121546], 
#   ["LIMIT", 11]]


#     longitude: -77.474441,
#   latitude: 37.5928,
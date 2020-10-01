# == Schema Information
#
# Table name: locations
#
#  id          :bigint           not null, primary key
#  description :text
#  address     :string           not null
#  types       :string           not null
#  longitude   :float            not null
#  latitude    :float            not null
#  price       :float            not null
#  capacity    :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Location < ApplicationRecord
  validates :address, :types, :longitude, :latitude, :price, :capacity, presence: true

  has_many_attached :photos

  def self.in_bounds(bounds)
    # google map bounds will be in the following format:
    # {
    #   "northEast"=> {"lat"=>"37.80971", "lng"=>"-122.39208"},
    #   "southWest"=> {"lat"=>"37.74187", "lng"=>"-122.47791"}
    # }
    Location
      .select(:id, :description, :address, :types, :longitude, :latitude, :price, :capacity)
      .where(latitude: bounds["southWest"]["lat"]..bounds["northEast"]["lat"])
      .where(longitude: bounds["southWest"]["lng"]..bounds["northEast"]["lng"])
  end
end
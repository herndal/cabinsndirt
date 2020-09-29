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
end
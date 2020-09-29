class Api::LocationsController < ApplicationController
  def index
    @locations = Location.with_attached_photos.all
  end

  def show
    @location = Location.with_attached_photos.find(params[:id])
  end
end
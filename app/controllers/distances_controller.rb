class DistancesController < ApplicationController

  def new
    @locations = Location.all
  end

  def create
    @from = Location.find_by(id: params[:from])
    @to = Location.find_by(id: params[:to])
    if @from && @to
      flash[:success] = "The distance between <b>#{@from.address}</b> and <b>#{@to.address}</b> is <b>#{@from.distance_from(@to.to_coordinates)} km</b>"
    end
    redirect_to new_distance_path
  end
end

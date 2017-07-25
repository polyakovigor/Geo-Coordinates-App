class MainController < ApplicationController
  def search
    @locations = Location.ransack(name_cont: params[:q]).result(distinct: true)

    respond_to do |format|
      format.html {}
      format.json {
        @locations = @locations.limit(5)
      }
    end
  end
end
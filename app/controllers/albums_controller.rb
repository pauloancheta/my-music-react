class AlbumsController < ApplicationController
  def create
    Album.create_from_api(params)
    render nothing: true
  end

  def destroy
  end
end
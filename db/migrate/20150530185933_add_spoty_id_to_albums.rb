class AddSpotyIdToAlbums < ActiveRecord::Migration
  def change
    add_column :albums, :spotify_album_id, :string
  end
end

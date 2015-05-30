class Album < ActiveRecord::Base
  validates :image_url, uniqueness: true

  def self.create_from_api(response)
    Album.new_from_api(response).save
  end

  def self.new_from_api(response)
    Album.new(
      name: response['name'],
      image_url: response['image_url'],
      preview_url: response['preview_url'],
      spotify_album_id: response['album_id']
    )
  end
end

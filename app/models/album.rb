class Album < ActiveRecord::Base
   def self.create_from_api(response)
    Album.new_from_api(response).save
  end

  def self.new_from_api(response)
    Album.new(
      name: response.name,
      image_url: response.image_url,
      preview_url: response.preview_url
    )
  end
end

class CreateAlbums < ActiveRecord::Migration
  def change
    create_table :albums do |t|
      t.string :name
      t.string :image_url
      t.string :preview_url

      t.timestamps null: false
    end
  end
end

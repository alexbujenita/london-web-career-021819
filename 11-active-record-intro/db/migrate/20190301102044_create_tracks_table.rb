class CreateTracksTable < ActiveRecord::Migration[5.2]
  def change
    create_table :tracks do |t|
      t.string :title
      t.integer :artist_id

      t.timestamps
    end
  end
end

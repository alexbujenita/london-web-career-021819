class CreateFlights < ActiveRecord::Migration[5.2]
  def change
    create_table :flights do |t|
      t.integer :bee_id
      t.integer :flower_id
    end
  end
end

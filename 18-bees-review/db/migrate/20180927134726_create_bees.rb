class CreateBees < ActiveRecord::Migration[5.2]
  def change
    create_table :bees do |t|
      t.string :name
      t.boolean :queen
      t.integer :hive_id

      t.timestamps
    end
  end
end

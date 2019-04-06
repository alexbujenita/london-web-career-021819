class CreateHives < ActiveRecord::Migration[5.2]
  def change
    create_table :hives do |t|
      t.string :name
      t.string :honey_type

      t.timestamps
    end
  end
end

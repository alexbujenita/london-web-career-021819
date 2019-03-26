class CreateConductors < ActiveRecord::Migration[5.2]
  def change
    create_table :conductors do |t|
      t.string :name

      t.timestamps
    end
  end
end

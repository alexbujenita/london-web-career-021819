class CreateEaters < ActiveRecord::Migration[5.2]
  def change
    create_table :eaters do |t|
      t.string :name

      t.timestamps
    end
  end
end

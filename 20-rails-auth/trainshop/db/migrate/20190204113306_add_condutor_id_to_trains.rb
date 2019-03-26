class AddCondutorIdToTrains < ActiveRecord::Migration[5.2]
  def change
    add_column :trains, :conductor_id, :integer
  end
end

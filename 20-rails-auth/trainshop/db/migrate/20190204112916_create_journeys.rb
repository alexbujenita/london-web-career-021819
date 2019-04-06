class CreateJourneys < ActiveRecord::Migration[5.2]
  def change
    create_table :journeys do |t|
      t.integer :train_id
      t.integer :passenger_id

      t.timestamps
    end
  end
end

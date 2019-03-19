class CreateMessagesTable < ActiveRecord::Migration
  def change

    create_table :messages do |t|
      t.string :content
      t.integer :user_id
      t.integer :group_id
    end

  end
end

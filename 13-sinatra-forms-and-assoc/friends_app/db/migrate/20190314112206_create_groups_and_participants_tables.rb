class CreateGroupsAndParticipantsTables < ActiveRecord::Migration
  def change
    
    create_table :groups do |t|
      t.string :title
    end

    create_table :participants do |t|
      t.integer :user_id
      t.integer :group_id 
    end

  end
end

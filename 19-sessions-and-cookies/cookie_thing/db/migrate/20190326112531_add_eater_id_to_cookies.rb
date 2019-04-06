class AddEaterIdToCookies < ActiveRecord::Migration[5.2]
  def change
    add_column :cookies, :eater_id, :integer
  end
end

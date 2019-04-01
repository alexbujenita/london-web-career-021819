class AddNameToCookies < ActiveRecord::Migration[5.2]
  def change
    add_column :cookies, :name, :string
  end
end

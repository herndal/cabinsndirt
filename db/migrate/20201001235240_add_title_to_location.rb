class AddTitleToLocation < ActiveRecord::Migration[5.2]
  def change
    add_column :locations, :title, :string, null: false
    remove_column :users, :zipcode, :string
    add_column :users, :zipcode, :integer, null: false
  end
end

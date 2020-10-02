class AddTemporaryColumnsToLocations < ActiveRecord::Migration[5.2]
  def change
    add_column :locations, :rating, :integer
    add_column :locations, :reviews, :integer
  end
end

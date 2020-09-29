class CreateLocation < ActiveRecord::Migration[5.2]
  def change
    create_table :locations do |t|
      t.text :description
      t.string :address, null: false
      t.string :types, null: false
      t.float :longitude, null: false
      t.float :latitude, null: false
      t.float :price, null: false
      t.integer :capacity, null: false
      t.timestamps
    end
    add_index :locations, :address
    add_index :locations, :longitude
    add_index :locations, :latitude
    add_index :locations, :price
    add_index :locations, :capacity
  end
end

class CreateEvents < ActiveRecord::Migration[6.0]
  def change
    create_table :events do |t|
      t.string :name
      t.string :img
      t.string :date
      t.string :desc
      t.string :address
      t.string :city
      t.string :state
      t.string :zipcode

      t.timestamps
    end
  end
end

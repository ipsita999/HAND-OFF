class CreateProfiles < ActiveRecord::Migration[6.0]
  def change
    create_table :profiles do |t|
      t.string :name
      t.string :email
      t.string :addressimg
      t.string :license
      t.string :address
      t.string :city
      t.string :state
      t.string :zipcode
      t.string :phone

      t.timestamps
    end
  end
end

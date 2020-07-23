class CreateOutings < ActiveRecord::Migration[6.0]
  def change
    create_table :outings do |t|
      t.references :profile, null: false, foreign_key: true
      t.references :event, null: false, foreign_key: true

      t.timestamps
    end
  end
end

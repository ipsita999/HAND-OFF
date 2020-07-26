class AddLastnameToProfiles < ActiveRecord::Migration[6.0]
  def change
    add_column :profiles, :lastname, :string
  end
end

class AddCheckedinToProfiles < ActiveRecord::Migration[6.0]
  def change
    add_column :profiles, :checkedin, :boolean, default:false
  end
end

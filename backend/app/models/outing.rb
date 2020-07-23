class Outing < ApplicationRecord
  belongs_to :profile
  belongs_to :event
end

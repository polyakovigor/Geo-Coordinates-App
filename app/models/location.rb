class Location < ApplicationRecord
  geocoded_by :address
  validates :address, uniqueness: true, presence: true
  after_validation :geocode, if: :address_changed?
end
class Doctor < ApplicationRecord

  has_many :appointments
  has_many :patients, through: :appointments

    validates :name, presence: true
    validates :specialization, presence: true
    validates :experience, presence: true
    validates :image, presence: true

end

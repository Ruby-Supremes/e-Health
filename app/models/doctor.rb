class Doctor < ApplicationRecord
<<<<<<< HEAD
  has_many :appointments
  has_many :patients, through: :appointments
=======
    has_many :appointments, dependent: :destroy
    has_many :patients, through: :appointments

    validates :name, presence: true
    validates :specialization, presence: true
    validates :experience, presence: true
    validates :image, presence: true

>>>>>>> 0a6d96889df738ca241b18b51fe34f2d41727765
end

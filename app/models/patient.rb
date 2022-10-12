class Patient < ApplicationRecord
<<<<<<< HEAD
  
  has_many :appointments
  has_many :doctors, through: :appointments
=======
    has_secure_password

    has_many :appointments, dependent: :destroy
    has_many :doctors, through: :appointments

    validates :name, presence: true, length: { maximum: 50 }
    validates :password, presence: true
    validates :age, presence: true
>>>>>>> 0a6d96889df738ca241b18b51fe34f2d41727765
end

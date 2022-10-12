class Patient < ApplicationRecord

    has_many :appointments, dependent: :destroy
    has_many :doctors, through: :appointments
    has_secure_password
    validates :name, presence: true, length: { maximum: 50 }
    validates :password, presence: true
    validates :age, presence: true

end

class Patient < ApplicationRecord
    has_secure_password

    has_many :appointments, dependent: :destroy
    has_many :doctors, through: :appointments
end

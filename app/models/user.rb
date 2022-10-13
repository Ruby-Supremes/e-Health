class User < ApplicationRecord
    has_secure_password

    has_many :appointments
    has_many :doctors, through: :appointments

    validates :username, presence: true, length: { maximum: 50 }
    validates :password, presence: true
    validates :age, presence: true
end

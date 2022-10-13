class Doctor < ApplicationRecord
    has_many :appointments, dependent: :destroy
    has_many :patients, through: :appointments

    has_secure_password


    validates :username, presence: true
    validates :password, presence: true
    validates :specialization, presence: true
    validates :experience, presence: true
    validates :image, presence: true

end

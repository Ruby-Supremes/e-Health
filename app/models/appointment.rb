class Appointment < ApplicationRecord
    belongs_to :doctor
    belongs_to :patient

    validates :appointment_date, presence: true
end

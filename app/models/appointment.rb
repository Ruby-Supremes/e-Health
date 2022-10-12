class Appointment < ApplicationRecord
<<<<<<< HEAD
  belongs_to :doctor
  belongs_to :patient
=======
    belongs_to :doctor
    belongs_to :patient

    validates :appointment_date, presence: true
>>>>>>> 0a6d96889df738ca241b18b51fe34f2d41727765
end

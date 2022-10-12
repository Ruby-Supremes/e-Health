<<<<<<< HEAD:app/models/patient.rb
class Patient < ApplicationRecord
<<<<<<< HEAD
  
  has_many :appointments
  has_many :doctors, through: :appointments
=======
=======
class User < ApplicationRecord
>>>>>>> 744ebfc708fe76bf6703d14dbbad08fa2d3295d4:app/models/user.rb
    has_secure_password
    validates :name, presence: true, length: { maximum: 50 }
    validates :password, presence: true
    validates :age, presence: true
>>>>>>> 0a6d96889df738ca241b18b51fe34f2d41727765
end

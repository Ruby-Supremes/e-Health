class PatientsController < ApplicationController
<<<<<<< HEAD
  def index
    render json: Patients.all, status: :ok
  end
=======
    
    def create
        patient = Patient.create!(patient_params)
        render json: patient, status: :created
    end

    private

    def patient_params
        params.permit(:username, :password, :age)
    end
>>>>>>> 0a6d96889df738ca241b18b51fe34f2d41727765
end

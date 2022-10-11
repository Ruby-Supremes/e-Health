class PatientsController < ApplicationController
    
    def create
        patient = Patient.create!(patient_params)
        render json: patient, status: :created
    end

    private

    def patient_params
        params.permit(:username, :password, :age)
    end
end

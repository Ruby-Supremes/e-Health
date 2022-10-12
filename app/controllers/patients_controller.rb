class PatientsController < ApplicationController
    before_action :authorize, only: [:show]

    def create
        patient = Patient.create!(patient_params)
        if patient.valid?
            session[:patient_id] = patient.id
            render json: patient, status: :created
        else
            render json: { errors: patient.errors.full_messages }, status: :unprocessable_entity
    end
end

    def show
        patient = Patient.find_by(id: session[:patient_id])
        render json :patient
    end

    private

    def authorize 
        render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :patient_id
    end

    def patient_params
        params.permit(:username, :password, :age)
    end
end

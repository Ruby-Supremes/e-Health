class AppointmentsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with:: render_unprocessable_entity_response


    def index
        render json: Appointment.all, status: :ok
    end

    def show
        appointment = get_appointment
        render json: appointment
    end

    def create
        appointment = Appointment.create!(appointment_params)
        render json: appointment, status: :created
    end

    def update
        appointment = Appointment.update(appointment_params)
        render json: appointment, stautus: :ok
    end

    def destroy
        appointment = get_appointment
        appointment.destroy
        head :no_content
    end

    private

    def get_appointment
        Appointment.find(params[:id])
    end

    def appointment_params
        params.permit(:appointment_date, :doctor_id, :patient_id)
    end

    def render_unprocessable_entity_response(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end
end

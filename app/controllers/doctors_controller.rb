class DoctorsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_record_not_found_response

    def index
        render json: Doctor.all, status: :ok
    end

    def show
        doctor = find_doctor
        render json: doctor
    end

    def create
        doctor = Doctor.create!(doctor_params)
        render json: doctor, status: :created
    end

    def destroy
        doctor = find_doctor
        doctor.destroy
        head :no_content
    end

    private
 def find_doctor
    Doctor.find(params[:id])
 end

 def doctor_params
    params.permit(:name, :specialization, :image, :experience)
 end

  def render_record_not_found_response
    render json: { error: "Doctor not found" }, status: :not_found
  end
end

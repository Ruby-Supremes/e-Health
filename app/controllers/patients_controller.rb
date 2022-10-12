class PatientsController < ApplicationController
  def index
    render json: Patients.all, status: :ok
  end
end

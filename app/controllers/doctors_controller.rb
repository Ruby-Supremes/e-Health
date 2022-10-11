class DoctorsController < ApplicationController
  def index
        render json: Doctor.all, status: :ok
  end
end

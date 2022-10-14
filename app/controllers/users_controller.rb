class UsersController < ApplicationController
  # before_action :authorize, only: [:show]

  def index
    user = User.all
    render json: user, status: :ok
  end

  def create
    user = User.create!(user_params)
    render json: user, status: :created
  end

  def show
    user = User.find_by(id: params[:id])
    if user
      render json: user, status: :ok
    else
      render json: { error: "User not found" }, status: :not_found
    end
  end

  def destroy
    user = User.find_by(id: params[:id])
    user.destroy
    head :no_content
  end

  private

  def authorize
    render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
  end

  def user_params
    params.permit(:username, :age, :address, :gender, :allergies, :nationality, :occupation)
  end
end

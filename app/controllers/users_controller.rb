class UsersController < ApplicationController
    before_action :authorize, only: [:show]

    def index
        render json: User.all
    end
    
    def create
        user = User.create!(user_params)
        render json: user, status: :created
    end

    def show
        user = User.find_by(id: params[:id])
        render json: user
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
        params.permit(:username, :age, :address, :gender, :allergies, :nationality, :occupation, :password)
    end
end

class SessionsController < ApplicationController
  before_action :require_logged_in, only: [:destroy]
  
  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )
    if @user
      login(user)
      render "api/users/show"
    else
      render json: ["Invalid credentials"], status: 401
    end
  end

  def destroy
    logout(current_user)
  end
end
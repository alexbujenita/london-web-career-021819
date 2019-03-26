class UsersController < ApplicationController

  def show
    authorized_for(params[:id])
    @user = User.find(params[:id])
    if @user.admin
      @admin_panel = User.all
    end
  end

  def new
    @user = User.new
  end

  def create
    user = User.new(user_params)
    if user.valid?
      user.save
      session[:user_id] = user.id
      redirect_to trains_path
    else
      flash[:errors] = ['something went wrong, try again']
      redirect_to signup_path
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :password)
  end
end

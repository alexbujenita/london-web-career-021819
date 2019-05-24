class Api::V1::UsersController < ApplicationController
  def index
    users = []
    User.all.each do |user|
      user_hash = {
        username: user[:username],
        id: user[:id]
      }
      users << user_hash
    end
    render json: users
  end

  def create
    user = User.new(username: params[:username], password: params[:password])
    if user.save
      payload = {user_id: user.id}
      token = issue_token(payload)
      render json: { jwt: token }
    else
      render json: { error: "Signup not successful !"}
    end
  end
end

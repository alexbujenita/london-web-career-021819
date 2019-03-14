class GroupsController < ApplicationController

  get '/users/:user_id/groups/:id' do
    @user = User.find(params[:user_id])
    @group = Group.find(params[:id])
    erb :"groups/show"
  end

  post '/groups' do 
    # 
    binding.pry
    Group.create(params[:group])
  end

  post '/users/:user_id/groups/:id/messages' do
    Message.create(params[:message])
    redirect "/users/#{params[:user_id]}/groups/#{params[:id]}"
  end
end
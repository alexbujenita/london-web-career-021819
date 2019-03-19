class UsersController < ApplicationController

  #index
  get '/users' do 
    @users = User.all
    erb :"users/index"
  end
 
  #new
  get '/users/new' do
    erb :'users/new'
  end

  #show
  get '/users/:id' do
    @user = User.find(params[:id])
    @users = User.all
    erb :"users/show" 
  end

  #create
  post '/users' do
    user = User.create(params[:user])
    redirect "/users/#{user.id}"
  end

  #edit
  get '/users/:id/edit' do
    @user = User.find(params[:id])
    erb :'users/edit'
  end

  #update
  patch '/users/:id' do 
    user = User.find(params[:id])
    user.update!(params[:user])
    # binding.pry
    redirect "/users/#{user.id}"
  end

  #destroy
  delete '/users/:id' do 
    user = User.find(params[:id])
    user.destroy
    redirect '/users'
  end
end
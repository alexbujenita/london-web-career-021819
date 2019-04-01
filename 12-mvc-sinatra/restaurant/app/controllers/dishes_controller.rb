require './config/environment'

class DishesController < ApplicationController

  get "/dishes" do
    @dishes = Dish.all
    erb :"dishes/index"
  end

  get "/dishes/:id" do
    @dish = Dish.find(params[:id])
    erb :"dishes/show"
  end

end

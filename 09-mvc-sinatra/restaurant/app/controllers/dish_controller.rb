class DishController < ApplicationController

  get "/dishes" do
    @dishes = Dish.all.sort_by { |dish| dish.price }
    erb :"/dishes/index"
  end

  get "/dishes/:id" do
    @dish = Dish.find(params[:id])
    erb :"dishes/show"
  end

end

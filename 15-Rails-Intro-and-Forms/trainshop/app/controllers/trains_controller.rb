class TrainsController < ApplicationController
  before_action :set_train, only: [:show, :edit, :update, :destroy]

  def index
    @trains = Train.all
  end

  def show
    @train = Train.find(params[:id])
  end

  def new
    @train = Train.new
  end

  def create
    train = Train.create(train_params(:name, :price))
    redirect_to train
  end

  def edit
  end

  def update
    byebug
    @train.update(train_params(:name))
    redirect_to @train
  end

  def destroy
    @train.destroy
    redirect_to trains_path
  end

  private

  def train_params(*args = {:name})
    params.require(:train).permit(*args)
  end

  def set_train
    @train = Train.find(params[:id])
  end

end



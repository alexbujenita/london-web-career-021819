class TrainsController < ApplicationController
  before_action :find_train, only: [:edit, :show, :update, :destroy]
  before_action :find_conductors, only: [:new, :edit]
  before_action :require_login, only: [:index, :show, :new, :create, :edit]

  def index
    @trains = Train.all
  end

  def show
  end

  def new
    @train = Train.new
  end

  def create
    train = Train.create(train_params)
    redirect_to train
  end

  def edit
  end

  def update
    @train.update(train_params)
    redirect_to @train
  end

  def destroy
    @train.destroy
    redirect_to trains_path
  end

  private

  def train_params
    params.require(:train).permit(:name, :price, :conductor_id, {passenger_ids: []})
  end

  def find_train
    @train = Train.find(params[:id])
  end

  def find_conductors
    @conductors = Conductor.all
  end

  def require_login
    authorized?
  end
end

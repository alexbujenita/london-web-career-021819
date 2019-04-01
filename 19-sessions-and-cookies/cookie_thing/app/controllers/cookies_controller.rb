class CookiesController < ApplicationController
  before_action :set_cookies_array, only: [:index, :show]
  
  def index
    @cookies = Cookie.all.select {|c| !(session[:cookies].include? c.id)}
  end

  def show
    @cookie = Cookie.find(params[:id])
    if !(session[:cookies].include? @cookie.id)
      session[:cookies] << @cookie.id
    end
  end

  private

  def set_cookies_array
    session[:cookies] ||= []
  end
end

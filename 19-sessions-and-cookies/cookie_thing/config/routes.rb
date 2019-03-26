Rails.application.routes.draw do
  resources :cookies, only: [:index, :show]
end

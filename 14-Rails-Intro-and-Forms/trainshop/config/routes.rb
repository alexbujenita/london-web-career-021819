Rails.application.routes.draw do
  get 'depot/index'
  get 'depot/show'
  get 'depot/new'
  get 'depot/create'
  get 'depot/edit'
  get 'depot/update'
  get 'depot/destroy'
  resources :trains
end

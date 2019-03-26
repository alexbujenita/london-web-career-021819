Rails.application.routes.draw do
  resources :trains

  # user account management - user db
  get '/signup', to: 'users#new', as: 'signup'
  post '/signup', to: 'users#create'
  get '/users/:id', to: 'users#show', as: 'user'

  # sessions management - sessions db
  get '/login', to: 'sessions#new', as: 'login'
  post '/sessions', to: 'sessions#create', as: 'sessions'
  post '/logout', to: 'sessions#destroy', as: 'logout'  

end

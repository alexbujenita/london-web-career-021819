Rails.application.routes.draw do
  resources :images, only: [:show]
  resources :comments, only: [:create, :destroy]

  # get '/images/:id', to: 'images#show'
  # post '/comments', to: 'comments#create'
  # delete '/comments/:id', to: 'comments#destroy'
  post '/likes', to: 'images#increase_likes'
end

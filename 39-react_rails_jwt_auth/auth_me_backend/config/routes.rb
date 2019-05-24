Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users, only: [:index, :create]
    end
  end

  post "/auth/create", to: "auth#create"
  get "/auth/show", to: "auth#show"

  get "/posts", to: "posts#my_posts"
end

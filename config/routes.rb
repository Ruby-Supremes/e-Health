Rails.application.routes.draw do
  resources :appointments, only: [:index, :show, :create, :update, :destroy]
  resources :patients, only: [:create]
  resources :doctors, only: [:index, :show, :create, :destory]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end

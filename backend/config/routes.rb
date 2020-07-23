Rails.application.routes.draw do
  resources :outings
  resources :profiles
  devise_for :users
  resources :events
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

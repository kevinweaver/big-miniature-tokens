class Api::V1::TestsController < ApplicationController
  def index
    render json: { users: ['Mogli', 'Sushi'] }
  end
end

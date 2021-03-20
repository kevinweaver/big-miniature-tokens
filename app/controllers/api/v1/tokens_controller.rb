class Api::V1::TokensController < ApplicationController
  def show
    art_token = Token.find_by(artist_name: artist_name_params)
    render json: { token: art_token }
  end

  private

  def artist_name_params
    params.fetch(:artist_name)
  end
end

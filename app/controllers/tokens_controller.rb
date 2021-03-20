class TokensController < ApplicationController
  def show
    Token.find_by(artist_name: artist_name_params)
  end

  private

  def artist_name_params
    params.permit(:artist_name)
  end
end

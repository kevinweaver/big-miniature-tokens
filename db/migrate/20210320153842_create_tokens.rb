class CreateTokens < ActiveRecord::Migration[6.0]
  def change
    create_table :tokens do |t|
      t.string :eth_address
      t.string :opensea_url
      t.string :foundation_url
      t.string :artist_name
      t.string :artist_portfolio_link
      t.string :tools_used
      t.string :resolution
      t.string :file_size

      t.timestamps
    end
  end
end

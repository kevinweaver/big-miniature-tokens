class CreateTokens < ActiveRecord::Migration[6.0]
  def change
    create_table :tokens do |t|
      t.text :eth_address
      t.text :opensea_url
      t.text :foundation_url
      t.text :artist_name
      t.text :artist_portfolio_link
      t.text :tools_used
      t.text :resolution
      t.text :file_size

      t.timestamps
    end
  end
end

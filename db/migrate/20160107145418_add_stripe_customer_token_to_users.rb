class AddStripeCustomerTokenToUsers < ActiveRecord::Migration
  def change
    add_column :users, :strip_customer_token, :string
  end
end

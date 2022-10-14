class CreateDoctors < ActiveRecord::Migration[7.0]
  def change
    create_table :doctors do |t|
      t.string :username
      t.string :experience
      t.string :specialization
      t.string :image
      t.string :password_digest

      t.timestamps
    end
  end
end

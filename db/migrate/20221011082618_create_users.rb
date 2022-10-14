class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :username
      t.string :gender
      t.integer :age
      t.string :address
      t.string :nationality
      t.string :occupation
      t.string :allergies
      t.string :password_digest

      t.timestamps
    end
  end
end

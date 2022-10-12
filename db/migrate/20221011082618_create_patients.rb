class CreatePatients < ActiveRecord::Migration[7.0]
  def change
    create_table :patients do |t|
      t.string :username
      t.string :date_of_birth
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

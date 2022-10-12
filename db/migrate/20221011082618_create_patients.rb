class CreatePatients < ActiveRecord::Migration[7.0]
  def change
    create_table :patients do |t|
      t.string :name
      t.string :nationality
      t.integer :date_of_birth
      t.string :occupation
      t.string :email
      t.string :gender
      t.string :address
      t.string :allergies
      t.integer :age

      t.timestamps
    end
  end
end

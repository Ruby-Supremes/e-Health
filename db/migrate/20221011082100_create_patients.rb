class CreatePatients < ActiveRecord::Migration[7.0]
  def change
    create_table :patients do |t|
      t.string :name
      t.string :experience
      t.string :specialization
      t.string :image

      t.timestamps
    end
  end
end

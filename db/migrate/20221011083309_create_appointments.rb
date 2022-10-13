class CreateAppointments < ActiveRecord::Migration[7.0]
  def change
    create_table :appointments do |t|
      t.datetime :appointment_date
      t.integer :doctor_id
      t.integer :user_id

      t.timestamps
    end
    add_index :appointments, :doctor_id
    add_index :appointments, :user_id
  end
end

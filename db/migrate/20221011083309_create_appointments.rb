class CreateAppointments < ActiveRecord::Migration[7.0]
  def change
    create_table :appointments do |t|
      t.datetime :appointment_date
      t.string :doctor_id
      t.string :patient_id

      t.timestamps
    end
    add_index :appointments, :doctor_id
    add_index :appointments, :patient_id
  end
end

class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :appointment_date, :doctor_id, :patient_id
end

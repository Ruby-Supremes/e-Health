class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :appointment_date, :doctor_id, :user_id, :date, :time, :duration
end

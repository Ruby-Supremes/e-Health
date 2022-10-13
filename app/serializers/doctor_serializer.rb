class DoctorSerializer < ActiveModel::Serializer
  attributes :id, :name, :experience, :specialization, :image
end

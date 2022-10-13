class DoctorSerializer < ActiveModel::Serializer
  attributes :id, :username, :experience, :specialization, :image, :password_digest
end
